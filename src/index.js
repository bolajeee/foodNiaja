const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
// const learnMore = document.querySelectorAll(".loadMore");
// const moreText = document.querySelectorAll(".moreText");

burger.addEventListener("click",function(){
    if(menu.classList.contains("hidden", )){
        menu.classList.remove("hidden", );

    } else{
        menu.classList.add("hidden", );
    }
});

// loadMore.addEventListener("click",() => {
//     let loadMore = [ ];

// for (let i = 0; i <= loadMore.length; learnMore++) {
//        if (moreText.classList.contains("hidden")) {
//          moreText.classList.remove("hidden");
//        } else {
//          moreText.classList.add("hidden");
//        }
// }
// })
