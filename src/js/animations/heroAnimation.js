import { gsap } from "gsap";


export function initHeroAnimation() {

  const heroImage =
    document.querySelector(".hero__media");

  const heroEyebrow =
    document.querySelector(".hero__eyebrow");

  const heroTitleText =
    document.querySelector(".hero__title-text");

  const paintBrush =
    document.querySelector(".hero__paint-brush");

  const heroTagline =
    document.querySelector("#heroTagline");

  const heroLine =
    document.querySelector(".hero__line");

  const heroDescription =
    document.querySelector(".hero__description");

  const heroActions =
    document.querySelector(".hero__actions");

  const heroScroll =
    document.querySelector(".hero__scroll");


  if (
    !heroImage ||
    !heroTitleText ||
    !paintBrush
  ) {
    return;
  }


  gsap.set(heroTitleText, {
    clipPath: "inset(0 100% 0 0)",
  });


  gsap.set(paintBrush, {
    left: "0%",
    opacity: 0,
  });


  const timeline = gsap.timeline({
    defaults: {
      ease: "power3.out",
    },
  });


  timeline

    /* =========================
       IMAGEN
    ========================= */

    .from(heroImage, {
      xPercent: -70,
      opacity: 0,

      duration: 1.4,
    })


    /* =========================
       ESPECIALIDADES
    ========================= */

    .from(
      heroEyebrow,
      {
        y: 20,
        opacity: 0,

        duration: 0.5,
      },

      "-=0.5"
    )


    /* =========================
       APARECE LA BROCHA
    ========================= */

    .to(paintBrush, {
      opacity: 1,

      duration: 0.1,
    })


    /* =========================
       REVELAMOS NOVALT
    ========================= */

    .to(
      heroTitleText,
      {
        clipPath:
          "inset(0 0% 0 0)",

        duration: 1.1,

        ease: "power2.inOut",
      }
    )


    /* =========================
       MOVEMOS LA BROCHA
    ========================= */

    .to(
      paintBrush,
      {
        left: "100%",

        duration: 1.1,

        ease: "power2.inOut",
      },

      "<"
    )


    /* =========================
       OCULTAMOS LA BROCHA
    ========================= */

    .to(paintBrush, {
      opacity: 0,

      duration: 0.2,
    })


    /* =========================
       YOU GO CRAZY
    ========================= */

    .from(heroTagline, {
      y: 15,
      opacity: 0,

      duration: 0.5,
    })


    /* =========================
       LÍNEA MORADA
    ========================= */

    .from(
      heroLine,
      {
        scaleX: 0,

        transformOrigin: "left",

        duration: 0.5,
      },

      "-=0.2"
    )


    /* =========================
       DESCRIPCIÓN
    ========================= */

    .from(
      heroDescription,
      {
        y: 20,
        opacity: 0,

        duration: 0.5,
      },

      "-=0.2"
    )


    /* =========================
       BOTONES
    ========================= */

    .from(
      heroActions,
      {
        y: 25,
        opacity: 0,

        duration: 0.5,
      },

      "-=0.2"
    )


    /* =========================
       DESLIZA
    ========================= */

    .from(
      heroScroll,
      {
        opacity: 0,

        duration: 0.4,
      },

      "-=0.1"
    );
}