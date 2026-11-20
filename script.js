// Vedic IT Labs website interactions
document.getElementById('year').textContent = new Date().getFullYear();

// Bootstrap-style client-side validation.
// On valid submission, prepare an email in the visitor's default mail application.
(() => {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      status.textContent = 'Please complete the highlighted fields.';
      status.className = 'small mt-3 text-danger';
      return;
    }

    const data = new FormData(form);
    const subject = encodeURIComponent(`Website enquiry: ${data.get('service')}`);
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nService: ${data.get('service')}\n\nProject details:\n${data.get('message')}`
    );
    status.textContent = 'Opening your email application…';
    status.className = 'small mt-3 text-success';
    window.location.href = `mailto:vedicitlabs@gmail.com?subject=${subject}&body=${body}`;
  });

  // Close the mobile navigation after selecting a section.
  document.querySelectorAll('#mainNav .nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      const nav = document.getElementById('mainNav');
      if (nav.classList.contains('show')) {
        bootstrap.Collapse.getOrCreateInstance(nav).hide();
      }
    });
  });
})();
