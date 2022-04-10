var scoreListEl = document.getElementById("score-list");
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
};
// create buttons to go back or clear high scores
printHighScores();
