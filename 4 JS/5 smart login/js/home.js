var loggedUserNameSpan = document.getElementById("loggedUserName");

var loggedUserName = JSON.parse(localStorage.getItem("loggedUserName"));

if(!loggedUserName)
    location.assign("../Index.html");

loggedUserNameSpan.innerHTML = loggedUserName;