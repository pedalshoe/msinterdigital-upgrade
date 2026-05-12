const newsletterForm = document.querySelector('.nl-form');
const hamburgerButton = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navCtaWrap = document.querySelector('.nav-cta-wrap');

function handleNL(event) {
  event.preventDefault();
  const msg = document.getElementById('nl-msg');
  const input = document.getElementById('nl-email');

  if (msg) {
    msg.textContent = 'Thank you! Check your inbox to confirm your subscription.';
    msg.style.color = '#4A2C6B';
    msg.style.fontWeight = '500';
  }

  if (input) {
    input.value = '';
  }
}

if (newsletterForm) {
  newsletterForm.addEventListener('submit', handleNL);
}

if (hamburgerButton && navLinks) {
  hamburgerButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    hamburgerButton.setAttribute('aria-expanded', String(isOpen));

    if (navCtaWrap) {
      navCtaWrap.style.display = isOpen ? 'block' : '';
      if (isOpen) {
        navCtaWrap.style.position = 'absolute';
        navCtaWrap.style.top = 'calc(64px + 12.5rem)';
        navCtaWrap.style.left = '1.5rem';
        navCtaWrap.style.right = '1.5rem';
        navCtaWrap.style.zIndex = '100';
      } else {
        navCtaWrap.style.position = '';
        navCtaWrap.style.top = '';
        navCtaWrap.style.left = '';
        navCtaWrap.style.right = '';
        navCtaWrap.style.zIndex = '';
      }
    }
  });
}

