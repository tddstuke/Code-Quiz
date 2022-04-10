var scoreListEl = document.getElementById("score-list");
var startDiv = document.getElementById("start-div");
var buttonDiv = document.createElement("div");
buttonDiv.setAttribute("id", "button-div");
startDiv.appendChild(buttonDiv);
var highScore = [];

// retrieve high scores from localstorage
var getHighScores = function () {
  highScore = JSON.parse(localStorage.getItem("highScore"));
  console.log(highScore);
  //   highScore.push(highScore);
};
getHighScores();
// getHighScores();
// sort high scores by highest to lowest
var sortedScores = highScore.sort((a, b) => (a.score > b.score ? -1 : 1));
console.log(sortedScores);

// Print high scores on page
var printHighScores = function () {
  for (i = 0; i < highScore.length; i++) {
    var listEl = document.createElement("li");
    listEl.className = "list";
    listEl.textContent =
      "Score: " + highScore[i].score + " Initials: " + highScore[i].name;
    scoreListEl.appendChild(listEl);
  }
  // create buttons to go back or clear high scores
  var reTakeBtn = document.createElement("button");
  reTakeBtn.setAttribute("id", "retake");
  reTakeBtn.textContent = "Retake Quiz";
  buttonDiv.appendChild(reTakeBtn);
  buttonDiv.addEventListener("click", retake);
};

var retake = function () {
  location.href = "./index.html";
};
printHighScores();
