var container = document.getElementById("container");
var no_button = document.getElementById("no");
var yes_button = document.getElementById("yes");
var question_box = document.getElementById("question-box");
var winner_box = document.getElementById("winner");
var replay = document.getElementById("replay");

no_button.addEventListener("click", changePosition);
yes_button.addEventListener("click", displayWinner);
replay.addEventListener("click", replayGame);

function changePosition() {
    let x = Math.floor(Math.random() * 80);
    let y = Math.floor(Math.random() * 80);
    question_box.style.top = `${x}%`;
    question_box.style.left = `${y}%`;
}

function displayWinner() {
    winner_box.style.visibility = "visible";
    container.style.backgroundColor = "rgba(255, 211, 218, 0.5)";
    no_button.disabled = true;
    yes_button.disabled = true;
}

function replayGame() {
    container.style.backgroundColor = "rgba(255, 211, 218, 0.831)";
    winner_box.style.visibility = "hidden";
    question_box.style.top = '20%';
    question_box.style.left = '50%';
    no_button.disabled = false;
    yes_button.disabled = false;
}