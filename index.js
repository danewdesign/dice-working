// variables for roll dice and stop dice buttons
var rollLeftDice = document.getElementsByClassName("dice-button")[0];
var stopLeftDice = document.getElementsByClassName("dice-button")[1];
var rollRightDice = document.getElementsByClassName("dice-button")[2];
var stopRightDice = document.getElementsByClassName("dice-button")[3];

// click event listener for rolling left dice
rollLeftDice.addEventListener("click", function() {

  // prompt for player 1 name
  window.player1 = prompt("Player 1, enter your name!");
  var player1Target = document.querySelectorAll("p")[0];
  player1Target.textContent = player1;

  // set interval for player 1 dice
  var diceTimer = setInterval(changeLeftDice, 100);
  var diceAnimationTimer = setInterval(animateLeftDice, 100);

  // stop interval
  var stopLeftDice = document.getElementsByClassName("dice-button")[1];
  stopLeftDice.addEventListener("click", function stopDice() {
    clearInterval(diceTimer);
    clearInterval(diceAnimationTimer);
  });
});

// function to change left dice image
function changeLeftDice() {
  // left dice auto roll effect
  window.randomNum1 = Math.floor(Math.random() * 6) + 1;
  var randomImgSrc1 = "images/dice" + randomNum1 + ".png";
  var leftDice = document.getElementById("myImgId1");
  leftDice.setAttribute("src", randomImgSrc1);

  return window.randomNum1;
}

//function to animate left dice
function animateLeftDice() {
  // left button animation
  var leftDice = document.getElementById("myImgId1");
  leftDice.classList.toggle("pressed");
}

// --------------------------------------------------------------//

// click event listener for rolling right dice
rollRightDice.addEventListener("click", function() {

  // prompt for player 1 name
  window.player2 = prompt("Player 2, enter your name!");
  var player2Target = document.querySelectorAll("p")[1];
  player2Target.textContent = player2;

  // set interval for player 2 dice
  var diceTimer = setInterval(changeRightDice, 100);
  var diceAnimationTimer = setInterval(animateRightDice, 100);

  // stop interval
  var stopRightDice = document.getElementsByClassName("dice-button")[3];
  stopRightDice.addEventListener("click", function stopDice() {
    clearInterval(diceTimer);
    clearInterval(diceAnimationTimer);
  });
});

// add gotcha class
stopRightDice.addEventListener("click", function addClass() {
  stopRightDice.classList.add("gotcha");
});

// function to change right dice image
function changeRightDice() {
  // right dice auto roll effect
  window.randomNum2 = Math.floor(Math.random() * 6) + 1;
  var randomImgSrc2 = "images/dice" + randomNum2 + ".png";
  var rightDice = document.getElementById("myImgId2");
  rightDice.setAttribute("src", randomImgSrc2);

  return window.randomNum2;
}

//function to animate right dice
function animateRightDice() {
  // right button animation
  var rightDice = document.getElementById("myImgId2");
  rightDice.classList.toggle("pressed");
}

stopRightDice.addEventListener("click", function announceWinner() {
    if (window.randomNum1 > window.randomNum2) {
      var winner = document.querySelector("h1");
      winner.textContent = window.player1 + " wins!";
    } else if (window.randomNum1 < window.randomNum2) {
      document.querySelector("h1").textContent = window.player2 + " wins!";
    } else {
      document.querySelector("h1").textContent = "Draw!";
    }
});
