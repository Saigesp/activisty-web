(function () {
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('siteNav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Email en base64 en el HTML para dificultar el scraping automático
  var emailCta = document.getElementById('emailCta');
  if (emailCta) {
    var encoded = emailCta.getAttribute('data-b64');
    if (encoded) {
      var email = atob(encoded);
      emailCta.href = 'mailto:' + email;
      emailCta.textContent = email;
    }
  }
})();
