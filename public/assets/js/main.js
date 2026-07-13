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

function bindContactForm() {
  const contactForm = document.getElementById("contact-form");
  if (!contactForm) return;

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const firstName = String(formData.get("first_name") || "").trim();
    const lastName = String(formData.get("last_name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const serviceSelections = formData.getAll("services");
    const ageGroup = String(formData.get("age_group") || "").trim();
    const lifeEvent = String(formData.get("life_event") || "").trim();
    const source = String(formData.get("source") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const msg = document.getElementById("form-msg");

    const lines = [
      `Name: ${firstName} ${lastName}`.trim(),
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Services: ${serviceSelections.length ? serviceSelections.join(", ") : "Not specified"}`,
      `Age Group: ${ageGroup || "Not specified"}`,
      `Recent Life-Changing Event: ${lifeEvent || "Not specified"}`,
      `Referral Source: ${source || "Not specified"}`,
      "",
      "Message:",
      message || "No additional details provided.",
    ];

    const subject = encodeURIComponent(`Consultation Request from ${firstName} ${lastName}`.trim());
    const body = encodeURIComponent(lines.join("\n"));

    window.location.href = `mailto:kdf@msinterdigital.com?subject=${subject}&body=${body}`;

    if (msg) {
      msg.textContent = "Your email app is opening with your consultation request. If it does not, email kdf@msinterdigital.com directly.";
      msg.style.color = "#4A2C6B";
      msg.style.fontWeight = "500";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  bindNewsletterForm();
  bindMobileMenu();
  bindContactForm();
});
