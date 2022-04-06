var startButtonEl = document.querySelector("#start-btn");
var pageContentEl = document.querySelector("#page-content");

var QuizQuestions = function () {
  var startDivEl = document.querySelector("#startDiv");
  startDivEl.remove();

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
};

var answerClick = function (event) {
  var targetEl = event.target;

  if (targetEl.matches("#correct")) {
    console.log("correct");
  } else if (targetEl.matches("#false")) {
    console.log("false");
  }
};

startButtonEl.addEventListener("click", QuizQuestions);
pageContentEl.addEventListener("click", answerClick);
