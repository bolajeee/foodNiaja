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

// timer
const days = document.getElementById("days");
const hrs = document.getElementById("hrs");
const mins = document.getElementById("mins");
const secs = document.getElementById("secs");

 const newTime = new Date("Jan 5, 2024 15:37:25").getTime;

 function countdownTimer(){
  const now = new Date().getTime();
  const diff = newTime - now;

   let d = Math.floor(diff / (1000 * 60 * 60 * 24));
   let h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)  );
   let m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
   let s = Math.floor((diff % (1000 * 60)) / 1000);


   console.log(d)
   days.innerText = d;
   hrs.innerText = h;
   mins.innerText = m;
   secs.innerText = s;

    if (diff < 0) {
      clearInterval(countdownTimer);
      document.getElementById("time").innerHTML = "EXPIRED";
    }
}
setInterval(countdownTimer,1000);
