// NO-FLICKER PAGE LOADING - Eliminates content flickering without animations
// Hides content during initial load and shows it instantly when ready

(function() {
  'use strict';

  // Inject CSS immediately to prevent content flash
  const transitionStyle = document.createElement('style');
  transitionStyle.id = 'no-flicker-style';
  transitionStyle.textContent = `
    /* Hide body content initially to prevent flash */
    body {
      visibility: hidden;
    }
    
    body.page-ready {
      visibility: visible;
    }
    
    /* Ensure progress bar and header are visible immediately */
    .progress-bar-with-controls,
    .ios-status-bar {
      visibility: visible !important;
    }
  `;
  
  // Add style to head immediately
  if (document.head) {
    document.head.appendChild(transitionStyle);
  } else {
    // If head doesn't exist yet, add on DOMContentLoaded
    document.addEventListener('DOMContentLoaded', function() {
      document.head.appendChild(transitionStyle);
    });
  }

  // Function to show page instantly
  function showPage() {
    // Add ready class to body to show content
    document.body.classList.add('page-ready');
  }

  // Show page when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', showPage);
  } else {
    showPage();
  }

  // Also show on window load as fallback
  window.addEventListener('load', function() {
    if (!document.body.classList.contains('page-ready')) {
      showPage();
    }
  });
})();

