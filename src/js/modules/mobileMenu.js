export function initMobileMenu() {

  /* =========================
     ELEMENTOS
  ========================= */

  const menuToggle =
    document.querySelector("#menuToggle");

  const nav =
    document.querySelector("#nav");

  const navLinks =
    nav?.querySelectorAll("a");


  /* Si no existen, detenemos el código */

  if (!menuToggle || !nav) {
    return;
  }


  /* =========================
     ABRIR MENÚ
  ========================= */

  function openMenu() {

    nav.classList.add("active");

    menuToggle.classList.add("active");

    menuToggle.setAttribute(
      "aria-expanded",
      "true"
    );

    document.body.style.overflow =
      "hidden";
  }


  /* =========================
     CERRAR MENÚ
  ========================= */

  function closeMenu() {

    nav.classList.remove("active");

    menuToggle.classList.remove("active");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

    document.body.style.overflow = "";
  }


  /* =========================
     BOTÓN HAMBURGUESA
  ========================= */

  menuToggle.addEventListener(
    "click",
    () => {

      const isOpen =
        nav.classList.contains("active");


      if (isOpen) {

        closeMenu();

      } else {

        openMenu();

      }

    }
  );


  /* =========================
     CERRAR AL SELECCIONAR
     UNA OPCIÓN
  ========================= */

  navLinks?.forEach((link) => {

    link.addEventListener(
      "click",
      () => {

        closeMenu();

      }
    );

  });


  /* =========================
     CERRAR CON ESCAPE
  ========================= */

  document.addEventListener(
    "keydown",
    (event) => {

      if (event.key === "Escape") {
        closeMenu();
      }

    }
  );

}