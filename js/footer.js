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
          <div class="col-md-6 mb-4 mb-md-0">
            <a class="d-flex align-items-center gap-2 mb-3" href="index.html">
              <img src="images/logo.webp" alt="CSH Engineering"
                   class="footer-logo" onerror="this.style.display='none'">
              <span class="navbar-company" style="color:var(--csh-white);">
                CSH Engineering Services &amp; Trading
              </span>
            </a>
            <p>Specialist in air compressor controllers &amp; laser cut metal fabrication.<br>
               25 years serving Malaysian industry.</p>
            <div class="d-flex gap-2 footer-link">
              <i class="bi bi-geo-alt-fill text-red flex-shrink-0 mt-1"></i>
              <span>No.79, Jalan TPP 1/19, Taman Industri Puchong,<br>
                    47160 Puchong, Selangor, Malaysia</span>
            </div>
          </div>

          <!-- Col 2: Navigation -->
          <div class="col-md-2 mb-4 mb-md-0">
            <p class="footer-nav-heading">Navigation</p>
            <a href="controllers.html" class="footer-link">Air Compressor Controllers</a>
            <a href="packaging.html" class="footer-link">Packaging Machinery</a>
            <a href="metalworks.html" class="footer-link">Metal Works</a>
            <a href="reconditioned.html" class="footer-link">Reconditioned Items</a>
            <a href="about.html" class="footer-link">About Us</a>
          </div>

          <!-- Spacer -->
          <div class="col-md-1 mb-4 mb-md-0"></div>

          <!-- Col 3: Contact details -->
          <div class="col-md-3">
            <p class="footer-nav-heading">Contact</p>

            <p class="footer-contact-group-label mb-1">Office</p>
            <p class="footer-link mb-3">
              <i class="bi bi-briefcase-fill me-2 text-red"></i>+60 3-8061 3094
            </p>

            <p class="footer-contact-group-label mb-1">Controllers / Packaging</p>
            <p class="footer-link">
              <i class="bi bi-telephone-fill me-2 text-red"></i>+60 12-291 1125
            </p>
            <p class="footer-link mb-3">
              <i class="bi bi-envelope-at-fill me-2 text-red"></i>s_cheng_88@hotmail.com
            </p>

            <p class="footer-contact-group-label mb-1">Metal Works</p>
            <p class="footer-link">
              <i class="bi bi-telephone-fill me-2 text-red"></i>+60 12-231 1781
            </p>
            <p class="footer-link mb-3">
              <i class="bi bi-envelope-at-fill me-2 text-red"></i>stephyee8666@gmail.com
            </p>
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
            <span class="text-muted-c" style="font-size:0.75rem;">scheng_88</span>
            <div style="background:var(--csh-grey-100); border:1px solid var(--csh-grey-200);
                        width:180px; height:180px; margin:0 auto; border-radius:var(--radius);
                        display:flex; align-items:center; justify-content:center;">
              <!-- Replace with: <img src="images/wechat-qr.webp" alt="WeChat QR" width="180"> -->
              <img src="images/wechat-qr.webp" alt="WeChat QR" width="180">
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Scroll to top button -->
    <button id="scroll-top" class="scroll-top-btn" onclick="window.scrollTo({top:0, behavior:'smooth'})" title="Back to top">
      <i class="bi bi-chevron-bar-up"></i>
    </button>`;

  const target = document.getElementById("footer");
  if (target) {
    target.outerHTML = html;
    // Show/hide scroll button based on scroll position
    window.addEventListener("scroll", () => {
      const btn = document.getElementById("scroll-top");
      if (btn) btn.classList.toggle("visible", window.scrollY > 400);
    });
    // Set year after injection
    document.querySelectorAll(".footer-year").forEach((el) => {
      el.textContent = new Date().getFullYear();
    });
  }
})();


// <a href="#line-modal" data-bs-toggle="modal"
//    class="contact-badge line" title="LINE"><i class="bi bi-line"></i></a>



// <!-- LINE Modal -->
// <div class="modal fade" id="line-modal" tabindex="-1" aria-label="LINE QR">
//   <div class="modal-dialog modal-dialog-centered modal-sm">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h6 class="modal-title">
//           <i class="bi bi-line me-2" style="color:#00B900"></i>LINE
//         </h6>
//         <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
//       </div>
//       <div class="modal-body text-center py-4">
//         <p class="text-muted-c mb-3" style="font-size:0.82rem;">Scan to add on LINE</p>
//         <div style="background:var(--csh-grey-100); border:1px solid var(--csh-grey-200);
//                     width:180px; height:180px; margin:0 auto; border-radius:var(--radius);
//                     display:flex; align-items:center; justify-content:center;">
//           <!-- Replace with: <img src="images/line-qr.webp" alt="LINE QR" width="180"> -->
//           <span class="text-muted-c" style="font-size:0.75rem;">QR Code</span>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>