const questionText             = document.querySelector(".question-text");
const inforText                = document.querySelector(".infor-text");
const optionBox                = document.querySelector(".option-box");
const resultBtn                = document.querySelector(".result-btn");
const resultBox                = document.querySelector(".result-box");
const showInforBtn             = document.querySelector(".more-infor-btn");
const showInforBox             = document.querySelector(".flip-container");
const correctAnswerDescription = document.querySelector(".correct-answer-description");
const wrongAnswerDescription   = document.querySelector(".wrong-answer-description");
const nextQuestionBtn          = document.querySelector(".next-question-btn");
const resetBtn                 = document.querySelector(".reset-btn");

let questionIndex = 0;
var category      = 1;
var myData        = null;


function getRandAnsFromList(listAnswers, answer, index) {
	var answers = listAnswers
		.filter(ques => ques.vietnamese !== answer)
	answers = answers.sort(() => Math.random() - Math.random()).slice(0, 4);
	answers.sort(() => Math.random() - Math.random());
	answers[index] = answer;
	return answers;
}

async function fetchData(category) {
	try {
		let response    = await fetch(`http://localhost:3000/questions/${category}`)
		let oriData     = await response.json();
		let listAnswers = oriData.map(ques => ques.vietnamese);
		var questions   = await oriData.map(ques => {
			var randIndex = Math.floor(Math.random() * 4);
			return {
				id      : ques.id,
				question: ques.english,
				moreInfo: ques.info,
				indexAns: randIndex,
				options : getRandAnsFromList(listAnswers, ques.vietnamese, randIndex)
			}
		})
	} catch (error) {
		console.log("Error in fetching data");
		console.log(error);
	}
	return questions
}

async function loadQuizPage() {
	await fetchData(category).then(data => {
		myData = data;
	})
	questionText.innerHTML = myData[questionIndex].question;
	inforText.innerHTML    = myData[questionIndex].moreInfo;
	showFourAnswer();
};

function showFourAnswer() {
	optionBox.innerHTML = "";
	for (let i = 0; i < myData[questionIndex].options.length; i++) {
		const option           = document.createElement("div");
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

function showNextQuestionBtn() {
	nextQuestionBtn.classList.remove("show");
};

function hideNextQuestionBtn() {
	nextQuestionBtn.classList.add("show");
};

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