// ================= SCROLL REVEAL =================
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.2 }
);

reveals.forEach(el => observer.observe(el));

// ================= NAVBAR SCROLL EFFECT =================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(10,10,20,0.85)";
  } else {
    navbar.style.background = "rgba(10,10,20,0.6)";
  }
});
// ================= COUNTER ANIMATION =================
const counters = document.querySelectorAll(".counter");

const runCounter = (counter) => {
  const target = +counter.getAttribute("data-target");
  let count = 0;
  const speed = 60;

  const update = () => {
    count++;
    counter.innerText = count;
    if (count < target) {
      setTimeout(update, speed);
    } else {
      counter.innerText = target;
    }
  };

  update();
};

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      runCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.6 });

counters.forEach(counter => counterObserver.observe(counter));
// ================= CONTACT FORM (FRONTEND ONLY) =================
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  contactForm.reset();
});
// ================= GLOBAL SCROLL ANIMATIONS =================
const revealSections = document.querySelectorAll(".reveal");
const revealItems = document.querySelectorAll(".reveal-item");

// Section reveal
const sectionObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        sectionObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealSections.forEach(section => sectionObserver.observe(section));

// Staggered reveal
const itemObserver = new IntersectionObserver(
  entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, i * 90);
        itemObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealItems.forEach(item => itemObserver.observe(item));
// ================= MOBILE NAVBAR =================
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const menuOverlay = document.getElementById("menuOverlay");

if (menuToggle && navMenu && menuOverlay) {
  // Toggle menu
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
    menuOverlay.classList.toggle("active");
  });

  // Close menu when link is clicked
  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navMenu.classList.remove("active");
      menuOverlay.classList.remove("active");
    });
  });

  // Close menu when overlay is clicked
  menuOverlay.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
  });
}
