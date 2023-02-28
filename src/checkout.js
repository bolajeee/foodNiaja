const burgerIcon1 = document.querySelector("#burger");
const menuIcon1 = document.querySelector("#menu");

burgerIcon1.addEventListener("click", function () {
  if (menuIcon1.classList.contains("hidden")) {
    menuIcon1.classList.remove("hidden");
  } else {
    menuIcon1.classList.add("hidden");
  }
});

let slides = document.getElementById("descriptionText");
let slidesR = document.getElementById("reviewAspect");
let slideF = document.getElementById("reviewForm");

description.addEventListener("click", () => {
  slidesR.style.display = "none";
  slideF.style.display = "none";
  slides.style.display = "block";
  description.classList.add("under-rule");
  review.classList.remove("under-rule");
});

review.addEventListener("click", () => {
  slidesR.style.display = "block";
  slides.style.display = "none";
  slideF.style.display = "block";
  review.classList.add("under-rule");
  description.classList.remove("under-rule");
  slidesR.classList.remove("hidden");
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

let count = 0;
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const counter = document.querySelector("#counter")

plus.addEventListener("click",function(){
  count ++;
  counter.innerHTML = (count);
})
minus.addEventListener("click", function(){
  count--;
  counter.innerHTML = (count);
  if(count <= 0){
    counter.innerHTML = ("0")
  }
})


