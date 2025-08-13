
// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    links.classList.toggle('open');
  });
}

// Contact form validation (basic demo)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const required = ['name','email','subject','message'];
    const missing = required.some((k) => !data.get(k) || !String(data.get(k)).trim());
    if (missing) { alert('Please fill in all required fields.'); return; }
    // rudimentary email check
    const email = String(data.get('email'));
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { alert('Please enter a valid email.'); return; }
    alert('Thanks! Your message was sent (demo).');
    form.reset();
  });
}
