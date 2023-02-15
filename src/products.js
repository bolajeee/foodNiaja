let newAspect = document.getElementById("newAspect");
let bestAspect = document.getElementById("bestAspect");
let salesAspect = document.getElementById("salesAspect");


newArrivals.addEventListener("click", () => {
  newAspect.classList.remove("hide");
  bestAspect.classList.add("hide");
  salesAspect.classList.add("hide");

  if (newArrivals.classList.contains("under-rule")) {
    newArrivals.classList.remove("under-rule");

  } else {
    newArrivals.classList.add("under-rule");
  }
  bestSales.classList.remove("under-rule");
  salesItems.classList.remove("under-rule");
})

bestSales.addEventListener("click", () => {
  newAspect.classList.add("hide");
  bestAspect.classList.remove("hide")
  salesAspect.classList.add("hide");

  if (bestSales.classList.contains("under-rule")) {
    bestSales.classList.remove("under-rule")

  } else {
    bestSales.classList.add("under-rule");
  }
  newArrivals.classList.remove("under-rule");
  salesItems.classList.remove("under-rule");
})

salesItems.addEventListener("click", () => {
  newAspect.classList.add("hide");
  bestAspect.classList.add("hide");
  salesAspect.classList.remove("hide");

  if (salesItems.classList.contains("under-rule")) {
    salesItems.classList.remove("under-rule")
  } else {
    salesItems.classList.add("under-rule");
  }
  bestSales.classList.remove("under-rule");
  newArrivals.classList.remove("under-rule");
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

