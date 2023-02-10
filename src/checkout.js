let slides = document.getElementById("descriptionText");
let slidesR = document.getElementById("reviewAspect");
let slideF = document.getElementById("reviewForm");


description.addEventListener("click", () => {
  slidesR.style.display = "none";
  slideF.style.display = "none";
  slides.style.display = "block";
  description.classList.add("underline")
  review.classList.remove("underline");
});

review.addEventListener("click", () => {
  slidesR.style.display = "block";
  slides.style.display = "none";
  slideF.style.display = "block";
  review.classList.add("underline");
  description.classList.remove("underline")
  slidesR.classList.remove("hidden")
});



const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener("click", function () {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

