// ULTRA-AGGRESSIVE NO-FLICKER PROGRESS SCRIPT
// This approach pre-calculates and injects the correct state immediately

(function() {
  // Progress bar configuration
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

  // Inject CSS that completely hides progress bar until ready
  const hideStyle = document.createElement('style');
  hideStyle.textContent = `
    .progress-container {
      display: none !important;
    }
    .progress-container.progress-ready {
      display: flex !important;
      animation: fadeIn 0.3s ease-in-out !important;
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `;
  document.head.appendChild(hideStyle);

  // Function to apply progress and show
  function showProgress() {
    const container = document.querySelector('.progress-container');
    if (!container) return;

    const steps = container.querySelectorAll('.progress-step');
    
    // Clear all states
    steps.forEach(el => {
      el.className = 'progress-step';
      el.style.removeProperty('--progress-partial-width');
    });

    // Fill completed steps
    for (let i = 0; i < progressState.step; i++) {
      steps[i].classList.add('progress-filled');
    }

    // Handle current step
    if (progressState.step < steps.length) {
      if (progressState.progress >= 1) {
        steps[progressState.step].classList.add('progress-filled');
      } else if (progressState.progress > 0) {
        steps[progressState.step].classList.add('progress-partial');
        steps[progressState.step].style.setProperty('--progress-partial-width', `${progressState.progress * 100}%`);
      }
    }

    // Show with animation
    container.classList.add('progress-ready');
  }

  // Wait for DOM and apply immediately
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', showProgress);
  } else {
    showProgress();
  }
})();

