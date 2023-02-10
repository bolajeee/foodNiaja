let newAspect = document.getElementById("newAspect");
let bestAspect = document.getElementById("bestAspect");
let salesAspect = document.getElementById("salesAspect");


newArrivals.addEventListener("click", ()=>{
     newAspect.classList.remove("hidden");
     bestAspect.classList.add("hidden");
     salesAspect.classList.add("hidden");
}) 

bestSales.addEventListener("click", ()=>{
        newAspect.classList.add("hidden");
        bestAspect.classList.remove("hidden");
        salesAspect.classList.add("hidden");
})

salesItems.addEventListener("click", ()=>{
        newAspect.classList.add("hidden");
        bestAspect.classList.add("hidden");
        salesAspect.classList.remove("hidden");
})

const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener("click", function () {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

