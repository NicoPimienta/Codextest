// Smooth scroll
const links = document.querySelectorAll('a[href^="#"]');
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Stars background
function initStars() {
  const container = document.getElementById("stars");
  for (let i = 0; i < 100; i++) {
    const star = document.createElement("span");
    star.classList.add("star");
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.animationDuration = 3 + Math.random() * 5 + "s";
    container.appendChild(star);
  }
}
initStars();

// Intersection Observer animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap.from(entry.target, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        });
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 },
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Testimonials carousel
const testimonials = document.querySelectorAll(".testimonial");
let currentTestimonial = 0;
setInterval(() => {
  testimonials[currentTestimonial].classList.remove("active");
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  testimonials[currentTestimonial].classList.add("active");
}, 5000);

// Contact form
const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  formMessage.hidden = false;
  form.reset();
});
