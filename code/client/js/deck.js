let apiHost = "https://flashcardapiserver.herokuapp.com";

async function fetchData() {
  var res = await fetch(`${apiHost}/decks`);
  var data = await res.json();

  var deck = document.querySelector(".deck");
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
            <a href="https://google.com/${dt.id}">
                <div class="flip-card-front">
                    <img lass="flip-card-front" src="${dt.image}" alt="Avatar"
                        style="width:300px;height:300px;border-radius: 50%;">
                </div>
                <div class="flip-card-back">
                    <h1 id = "name" style="margin-top: 40%">${dt.name}</h1>
                </div>
            </a>
            </div>
        </div>`;
  });
}

fetchData();
