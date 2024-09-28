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
    ".hero",
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

// Rain Drop Effects

function createRain() {
  const rainContainer = document.createElement('div');
  rainContainer.style.position = 'fixed';
  rainContainer.style.top = 0;
  rainContainer.style.left = 0;
  rainContainer.style.width = '100%';
  rainContainer.style.height = '100%';
  rainContainer.style.pointerEvents = 'none'; // To make sure rain doesn't block interaction
  document.body.appendChild(rainContainer);

  const raindropCount = 100; // Adjust this value for more or fewer raindrops
  for (let i = 0; i < raindropCount; i++) {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');

    // Randomize position and speed
    raindrop.style.left = Math.random() * 100 + 'vw';
    raindrop.style.animationDuration = Math.random() * 2 + 1 + 's'; // Speed of fall
    raindrop.style.animationDelay = Math.random() * 2 + 's';

    rainContainer.appendChild(raindrop);
  }
}

// Call the function on page load
window.onload = createRain;
