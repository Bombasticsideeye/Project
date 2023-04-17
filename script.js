function validate(){
var username = document.getElementById("name").value;
var password = document.getElementById("pass").value;
var text = "Failed, please enter username and password"
var textsuc = "Successfully, logged in"

if (username == "" && password == "") {
  document.getElementById("logintext").innerHTML=text;
   console.log(false);
}

else if (username == username && password == "") {
  document.getElementById("logintext").innerHTML=text;
   console.log(false);
}

else if (username == "" && password == password) {
  document.getElementById("logintext").innerHTML=text;
   console.log(false);
}

else {
    document.getElementById("logintext").innerHTML=textsuc;
    console.log(true)
}
}

function showpass() {
    var show = document.getElementById("pass");
  if (show.type === "password") {
    show.type = "text";
  } else {
    show.type = "password";
  }
}
