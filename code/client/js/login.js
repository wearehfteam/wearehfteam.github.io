const btn = document.getElementById("btn_signin");

let apiHost = "https://flashcardapiserver.herokuapp.com";

function isTrue(res) {
  if (res.message === "Login success!") {
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
