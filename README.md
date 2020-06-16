pwd : ......../flashcard

cd docker
docker-compose up

fetch('http://localhost:3000/account')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));
