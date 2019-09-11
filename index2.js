// variables for dice buttons
var rollLeftDice = document.getElementsByClassName("dice-button")[0];
var rollRightDice = document.getElementsByClassName("dice-button")[2];

// EVENT HANDLERS
// event listener for player 1
rollLeftDice.addEventListener("click", function() {
  window.player1 = prompt("Player 1, Enter Your Name!");
  var playerOneTarget = document.querySelectorAll("p")[0];
  playerOneTarget.textContent = player1;

  var diceTimer = setInterval(changeDice, 150);
  var animateTimer = setInterval(animateButton, 150);

  var stopLeftDice = document.getElementsByClassName("dice-button")[1];
  stopLeftDice.addEventListener("click", function() {
    clearInterval(diceTimer);
    clearInterval(animateTimer);
  });
});

// event listener for player 2
rollRightDice.addEventListener("click", function() {
  var player2 = prompt("Player 2, Enter Your Name!");
  var playerTwoTarget = document.querySelectorAll("p")[1];
  playerTwoTarget.textContent = player2;

  var diceTimer = setInterval(changeDice2, 150);
  var animateTimer = setInterval(animateButton2, 150);

  var stopRightDice = document.getElementsByClassName("dice-button")[3];
  stopRightDice.addEventListener("click", function() {
    clearInterval(diceTimer);
    clearInterval(animateTimer);

    var winner = document.querySelector("h1");
    if (randomNum1 > randomNum2) {
      winner.textContent = player1 + " wins!";
    } else if (randomNum2 > randomNum1) {
      winner.textContent = player2 + " wins!";
    } else {
      winner.textContent = "Draw!";
    }
  });
});

/*******************************************************************/
// FUNCTIONS
// function for dice changing effect player 1
function changeDice(name) {
  window.randomNum1 = Math.floor(Math.random() * 6) + 1;
  var randomImg1 = "images/dice" + randomNum1 + ".png";

  document.getElementById("myImgId1").setAttribute("src", randomImg1);
}

// function for dice changing effect player 2
function changeDice2(name) {
  window.randomNum2 = Math.floor(Math.random() * 6) + 1;
  var randomImg2 = "images/dice" + randomNum2 + ".png";

  document.getElementById("myImgId2").setAttribute("src", randomImg2);
}

// function to animate buttons player 1
function animateButton(name) {
  document.getElementById("myImgId1").classList.toggle("pressed");
}

// function to animate buttons player 2
function animateButton2(name) {
  document.getElementById("myImgId2").classList.toggle("pressed");
}
