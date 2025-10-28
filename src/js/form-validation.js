/**
 * Form Validation System
 * Provides comprehensive form validation across all pages
 */

class FormValidator {
    constructor() {
        this.validators = new Map();
        this.requiredFields = new Map();
        this.continueButtons = new Map();
    }

    /**
     * Initialize form validation for a page
     * @param {string} pageId - Unique identifier for the page
     * @param {Object} config - Configuration object with required fields and button selector
     */
    init(pageId, config) {
        const { requiredFields, buttonSelector, customValidation } = config;
        
        // Store required fields for this page
        this.requiredFields.set(pageId, requiredFields);
        
        // Find the continue button
        const continueBtn = document.querySelector(buttonSelector);
        if (continueBtn) {
            this.continueButtons.set(pageId, continueBtn);
            
            // Initially disable the button
            this.updateButtonState(pageId, false);
        }

        // Set up validation for each required field
        requiredFields.forEach(fieldConfig => {
            this.setupFieldValidation(pageId, fieldConfig);
        });

        // Set up custom validation if provided
        if (customValidation) {
            customValidation(pageId, this);
        }

        // Initial validation check
        this.validatePage(pageId);
    }

    /**
     * Set up validation for a specific field
     * @param {string} pageId - Page identifier
     * @param {Object} fieldConfig - Field configuration
     */
    setupFieldValidation(pageId, fieldConfig) {
        const { selector, type, required = true, validationFn } = fieldConfig;
        const elements = document.querySelectorAll(selector);
        
        elements.forEach(element => {
            // Store field info
            const fieldId = `${pageId}-${selector}`;
            this.validators.set(fieldId, {
                element,
                type,
                required,
                validationFn,
                isValid: false
            });

            // Add event listeners
            this.addEventListeners(fieldId, element, type);
        });
    }

    /**
     * Add event listeners for field validation
     * @param {string} fieldId - Field identifier
     * @param {Element} element - DOM element
     * @param {string} type - Field type
     */
    addEventListeners(fieldId, element, type) {
        const events = ['input', 'change', 'blur'];
        
        // Debounce validation to reduce lag
        let validationTimeout;
        const debouncedValidation = () => {
            clearTimeout(validationTimeout);
            validationTimeout = setTimeout(() => {
                this.validateField(fieldId);
                this.validatePage(this.getPageIdFromFieldId(fieldId));
            }, 16); // ~60fps for better responsiveness
        };
        
        events.forEach(eventType => {
            element.addEventListener(eventType, debouncedValidation);
        });

        // Special handling for dropdowns
        if (type === 'dropdown') {
            this.setupDropdownValidation(fieldId, element);
        }

        // Special handling for autocomplete
        if (type === 'autocomplete') {
            this.setupAutocompleteValidation(fieldId, element);
        }
    }

    /**
     * Set up dropdown validation
     * @param {string} fieldId - Field identifier
     * @param {Element} element - Dropdown element
     */
    setupDropdownValidation(fieldId, element) {
        // Listen for dropdown changes using custom events instead of MutationObserver
        const pageId = this.getPageIdFromFieldId(fieldId);
        
        // Listen for dropdown selection changes
        element.addEventListener('dropdown-change', () => {
            this.validateField(fieldId);
            this.validatePage(pageId);
        });
        
        // Also listen for class changes on the dropdown wrapper
        const wrapper = element.closest('.dropdown-wrapper');
        if (wrapper) {
            wrapper.addEventListener('click', () => {
                // Immediate validation for better responsiveness
                this.validateField(fieldId);
                this.validatePage(pageId);
            });
        }
    }

    /**
     * Set up autocomplete validation
     * @param {string} fieldId - Field identifier
     * @param {Element} element - Autocomplete input element
     */
    setupAutocompleteValidation(fieldId, element) {
        // Autocomplete fields are validated on input change
        // Additional validation can be added here if needed
    }

    /**
     * Validate a specific field
     * @param {string} fieldId - Field identifier
     * @returns {boolean} - Whether the field is valid
     */
    validateField(fieldId) {
        const field = this.validators.get(fieldId);
        if (!field) return false;

        const { element, type, required, validationFn } = field;
        let isValid = true;

        // Check if field is required and empty
        if (required) {
            const value = this.getFieldValue(element, type);
            if (!value || value.trim() === '') {
                isValid = false;
            }
        }

        // Run custom validation if provided
        if (isValid && validationFn) {
            isValid = validationFn(element);
        }

        // Update field state
        field.isValid = isValid;
        this.updateFieldVisualState(element, isValid);

        return isValid;
    }

