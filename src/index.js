const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

let slides = document.getElementById("descriptionText");
let slidesR = document.getElementById("reviewAspect");


burger.addEventListener("click",function(){
    if(menu.classList.contains("hidden", )){
        menu.classList.remove("hidden", );

    } else{
        menu.classList.add("hidden", );
    }
});

description.addEventListener("click", () =>{
    slidesR.style.display = "none";
    slides.style.display = "block"
})
    

review.addEventListener("click", () =>{
     slidesR.style.display = "block";
         slides.style.display = "none";
})





