//Import the Functions from our firebase file
import { auth, signInWithEmailAndPassword } from "./firebase.js"

let login = () => {
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    console.log("details", email.value, password.value)


    // const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("Login Successful")
        })
        .catch((error) => {
            alert("Invalid Login Credentials \n Or Register Yourself If you dont have Account")
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}


let login_btn = document.getElementById("login_btn")
login_btn.addEventListener("click", login)