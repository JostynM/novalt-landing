import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initBeatsAnimation() {
  const section = document.querySelector(".beats");

  if (!section) {
    return;
  }

  const header = section.querySelector(".beats__header");
  const intro = section.querySelector(".beats__intro");
  const cards = section.querySelectorAll(".beat-card");
  const footer = section.querySelector(".beats__footer");

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 75%",
      toggleActions: "play none none none",
    },
  });

  /* ENCABEZADO */
  timeline.from(header, {
    y: 20,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out",
  });

  /* TÍTULO + DESCRIPCIÓN */
  timeline.from(
    intro,
    {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.25"
  );

  /* TARJETAS UNA POR UNA */
  timeline.from(
    cards,
    {
      y: 60,
      opacity: 0,
      scale: 0.96,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.25,
    },
    "-=0.2"
  );

  /* BOTÓN FINAL */
  timeline.from(
    footer,
    {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    },
    "-=0.2"
  );
}
