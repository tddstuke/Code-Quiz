var startButtonEl = document.querySelector("#start-btn");
var pageContentEl = document.querySelector("#page-content");
var btnDivEl = document.querySelector("#btn-div");
var setOneDivEl = document.querySelector(".content");
var actionDivEl = document.querySelector("#action-div");

var QuizQuestions = function () {
  var setOneDivEl = document.querySelector(".content");
  setOneDivEl.remove();

  var setOneDivEl = document.createElement("div");
  setOneDivEl.classList.add("content", "questions");

  var setOneH1El = document.createElement("h1");
  setOneH1El.textContent = "Commonly used data types DO NOT include:";

  var button1El = document.createElement("button");
  var button2El = document.createElement("button");
  var button3El = document.createElement("button");
  var button4El = document.createElement("button");

  var btnDivEl = document.createElement("div");
  btnDivEl.className = "btn-div";

  button1El.textContent = "1.Strings";
  button1El.id = "false";
  button2El.textContent = "2.Boolean";
  button2El.id = "false";
  button3El.textContent = "3.Alerts";
  button3El.id = "correct";
  button4El.textContent = "4.Numbers";
  button4El.id = "false";

  var actionDivEl = document.querySelector("#action-div");

  actionDivEl.appendChild(setOneDivEl);
  setOneDivEl.append(setOneH1El, btnDivEl);
  btnDivEl.append(button1El, button2El, button3El, button4El);

  btnDivEl.addEventListener("click", answerClick);

  if (answerClick === "correct") {
    console.log("correct2");
    QuizQuestionsTwo();
  }
};

var QuizQuestionsTwo = function () {
  var setOneDivEl = document.querySelector(".content");
  setOneDivEl.remove();

  var setOneDivEl = document.createElement("div");
  setOneDivEl.classList.add("content", "questions");

  var setOneH1El = document.createElement("h1");
  setOneH1El.textContent =
    "The condition in an if/else statement is enclosed within_____. ";

  var button1El = document.createElement("button");
  var button2El = document.createElement("button");
  var button3El = document.createElement("button");
  var button4El = document.createElement("button");

  var btnDivEl = document.createElement("div");
  btnDivEl.className = "btn-div";

  button1El.textContent = "1.Quotes";
  button1El.id = "false";
  button2El.textContent = "2.Curly Brackets";
  button2El.id = "false";
  button3El.textContent = "3.Parentheses";
  button3El.id = "correct";
  button4El.textContent = "4.Square Brackets";
  button4El.id = "false";

  var actionDivEl = document.querySelector("#action-div");

  actionDivEl.appendChild(setOneDivEl);
  setOneDivEl.append(setOneH1El, btnDivEl);
  btnDivEl.append(button1El, button2El, button3El, button4El);

  btnDivEl.addEventListener("click", answerClickTwo);
};

var QuizQuestionsThree = function () {
  var setOneDivEl = document.querySelector(".content");
  setOneDivEl.remove();

  var setOneDivEl = document.createElement("div");
  setOneDivEl.classList.add("content", "questions");

  var setOneH1El = document.createElement("h1");
  setOneH1El.textContent = "Arrays in JavaScript can be used to store ______.";

  var button1El = document.createElement("button");
  var button2El = document.createElement("button");
  var button3El = document.createElement("button");
  var button4El = document.createElement("button");

  var btnDivEl = document.createElement("div");
  btnDivEl.className = "btn-div";

  button1El.textContent = "1.Numbers and Strings";
  button1El.id = "false";
  button2El.textContent = "2.Other Arrays";
  button2El.id = "false";
  button3El.textContent = "3.Booleans";
  button3El.id = "false";
  button4El.textContent = "4.All of the Above";
  button4El.id = "correct";

  var actionDivEl = document.querySelector("#action-div");

  actionDivEl.appendChild(setOneDivEl);
  setOneDivEl.append(setOneH1El, btnDivEl);
  btnDivEl.append(button1El, button2El, button3El, button4El);

  btnDivEl.addEventListener("click", answerClickThree);
};

var QuizQuestionsFour = function () {
  var setOneDivEl = document.querySelector(".content");
  setOneDivEl.remove();

  var setOneDivEl = document.createElement("div");
  setOneDivEl.classList.add("content", "questions");

  var setOneH1El = document.createElement("h1");
  setOneH1El.textContent =
    "String values must be enclosed within _____ when being assigned to variables.";

  var button1El = document.createElement("button");
  var button2El = document.createElement("button");
  var button3El = document.createElement("button");
  var button4El = document.createElement("button");

  var btnDivEl = document.createElement("div");
  btnDivEl.className = "btn-div";

  button1El.textContent = "1.Commas";
  button1El.id = "false";
  button2El.textContent = "2.Curly Brackets";
  button2El.id = "false";
  button3El.textContent = "3.Quotes";
  button3El.id = "correct";
  button4El.textContent = "4.Parentheses";
  button4El.id = "false";

  var actionDivEl = document.querySelector("#action-div");

  actionDivEl.appendChild(setOneDivEl);
  setOneDivEl.append(setOneH1El, btnDivEl);
  btnDivEl.append(button1El, button2El, button3El, button4El);

  btnDivEl.addEventListener("click", answerClickFour);
};

