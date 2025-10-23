// Progress bar controller - maps pages to 4-step flow
const STEP_PAGES = [
  // Step 1: Account Selection
  ['index.html', 'account-alias.html'],
  
  // Step 2: Personal Information
  ['personal-details.html', 'birth-details.html', 'contact-info.html', 'address-lookup.html', 
   'us-tax-liability.html', 'citizenship.html', 'tax-id.html'],
  
  // Step 3: KYC Process
  ['KYC-1.html', 'KYC-2.html', 'KYC-3.html', 'KYC-4.html', 'KYC-5.html', 
   'KYC-6.html', 'KYC-7.html', 'KYC-8.html', 'KYC-9.html'],
  
  // Step 4: (Future steps)
  []
];

function getCurrentPage() {
  const path = window.location.pathname;
  return path.split('/').pop() || 'index.html';
}

function getProgressState(page) {
  for (let step = 0; step < STEP_PAGES.length; step++) {
    const pages = STEP_PAGES[step];
    const pageIndex = pages.indexOf(page);
    if (pageIndex !== -1) {
      return {
        step: step,
        progress: (pageIndex + 1) / pages.length
      };
    }
  }
  return { step: 0, progress: 0 };
}

function applyProgressToBar(state) {
  const container = document.querySelector('.progress-container');
  if (!container) return;

  const steps = container.querySelectorAll('.progress-step');
  
  // Clear all states
  steps.forEach(el => {
    el.className = 'progress-step';
    el.style.removeProperty('--progress-partial-width');
  });

  // Fill completed steps
  for (let i = 0; i < state.step; i++) {
    steps[i].classList.add('progress-filled');
  }

  // Handle current step
  if (state.step < steps.length) {
    if (state.progress >= 1) {
      steps[state.step].classList.add('progress-filled');
    } else if (state.progress > 0) {
      steps[state.step].classList.add('progress-partial');
      steps[state.step].style.setProperty('--progress-partial-width', `${state.progress * 100}%`);
    }
  }

  // Remove inline style and show the bar
  container.style.visibility = '';
  container.classList.add('progress-ready');
}

function updateProgress() {
  const page = getCurrentPage();
  const state = getProgressState(page);
  applyProgressToBar(state);
}

// Initialize progress bar immediately to prevent flickering
// Hide progress bar initially via CSS, then show it once state is applied
(function initProgress() {
  // Apply progress state as early as possible
  const page = getCurrentPage();
  const state = getProgressState(page);
  
  // Wait for progress container to be available
  function tryApplyProgress() {
    const container = document.querySelector('.progress-container');
    if (container) {
      applyProgressToBar(state);
    } else if (document.readyState === 'loading') {
      // Try again on DOMContentLoaded
      document.addEventListener('DOMContentLoaded', updateProgress);
    }
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', tryApplyProgress);
  } else {
    tryApplyProgress();
  }
})();
