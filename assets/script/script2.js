var scoreListEl = document.getElementById("score-list");
var startDiv = document.getElementById("start-div");
var buttonDiv = document.createElement("div");
buttonDiv.setAttribute("id", "button-div");
startDiv.appendChild(buttonDiv);
var highScore = [];

// retrieve high scores from localstorage
var getHighScores = function () {
  highScore = JSON.parse(localStorage.getItem("highScore"));
};

var retake = function () {
  location.href = "./index.html";
};

getHighScores();

// sort high scores by highest to lowest
if (localStorage.length > 0) {
  var sortedScores = highScore.sort((a, b) => (a.score > b.score ? -1 : 1));
} else {
  window.alert("No current high scores");
  retake();
}

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
  reTakeBtn.addEventListener("click", retake);

  var clearBtn = document.createElement("button");
  clearBtn.setAttribute("id", "clear");
  clearBtn.textContent = "Clear Scores";
  buttonDiv.appendChild(clearBtn);
  clearBtn.addEventListener("click", clearStorage);
};

var clearStorage = function () {
  window.localStorage.clear();
  location.href = "./index2.html";
};
printHighScores();
