// itme selector
const menu = document.querySelector(".menu");
const toggle = document.querySelector("#toggle");

// event listener
toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});
var swiper = new Swiper(".Hero_Swiper", {
  loop: true,
  autoplay: true,
  spaceBetween: 30,
});
var swiper2 = new Swiper(".upcoming_classes_swiper", {
  loop: true,
  autoplay: true,
  slidesPerView: 3,
  spaceBetween: 50,
  breakpoints: {
    1600: {
      slidesPerView: 3,
      spaceBetween:30
      
    },
    1400: { 
      slidesPerView: 2.5,
    
    },
    1200: {
      slidesPerView: 2.1,
      
    },
    768: {
      slidesPerView:1,
      
    },
    500: {
      slidesPerView:1,
    
    }
  }
});