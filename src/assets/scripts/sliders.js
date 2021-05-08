import Swiper from "swiper/swiper-bundle.min";

if ($(".index")) {
  const firstScreenSlider = new Swiper(".first-screen__slider", {
    speed: 600,
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    simulateTouch: false,

    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
      waitForTransition: false,
    },
  });

  const trustUsSlider = new Swiper(".trust-us__slider", {
    speed: 600,
    slidesPerView: 5,
    spaceBetween: 0,
    loop: true,
    centeredSlides: true,
    simulateTouch: false,

    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      waitForTransition: false,
    },

    navigation: {
      nextEl: ".trust-us__slider-navigation-next",
      prevEl: ".trust-us__slider-navigation-prev",
    },
  });

  const testimonialsSlider = new Swiper(".testimonials__slider", {
    speed: 600,
    slidesPerView: 1,
    spaceBetween: 0,
    simulateTouch: false,

    navigation: {
      nextEl: ".testimonials__slider-navigation-next",
      prevEl: ".testimonials__slider-navigation-prev",
    },
  });
}
