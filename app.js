import { auth, onAuthStateChanged, signOut } from "./firebase.js";

//the onauthSC gives the data of user if the user is login then we will put this user into session for logout
// if we dont use this we manually have to get the user


let name = document.getElementById("name")
let email = document.getElementById("email");

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is Login Here's Details", user)
    if (name && email){  //used to overcome error
    name.innerHTML = user.email.slice(0, user.email.indexOf("@"))
    email.innerHTML = user.email;}

    //used for that if user is login then he will be directed to profile page
    if(location.pathname !== "/Profile_ViewCart.html")
    window.location = "/Profile_ViewCart.html"

  } else {
    console.log("User is Logout here's Details", user)
    
    //if not login then he can not directly go to profile page 
    if (window.location.pathname !== "/Login.html"){
    window.location = "/Login.html"
    }

  }
});



let logout = () => {
  signOut(auth).then(() => {
    console.log(" Sign-out successful")
    window.location = "Login.html"
  }).catch((error) => {
    // An error happened.
    console.log("Error:",error)
  });
}


let logoutBtn = document.getElementById("logoutBtn");
if(logoutBtn){
logoutBtn.addEventListener("click", logout);
}