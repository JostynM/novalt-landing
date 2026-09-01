import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export function initProductionsAnimation() {

  /* =========================
     ELEMENTOS GENERALES
  ========================= */

  const section =
    document.querySelector(".productions");

  if (!section) {
    return;
  }


  const header =
    section.querySelector(".productions__header");

  const title =
    section.querySelector(".productions__title");

  const description =
    section.querySelector(".productions__description");

  const productions =
    section.querySelectorAll(".production");


  /* =========================
     INTRODUCCIÓN
  ========================= */

  const introTimeline = gsap.timeline({

    scrollTrigger: {

      trigger: section,

      start: "top 75%",

      toggleActions:
        "play none none none",

    },

  });


  /* Encabezado */

  introTimeline.from(header, {

    y: 20,

    opacity: 0,

    duration: 0.6,

    ease: "power3.out",

  });


  /* Título */

  introTimeline.from(

    title,

    {

      y: 35,

      opacity: 0,

      duration: 0.8,

      ease: "power3.out",

    },

    "-=0.3"

  );


  /* Descripción */

  introTimeline.from(

    description,

    {

      y: 20,

      opacity: 0,

      duration: 0.6,

      ease: "power3.out",

    },

    "-=0.45"

  );


  /* =========================
     CADA PRODUCCIÓN
  ========================= */

  productions.forEach((production) => {

    const video =
      production.querySelector(".production__video");

    const info =
      production.querySelector(".production__info");


    if (!video) {
      return;
    }


    /* Estado inicial */

    gsap.set(video, {

      clipPath:
        "inset(48% 48% 48% 48%)",

      scale: 0.92,

      opacity: 0,

      filter: "blur(6px)",

    });


    const timeline = gsap.timeline({

      scrollTrigger: {

        trigger: production,

        start: "top 82%",

        toggleActions:
          "play none none none",

      },

    });


    /* =========================
       VIDEO APARECE DEL CENTRO
    ========================= */

    timeline.to(video, {

      clipPath:
        "inset(0% 0% 0% 0%)",

      scale: 1,

      opacity: 1,

      filter: "blur(0px)",

      duration: 1.15,

      ease:
        "power4.out",

    });


    /* =========================
       INFORMACIÓN
    ========================= */

    if (info) {

      timeline.from(

        info,

        {

          y: 18,

          opacity: 0,

          duration: 0.55,

          ease:
            "power3.out",

        },

        "-=0.25"

      );

    }

  });

}