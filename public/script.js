document.addEventListener("DOMContentLoaded", function () {
  // Open & sluit het menu + alleen focus ín het menu

  const openMenuButton = document.querySelector(".menu-button.home");
  const closeMenuButton = document.querySelector(".menu-button.menu");
  const navShown = document.querySelector("nav");
  const menuLinks = document.querySelectorAll(".menu a");
  const firstMenuLink = menuLinks[0];
  const lastMenuLink = menuLinks[menuLinks.length - 1];

  // Initially set tabindex to -1 for all menu links
  menuLinks.forEach((link) => link.setAttribute("tabindex", "-1"));

  // Opent het menu
  openMenuButton.addEventListener("click", function () {
    document.documentElement.classList.add("no-scroll"); // zorgt dat je de body niet kan scrollen als je in het menu bent
    navShown.classList.add("menu-open"); // opent het menu
    openMenuButton.classList.add("hidden-menu"); // verbergt het open menu knopje
    document.querySelector(".menu-button.menu").style.display = "flex";
    // Set tabindex to 0 for all menu links when the menu is opened
    menuLinks.forEach((link) => link.setAttribute("tabindex", "0"));
    // Focus on the first link in the menu when the menu is opened
    firstMenuLink.focus();
  });

  // Sluit het menu
  closeMenuButton.addEventListener("click", function () {
    document.documentElement.classList.remove("no-scroll");
    navShown.classList.remove("menu-open"); // sluit het menu
    openMenuButton.classList.remove("hidden-menu"); // laat het open menu knopje weer zien
    document.querySelector(".menu-button.menu").style.display = "none";
    // Set tabindex to -1 for all menu links when the menu is closed
    menuLinks.forEach((link) => link.setAttribute("tabindex", "-1"));
  });

  // Trap focus within the menu when it's open
  document.addEventListener("keydown", function (event) {
    if (navShown.classList.contains("menu-open")) {
      const isTabPressed = event.key === "Tab";
      if (isTabPressed) {
        if (event.shiftKey && document.activeElement === firstMenuLink) {
          // Shift + Tab from first link
          event.preventDefault();
          closeMenuButton.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === closeMenuButton
        ) {
          // Tab from close button
          event.preventDefault();
          firstMenuLink.focus();
        } else if (
          event.shiftKey &&
          document.activeElement === closeMenuButton
        ) {
          // Shift + Tab from close button
          event.preventDefault();
          lastMenuLink.focus();
        }
      }
    }
  });

  // Carrousel

  const prevButton = document.querySelector(".pagination button:first-of-type");
  const nextButton = document.querySelector(
    ".pagination button:nth-of-type(2)"
  );
  const carrousel = document.querySelector(".lessons .stories ul");
  const storyWidth = document.querySelector(".story").offsetWidth;

  prevButton.addEventListener("click", function () {
    carrousel.scrollBy({
      left: -storyWidth,
      behavior: "smooth",
    });
  });

  nextButton.addEventListener("click", function () {
    carrousel.scrollBy({
      left: storyWidth,
      behavior: "smooth",
    });
  });

  // Client side fetch

  let forms = document.querySelectorAll("form.like-form");
  const loader = document.querySelector(".loader-container");

  forms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
      loader.classList.add("show");
      // console.log(form)
      // console.log(this.action)
      // console.log(this)
      let data = new FormData(this);
      data.append("enhanced", true);
      fetch(this.action, {
        method: this.method,
        body: new URLSearchParams(data),
      })
        .then(function (response) {
          return response.text();
        })
        .then(function (responseHTML) {
          document.querySelector(".liked-playlists > div").innerHTML =
            responseHTML;
          // console.log(responseHTML);
          loader.classList.remove("show");
        });
      event.preventDefault();
    });
  });
});

// Settings

const openSettingsButton = document.querySelector(".playlist-head button");
const closeSettingsButton = document.querySelector("button.close-settings");
const settingsShown = document.querySelector(".playlist-settings-container");

openSettingsButton.addEventListener("click", function () {
  document.documentElement.classList.add("no-scroll");
  settingsShown.classList.add("open-settings");
});

closeSettingsButton.addEventListener("click", function () {
  document.documentElement.classList.remove("no-scroll");
  settingsShown.classList.remove("open-settings");
});
