//Import the Functions from our firebase file
import { auth , createUserWithEmailAndPassword } from "./firebase.js"


let register = () => {
    const Username = document.getElementById("Username")
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    console.log("details:", Username.value, email.value, password.value,)


    
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log("user signedup", user)
            alert("New Account Created!\nPlease Login Now")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("error:", error)
            alert(`Something Went Wrong!\nError:${errorMessage}`)

        });

}

let SignUp_Btn = document.getElementById("signup_btn");
SignUp_Btn.addEventListener("click", register)




// We can not create Login and Signup in Same Js bcz, when we will on signup page then the js(sign+login) will also read
// and get login and apply addEventListener but we dont have login in signup page then how js will get login thats 
// why use seperate files 
// Ethier you may put if cond on login and sign on respective pages like
// if (SignUp_Btn){
//     SignUp_Btn.addEventListener   In the Login Page
// }




// let login = () => {
//     const email = document.getElementById("email")
//     const password = document.getElementById("password")
//     console.log("details",email.value,password.value)


//     const auth = getAuth();
//     signInWithEmailAndPassword(auth, email.value, password.value)
//         .then((userCredential) => {
//             // Signed in 
//             const user = userCredential.user;
//             console.log("Sucessful")
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//         });
// }


// let login_btn = document.getElementById("login_btn")
// login_btn.addEventListener("click", login)