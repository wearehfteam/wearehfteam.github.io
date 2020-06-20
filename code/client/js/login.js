import firebase from "./firebase.js";
const btn = document.getElementById("btn_signin");
const btnSignUp = document.getElementById("btn_signup");
const error = document.getElementById("error");
var li = document.createElement("p");
btn.addEventListener("click", function (event) {
  event.preventDefault();
});
var validation = (username, email, password, confirmPassword) => {
  if (
    username === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    var textNode = document.createTextNode("Please enter valid value");
    li.appendChild(textNode);
    error.appendChild(li);
    return;
  } else {
    if (password.length < 6) {
      var textNode = document.createTextNode(
        "Please enter password longger than 6"
      );
      li.appendChild(textNode);
      error.appendChild(li);
      return;
    }
    if (password !== confirmPassword) {
      var textNode = document.createTextNode("Password dont match");
      li.appendChild(textNode);
      error.appendChild(li);
      return;
    }
  }
  return true;
};
btnSignUp.addEventListener("click", async function (event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var email = document.getElementById("email_signup").value;
  var password = document.getElementById("password_signup").value;
  var confirmPassword = document.getElementById("confirm_password").value;

  if (validation(username, email, password, confirmPassword) == true) {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email.toString(), password.toString())
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.error(err);
      });
  }
});
btn.addEventListener("click", async function (event) {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ||
    password !== ""
  )
    await firebase
      .auth()
      .signInWithEmailAndPassword(email.toString(), password.toString())
      .then((res) => console.log(res))
      .catch((err) => {
        console.error(err);
      });
  else {
    console.log("email false");
  }
});
