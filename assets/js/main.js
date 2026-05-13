function bindNewsletterForm() {
  const newsletterForm = document.querySelector(".nl-form");
  if (!newsletterForm) return;

  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const msg = document.getElementById("nl-msg");
    const input = document.getElementById("nl-email");

    if (msg) {
      msg.textContent = "Thank you! Check your inbox to confirm your subscription.";
      msg.style.color = "#4A2C6B";
      msg.style.fontWeight = "500";
    }

    if (input) {
      input.value = "";
    }
  });
}

function bindMobileMenu() {
  const hamburgerButton = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (!hamburgerButton || !navLinks) return;

  hamburgerButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    hamburgerButton.setAttribute("aria-expanded", String(isOpen));
  });
}

window.submitForm = function submitForm() {
  const msg = document.getElementById("form-msg");
  if (!msg) return;

  msg.textContent = "Thanks for reaching out. We will be in touch soon.";
  msg.style.color = "#4A2C6B";
  msg.style.fontWeight = "500";
};

document.addEventListener("DOMContentLoaded", () => {
  bindNewsletterForm();
  bindMobileMenu();
});
