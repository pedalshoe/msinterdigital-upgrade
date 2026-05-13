const sitePages = {
  home: "index.html",
  about: "about.html",
  services: "services.html",
  counseling: "counseling-therapy.html",
  coaching: "coaching-mentoring.html",
  products: "educational-products.html",
  affiliate: "affiliate-marketing.html",
  contact: "contact.html",
};

const currentYear = new Date().getFullYear();

function isServicesPage(page) {
  return ["services", "counseling", "coaching"].includes(page);
}

function headerTemplate(page) {
  const navLink = (href, label, isActive) =>
    `<li><a href="${href}"${isActive ? ' class="active"' : ""}>${label}</a></li>`;

  return `
    <div id="topbar">
      📞 <a href="tel:+15162345678">+1 (516) 234-5678</a> &nbsp;·&nbsp;
      ✉ <a href="mailto:kdf@msinterdigital.com">kdf@msinterdigital.com</a> &nbsp;·&nbsp;
      Licensed Mental Health Counselor &amp; Certified Guidance Counselor
    </div>
    <nav>
      <div class="nav-inner">
        <a href="${sitePages.home}" class="logo-text">Ms. Interdigital<span>Clarity · Faith · Wellness</span></a>
        <ul class="nav-links" id="primary-navigation">
          ${navLink(sitePages.home, "Home", page === "home")}
          ${navLink(sitePages.about, "About", page === "about")}
          <li>
            <a href="${sitePages.services}"${isServicesPage(page) ? ' class="active"' : ""}>Support Services ▾</a>
            <div class="dropdown">
              <a href="${sitePages.counseling}">Counseling / Therapy</a>
              <a href="${sitePages.coaching}">Coaching / Mentoring</a>
            </div>
          </li>
          ${navLink(sitePages.products, "Educational Products", page === "products")}
          ${navLink(sitePages.affiliate, "Affiliate Marketing", page === "affiliate")}
          ${navLink(sitePages.contact, "Contact", page === "contact")}
        </ul>
        <div class="nav-cta-wrap">
          
          <!-- Calendly link widget begin -->
<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
<a href="" class="btn-gold header-cta" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/kdf-msinterdigital'});return false;">
Schedule<span class="header-cta-detail">&nbsp;a Consultation</span></a>
<!-- Calendly link widget end -->
        </div>
        <button class="hamburger" aria-label="Menu" aria-expanded="false" aria-controls="primary-navigation">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  `;
}

function footerTemplate() {
  return `
    <footer>
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="${sitePages.home}" class="logo-text">Ms. Interdigital<span>Clarity · Faith · Wellness</span></a>
          <p>Online counseling, marketing, and services supporting parents and young people. Licensed. Caring. Here for you.</p>
          <div class="footer-social">
            <a href="https://www.facebook.com/msinterdigital" target="_blank" rel="noopener noreferrer">fb</a>
            <a href="https://www.instagram.com/ms.interdigital_" target="_blank" rel="noopener noreferrer">ig</a>
            <a href="https://www.youtube.com/@kdeyfoy" target="_blank" rel="noopener noreferrer">yt</a>
            <a href="https://www.pinterest.com/kdf1333/" target="_blank" rel="noopener noreferrer">pin</a>
            <a href="https://substack.com/@keandflawes" target="_blank" rel="noopener noreferrer">sub</a>
          </div>
        </div>
        <div class="footer-col"><h4>Services</h4><ul>
          <li><a href="${sitePages.counseling}">Counseling / Therapy</a></li>
          <li><a href="${sitePages.coaching}">Coaching / Mentoring</a></li>
          <li><a href="${sitePages.contact}">Free Consultation</a></li>
        </ul></div>
        <div class="footer-col"><h4>Products</h4><ul>
          <li><a href="${sitePages.products}">Breathe Peaceful eBook</a></li>
          <li><a href="${sitePages.products}">Mindfulness eBook</a></li>
          <li><a href="${sitePages.products}">Mindfulness Course</a></li>
          <li><a href="${sitePages.affiliate}">Affiliate Resources</a></li>
        </ul></div>
        <div class="footer-col"><h4>Company</h4><ul>
          <li><a href="${sitePages.about}">About</a></li>
          <li><a href="${sitePages.contact}">Contact</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms &amp; Conditions</a></li>
          <li><a href="#">Cookie Policy</a></li>
        </ul></div>
      </div>
      <div class="footer-bottom">
        <span>© ${currentYear} Ms. Interdigital. All rights reserved.</span>
        <span>United States &nbsp;·&nbsp; <a href="tel:+15162345678">+1 (516) 234-5678</a> &nbsp;·&nbsp; <a href="mailto:kdf@msinterdigital.com">kdf@msinterdigital.com</a></span>
      </div>
    </footer>
    <a href="${sitePages.contact}" class="btn-gold sticky-book">📅 Book Free Consultation</a>
  `;
}

class SiteHeader extends HTMLElement {
  connectedCallback() {
    const page = document.body.dataset.page || "";
    this.innerHTML = headerTemplate(page);
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = footerTemplate();
  }
}

if (!customElements.get("site-header")) {
  customElements.define("site-header", SiteHeader);
}

if (!customElements.get("site-footer")) {
  customElements.define("site-footer", SiteFooter);
}
