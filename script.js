/* Mobile navigation toggle (hamburger menu)
   - Opens the dropdown when the hamburger is clicked
   - Closes when the ✕ (same button), any nav link,
     outside click, or Escape is activated          */
(function () {
  var navbar = document.querySelector('.navbar');
  var toggle = document.getElementById('navToggle');
  if (!navbar || !toggle) return;

  function setMenu(open) {
    navbar.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  // Hamburger / close icon
  toggle.addEventListener('click', function () {
    setMenu(!navbar.classList.contains('menu-open'));
  });

  // Close after choosing a navigation link
  navbar.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
      setMenu(false);
    });
  });

  // Close when clicking/tapping outside the navbar
  document.addEventListener('click', function (event) {
    if (navbar.classList.contains('menu-open') && !navbar.contains(event.target)) {
      setMenu(false);
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && navbar.classList.contains('menu-open')) {
      setMenu(false);
      toggle.focus();
    }
  });

  // Reset if the viewport grows back to desktop size
  window.addEventListener('resize', function () {
    if (window.innerWidth > 640 && navbar.classList.contains('menu-open')) {
      setMenu(false);
    }
  });
})();