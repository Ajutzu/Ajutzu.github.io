                                                                                    // On Scroll Link to Sections

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

                                                                                    // Detect Spline

window.addEventListener("load", function () {
  const splineViewer = document.getElementById("splineCanvas");

  setTimeout(() => {
    document.getElementById("loader-wrapper").style.display = "none";
  }, 3000); 
});

                                                                                    // On Scroll Showing Sections

function revealOnScroll() {
  const sections = [".hero", ".about-section", ".skills-section", ".education", ".projects-section"];

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

