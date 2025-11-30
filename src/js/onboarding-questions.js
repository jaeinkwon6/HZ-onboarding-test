// Onboarding Questions Bottom Sheet

class OnboardingFlow {
    constructor() {
        this.currentQuestion = 1;
        this.totalQuestions = 3;
        this.selectedAnswers = {};
    }

    init() {
        // Always show the onboarding bottom sheet on dashboard load
        // Small delay to ensure DOM is fully ready
        setTimeout(() => {
            this.showOnboarding();
        }, 100);
    }

    showOnboarding() {
        const overlay = document.getElementById('onboarding-overlay');
        const bottomSheet = document.getElementById('onboarding-sheet');
        
        if (!overlay || !bottomSheet) {
            return;
        }

        overlay.classList.add('active');
        bottomSheet.classList.add('active');
        this.updateQuestion();
    }

    hideOnboarding() {
        const overlay = document.getElementById('onboarding-overlay');
        const bottomSheet = document.getElementById('onboarding-sheet');
        
        if (overlay && bottomSheet) {
            overlay.classList.remove('active');
            bottomSheet.classList.remove('active');
        }
    }

    updateQuestion() {
        // Update progress bar
        const progress = (this.currentQuestion / this.totalQuestions) * 100;
        const progressBar = document.querySelector('.onboarding-progress-fill');
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }

        // Update content based on current question
        const titleEl = document.getElementById('question-subtitle');
        const questionEl = document.getElementById('question-title');
        const optionsContainer = document.getElementById('question-options');

        if (!titleEl || !questionEl || !optionsContainer) {
            return;
        }

        if (this.currentQuestion === 1) {
            titleEl.textContent = "Let's get you set up!";
            questionEl.textContent = "How well do you know your way around investing?";
            optionsContainer.innerHTML = this.getQuestion1Options();
        } else if (this.currentQuestion === 2) {
            titleEl.textContent = "Great!";
            questionEl.textContent = "What are you most interested in?";
            optionsContainer.innerHTML = this.getQuestion2Options();
        } else if (this.currentQuestion === 3) {
            titleEl.textContent = "Nice.";
            questionEl.textContent = "How can we help you with your savings?";
            optionsContainer.innerHTML = this.getQuestion3Options();
        }

