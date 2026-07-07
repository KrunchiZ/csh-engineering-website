/**
 * footer.js — Shared footer + modals for all CSH Engineering pages
 * Usage: add <div id="footer"></div> at end of <body> before scripts
 */

(function () {
  const html = `
    <footer class="footer">
      <div class="container">
        <div class="row">

          <!-- Col 1: Logo + description + both contact groups -->
          <div class="col-md-5 mb-4 mb-md-0">
            <a class="d-flex align-items-center gap-2 mb-3" href="index.html">
              <img src="images/logo.webp" alt="CSH Engineering"
                   class="footer-logo" onerror="this.style.display='none'">
              <span class="navbar-company" style="color:var(--csh-white);">
                CSH Engineering Services &amp; Trading
              </span>
            </a>
            <p>Specialist in electronic controller repair for air compressors.<br>
               25 years serving Malaysian industry.</p>

            <!-- Controllers / Packaging contact -->
            <div class="footer-contact-group">
              <p class="footer-contact-group-label">Controllers / Packaging</p>
              <div class="d-flex contact-badges mb-1">
                <a href="https://wa.me/60122911125" target="_blank" rel="noopener noreferrer"
                   class="contact-badge wa" title="WhatsApp"><i class="bi bi-whatsapp"></i></a>
                <a href="mailto:s_cheng_88@hotmail.com"
                   class="contact-badge email" title="Email"><i class="bi bi-envelope-fill"></i></a>
                <a href="tel:+60122911125"
                   class="contact-badge tel" title="Call"><i class="bi bi-telephone-fill"></i></a>
                <a href="#wechat-modal" data-bs-toggle="modal"
                   class="contact-badge wechat" title="WeChat"><i class="bi bi-wechat"></i></a>
                <a href="#line-modal" data-bs-toggle="modal"
                   class="contact-badge line" title="LINE"><i class="bi bi-line"></i></a>
              </div>
            </div>

            <!-- Enclosures contact -->
            <div class="footer-contact-group mt-2">
              <p class="footer-contact-group-label">Enclosures</p>
              <div class="d-flex contact-badges">
                <a href="https://wa.me/60122311781" target="_blank" rel="noopener noreferrer"
                   class="contact-badge wa" title="WhatsApp"><i class="bi bi-whatsapp"></i></a>
                <a href="mailto:stephyee8666@gmail.com"
                   class="contact-badge email" title="Email"><i class="bi bi-envelope-fill"></i></a>
                <a href="tel:+60122311781"
                   class="contact-badge tel" title="Call"><i class="bi bi-telephone-fill"></i></a>
              </div>
            </div>
          </div>

          <!-- Col 2: Navigation -->
          <div class="col-md-3 mb-4 mb-md-0">
            <p class="footer-nav-heading">Navigation</p>
            <a href="controllers.html" class="footer-link">Air Compressor Controllers</a>
            <a href="packaging.html" class="footer-link">Packaging Machinery</a>
            <a href="enclosures.html" class="footer-link">Laser Cut Enclosures</a>
            <a href="reconditioned.html" class="footer-link">Reconditioned Items</a>
            <a href="about.html" class="footer-link">About Us</a>
          </div>

          <!-- Col 3: Contact details -->
          <div class="col-md-4">
            <p class="footer-nav-heading">Contact</p>

            <p class="footer-contact-group-label mb-1">Controllers / Packaging</p>
            <p class="footer-link">
              <i class="bi bi-telephone-fill me-2 text-red"></i>+60 12-291 1125
            </p>
            <p class="footer-link mb-3">
              <i class="bi bi-envelope-fill me-2 text-red"></i>s_cheng_88@hotmail.com
            </p>

            <p class="footer-contact-group-label mb-1">Enclosures</p>
            <p class="footer-link">
              <i class="bi bi-telephone-fill me-2 text-red"></i>+60 12-231 1781
            </p>
            <p class="footer-link mb-3">
              <i class="bi bi-envelope-fill me-2 text-red"></i>stephyee8666@gmail.com
            </p>

            <div class="d-flex gap-2 footer-link">
              <i class="bi bi-geo-alt-fill text-red flex-shrink-0 mt-1"></i>
              <span>No.79, Jalan TPP 1/19, Taman Industri Puchong,<br>
                    47160 Puchong, Selangor, Malaysia</span>
            </div>
          </div>

        </div>

        <p class="footer-copy text-center mb-0">
          &copy; <span class="footer-year"></span>
          CSH Engineering Services &amp; Trading. All rights reserved.
        </p>
      </div>
    </footer>

    <!-- WeChat Modal -->
    <div class="modal fade" id="wechat-modal" tabindex="-1" aria-label="WeChat QR">
      <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title">
              <i class="bi bi-wechat me-2" style="color:#07C160"></i>WeChat
            </h6>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body text-center py-4">
            <p class="text-muted-c mb-3" style="font-size:0.82rem;">Scan to add on WeChat</p>
            <div style="background:var(--csh-grey-100); border:1px solid var(--csh-grey-200);
                        width:180px; height:180px; margin:0 auto; border-radius:var(--radius);
                        display:flex; align-items:center; justify-content:center;">
              <!-- Replace with: <img src="images/wechat-qr.webp" alt="WeChat QR" width="180"> -->
              <span class="text-muted-c" style="font-size:0.75rem;">QR Code</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- LINE Modal -->
    <div class="modal fade" id="line-modal" tabindex="-1" aria-label="LINE QR">
      <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title">
              <i class="bi bi-line me-2" style="color:#00B900"></i>LINE
            </h6>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body text-center py-4">
            <p class="text-muted-c mb-3" style="font-size:0.82rem;">Scan to add on LINE</p>
            <div style="background:var(--csh-grey-100); border:1px solid var(--csh-grey-200);
                        width:180px; height:180px; margin:0 auto; border-radius:var(--radius);
                        display:flex; align-items:center; justify-content:center;">
              <!-- Replace with: <img src="images/line-qr.webp" alt="LINE QR" width="180"> -->
              <span class="text-muted-c" style="font-size:0.75rem;">QR Code</span>
            </div>
          </div>
        </div>
      </div>
    </div>`;

  const target = document.getElementById("footer");
  if (target) {
    target.outerHTML = html;
    // Set year after injection
    document.querySelectorAll(".footer-year").forEach((el) => {
      el.textContent = new Date().getFullYear();
    });
  }
})();