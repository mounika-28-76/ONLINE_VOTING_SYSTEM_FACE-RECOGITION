// Start voting
function startVoting(){
window.location.href="aadhaar.html";
}

// Open admin login
function openAdmin(){
window.location.href="admin_login.html";
}

// Logout
function logout(){
localStorage.clear();
window.location.href="index.html";
}

// Submit vote
function submitVote(){

let candidate=document.querySelector('input[name="candidate"]:checked');

if(!candidate){
alert("Please select a candidate");
return;
}

// Get vote data
let votes=JSON.parse(localStorage.getItem("votes")) || {A:0,B:0,C:0};

// Increase vote
votes[candidate.value]++;

// Save vote
localStorage.setItem("votes",JSON.stringify(votes));

// Redirect
window.location.href="success.html";

}

// Load results for admin dashboard
function loadResults(){

let votes=JSON.parse(localStorage.getItem("votes")) || {A:0,B:0,C:0};

let A=document.getElementById("A");
let B=document.getElementById("B");
let C=document.getElementById("C");

if(A) A.innerHTML=votes.A;
if(B) B.innerHTML=votes.B;
if(C) C.innerHTML=votes.C;

}

// Admin login
function adminLogin(){

let username=document.getElementById("username").value;
let password=document.getElementById("password").value;

if(username==="admin" && password==="admin123"){
window.location.href="admin_dashboard.html";
}
else{
alert("Invalid Login");
}

}
