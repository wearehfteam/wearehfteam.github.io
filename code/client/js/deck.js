let apiHost = "https://flashcardapiserver.herokuapp.com";

async function fetchData() {
  var res = await fetch(`${apiHost}/decks`);
  var data = await res.json();

  var deck = document.querySelector(".deck");
<<<<<<< HEAD
  var card = document.querySelector(".flip-card");

  var name = document.querySelector(".flip-card-back");
  var image = document.querySelector(".flip-card-front");

  console.log(data[0]);

  data.map((dt) => {
    // const card = document.createElement("div");
    // card.classList.add("flip-card");

    // const card_inner = document.createElement("div");
    // carcard_inner.classList.add("flip-card-inner");

    // option.setAttribute("onclick", "check(this)");
    // optionBox.appendChild(option);
    // image.src = dt.image;
    // name.innerHTML =  dt.name;

    deck.innerHTML += `
        <div class="flip-card">
            <div class="flip-card-inner">
              <img src="${dt.image}" alt="Avatar">
             <div class="text">  <p>${dt.id}.${dt.name}</p>
            </div>
        </div>`;
=======
  
  data.map((dt) => {
    let flipCard = document.createElement("div");
    flipCard.classList.add("flip-card");

    flipCard.addEventListener("click", (e) => {
      e.preventDefault();
      window.sessionStorage.setItem("deckid", dt.id);
      window.location.href = `questions.html`;
    });

    flipCard.innerHTML += `
            <div class="flip-card-inner">
              <img src="${dt.image}" alt="Avatar">
             <div class="text">  <p>${dt.id}.${dt.name}</p></div>
            </div>`;
    deck.appendChild(flipCard);
>>>>>>> 67d2fca... add secsion, add score and fix deck page
  });
}
if (!window.sessionStorage.getItem("username")) {
  window.location.href = "login.html";
}
fetchData();