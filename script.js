/* ══════════════════════════════════════════════════════════════
   SHARED JAVASCRIPT FOR CANCER CLINIC WEBSITE
   Used by: index.html, corporate.html
   ══════════════════════════════════════════════════════════════ */

// ─────────────────────────────────────────────────────────────
// NAVBAR SCROLL EFFECT
// ─────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // ─────────────────────────────────────────────────────────────
    // CLOSE MOBILE MENU ON SCROLL
    // ─────────────────────────────────────────────────────────────
    const mobileMenu = document.getElementById("mobile-menu");
    const hamburger = document.getElementById("hamburger");
    
    if (mobileMenu && mobileMenu.classList.contains("open")) {
      mobileMenu.classList.remove("open");
      // Reset hamburger icon back to hamburger (remove active class)
      if (hamburger) {
        hamburger.classList.remove("active");
      }
    }
  });

  // ─────────────────────────────────────────────────────────────
  // MOBILE MENU TOGGLE
  // ─────────────────────────────────────────────────────────────
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll("a") : [];

  if (hamburger && mobileMenu) {
    // Toggle menu on hamburger click
    hamburger.addEventListener("click", function (e) {
      e.stopPropagation();
      mobileMenu.classList.toggle("open");
      // Toggle active class for hamburger/cross icon
      hamburger.classList.toggle("active");
    });

    // Close menu when a link is clicked
    mobileLinks.forEach((link) => {
      link.addEventListener("click", function () {
        mobileMenu.classList.remove("open");
        hamburger.classList.remove("active");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (!navbar.contains(e.target)) {
        mobileMenu.classList.remove("open");
        hamburger.classList.remove("active");
      }
    });
  }

  // ─────────────────────────────────────────────────────────────
  // AOS (Animate On Scroll) INITIALIZATION
  // ─────────────────────────────────────────────────────────────
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }

  // ─────────────────────────────────────────────────────────────
  // SMOOTH SCROLL LINKS
  // ─────────────────────────────────────────────────────────────
  const allLinks = document.querySelectorAll('a[href^="#"]');
  allLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#") return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // ─────────────────────────────────────────────────────────────
  // FORM SUBMISSION & SUCCESS MESSAGE
  // ─────────────────────────────────────────────────────────────
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Show success message if element exists
      const successMessage = document.getElementById("success-message");
      if (successMessage) {
        successMessage.classList.add("show");

        // Auto-close after 3 seconds
        setTimeout(() => {
          successMessage.classList.remove("show");
        }, 3000);
      }

      // Optional: Reset form
      form.reset();
    });
  });
});

// ─────────────────────────────────────────────────────────────
// UTILITY: Check if element is in viewport
// ─────────────────────────────────────────────────────────────
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top < window.innerHeight &&
    rect.bottom > 0 &&
    rect.left < window.innerWidth &&
    rect.right > 0
  );
}