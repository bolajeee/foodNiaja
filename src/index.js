const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

let slides = document.getElementById("descriptionText");
let slidesR = document.getElementById("reviewAspect");
let slideF = document.getElementById("reviewForm");

let slideIndex = 1;
showSlides(slideIndex);



burger.addEventListener("click",function(){
    if(menu.classList.contains("hidden", )){
        menu.classList.remove("hidden", );

    } else{
        menu.classList.add("hidden", );
    }
});

description.addEventListener("click", () =>{
    slidesR.style.display = "none";
    slideF.style.display = "none"
    slides.style.display = "block"
    this.classList.add("underline");
})
    

review.addEventListener("click", () =>{
     slidesR.style.display = "block";
         slides.style.display = "none";
    slideF.style.display = "block";
})

function showSlides(n) {
    let i;
    let Slide = document.getElementById("mySlides");
    if (n > Slide.length){
        slideIndex = 1
    }if(n < 1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
     slides[slideIndex - 1].style.display = "block";
     dots[slideIndex - 1].className += " active";
}

let newArrivals = document.getElementById("newArrivals");
let bestSales = document.getElementById("bestSales");
let salesItems = document.getElementById("salesItems");

newArrivals.addEventListener("click", () =>{
    newArrivals.style.display ="block";
    bestSales.style.display = "none";
    salesItems.style.display = "none"
})

bestSales.addEventListener("click", ()=>{
        newArrivals.style.display = "none";
        bestSales.style.display = "block";
        salesItems.style.display = "none";
})

salesItems.addEventListener("click", ()=>{
       newArrivals.style.display = "none";
        bestSales.style.display = "none";
        salesItems.style.display = "block";
})