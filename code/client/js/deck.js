
async function fetchData() {

    var res = await fetch("http://localhost:3000/decks")
    var data = await res.json();

    var  deck = document.querySelector(".deck");
    var  card = document.querySelector(".flip-card");
   

    var  name = document.querySelector(".flip-card-back");
    var  image = document.querySelector(".flip-card-front");
    
    console.log(data[0]);
    
    data.map(dt =>{
    

        deck.innerHTML+=`
        <div class="flip-card">
            <div class="flip-card-inner">
            <a href="questions.html?${dt.id}">
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
    })
}


fetchData();