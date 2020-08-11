# Flash Card

---

FlashCards are a time tested technique used by students to review and test their knowledge on a particular subject.

This app is based on a knowledge base of questions and answers about a particular subject and randomly displays a card with the question and multiple answers. The objective is for the user to select the correct answer(s).

### Techstack

---

- HTML
- CSS
- Javascript

##### 1. Build with

- Docker
- Docker Compose

##### 2. Database

- MySQL 8

##### 3. Deploy

- Github Pages
- Heroku

## Feature

---

- A lot of decks with lots of several exciting topics.
- Answer question in a single card, that randomly picked from a deck.
- See tallies of correct and incorrect answers, reset them or shuffle to re-randomize the deck.
- See plenty of interesting hints.
- Learning tons of kickass vocabulary.

## Installation

## Prerequisites

---

- nodejs
- Docker

---

Change the path to something following:

```
pwd: .../flashcard
```

You have to run docker to start environment for coding. It has two containers that running and composing with Docker Compose. They are MySql container and a node js container for running server.

##### 1. Run docker

Use a terminal or powershell.

```
cd /docker
docker-compose up
```

##### 2. Coding.

```
cd /code
```

All codes is in this folder. It includes two parts: client and server.

## Tests

After booting docker, you must ensure that they run in successful before start coding.

---

#### 1. Run 2 commands in terminal/powershell etc.

```
cd docker
docker-compose up
```

#### 2. Open your browser and type localhost:3000

- If it has some contents, running succeeds.
- Try to change url to localhost:3000/account

##### Open Chrome Debugging and paste the following code, if you get some responses, you succeeds:

```javascript
fetch('http://localhost:3000/questions')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
```

## Usage

---

##### 1. Run docker

```
cd /docker
docker-compose up
```

##### 2. Play game

home.html is home page of game, open it to play the game!

```
cd /code/client
open file home.html
```

## Credits

---

- [Flashcards](http://https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/FlashCards-App.md)

## License

---

Copyright :copyright: HF Team
