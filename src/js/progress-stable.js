// STABLE PROGRESS BAR - Zero Flicker Solution
// This script must be loaded in <head> before the body

(function() {
  'use strict';
  
  // Progress bar configuration - maps pages to 4-step flow
  const STEP_PAGES = [
    ['index.html', 'account-alias.html'],
    ['personal-details.html', 'birth-details.html', 'contact-info.html', 'address-lookup.html', 'us-tax-liability.html', 'citizenship.html', 'tax-id.html'],
    ['KYC-1.html', 'KYC-2.html', 'KYC-3.html', 'KYC-4.html', 'KYC-5.html', 'KYC-6.html', 'KYC-7.html', 'KYC-8.html', 'KYC-9.html'],
    []
  ];

  // Get current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  // Calculate progress state immediately
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

  // Store globally for immediate access
  window.__PROGRESS_STATE__ = progressState;

  // Inject hiding CSS immediately (before body renders)
  const hideStyle = document.createElement('style');
  hideStyle.id = 'progress-hide-style';
  hideStyle.textContent = `
    .progress-container {
      opacity: 0 !important;
      visibility: hidden !important;
    }
    .progress-container.progress-ready {
      opacity: 1 !important;
      visibility: visible !important;
    }
  `;
  
  // Add to head as early as possible
  if (document.head) {
    document.head.appendChild(hideStyle);
  } else {
    // If head doesn't exist yet, wait for it
    const observer = new MutationObserver(() => {
      if (document.head) {
        document.head.appendChild(hideStyle);
        observer.disconnect();
      }
    });
    observer.observe(document.documentElement, { childList: true });
  }

  // Function to apply progress state
  function applyProgressState(container) {
    if (!container) return;

    const steps = container.querySelectorAll('.progress-step');
    const state = window.__PROGRESS_STATE__;
    
    // Clear all states first
    steps.forEach(el => {
      el.className = 'progress-step';
      el.style.removeProperty('--progress-partial-width');
    });

    // Fill completed steps
    for (let i = 0; i < state.step; i++) {
      if (steps[i]) {
        steps[i].classList.add('progress-filled');
      }
    }

    // Handle current step
    if (state.step < steps.length && steps[state.step]) {
      if (state.progress >= 1) {
        steps[state.step].classList.add('progress-filled');
      } else if (state.progress > 0) {
        steps[state.step].classList.add('progress-partial');
        steps[state.step].style.setProperty('--progress-partial-width', `${state.progress * 100}%`);
      }
    }

    // Show the container immediately (no animation to prevent flicker)
    container.classList.add('progress-ready');
  }

  // Apply state as soon as container is available
  window.__applyProgress__ = function() {
    const container = document.querySelector('.progress-container');
    if (container) {
      applyProgressState(container);
      return true;
    }
    return false;
  };

  // Try to apply immediately when DOM is ready
  function init() {
    if (window.__applyProgress__()) {
      return; // Success
    }

    // If not found, wait for DOMContentLoaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        window.__applyProgress__();
      });
    }
  }

  // Start initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

