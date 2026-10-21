// itme selector
const menu = document.querySelector(".menu");
const toggle = document.querySelector("#toggle");

// event listener
if (toggle) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

var swiper = new Swiper(".Hero_Swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  spaceBetween: 30,
  speed: 700,
});

var swiper2 = new Swiper(".upcoming_classes_swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  slidesPerView: 3,
  spaceBetween: 50,
  breakpoints: {
    1600: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1400: {
      slidesPerView: 2.5,
    },
    1200: {
      slidesPerView: 2.1,
    },
    768: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 1,
    },
  },
});

var trainerSwiper = new Swiper(".Trainer_swiper", {
  loop: false,
  rewind: true,
  autoplay: { delay: 3000, disableOnInteraction: false },
  slidesPerView: 1.15,
  spaceBetween: 16,
  breakpoints: {
    560: { slidesPerView: 2 },
    800: { slidesPerView: 3, spaceBetween: 24 },
    1050: { slidesPerView: 3, spaceBetween: 28 },
  },
});
