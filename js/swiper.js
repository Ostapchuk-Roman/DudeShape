const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,

  navigation: {
    nextEl: ".swiper__button-next",
    prevEl: ".swiper__button-prev",
    clickable: true,
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
