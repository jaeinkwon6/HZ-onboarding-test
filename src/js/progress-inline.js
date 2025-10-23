// INLINE PROGRESS SCRIPT - Ultra-aggressive anti-flickering approach
// This must be included in <head> of every page before the body

(function() {
  // Progress bar configuration - maps pages to 4-step flow
  const STEP_PAGES = [
    ['index.html', 'account-alias.html'],
    ['personal-details.html', 'birth-details.html', 'contact-info.html', 'address-lookup.html', 'us-tax-liability.html', 'citizenship.html', 'tax-id.html'],
    ['KYC-1.html', 'KYC-2.html', 'KYC-3.html', 'KYC-4.html', 'KYC-5.html', 'KYC-6.html', 'KYC-7.html', 'KYC-8.html', 'KYC-9.html'],
    []
  ];

  // Get current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  // Calculate progress state
  let progressState = { step: 0, progress: 0 };
  for (let step = 0; step < STEP_PAGES.length; step++) {
    const pages = STEP_PAGES[step];
    const pageIndex = pages.indexOf(currentPage);
    if (pageIndex !== -1) {
      progressState = {
        step: step,
        progress: (pageIndex + 1) / pages.length
      };
      break;
    }
  }

  // Store state for use when DOM is ready
  window.__progressState = progressState;

  // Ultra-aggressive CSS injection - hide everything immediately
  const style = document.createElement('style');
  style.textContent = `
    .progress-container {
      visibility: hidden !important;
      opacity: 0 !important;
      display: none !important;
    }
    .progress-container.progress-ready {
      visibility: visible !important;
      opacity: 1 !important;
      display: flex !important;
      transition: opacity 0.3s ease !important;
    }
  `;
  document.head.appendChild(style);

  // Function to apply progress state
  function applyProgress(container) {
    const steps = container.querySelectorAll('.progress-step');
    const state = window.__progressState;
    
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

    // Use multiple animation frames to ensure state is applied
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        container.classList.add('progress-ready');
      });
    });
  }

  // Use MutationObserver to catch progress container as soon as it's added
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) { // Element node
          const container = node.querySelector ? node.querySelector('.progress-container') : null;
          if (container) {
            applyProgress(container);
            observer.disconnect();
          }
        }
      });
    });
  });

  // Start observing
  observer.observe(document.body || document.documentElement, {
    childList: true,
    subtree: true
  });

  // Fallback: try to find container when DOM is ready
  function tryApplyProgress() {
    const container = document.querySelector('.progress-container');
    if (container) {
      applyProgress(container);
      observer.disconnect();
    }
  }

  // Apply immediately when DOM is interactive or complete
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', tryApplyProgress);
  } else {
    tryApplyProgress();
  }
})();

