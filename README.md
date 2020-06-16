# Flash Card 
### Change directory to something following:
pwd : ......../flashcard

### Run 2 commands in terminal/powershell v.v
```
cd docker
docker-compose up
```

### Open browser and type localhost:3000
* If it has some contents, running succeeds

* Try to change url to localhost:3000/account

### Open Chrome Debugging and paste the following code, if you get some responses, you succeeds:
```javascript
fetch('http://localhost:3000/account')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));
```
