const login = document.querySelector("#loginBtn");
const signup = document.querySelector("#signUpBtn");
const loginPart = document.getElementById("logInForm");
const signUpPart = document.getElementById("signUpForm")

login.addEventListener("click",function(){
    loginPart.style.display = "block";
    signUpPart.style.display = "none";
    login.classList.add("under-rule");
    signup.classList.remove("under-rule");
})

signup.addEventListener("click", function () {
    loginPart.style.display = "none";
    signUpPart.style.display= "block";
    login.classList.remove("under-rule");
    signup.classList.add("under-rule");
})