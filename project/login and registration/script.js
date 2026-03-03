function register(){

let username =
document.getElementById("username").value;

let password =
document.getElementById("password").value;

if(username=="" || password==""){
document.getElementById("message").innerText="Fill all fields";
return;
}

localStorage.setItem(
username,
password
);

document.getElementById("message").innerText=
"Registered Successfully!";
}

function login(){

let username =
document.getElementById("username").value;

let password =
document.getElementById("password").value;

let storedPassword =
localStorage.getItem(username);

if(storedPassword === password){
localStorage.setItem("loggedInUser",username);
window.location="dashboard.html";
}else{
document.getElementById("message").innerText=
"Invalid Credentials";
}
}
