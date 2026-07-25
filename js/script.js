// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav burger — toggles a simple dropdown of links
const burger = document.getElementById('burger');
if (burger) {
  burger.addEventListener('click', () => {
    const nav = document.querySelector('.nav__links');
    const expanded = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!expanded));
    if (nav) {
      nav.style.display = expanded ? 'none' : 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.top = '72px';
      nav.style.left = '0';
      nav.style.right = '0';
      nav.style.background = '#0E1B22';
      nav.style.padding = '18px 32px';
      nav.style.borderBottom = '1px solid rgba(198,161,91,0.22)';
    }
  });
}

// Quote form -> submits to Netlify Forms via AJAX, shows inline confirmation
const quoteForm = document.getElementById('quoteForm');
const formStatus = document.getElementById('formStatus');
if (quoteForm) {
  quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(quoteForm);
    const encoded = new URLSearchParams(data).toString();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encoded
    })
      .then(() => {
        formStatus.textContent = "Thanks — your request has been sent. We'll be in touch shortly.";
        formStatus.style.color = '#7CD68B';
        quoteForm.reset();
      })
      .catch(() => {
        formStatus.textContent = "Something went wrong — please call or WhatsApp us directly at +964 773 777 6644.";
        formStatus.style.color = '#E07856';
      });
  });
}