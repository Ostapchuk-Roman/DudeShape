const swiper = new Swiper(".swiper", {
  slidesPerView: 3,

  loop: true,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    481: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    768: {
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },

  navigation: {
    nextEl: ".swiper__button-next",
    prevEl: ".swiper__button-prev",
    clickable: true,
  },

  pagination: {
    el: ".swiper__pagination",
    clickable: true, // дозволяє натискати на буллети
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
