import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export function initServicesAnimation() {
  const section = document.querySelector(".services");

  if (!section) {
    return;
  }

  const header = section.querySelector(".services__header");
  const title = section.querySelector(".services__title");
  const description = section.querySelector(".services__description");
  const cards = section.querySelectorAll(".service-card");


  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: section,

      start: "top 75%",

      toggleActions:
        "play none none none",
    },
  });


  /* ENCABEZADO */

  timeline.from(header, {
    y: 20,
    opacity: 0,

    duration: 0.7,

    ease: "power3.out",
  });


  /* TÍTULO */

  timeline.from(
    title,
    {
      y: 45,
      opacity: 0,

      duration: 0.9,

      ease: "power3.out",
    },

    "-=0.4"
  );


  /* DESCRIPCIÓN */

  timeline.from(
    description,
    {
      y: 25,
      opacity: 0,

      duration: 0.7,

      ease: "power3.out",
    },

    "-=0.55"
  );


  /* TARJETAS */

  timeline.from(
    cards,
    {
      y: 45,

      opacity: 0,

      duration: 0.9,

      stagger: 0.16,

      ease: "power3.out",
    },

    "-=0.3"
  );
}