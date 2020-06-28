const QUESTION_TEXT = document.querySelector('.question-text');
const MORE_INFOR_TEXT = document.querySelector('.infor-text');

const OPTIONS_BOX = document.querySelector('.option-box');
const RESULT_BOX = document.querySelector('.result-box');
const SHOW_MORE_INFOR_BOX = document.querySelector('.flip-container');
const HIDE_OPTION_BOX = document.querySelector('.option-box');
const HIDE_PLAY_BOX = document.querySelector('.card-box');
const SHOW_OVER_BOX = document.querySelector('.over-box');

const NEXT_QUESTION_BTN = document.querySelector('.next-question-btn');

const RESULT_BTN = document.querySelector('.result-btn');
const RESET_BTN = document.querySelector('.reset-btn');
const SHOW_MORE_INFOR_BTN = document.querySelector('.more-infor-btn');

const CORRECT_ANSWER_DESCRIPTION = document.querySelector(
  '.correct-answer-description'
);
const WRONG_ANSWER_DESCRIPTION = document.querySelector(
  '.wrong-answer-description'
);

let category = 1;
let listOfQuestions = [];
let questionIndex = 0;
let questionNumber = 0;

let getRandAnsFromList = (listAnswers, answer, index) => {
  let answers = listAnswers.filter((ques) => ques !== answer);
  answers = answers.sort(() => Math.random() - Math.random()).slice(0, 4);
  answers.sort(() => Math.random() - Math.random());
  answers[index] = answer;
  return answers;
};

let fetchListOfQuestions = async (category = 1) => {
  let listOfQuestions = [];
  try {
    let response = await fetch(`http://localhost:3000/questions/${category}`);
    let oriData = await response.json();
    let listAnswers = oriData.map((ques) => ques.vietnamese);

    listOfQuestions = await oriData.map((ques) => {
      let randIndex = Math.floor(Math.random() * 4);
      return {
        id: ques.id,
        question: ques.english,
        options: getRandAnsFromList(listAnswers, ques.vietnamese, randIndex),
        indexAns: randIndex,
        moreInfo: ques.info,
        status: 'not answer'
      };
    });
  } catch (error) {
    console.log('Error in fetching data');
    console.log(error);
  }

  return listOfQuestions;
};

let createNewQuestion = () => {
  questionNumber++;
  QUESTION_TEXT.innerHTML = listOfQuestions[questionIndex].question;
  MORE_INFOR_TEXT.innerHTML = listOfQuestions[questionIndex].moreInfo;
  createFourOptions();
};

let createFourOptions = () => {
  OPTIONS_BOX.innerHTML = '';
  for (let i = 0; i < listOfQuestions[questionIndex].options.length; i++) {
    const option = document.createElement('div');
    option.innerHTML = listOfQuestions[questionIndex].options[i];
    option.classList.add('option');
    option.id = i;
    option.setAttribute('onclick', 'checkAnswering(this)');
    OPTIONS_BOX.appendChild(option);
  }
};

let creatAnswersForResultBox = () => {
  listOfQuestions.forEach((question, index) => {
    let answerDiv = document.createElement('div');
    let contentDiv = document.createElement('p');
    let iconDiv = document.createElement('i');

    answerDiv.innerHTML = `${index + 1}. ${question.question}`;

    answerDiv.classList.add('answer');
    iconDiv.classList.add('fas', 'fa-question');
    // fas fa-times
    // fas fa-question

    answerDiv.appendChild(contentDiv);
    answerDiv.append(iconDiv);

    RESULT_BOX.appendChild(answerDiv);
  });
};

let saveQuestionStatus = (status = 'not answer') => {
  listOfQuestions[questionIndex].status = status;
};

let checkAnswering = (chosenOption) => {
  const id = chosenOption.id;
  let status = 'not answer';

  if (id == listOfQuestions[questionIndex].indexAns) {
    chosenOption.classList.add('correct');
    showCorrectAnswerNotification();

    status = 'true';
  } else {
    chosenOption.classList.add('wrong');
    showWrongAnswerNotification();

    status = 'false';

    // show true answer for user after he/she chose
    const indexAns = listOfQuestions[questionIndex].indexAns;
    OPTIONS_BOX.children[indexAns].classList.add('show-correct');
  }

  saveQuestionStatus(status);
  disableAnsweringQuestion();

  showNextQuestionBtn();

  if (questionNumber == listOfQuestions.length) {
    showOuizOverBox();
  }
};

let showWrongAnswerNotification = () => {
  WRONG_ANSWER_DESCRIPTION.classList.add('show');
};

let showCorrectAnswerNotification = () => {
  CORRECT_ANSWER_DESCRIPTION.classList.add('show');
};

let hideAnswerNotifications = () => {
  CORRECT_ANSWER_DESCRIPTION.classList.remove('show');
  WRONG_ANSWER_DESCRIPTION.classList.remove('show');
};

let hideMoreInfor = () => {
  SHOW_MORE_INFOR_BOX.classList.remove('hover');
};

let hideResultBox = () => {
  RESULT_BOX.classList.remove('show-result-box');
};

let disableAnsweringQuestion = () => {
  for (let i = 0; i < OPTIONS_BOX.children.length; i++) {
    OPTIONS_BOX.children[i].removeAttribute('onclick');
  }
};

let showNextQuestionBtn = () => {
  NEXT_QUESTION_BTN.classList.remove('show');
};

let hideNextQuestionBtn = () => {
  NEXT_QUESTION_BTN.classList.add('show');
};

let showOuizOverBox = () => {
  HIDE_PLAY_BOX.classList.add('show-card-box');
  SHOW_OVER_BOX.classList.remove('show-over-box');
};

let hideQuizOverBox = () => {
  HIDE_PLAY_BOX.classList.remove('show-card-box');
  SHOW_OVER_BOX.classList.add('show-over-box');
};

NEXT_QUESTION_BTN.addEventListener('click', () => {
  questionIndex++;
  createNewQuestion();
  hideMoreInfor();
  hideAnswerNotifications();
  hideNextQuestionBtn();
});

RESET_BTN.addEventListener('click', () => {
  questionIndex = 0;
  questionNumber = 0;
  hideQuizOverBox();
  createNewQuestion();
  hideResultBox();
  hideMoreInfor();
  hideAnswerNotifications();
  hideNextQuestionBtn();
});

RESULT_BTN.addEventListener('click', () => {
  RESULT_BOX.classList.toggle('show-result-box');
});

SHOW_MORE_INFOR_BTN.addEventListener('click', () => {
  SHOW_MORE_INFOR_BOX.classList.toggle('hover');
  console.log('hello');
});

let shuffle = function (question) {
  newQuestion = [];
  while (question.length) {
    indx = parseInt((Math.random() * 1000) % question.length);
    newQuestion.push(question[indx]);
    question.splice(indx, 1);
    console.log(indx);
  }
  console.log(newQuestion);
  return newQuestion;
};

window.onload = () => {
  fetchListOfQuestions(category).then((data) => {
    listOfQuestions = data;
    createNewQuestion();
    creatAnswersForResultBox();
  });
};
