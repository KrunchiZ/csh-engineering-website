/**
 * navbar.js — Shared navbar for all CSH Engineering pages
 * Usage: add <div id="navbar"></div> at top of <body>
 * Set active page via <body data-page="home|controllers|packaging|enclosures|reconditioned|about">
 */

(function () {
  const pages = [
    { key: "home", label: "Home", href: "index.html" },
    { key: "controllers", label: "Controllers", href: "controllers.html" },
    { key: "packaging", label: "Packaging", href: "packaging.html" },
    { key: "metalworks", label: "Metal Works", href: "metalworks.html" },
    {
      key: "reconditioned",
      label: "Reconditioned",
      href: "reconditioned.html",
    },
    { key: "about", label: "About", href: "about.html" },
  ];

  const currentPage = document.body.getAttribute("data-page") || "";

  const navLinks = pages
    .map(
      (p) => `
    <li class="nav-item">
      <a class="nav-link ${p.key === currentPage ? "active" : ""}" href="${p.href}">${p.label}</a>
    </li>`,
    )
    .join("");

  // <span class="navbar-company">CSH Engineering Services &amp; Trading</span>
  const html = `
    <nav class="navbar navbar-expand-lg sticky-top">
      <div class="container">

        <!-- Brand -->
        <a class="navbar-brand d-flex align-items-center gap-2" href="index.html">
          <img src="images/logo.webp" alt="CSH Engineering Services & Trading"
               class="navbar-logo" onerror="this.style.display='none'">
        </a>

        <!-- Mobile toggle -->
        <button class="navbar-toggler border-0" type="button"
                data-bs-toggle="collapse" data-bs-target="#navMenu">
          <i class="bi bi-list fs-4" style="color:var(--csh-dark)"></i>
        </button>

        <div class="collapse navbar-collapse" id="navMenu">

          <!-- Nav links -->
          <ul class="navbar-nav ms-auto mb-3 mb-lg-0 me-lg-4 gap-3">
            ${navLinks}
          </ul>

          <!-- Dual contact badge groups -->
          <div class="ms-auto">
            <div class="d-flex align-items-center navbar-contact-wrap">

              <!-- Group 1: Controllers / Packaging -->
              <div class="navbar-badge-group">
                <span class="navbar-badge-label">Controllers / Packaging</span>
                <div class="d-flex contact-badges">
                  <a href="https://wa.me/60122911125" target="_blank" rel="noopener noreferrer"
                    class="contact-badge wa" title="WhatsApp: +60 12-291 1125">
                    <i class="bi bi-whatsapp"></i>
                  </a>
                  <a href="mailto:s_cheng_88@hotmail.com"
                    class="contact-badge email" title="Email: s_cheng_88@hotmail.com">
                    <i class="bi bi-envelope-fill"></i>
                  </a>
                  <a href="tel:+60122911125"
                    class="contact-badge tel" title="Call: +60 12-291 1125">
                    <i class="bi bi-telephone-fill"></i>
                  </a>
                  <a href="#wechat-modal" data-bs-toggle="modal"
                    class="contact-badge wechat" title="WeChat">
                    <i class="bi bi-wechat"></i>
                  </a>
                </div>
              </div>

              <!-- Divider -->
              <div class="navbar-badge-divider"></div>

              <!-- Group 2: Laser Cut Metal Works -->
              <div class="navbar-badge-group">
                <span class="navbar-badge-label">Laser Cut Metal Works</span>
                <div class="d-flex contact-badges">
                  <a href="https://wa.me/60122311781" target="_blank" rel="noopener noreferrer"
                    class="contact-badge wa" title="WhatsApp: +60 12-231 1781">
                    <i class="bi bi-whatsapp"></i>
                  </a>
                  <a href="mailto:stephyee8666@gmail.com"
                    class="contact-badge email" title="Email: stephyee8666@gmail.com">
                    <i class="bi bi-envelope-fill"></i>
                  </a>
                  <a href="tel:+60122311781"
                    class="contact-badge tel" title="Call: +60 12-231 1781">
                    <i class="bi bi-telephone-fill"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>`;

  const target = document.getElementById("navbar");
  if (target) target.outerHTML = html;
})();


// <a href="#line-modal" data-bs-toggle="modal"
//   class="contact-badge line" title="LINE">
//   <i class="bi bi-line"></i>
// </a>