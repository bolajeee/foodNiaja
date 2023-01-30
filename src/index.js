const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

let slides = document.getElementById("descriptionText");
let slidesR = document.getElementById("reviewAspect");
let slideF = document.getElementById("reviewForm");


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





