document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.style.display =
      navLinks.style.display === "flex" ? "none" : "flex";
    if (navLinks.style.display === "flex") {
      navLinks.style.flexDirection = "column";
      navLinks.style.position = "absolute";
      navLinks.style.top = "70px";
      navLinks.style.left = "0";
      navLinks.style.width = "100%";
      navLinks.style.background = "rgba(15, 23, 42, 0.95)";
      navLinks.style.padding = "2rem";
      navLinks.style.borderBottom = "1px solid rgba(255, 255, 255, 0.1)";
    }
  });

  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      // Close mobile menu if open
      if (window.innerWidth <= 768) {
        navLinks.style.display = "none";
      }

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Reveal Animations on Scroll
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document
    .querySelectorAll(
      ".section-title, .about-text, .stat-card, .skill-category, .timeline-item, .project-card"
    )
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
      observer.observe(el);
    });

  // Add animation class styles dynamically
  const style = document.createElement("style");
  style.innerHTML = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
  document.head.appendChild(style);
});
