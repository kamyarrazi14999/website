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
 
});
