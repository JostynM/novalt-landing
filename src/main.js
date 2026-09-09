import "./css/base/variables.css";
import "./css/base/reset.css";
import "./css/base/global.css";

import "./css/components/header.css";
import "./css/components/buttons.css";

import "./css/sections/hero.css";
import "./css/sections/services.css";
import "./css/sections/productions.css";
import "./css/sections/beats.css";
import "./css/sections/about.css";
import "./css/sections/contact.css";

import "./css/responsive.css";

import { inject } from "@vercel/analytics";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { initMobileMenu } from "./js/modules/mobileMenu.js";
import { initHeaderScroll } from "./js/modules/headerScroll.js";

import { initHeroAnimation } from "./js/animations/heroAnimation.js";
import { initServicesAnimation } from "./js/animations/servicesAnimation.js";
import { initProductionsAnimation } from "./js/animations/productionsAnimation.js";
import { initBeatsAnimation } from "./js/animations/beatsAnimation.js";


/* Initialize Vercel Analytics */
inject();

/* Evita que el navegador restaure
   automáticamente la posición anterior */
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}


/* Elimina hashes como #beats al recargar */
if (window.location.hash) {
  history.replaceState(
    null,
    "",
    window.location.pathname + window.location.search
  );
}


/* Fuerza el scroll al inicio */
function goToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant",
  });
}


/* Inicia todos los módulos una sola vez */
function initApp() {
  initMobileMenu();
  initHeaderScroll();

  initHeroAnimation();
  initServicesAnimation();
  initProductionsAnimation();
  initBeatsAnimation();
}


/* Cuando toda la página termina de cargar */
window.addEventListener("load", () => {

  goToTop();

  requestAnimationFrame(() => {

    goToTop();

    initApp();

    ScrollTrigger.refresh();

  });

});


/* También controla cuando el navegador
   restaura una página desde su caché */
window.addEventListener("pageshow", () => {

  goToTop();

  requestAnimationFrame(() => {
    goToTop();

    ScrollTrigger.refresh();
  });

});