var QuizQuestionsFive = function () {
  var setOneDivEl = document.querySelector(".content");
  setOneDivEl.remove();

  var setOneDivEl = document.createElement("div");
  setOneDivEl.classList.add("content", "questions");

  var setOneH1El = document.createElement("h1");
  setOneH1El.textContent =
    "A very useful tool used during development and debugging for printing content to the debugger is:";

  var button1El = document.createElement("button");
  var button2El = document.createElement("button");
  var button3El = document.createElement("button");
  var button4El = document.createElement("button");

  var btnDivEl = document.createElement("div");
  btnDivEl.className = "btn-div";

  button1El.textContent = "1.JavaScript";
  button1El.id = "false";
  button2El.textContent = "2.Terminal/Bash";
  button2El.id = "false";
  button3El.textContent = "3.For Loops";
  button3El.id = "false";
  button4El.textContent = "4.Console.log";
  button4El.id = "correct";

  var actionDivEl = document.querySelector("#action-div");

  actionDivEl.appendChild(setOneDivEl);
  setOneDivEl.append(setOneH1El, btnDivEl);
  btnDivEl.append(button1El, button2El, button3El, button4El);

  btnDivEl.addEventListener("click", answerClick);
};

var answerClick = function (event) {
  var targetEl = event.target;

  //   var quizQuestion = [
  //     QuizQuestionsTwo,
  //     QuizQuestionsThree,
  //     QuizQuestionsFour,
  //     QuizQuestionsFive,
  //   ];

  if (targetEl.matches("#correct")) {
    console.log("correct");
    var answerDivEl = document.createElement("div");
    answerDivEl.className = "answer-div";
    var correctAnswerEl = document.createElement("h2");
    correctAnswerEl.className = "answer";
    correctAnswerEl.textContent = "Correct!";
    pageContentEl.appendChild(answerDivEl);
    answerDivEl.appendChild(correctAnswerEl);
    QuizQuestionsTwo();
  } else {
    console.log("false");
    var answerDivEl = document.createElement("div");
    answerDivEl.className = "answer-div";
    var wrongAnswerEl = document.createElement("h2");
    wrongAnswerEl.className = "answer";
    wrongAnswerEl.textContent = "Wrong!";
    pageContentEl.appendChild(answerDivEl);
    answerDivEl.appendChild(wrongAnswerEl);
    QuizQuestionsTwo();
  }
};

var answerClickTwo = function (event) {
  var targetEl = event.target;

  var answerDivEl = document.querySelector(".answer-div");
  answerDivEl.remove();

  if (targetEl.matches("#correct")) {
    console.log("correct");
    var answerDivEl = document.createElement("div");
    answerDivEl.className = "answer-div";
    var correctAnswerEl = document.createElement("h2");
    correctAnswerEl.className = "answer";
    correctAnswerEl.textContent = "Correct!";
    pageContentEl.appendChild(answerDivEl);
    answerDivEl.appendChild(correctAnswerEl);
    QuizQuestionsThree();
  } else {
    console.log("false");
    var answerDivEl = document.createElement("div");
    answerDivEl.className = "answer-div";
    var wrongAnswerEl = document.createElement("h2");
    wrongAnswerEl.className = "answer";
    wrongAnswerEl.textContent = "Wrong!";
    pageContentEl.appendChild(answerDivEl);
    answerDivEl.appendChild(wrongAnswerEl);
    QuizQuestionsThree();
  }
};

var answerClickThree = function (event) {
  var targetEl = event.target;

  var answerDivEl = document.querySelector(".answer-div");
  answerDivEl.remove();

  if (targetEl.matches("#correct")) {
    console.log("correct");
    var answerDivEl = document.createElement("div");
    answerDivEl.className = "answer-div";
    var correctAnswerEl = document.createElement("h2");
    correctAnswerEl.className = "answer";
    correctAnswerEl.textContent = "Correct!";
    pageContentEl.appendChild(answerDivEl);
    answerDivEl.appendChild(correctAnswerEl);
    QuizQuestionsFour();
  } else {
    console.log("false");
    var answerDivEl = document.createElement("div");
    answerDivEl.className = "answer-div";
    var wrongAnswerEl = document.createElement("h2");
    wrongAnswerEl.className = "answer";
    wrongAnswerEl.textContent = "Wrong!";
    pageContentEl.appendChild(answerDivEl);
    answerDivEl.appendChild(wrongAnswerEl);
    QuizQuestionsFour();
  }
};

var answerClickFour = function (event) {
  var targetEl = event.target;

  var answerDivEl = document.querySelector(".answer-div");
  answerDivEl.remove();

  if (targetEl.matches("#correct")) {
    console.log("correct");
    var answerDivEl = document.createElement("div");
    answerDivEl.className = "answer-div";
    var correctAnswerEl = document.createElement("h2");
    correctAnswerEl.className = "answer";
    correctAnswerEl.textContent = "Correct!";
    pageContentEl.appendChild(answerDivEl);
    answerDivEl.appendChild(correctAnswerEl);
    QuizQuestionsFive();
  } else {
    console.log("false");
    var answerDivEl = document.createElement("div");
    answerDivEl.className = "answer-div";
    var wrongAnswerEl = document.createElement("h2");
    wrongAnswerEl.className = "answer";
    wrongAnswerEl.textContent = "Wrong!";
    pageContentEl.appendChild(answerDivEl);
    answerDivEl.appendChild(wrongAnswerEl);
    QuizQuestionsFive();
  }
};
startButtonEl.addEventListener("click", QuizQuestions);