    /**
     * Get the value from a field based on its type
     * @param {Element} element - DOM element
     * @param {string} type - Field type
     * @returns {string} - Field value
     */
    getFieldValue(element, type) {
        switch (type) {
            case 'input':
            case 'text':
            case 'email':
            case 'tel':
            case 'autocomplete':
                return element.value || '';
            
            case 'dropdown':
                const selectedItem = element.querySelector('.dropdown-item-selected');
                return selectedItem ? selectedItem.textContent.trim() : '';
            
            case 'card-selection':
                return element.classList.contains('card-selected') ? 'selected' : '';
            
            case 'checkbox':
                return element.checked ? 'checked' : '';
            
            default:
                return element.value || element.textContent || '';
        }
    }

    /**
     * Update visual state of a field
     * @param {Element} element - DOM element
     * @param {boolean} isValid - Whether the field is valid
     */
    updateFieldVisualState(element, isValid) {
        // Remove existing validation classes
        element.classList.remove('field-invalid', 'field-valid');
        
        // Add appropriate validation class
        if (isValid) {
            element.classList.add('field-valid');
        } else {
            element.classList.add('field-invalid');
        }
    }

    /**
     * Validate all fields on a page
     * @param {string} pageId - Page identifier
     * @returns {boolean} - Whether all required fields are valid
     */
    validatePage(pageId) {
        const requiredFields = this.requiredFields.get(pageId);
        if (!requiredFields) return true;

        console.log('=== validatePage called ===');
        console.log('pageId:', pageId);
        console.log('requiredFields:', requiredFields);

        let allValid = true;

        requiredFields.forEach(fieldConfig => {
            const { selector, required } = fieldConfig;
            const elements = document.querySelectorAll(selector);
            
            console.log(`Checking field: ${selector}, required: ${required}, found ${elements.length} elements`);
            
            elements.forEach(element => {
                const fieldId = `${pageId}-${selector}`;
                const field = this.validators.get(fieldId);
                
                console.log(`Field ${fieldId}:`, field ? 'found' : 'not found');
                
                if (field && field.required) {
                    const isValid = this.validateField(fieldId);
                    console.log(`Field ${fieldId} validation result: ${isValid}`);
                    if (!isValid) {
                        allValid = false;
                    }
                }
            });
        });
        
        console.log('Page validation result:', allValid);
        
        // Update button state
        this.updateButtonState(pageId, allValid);
        
        return allValid;
    }

    /**
     * Update the state of the continue button
     * @param {string} pageId - Page identifier
     * @param {boolean} isValid - Whether the form is valid
     */
    updateButtonState(pageId, isValid) {
        const button = this.continueButtons.get(pageId);
        if (!button) {
            return;
        }

        if (isValid) {
            button.disabled = false;
            button.classList.remove('btn-disabled');
            // Force the button to use primary styling
            button.style.setProperty('background-color', 'var(--button-primary-bg)', 'important');
            button.style.setProperty('color', 'var(--button-primary-text)', 'important');
            console.log('Button enabled - disabled:', button.disabled, 'classes:', button.className);
        } else {
            button.disabled = true;
            button.classList.add('btn-disabled');
            button.style.removeProperty('background-color');
            button.style.removeProperty('color');
            console.log('Button disabled - disabled:', button.disabled, 'classes:', button.className);
        }
    }

    /**
     * Get page ID from field ID
     * @param {string} fieldId - Field identifier
     * @returns {string} - Page identifier
     */
    getPageIdFromFieldId(fieldId) {
        return fieldId.split('-')[0];
    }

    /**
     * Manually trigger validation for a page
     * @param {string} pageId - Page identifier
     */
    triggerValidation(pageId) {
        this.validatePage(pageId);
    }

    /**
     * Check if a specific field is valid
     * @param {string} pageId - Page identifier
     * @param {string} selector - Field selector
     * @returns {boolean} - Whether the field is valid
     */
    isFieldValid(pageId, selector) {
        const fieldId = `${pageId}-${selector}`;
        const field = this.validators.get(fieldId);
        return field ? field.isValid : false;
    }

    /**
     * Check if all required fields on a page are valid
     * @param {string} pageId - Page identifier
     * @returns {boolean} - Whether all required fields are valid
     */
    isPageValid(pageId) {
        const requiredFields = this.requiredFields.get(pageId);
        if (!requiredFields) return true;

        return requiredFields.every(fieldConfig => {
            const { selector } = fieldConfig;
            const elements = document.querySelectorAll(selector);
            
            return Array.from(elements).every(element => {
                const fieldId = `${pageId}-${selector}`;
                const field = this.validators.get(fieldId);
                return field ? field.isValid : true;
            });
        });
    }
}

// Create global instance
window.formValidator = new FormValidator();

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FormValidator;
}
