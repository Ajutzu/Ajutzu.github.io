// On Scroll Link to Sections

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// On Scroll Showing Sections

function revealOnScroll() {
  const sections = [
    ".about-section",
    ".skills-section",
    ".education",
    ".projects-section",
  ];

  sections.forEach((value) => {
    const section = document.querySelector(value);
    if (section) {
      const sectionPosition = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionPosition < windowHeight) {
        section.classList.add("show");
      }
    }
  });
}

// On Hero Showing Sections

function revealHero() {
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.classList.add("show");
  }
}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", () => {
  revealHero();
  revealOnScroll();
});
