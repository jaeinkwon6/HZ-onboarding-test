(function () {
    /**
     * Lightweight realtime validation controller used across the validation flows.
     * @param {Object} options
     * @param {string} options.pageId - Unique identifier so errors can be traced per flow.
     * @param {HTMLButtonElement} options.continueButton - CTA element that should stay disabled while invalid.
     * @param {Array} options.fields - Field descriptors.
     */
    function RealtimeValidationController(options = {}) {
        const { pageId, continueButton, fields = [], validationMode = 'realtime', errorDelay = 0 } = options;

        this.pageId = pageId;
        this.button = continueButton || null;
        this.validationMode = validationMode; // 'realtime', 'blur-only', 'delayed'
        this.errorDelay = errorDelay; // milliseconds delay before showing errors
        this.fields = fields
            .filter(Boolean)
            .map((field) => ({
                required: true,
                validators: [],
                helperText: field.helper ? field.helper.querySelector('.input-helper-text') : null,
                ...field,
                touched: false,
                blurred: false,
                isValid: false,
                errorTimeout: null
            }));
        this.formActivated = false;

        this.fields.forEach((field) => this.attachHandlers(field));
        if (this.button) {
            this.button.type = this.button.type || 'button';
            this.button.addEventListener('click', (event) => {
                this.formActivated = true;
                const allValid = this.validateAll({ forceShowErrors: true });
                if (!allValid) {
                    event.preventDefault();
                    return;
                }
            });
        }

        // Run initial validation on all fields (without showing errors)
        this.validateAll({ forceShowErrors: false });
        this.updateButtonState();
    }

    RealtimeValidationController.prototype.attachHandlers = function (field) {
        if (!field || !field.input) return;

        const handleInput = () => {
            field.touched = true;
            // For submit-only mode, don't validate or show errors on input
            if (this.validationMode === 'submit-only') {
                // Don't validate or show errors - only validate on submit
                return;
            } else if (this.validationMode === 'blur-only') {
                // For blur-only mode, validate but don't show errors until blur
                this.validateField(field, { showError: false });
            } else if (this.validationMode === 'delayed') {
                // Clear any existing timeout
                if (field.errorTimeout) {
                    clearTimeout(field.errorTimeout);
                }
                // Validate immediately for button state, but delay error display
                this.validateField(field, { showError: false });
                field.errorTimeout = setTimeout(() => {
                    this.validateField(field, { showError: true });
                }, this.errorDelay);
            } else {
                // Realtime mode - validate and show immediately
                this.validateField(field);
            }
            this.updateButtonState();
        };

        const handleBlur = () => {
            field.touched = true;
            field.blurred = true;
            // For submit-only mode, don't validate or show errors on blur
            if (this.validationMode === 'submit-only') {
                return;
            }
            // Clear any pending delayed error display
            if (field.errorTimeout) {
                clearTimeout(field.errorTimeout);
                field.errorTimeout = null;
            }
            // Always validate and show errors on blur
            this.validateField(field, { showError: true });
            this.updateButtonState();
        };

        // Always listen to input for button state updates
        field.input.addEventListener('input', handleInput);
        field.input.addEventListener('change', handleInput);
        field.input.addEventListener('blur', handleBlur);
    };

    RealtimeValidationController.prototype.getFieldValue = function (field) {
        if (!field || !field.input) return '';
        if (typeof field.getValue === 'function') {
            return field.getValue(field.input);
        }
        return (field.input.value || '').trim();
    };

    RealtimeValidationController.prototype.validateField = function (field, opts = {}) {
        if (!field) return true;
        const { forceShowError = false, showError = true } = opts;
        const value = this.getFieldValue(field);
        let errorMessage = '';

        if (field.required && value.length === 0) {
            errorMessage = field.requiredMessage || 'This field is required.';
        }

        if (!errorMessage && Array.isArray(field.validators)) {
            for (const validator of field.validators) {
                if (typeof validator !== 'function') continue;
                const result = validator(value, field);
                if (result !== true) {
                    errorMessage = typeof result === 'string' ? result : (validator.message || 'Enter a valid value.');
                    break;
                }
            }
        }

        field.isValid = !errorMessage;
        this.updateFieldUI(field, errorMessage, { forceShowError, showError });
        return field.isValid;
    };

    RealtimeValidationController.prototype.updateFieldUI = function (field, errorMessage, opts = {}) {
        const { forceShowError = false, showError = true } = opts;
        
        // Determine if error should be shown
        let shouldShowError = false;
        if (errorMessage && showError) {
            if (this.validationMode === 'submit-only') {
                // Only show errors when form is activated (submit clicked)
                shouldShowError = this.formActivated || opts.forceShowError;
            } else if (this.validationMode === 'blur-only') {
                // Only show errors after blur
                shouldShowError = this.formActivated || field.blurred || opts.forceShowError;
            } else {
                // Realtime or delayed - show if touched or form activated
                shouldShowError = this.formActivated || field.touched || opts.forceShowError;
            }
        }

        if (field.wrapper) {
            field.wrapper.classList.toggle('input-error', shouldShowError);
        }

        if (field.helper) {
            if (shouldShowError) {
                if (field.helperText) {
                    field.helperText.textContent = errorMessage;
                }
                field.helper.hidden = false;
                field.helper.setAttribute('aria-hidden', 'false');
            } else {
                if (field.helperText) {
                    field.helperText.textContent = '';
                }
                field.helper.hidden = true;
                field.helper.setAttribute('aria-hidden', 'true');
            }
        }
    };

    RealtimeValidationController.prototype.validateAll = function (opts = {}) {
        const { forceShowErrors = false } = opts;
        let allValid = true;
        this.fields.forEach((field) => {
            const isValid = this.validateField(field, { forceShowError: forceShowErrors });
            if (!isValid) {
                allValid = false;
            }
        });
        this.updateButtonState();
        return allValid;
    };

    RealtimeValidationController.prototype.updateButtonState = function () {
        if (!this.button) return;
        // For 'submit-only' mode, always keep button enabled
        if (this.validationMode === 'submit-only') {
            this.button.disabled = false;
            this.button.classList.remove('btn-disabled');
            this.button.style.setProperty('background-color', 'var(--button-primary-bg)', 'important');
            this.button.style.setProperty('color', 'var(--button-primary-text)', 'important');
            return;
        }
        
        const allValid = this.fields.every((field) => field.isValid);
        this.button.disabled = !allValid;
        this.button.classList.toggle('btn-disabled', !allValid);

        if (allValid) {
            this.button.style.setProperty('background-color', 'var(--button-primary-bg)', 'important');
            this.button.style.setProperty('color', 'var(--button-primary-text)', 'important');
        } else {
            this.button.style.removeProperty('background-color');
            this.button.style.removeProperty('color');
        }
    };

    RealtimeValidationController.prototype.refresh = function () {
        this.validateAll();
    };

    window.createRealtimeValidation = function (options) {
        return new RealtimeValidationController(options);
    };
})();

