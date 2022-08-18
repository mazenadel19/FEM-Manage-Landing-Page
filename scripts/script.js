// navigation
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const primaryHeader = document.querySelector(".primary-header");
navToggle.addEventListener("click", function () {
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");

  if (primaryNav.hasAttribute("data-visible")) {
    navToggle.setAttribute("aria-expanded", true);
  } else {
    navToggle.setAttribute("aria-expanded", false);
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
