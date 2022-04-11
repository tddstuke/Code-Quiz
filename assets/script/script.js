var startButtonEl = document.querySelector("#start-btn");
var pageContentEl = document.querySelector("#page-content");
var btnDivEl = document.querySelector("#btn-div");
var setOneDivEl = document.querySelector(".content");
var actionDivEl = document.querySelector("#action-div");
var timerEl = document.getElementById("time-left");
var timeLeft = 75;
var timeInterval;
var endTime;
var highScore = [];
// initiate countdown function
var countdown = function () {
  timeInterval = setInterval(function () {
    if (timeLeft > 0) {
      timerEl.textContent = "Timer: " + timeLeft;
      timeLeft--;
    } else {
      timerEl.textContent = "Timer: 0";
      clearInterval(timeInterval);
      console.log("out of time");
    }
  }, 1000);
};

var timeOff = function () {
  timeLeft = timeLeft - 10;
};

var stopTimer = function () {
  clearInterval(timeInterval);
};

// begin quiz question sets
var QuizQuestions = function () {
  countdown();
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

  btnDivEl.addEventListener("click", answerClickFive);
};
// begin answerclick functions
var answerClick = function (event) {
  var targetEl = event.target;

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
    timeOff();
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
    timeOff();
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
    timeOff();
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
    timeOff();
    QuizQuestionsFive();
  }
};

var answerClickFive = function (event) {
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
    allDone();
  } else {
    console.log("false");
    var answerDivEl = document.createElement("div");
    answerDivEl.className = "answer-div";
    var wrongAnswerEl = document.createElement("h2");
    wrongAnswerEl.className = "answer";
    wrongAnswerEl.textContent = "Wrong!";
    pageContentEl.appendChild(answerDivEl);
    answerDivEl.appendChild(wrongAnswerEl);
    timeOff();

    allDone();
  }
};

// stop timer and create initials and high score form
var allDone = function () {
  stopTimer();

  var setOneDivEl = document.querySelector(".content");
  setOneDivEl.remove();

  timerEl.textContent = timeLeft;

  var setOneDivEl = document.createElement("div");
  setOneDivEl.classList.add("content", "questions");
  var actionDivEl = document.querySelector("#action-div");

  var setOneH1El = document.createElement("h1");
  setOneH1El.textContent = "All Done!";

  var formDivEl = document.createElement("div");
  formDivEl.className = "form-div";

  var formHeaderEl = document.createElement("h2");
  formHeaderEl.textContent = "Your final score is " + timeLeft;

  var formEl = document.createElement("form");
  formEl.addEventListener("submit", saveHighScore);
  formEl.addEventListener("submit", visitpage);
  formEl.innerHTML =
    "<label for='initials'>Enter Initals:</label><input type ='text' id='initials'>";
  var formButton = document.createElement("button");
  formButton.textContent = "Submit";
  formButton.setAttribute("id", "save");
  formButton.addEventListener("click", saveHighScore);
  formButton.addEventListener("click", visitpage);

  actionDivEl.appendChild(setOneDivEl);
  setOneDivEl.append(setOneH1El, formDivEl);
  formDivEl.append(formHeaderEl, formEl, formButton);
};

// link to highscore page
var visitpage = function () {
  location.href = "./index2.html";
};

// save to local storage and retrieve stored date so we can add onto it
var saveHighScore = function (event) {
  event.preventDefault();
  if (localStorage.length > 0) {
    highScore = JSON.parse(localStorage.getItem("highScore"));
    var initials = document.getElementById("initials").value;
    var score = {
      score: timeLeft,
      name: initials,
    };
    console.log(score);
    highScore.push(score);
    localStorage.setItem("highScore", JSON.stringify(highScore));
  } else {
    var initials = document.getElementById("initials").value;
    var score = {
      score: timeLeft,
      name: initials,
    };
    console.log(score);
    highScore.push(score);
    localStorage.setItem("highScore", JSON.stringify(highScore));
  }
};

startButtonEl.addEventListener("click", QuizQuestions);
