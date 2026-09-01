export function initHeaderScroll() {
  const header = document.querySelector("#header");

  if (!header) {
    return;
  }

  function updateHeader() {
    if (window.scrollY > 40) {
      header.classList.add("header--scrolled");
    } else {
      header.classList.remove("header--scrolled");
    }
  }

  window.addEventListener(
    "scroll",
    updateHeader
  );

  updateHeader();
}