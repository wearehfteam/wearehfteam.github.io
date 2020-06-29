const btnSignup = document.getElementById("btn_signup");
function isMatchPassword(password, confirmPassword) {
  return (
    password !== confirmPassword || password === "" || confirmPassword === ""
  );
}
function isTrue(res) {
  if (res.message === "Insert success!") {
    window.location.href = "deck.html";
  } else {
    alert("Failure!");
  }
}
btnSignup.addEventListener("click", async function (event) {
  event.preventDefault();
  var username = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  if (!isMatchPassword(password, confirmPassword)) {
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },

      body: JSON.stringify({ username: username, password: password }),
    })
      .then((response) => response.json())
      .then((res) => isTrue(res));
  } else {
    alert("Password dont match or null !");
  }
});
