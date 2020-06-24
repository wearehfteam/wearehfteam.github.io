const questionText = document.querySelector(".question-text");
const inforText = document.querySelector(".infor-text");
const optionBox = document.querySelector(".option-box");
const resultBtn = document.querySelector(".result-btn");
const resultBox = document.querySelector(".result-box");
const showInforBtn = document.querySelector(".more-infor-btn");
const showInforBox = document.querySelector(".flip-container");
const correctAnswerDescription = document.querySelector(".correct-answer-description");
const wrongAnswerDescription = document.querySelector(".wrong-answer-description");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const resetBtn = document.querySelector(".reset-btn");
const hideOptionBox = document.querySelector(".option-box")
const hidePlayBox = document.querySelector(".card-box")
const showOverBox = document.querySelector(".over-box")


let questionIndex = 0;
let questionNumber = 0;
myData = [
  {
    id: 1,
    question: "apple",
    options: ["táo", "cam", "bưởi", "quả dưa hấu"],
    indexAns: 0,
    moreInfo:
      "a round fruit with shiny red or green skin that is fairly hard and white inside",
  },
  {
    id: 2,
    question: "green",
    options: ["xanh lá cây", "màu hồng", "màu đỏ", "màu trắng"],
    indexAns: 0,
    moreInfo:
      "having the colour of grass or the leaves of most plants and trees",
    status: "not answer"
  },
  {
    id: 3,
    question: "cactus",
    options: ["xương rồng", "cây táo", "cây ổi", "cây mận"],
    indexAns: 0,
    moreInfo:
      "a plant that grows in hot dry regions, especially one with thick stems covered in spines but without leaves,",
    status: "not answer"
  },
  {
    id: 4,
    question: "cat",
    options: ["chuột", "mèo"],
    indexAns: 1,
    moreInfo:
      "a small animal with soft fur that people often keep as a pet. Cats catch and kill birds and mice.",
    status: "not answer"
  },
];

function loadQuizPage() {
  questionNumber++
  questionText.innerHTML = myData[questionIndex].question;
  inforText.innerHTML = myData[questionIndex].moreInfo;
  showFourAnswer();
  
};

function showFourAnswer() {
  optionBox.innerHTML = "";
  for (let i = 0; i < myData[questionIndex].options.length; i++) {
    const option = document.createElement("div");
    option.innerHTML = myData[questionIndex].options[i];
    option.classList.add("option");
    option.id = i;
    option.setAttribute("onclick", "checkAnswer(this)");
    optionBox.appendChild(option);
  }
};

function checkAnswer(ele) {
  const id = ele.id;
  if (id == myData[questionIndex].indexAns) {
    ele.classList.add("correct");
    showCorrectAnswerNotification();
    showNextQuestionBtn();
  } else {
    ele.classList.add("wrong");
    showWrongAnswerNotification();
    showNextQuestionBtn();
    for (let i = 0; i < optionBox.children.length; i++) {
      if (optionBox.children[i].id == myData[questionIndex].indexAns) {
        optionBox.children[i].classList.add("show-correct");
      }
    }
  }
  disableOptions();
  if(questionNumber == myData.length){
    showOuizOverBox()
  }
};


function showWrongAnswerNotification() {
  wrongAnswerDescription.classList.add("show");
};

function hideWrongAnswerNotification() {
  correctAnswerDescription.classList.remove("show");
};

function showCorrectAnswerNotification() {
  correctAnswerDescription.classList.add("show");
};

function hideCorrectAnswerNotification() {
  wrongAnswerDescription.classList.remove("show");
};

function hideMoreInfor() {
  showInforBox.classList.remove("hover");
};

function hideResultBox() {
  resultBox.classList.remove("show-result-box");
};

function disableOptions() {
  for (let i = 0; i < optionBox.children.length; i++) {
    optionBox.children[i].removeAttribute("onclick");
  };
};

function showNextQuestionBtn(){
  nextQuestionBtn.classList.remove("show");
};

function hideNextQuestionBtn(){
  nextQuestionBtn.classList.add("show");
};


function showOuizOverBox(){
  hidePlayBox.classList.add("show-card-box");
  showOverBox.classList.remove("show-over-box")
}
function hideQuizOverBox(){
  hidePlayBox.classList.remove("show-card-box");
  showOverBox.classList.add("show-over-box")
}




//button nextquestion

nextQuestionBtn.addEventListener("click", nextQuestion);

function nextQuestion() {
  questionIndex++;
  loadQuizPage();
  hideMoreInfor();
  hideCorrectAnswerNotification();
  hideWrongAnswerNotification();
  hideNextQuestionBtn();
  
};

// button reset
resetBtn.addEventListener("click", resetAll);

function resetAll() {
  
  questionIndex = 0;
  questionNumber = 0
  hideQuizOverBox()
  loadQuizPage();
  hideResultBox();
  hideMoreInfor();
  hideCorrectAnswerNotification();
  hideWrongAnswerNotification();
  hideNextQuestionBtn();
};

// button result
resultBtn.addEventListener("click", showResult);

function showResult() {
  resultBox.classList.toggle("show-result-box");
};

// button more infor
showInforBtn.addEventListener("click", showInfor);

function showInfor() {
  showInforBox.classList.toggle("hover");
};

window.onload = () => {
  loadQuizPage();
};


async function fetchData(category) {
  var res = await fetch(`http::/localhost:3000/questions/\$(category)`);
  var data = await res.json();
  await console.log(data);
};

fetchData(1);
