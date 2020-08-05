import apiHost from "./apiHost.js";

const btn = document.getElementById("btn_signin");

function isTrue(res) {
  let username = document.getElementById("username").value;
  if (res.message === "Login success!") {
    window.sessionStorage.setItem("username", username);
    window.location.href = "deck.html";
  } else {
    alert("Failure!");
  }
}

btn.addEventListener("click", async function (event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  fetch(`${apiHost}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ username: username, password: password }),
  })
    .then((response) => response.json())
    .then((res) => isTrue(res));
});
