let apiHost = "https://flashcardapiserver.herokuapp.com";

async function fetchData() {
  var res = await fetch(`${apiHost}/decks`);
  var data = await res.json();

  var deck = document.querySelector(".deck");
  
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

  });
}
if (!window.sessionStorage.getItem("username")) {
  window.location.href = "login.html";
}
fetchData();