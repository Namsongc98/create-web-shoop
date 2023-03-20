// phần sign
let listSignIn = JSON.parse(localStorage.getItem("listSignIn"));
function impClick(e) {
    e.preventDefault(e)
    let inputEmail = document.getElementById('signIn__email-input').value;
    let inputPassword = document.getElementById('signIn__password-input').value;
    itemSignIn = {
        email: inputEmail,
        password: inputPassword,
    }
    if (listSignIn == null) {
        listSignIn = [];
        listSignIn.push(itemSignIn)
        localStorage.setItem("listSignIn", JSON.stringify(listSignIn))
    } else {
        listSignIn.push(itemSignIn)
        localStorage.setItem("listSignIn", JSON.stringify(listSignIn))
    }
    document.getElementById('signIn__email-input').value = "";
    document.getElementById('signIn__password-input').value = "";
}
let count = 0;
function eyeSignIn() {
    count++;
    let eyeSignIn = document.getElementById("eye-signIn");
    let signInPass = document.getElementById("signIn__password-input");
    if (count == 1) {
        signInPass.type = "text";  
        eyeSignIn.classList.add("fa-eye");
        
    } else if(count == 2) {
        console.log("ugytft")
        signInPass.type = "password";
        eyeSignIn.classList.remove("fa-eye");
        count = 0;
    }
}




// phần đăng ký
let listSignUp = JSON.parse(localStorage.getItem("listSignUp"))
function SignUp(e) {
    e.preventDefault(e);
    let itemFistname = document.getElementById("fistName").value;
    let itemLastname = document.getElementById("lastName").value;
    let itemEmail = document.getElementById("signUp__email-input").value;
    let itemPassword = document.getElementById("signUp__password-input").value;
    let itemSignUp = {
        fistName: itemFistname,
        lastName: itemLastname,
        userEmail: itemEmail,
        userGmail: itemPassword,
    }
    if (listSignUp == null) {
        listSignUp = [],
            listSignUp.push(itemSignUp)
        localStorage.setItem("listSignUp", JSON.stringify(listSignUp))
    } else {
        listSignUp.push(itemSignUp)
        localStorage.setItem("listSignUp", JSON.stringify(listSignUp))
    }
    document.getElementById("fistName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("signUp__email-input").value = "";
    document.getElementById("signUp__password-input").value = "";
}
function ImsignUp() {
    count++;
    let eyeSignIn = document.getElementById("eye-signUp");
    let signInPass = document.getElementById("signUp__password-input");
    if (count == 1) {
        signInPass.type = "text";  
        eyeSignIn.classList.add("fa-eye");
        
    } else if(count == 2) {
        console.log("ugytft")
        signInPass.type = "password";
        eyeSignIn.classList.remove("fa-eye");
        count = 0;
    }
}