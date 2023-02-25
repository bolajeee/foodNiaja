const burgerIcon = document.querySelector("#burger");
const menuIcon = document.querySelector("#menu");


burgerIcon.addEventListener("click",function(){
    if(menuIcon.classList.contains("hidden", )){
        menuIcon.classList.remove("hidden", );

    } else{
        menuIcon.classList.add("hidden", );
    }
});

