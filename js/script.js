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

// Quote form -> builds a mailto: link with the shipment details filled in
const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
  quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(quoteForm);
    const name = data.get('name') || '';
    const company = data.get('company') || '';
    const email = data.get('email') || '';
    const phone = data.get('phone') || '';
    const mode = data.get('mode') || '';
    const route = data.get('route') || '';
    const details = data.get('details') || '';

    const subject = `Quote request — ${mode}${route ? ' — ' + route : ''}`;
    const body =
      `Name: ${name}\n` +
      `Company: ${company}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Mode: ${mode}\n` +
      `Route: ${route}\n\n` +
      `Details:\n${details}`;

    const mailto = `mailto:ops@slalogi.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  });
}