document.documentElement.classList.add("js-ready");

const tournamentStart = new Date("2026-07-20T00:00:00+02:00").getTime();
const countdown = document.querySelector("#countdown");
const unitEls = {
  days: countdown?.querySelector('[data-unit="days"]'),
  hours: countdown?.querySelector('[data-unit="hours"]'),
  minutes: countdown?.querySelector('[data-unit="minutes"]'),
  seconds: countdown?.querySelector('[data-unit="seconds"]'),
};

function pad(value) {
  return String(value).padStart(2, "0");
}

function setUnit(name, value) {
  if (unitEls[name]) {
    unitEls[name].textContent = pad(value);
  }
}

function updateCountdown() {
  if (!countdown) return;

  const distance = tournamentStart - Date.now();

  if (distance <= 0) {
    setUnit("days", 0);
    setUnit("hours", 0);
    setUnit("minutes", 0);
    setUnit("seconds", 0);
    countdown.setAttribute("aria-label", "Turneu ka filluar");
    return;
  }

  setUnit("days", Math.floor(distance / 86400000));
  setUnit("hours", Math.floor((distance / 3600000) % 24));
  setUnit("minutes", Math.floor((distance / 60000) % 60));
  setUnit("seconds", Math.floor((distance / 1000) % 60));
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -42px 0px" }
  );

  items.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 42, 280)}ms`;
    observer.observe(item);
  });
}

function createSparks() {
  const field = document.querySelector("#sparkField");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!field || reducedMotion) return;

  field.replaceChildren();
  const sparkCount = window.innerWidth < 680 ? 28 : 54;

  for (let i = 0; i < sparkCount; i += 1) {
    const spark = document.createElement("span");
    spark.className = "spark";
    spark.style.setProperty("--x", `${Math.random() * 100}%`);
    spark.style.setProperty("--y", `${16 + Math.random() * 78}%`);
    spark.style.setProperty("--w", `${1 + Math.random() * 2.2}px`);
    spark.style.setProperty("--h", `${7 + Math.random() * 16}px`);
    spark.style.setProperty("--r", `${-36 + Math.random() * 72}deg`);
    spark.style.setProperty("--dx", `${-38 + Math.random() * 76}px`);
    spark.style.setProperty("--dy", `${-100 - Math.random() * 190}px`);
    spark.style.setProperty("--d", `${4 + Math.random() * 5.6}s`);
    spark.style.setProperty("--delay", `${-Math.random() * 8}s`);
    spark.style.setProperty("--o", `${0.34 + Math.random() * 0.5}`);
    field.appendChild(spark);
  }
}

function setupTopbar() {
  const topbar = document.querySelector("[data-topbar]");
  if (!topbar) return;

  const update = () => {
    topbar.classList.toggle("is-scrolled", window.scrollY > 16);
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
}

function setupHeroParallax() {
  const hero = document.querySelector(".hero");
  const bg = document.querySelector(".hero-bg");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!hero || !bg || reducedMotion) return;

  hero.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    const offset = ((event.clientX - rect.left) / rect.width - 0.5) * 18;
    bg.style.setProperty("--mx", `${offset}px`);
  });

  hero.addEventListener("pointerleave", () => {
    bg.style.setProperty("--mx", "0px");
  });
}

updateCountdown();
setupReveal();
createSparks();
setupTopbar();
setupHeroParallax();

window.addEventListener("resize", createSparks, { passive: true });
setInterval(updateCountdown, 1000);
