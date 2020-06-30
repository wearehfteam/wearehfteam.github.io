async function fetchData() {
  var res = await fetch("http://localhost:3000/decks");
  var data = await res.json();

  var deck = document.querySelector(".deck");
  // var card = document.querySelector(".flip-card");

  // var name = document.querySelector(".flip-card-back");
  // var image = document.querySelector(".flip-card-front");
  data.map((dt) => {
    deck.innerHTML += `
         <a href="questions.html?${dt.id}">
        <div class="flip-card">
            <div class="flip-card-inner">
              <img src="${dt.image}" alt="Avatar">
             <div class="text">  <p>${dt.id}.${dt.name}</p>
            </div>
        </div>
           </a>`;
  });
}

fetchData();
