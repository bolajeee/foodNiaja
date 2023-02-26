const payment = document.getElementById("Payment");
const payText = document.getElementById("payText")
const buyBtn = document.getElementById("buyBtn");

payment.addEventListener("click",function(){
 payText.style.display ="block"
})

buyBtn.addEventListener("click",function(){
    this.innerHTML = "Thank you for your purchase";
    this.classList.remove("bg-gray-700");
    this.classList.add("text-gray-800")
})