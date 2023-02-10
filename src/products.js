let newAspect = document.getElementById("newAspect");
let bestAspect = document.getElementById("bestAspect");
let salesAspect = document.getElementById("salesAspect");


newArrivals.addEventListener("click", ()=>{
     bestAspect.classList.add("hidden");
     salesAspect.classList.add("hidden");
     if(newArrivals.classList.contains("underline")){
           newArrivals.classList.remove("underline");
          
}else{
  newArrivals.classList.add("underline");
}
    bestSales.classList.remove("underline");
    salesItems.classList.remove("underline");
}) 

bestSales.addEventListener("click", ()=>{
        newAspect.classList.add("hidden");
        bestAspect.classList.remove("hidden");
        salesAspect.classList.add("hidden");

            if(bestSales.classList.contains("underline")){
      bestSales.classList.remove("underline")

}else{
  bestSales.classList.add("underline");}
    newArrivals.classList.remove("underline");
    salesItems.classList.remove("underline");
})

salesItems.addEventListener("click", ()=>{
        newAspect.classList.add("hidden");
        bestAspect.classList.add("hidden");
        salesAspect.classList.remove("hidden");
        
            if(salesItems.classList.contains("underline")){
      salesItems.classList.remove("underline")
}else{
  salesItems.classList.add("underline");}
    bestSales.classList.remove("underline");
    newArrivals.classList.remove("underline");
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

