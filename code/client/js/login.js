const btn = document.getElementById("btn_signin");

btn.addEventListener("click", async function (event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {},
    "Content-Type": "application/json;charset=utf-8",
    body: { username: username, password: password },
  })
    .then((response) => response.json())
    .then((res) => console.log(res));
});