        // Re-attach event listeners to options
        this.attachOptionListeners();
    }

    getQuestion1Options() {
        return `
            <div class="onboarding-option" data-value="beginner">
                <div class="option-content">
                    <div class="option-icon">
                        <img src="../Asset/32/Risk Low.svg" alt="Risk Low" width="32" height="32">
                    </div>
                    <div class="option-text">
                        <p class="option-title typography-secondary-bold">Getting started</p>
                        <p class="option-description typography-tertiary text-weak">I have hardly, if ever, invested. I consider myself new.</p>
                    </div>
                </div>
                <div class="radio-button"></div>
            </div>
            <div class="onboarding-option" data-value="comfortable">
                <div class="option-content">
                    <div class="option-icon">
                        <img src="../Asset/32/Risk Medium.svg" alt="Risk Medium" width="32" height="32">
                    </div>
                    <div class="option-text">
                        <p class="option-title typography-secondary-bold">Comfortable</p>
                        <p class="option-description typography-tertiary text-weak">I have invested previously. I'm comfortable.</p>
                    </div>
                </div>
                <div class="radio-button"></div>
            </div>
            <div class="onboarding-option" data-value="experienced">
                <div class="option-content">
                    <div class="option-icon">
                        <img src="../Asset/32/Risk High.svg" alt="Risk High" width="32" height="32">
                    </div>
                    <div class="option-text">
                        <p class="option-title typography-secondary-bold">Experienced</p>
                        <p class="option-description typography-tertiary text-weak">I'm an experienced investor.</p>
                    </div>
                </div>
                <div class="radio-button"></div>
            </div>
        `;
    }

    getQuestion2Options() {
        return `
            <div class="onboarding-option" data-value="stocks">
                <div class="option-content">
                    <div class="option-icon">
                        <img src="../Asset/32/Stock.svg" alt="Stocks" width="32" height="32">
                    </div>
                    <div class="option-text">
                        <p class="option-title typography-secondary-bold">Stocks</p>
                    </div>
                </div>
                <div class="radio-button"></div>
            </div>
            <div class="onboarding-option" data-value="ETFs">
                <div class="option-content">
                    <div class="option-icon">
                        <img src="../Asset/32/Fund.svg" alt="ETFs" width="32" height="32">
                    </div>
                    <div class="option-text">
                        <p class="option-title typography-secondary-bold">ETFs</p>
                    </div>
                </div>
                <div class="radio-button"></div>
            </div>
            <div class="onboarding-option" data-value="Both">
                <div class="option-content">
                    <div class="option-icon">
                        <img src="../Asset/32/Fund Variety.svg" alt="All" width="32" height="32">
                    </div>
                    <div class="option-text">
                        <p class="option-title typography-secondary-bold">Both</p>
                    </div>
                </div>
                <div class="radio-button"></div>
            </div>
            <div class="onboarding-option" data-value="I'm not sure yet">
                <div class="option-content">
                    <div class="option-icon">
                        <img src="../Asset/32/Help.svg" alt="Help" width="32" height="32">
                    </div>
                    <div class="option-text">
                        <p class="option-title typography-secondary-bold">I'm not sure yet</p>
                    </div>
                </div>
                <div class="radio-button"></div>
            </div>
        `;
    }

    getQuestion3Options() {
        return `
            <div class="onboarding-option" data-value="easy">
                <div class="option-content">
                    <div class="option-icon">
                        <img src="../Asset/32/Guidance.svg" alt="Guidance" width="32" height="32">
                    </div>
                    <div class="option-text">
                        <p class="option-title typography-secondary-bold">Make it easy</p>
                        <p class="option-description typography-tertiary text-weak">Help me create a savings that take care of itself.</p>
                    </div>
                </div>
                <div class="radio-button"></div>
            </div>
            <div class="onboarding-option" data-value="coach">
                <div class="option-content">
                    <div class="option-icon">
                        <img src="../Asset/32/Book.svg" alt="Book" width="32" height="32">
                    </div>
                    <div class="option-text">
                        <p class="option-title typography-secondary-bold">Coach me</p>
                        <p class="option-description typography-tertiary text-weak">I want to learn more about active saving.</p>
                    </div>
                </div>
                <div class="radio-button"></div>
            </div>
            <div class="onboarding-option" data-value="no-help">
                <div class="option-content">
                    <div class="option-icon">
                        <img src="../Asset/32/Launch.svg" alt="Launch" width="32" height="32">
                    </div>
                    <div class="option-text">
                        <p class="option-title typography-secondary-bold">No help needed</p>
                        <p class="option-description typography-tertiary text-weak">I am self-sufficient and know how to save and invest.</p>
                    </div>
                </div>
                <div class="radio-button"></div>
            </div>
        `;
    }

    attachOptionListeners() {
        const options = document.querySelectorAll('.onboarding-option');
        options.forEach(option => {
            // Remove existing listeners by cloning
            const newOption = option.cloneNode(true);
            option.parentNode.replaceChild(newOption, option);
            
            newOption.addEventListener('click', () => {
                // Remove selected from all options
                document.querySelectorAll('.onboarding-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                // Add selected to clicked option
                newOption.classList.add('selected');
                
                // Store answer
                const value = newOption.getAttribute('data-value');
                this.selectedAnswers[`question${this.currentQuestion}`] = value;

                // Auto-advance after selection
                setTimeout(() => {
                    this.nextQuestion();
                }, 300);
            });
        });
    }

    nextQuestion() {
        if (this.currentQuestion < this.totalQuestions) {
            this.currentQuestion++;
            this.updateQuestion();
        } else {
            this.completeOnboarding();
        }
    }

    previousQuestion() {
        if (this.currentQuestion > 1) {
            this.currentQuestion--;
            this.updateQuestion();
        }
    }

    skipOnboarding() {
        this.hideOnboarding();
    }

    completeOnboarding() {
        // Store answers for later use but do not block future onboarding
        localStorage.setItem('onboardingAnswers', JSON.stringify(this.selectedAnswers));
        this.hideOnboarding();
    }
}

// Initialize when DOM is ready
function initializeOnboarding() {
    window.onboardingFlow = new OnboardingFlow();
    window.onboardingFlow.init();

    // Attach event listeners
    const backButton = document.getElementById('onboarding-back');
    if (backButton) {
        backButton.addEventListener('click', () => {
            window.onboardingFlow.previousQuestion();
        });
    }

    const skipButton = document.getElementById('onboarding-skip');
    if (skipButton) {
        skipButton.addEventListener('click', () => {
            window.onboardingFlow.skipOnboarding();
        });
    }
}

// Initialize immediately if DOM is ready, otherwise wait
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeOnboarding);
} else {
    initializeOnboarding();
}

// Also try after a short delay as fallback
setTimeout(() => {
    if (!window.onboardingFlow) {
        initializeOnboarding();
    }
}, 500);

// Testing helper functions
window.resetOnboarding = () => {
    localStorage.removeItem('onboardingAnswers');
    
    if (window.onboardingFlow) {
        window.onboardingFlow.currentQuestion = 1;
        window.onboardingFlow.selectedAnswers = {};
        window.onboardingFlow.showOnboarding();
    } else {
        location.reload();
    }
};

// Force show onboarding (for debugging)
window.showOnboarding = () => {
    if (window.onboardingFlow) {
        window.onboardingFlow.showOnboarding();
    } else {
        initializeOnboarding();
    }
};

// Check onboarding status
window.checkOnboardingStatus = () => {
    return {
        answers: localStorage.getItem('onboardingAnswers'),
        flowInitialized: !!window.onboardingFlow,
        overlayExists: !!document.getElementById('onboarding-overlay'),
        sheetExists: !!document.getElementById('onboarding-sheet'),
    };
};
