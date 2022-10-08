// navigation
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const iconClose = document.querySelector(".icon-close");
const iconHamburger = document.querySelector(".icon-hamburger");
const primaryHeader = document.querySelector(".primary-header");
navToggle.addEventListener("click", function () {
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");

  if (primaryNav.hasAttribute("data-visible")) {
    navToggle.setAttribute("aria-expanded", true);
    iconClose.classList.remove("display-none");
    iconHamburger.classList.add("display-none");
  } else {
    navToggle.setAttribute("aria-expanded", false);
    iconClose.classList.add("display-none");
    iconHamburger.classList.remove("display-none");
  }
});

// A11Y Slider
const slider = new A11YSlider(document.querySelector(".slider"), {
  adaptiveHeight: false,
  dots: true,
  arrows: false,
  responsive: {
    480: {
      dots: false,
    },
  },
});
