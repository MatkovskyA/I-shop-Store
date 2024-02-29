import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  slidesPerView: 4,
  spaceBetween: 24,
});

import mobileNav from "./modules/mobile-nav.js";
mobileNav();

import taglineBtn from "./modules/taglineBtn.js";
taglineBtn();

import updateTimer from "./modules/timer.js";
updateTimer();
