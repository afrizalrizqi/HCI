const inputText = document.getElementById("inputText")
const inputEmail = document.getElementById("inputEmail")
const inputPassword = document.getElementById("inputPassword")
const confirmPassword = document.getElementById("confirmPassword")
const inputAge = document.getElementById("inputAge")
const checkbox = document.getElementById("checkbox")
const register = document.getElementById("register")
const divError = document.getElementById("divError")

register.addEventListener("click", (event)=>{
    event.preventDefault();

    var errorText = ""

    // validasi name
    const name = inputText.value
    if(!name){
        alert("Please enter your name")
        errorText = " "
    }

    // validasi email harus gmail
    const email = inputEmail.value
    //jika yang diinput hanya @gmail.com
    if(email == "@gmail.com"){
        alert("Email can't be just @gmail.com")
        errorText = " "
    }
    //jika email yang diinput bukan @gmail.com dan panjangnya kurang dari 10 atau kurang dari panjang dari @gmail.com maka akan muncul alert
    else if(!email.includes("@gmail.com") || email.length <= 10){
        alert("The email used must be a gmail account")
        errorText = " "
    }

    const pass = inputPassword.value
    if(pass.length < 8){
        alert("Password must consist of 8 characters")
        errorText = " "
    }

    const confirmPass = confirmPassword.value
    if(confirmPass != pass){
        alert("The password don't match")
        errorText = " "
    }

    const age = inputAge.value
    if(age < 18){
        alert("Minimum age of 18 years")
        errorText = " "
    }


    const check = checkbox.checked
    if(!check){
        alert("You must agree to the terms first")
        errorText = " "
    }

    if(errorText == ""){
        alert("Successful registration")
    }

    divError.innerText = errorText
})