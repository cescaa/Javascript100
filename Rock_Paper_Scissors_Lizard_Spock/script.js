var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user_score");
var computerScore_span = document.getElementById("computer_score");
var scoreBoard_div = document.querySelector(".score_board");
var result_div = document.querySelector(".result");
var rock_div = document.getElementById("r");
var paper_div = document.getElementById("p");
var scissors_div = document.getElementById("s");
var lizzard_div = document.getElementById("l");
var spock_div = document.getElementById("sp");
var userHand = document.querySelector(".user_hand");
var computerHand = document.querySelector(".computer_hand");

function getComputerChoice() {
  var choices = ["r", "p", "s", "l", "sp"];
  var randomNumber = Math.floor(Math.random() * 5);
  return choices[randomNumber];
}

function updateScore() {
  userScore_span.textContent = userScore;
  computerScore_span.textContent = computerScore;
}

function game(userChoice) {
  var computerChoice = getComputerChoice();

  if (userChoice === computerChoice) {
    result_div.textContent = "It's a tie.";
    userHand.src = `./img/${userChoice}.png`;
    computerHand.src = `./img/${computerChoice}.png`;
    userHand.classList.add("tie_white");
    computerHand.classList.add("tie_white");
    setTimeout(function () {
      userHand.classList.remove("tie_white");
    }, 800);
    setTimeout(function () {
      computerHand.classList.remove("tie_white");
    }, 800);
    return;
  }

  if (userChoice === "r") {
    if (computerChoice === "s") {
      result_div.textContent = "Rock smashes scissors. You win.";
      userScore++;
      updateScore();
      userHand.src = `./img/${userChoice}.png`;
      computerHand.src = `./img/${computerChoice}.png`;
      userHand.classList.add("greenglow");
      computerHand.classList.add("redglow");
      setTimeout(function () {
        userHand.classList.remove("greenglow");
      }, 800);
      setTimeout(function () {
        computerHand.classList.remove("redglow");
      }, 800);
      return;
    } else if (computerChoice === "p") {
      result_div.textContent = "Paper covers rock. You lose.";
      computerScore++;
      updateScore();
      userHand.src = `./img/${userChoice}.png`;
      computerHand.src = `./img/${computerChoice}.png`;
      userHand.classList.add("redglow");
      computerHand.classList.add("greenglow");
      setTimeout(function () {
        userHand.classList.remove("redglow");
      }, 800);
      setTimeout(function () {
        computerHand.classList.remove("greenglow");
      }, 800);
      return;
    } else if (computerChoice === "l") {
      result_div.textContent = "Rock crushes lizard. You win.";
      userScore++;
      updateScore();
      userHand.src = `./img/${userChoice}.png`;
      computerHand.src = `./img/${computerChoice}.png`;
      userHand.classList.add("greenglow");
      computerHand.classList.add("redglow");
      setTimeout(function () {
        userHand.classList.remove("greenglow");
      }, 800);
      setTimeout(function () {
        computerHand.classList.remove("redglow");
      }, 800);
      return;
    } else {
      result_div.textContent = "Spock vaporizes rock. You lose.";
      computerScore++;
      updateScore();
      userHand.src = `./img/${userChoice}.png`;
      computerHand.src = `./img/${computerChoice}.png`;
      userHand.classList.add("redglow");
      computerHand.classList.add("greenglow");
      setTimeout(function () {
        userHand.classList.remove("redglow");
      }, 800);
      setTimeout(function () {
        computerHand.classList.remove("greenglow");
      }, 800);
      return;
    }
  }

  if (userChoice === "s") {
    if (computerChoice === "r") {
      result_div.textContent = "Rock smashes scissors. You lose.";
      computerScore++;
      updateScore();
      userHand.src = `./img/${userChoice}.png`;
      computerHand.src = `./img/${computerChoice}.png`;
      userHand.classList.add("redglow");
      computerHand.classList.add("greenglow");
      setTimeout(function () {
        userHand.classList.remove("redglow");
      }, 800);
      setTimeout(function () {
        computerHand.classList.remove("greenglow");
      }, 800);
      return;
    } else if (computerChoice === "p") {
      result_div.textContent = "Scissors cuts paper. You win.";
      userScore++;
      updateScore();
      userHand.src = `./img/${userChoice}.png`;
      computerHand.src = `./img/${computerChoice}.png`;
      userHand.classList.add("greenglow");
      computerHand.classList.add("redglow");
      setTimeout(function () {
        userHand.classList.remove("greenglow");
      }, 800);
      setTimeout(function () {
        computerHand.classList.remove("redglow");
      }, 800);
      return;
    } else if (computerChoice === "l") {
      result_div.textContent = "Scissors decapitates lizard. You win.";
      userScore++;
      updateScore();
      userHand.src = `./img/${userChoice}.png`;
      computerHand.src = `./img/${computerChoice}.png`;
      userHand.classList.add("greenglow");
      computerHand.classList.add("redglow");
      setTimeout(function () {
        userHand.classList.remove("greenglow");
      }, 800);
      setTimeout(function () {
        computerHand.classList.remove("redglow");
      }, 800);
      return;
    } else {
      result_div.textContent = "Spock smashes scissors. You lose.";
      computerScore++;
      updateScore();
      userHand.src = `./img/${userChoice}.png`;
      computerHand.src = `./img/${computerChoice}.png`;
      userHand.classList.add("redglow");
      computerHand.classList.add("greenglow");
      setTimeout(function () {
        userHand.classList.remove("redglow");
      }, 800);
      setTimeout(function () {
        computerHand.classList.remove("greenglow");
      }, 800);
      return;
    }
  }

  if (userChoice === "p") {
    if (computerChoice === "l") {
      result_div.textContent = "Lizard eats paper. You lose.";
      computerScore++;
      updateScore();
      userHand.src = `./img/${userChoice}.png`;
      computerHand.src = `./img/${computerChoice}.png`;
      userHand.classList.add("redglow");
      computerHand.classList.add("greenglow");
      setTimeout(function () {
        userHand.classList.remove("redglow");
      }, 800);
      setTimeout(function () {
        computerHand.classList.remove("greenglow");
      }, 800);
      return;
    } else if (computerChoice === "s") {
      result_div.textContent = "Scissors cuts paper. You lose.";
      computerScore++;
      updateScore();
      userHand.src = `./img/${userChoice}.png`;
      computerHand.src = `./img/${computerChoice}.png`;
      userHand.classList.add("redglow");
      computerHand.classList.add("greenglow");
      setTimeout(function () {
        userHand.classList.remove("redglow");
      }, 800);
      setTimeout(function () {
        computerHand.classList.remove("greenglow");
      }, 800);
      return;
    } else if (computerChoice === "r") {
      result_div.textContent = "Paper covers rock. You win.";
      userScore++;
      updateScore();
      userHand.src = `./img/${userChoice}.png`;
      computerHand.src = `./img/${computerChoice}.png`;
      userHand.classList.add("greenglow");
      computerHand.classList.add("redglow");
      setTimeout(function () {
        userHand.classList.remove("greenglow");
      }, 800);
      setTimeout(function () {
        computerHand.classList.remove("redglow");
      }, 800);
      return;
    } else {
      result_div.textContent = "Paper disproves Spock. You win.";
      userScore++;
      updateScore();
      userHand.src = `./img/${userChoice}.png`;
      computerHand.src = `./img/${computerChoice}.png`;
      userHand.classList.add("greenglow");
      computerHand.classList.add("redglow");
      setTimeout(function () {
        userHand.classList.remove("greenglow");
      }, 800);
      setTimeout(function () {
        computerHand.classList.remove("redglow");
      }, 800);
      return;
    }
  }
  if (userChoice === "l") {
    if (computerChoice === "p") {
      result_div.textContent = "Lizard eats paper. You win.";
      userScore++;
      updateScore();
      userHand.src = `./img/${userChoice}.png`;
      computerHand.src = `./img/${computerChoice}.png`;
      userHand.classList.add("greenglow");
      computerHand.classList.add("redglow");
      setTimeout(function () {
        userHand.classList.remove("greenglow");
      }, 800);
      setTimeout(function () {
        computerHand.classList.remove("redglow");
      }, 800);
      return;
    } else if (computerChoice === "s") {
      result_div.textContent = "Scissors decapitates lizard. You lose.";
      computerScore++;
      updateScore();
      userHand.src = `./img/${userChoice}.png`;
      computerHand.src = `./img/${computerChoice}.png`;
      userHand.classList.add("redglow");
      computerHand.classList.add("greenglow");
      setTimeout(function () {
        userHand.classList.remove("redglow");
      }, 800);
      setTimeout(function () {
        computerHand.classList.remove("greenglow");
      }, 800);
      return;
    } else if (computerChoice === "r") {
      result_div.textContent = "Rock crushes lizard. You lose.";
      computerScore++;
      updateScore();
      userHand.src = `./img/${userChoice}.png`;
      computerHand.src = `./img/${computerChoice}.png`;
      userHand.classList.add("redglow");
      computerHand.classList.add("greenglow");
      setTimeout(function () {
        userHand.classList.remove("redglow");
      }, 800);
      setTimeout(function () {
        computerHand.classList.remove("greenglow");
      }, 800);
      return;
    } else {
      result_div.textContent = "Lizard poisons Spock. You win.";
      userScore++;
      updateScore();
      userHand.src = `./img/${userChoice}.png`;
      computerHand.src = `./img/${computerChoice}.png`;
      userHand.classList.add("greenglow");
      computerHand.classList.add("redglow");
      setTimeout(function () {
        userHand.classList.remove("greenglow");
      }, 800);
      setTimeout(function () {
        computerHand.classList.remove("redglow");
      }, 800);
      return;
    }
  }
  if (userChoice === "sp") {
    if (computerChoice === "l") {
      result_div.textContent = "Lizard poisons Spock. You lose.";
      computerScore++;
      updateScore();
      userHand.src = `./img/${userChoice}.png`;
      computerHand.src = `./img/${computerChoice}.png`;
      userHand.classList.add("redglow");
      computerHand.classList.add("greenglow");
      setTimeout(function () {
        userHand.classList.remove("redglow");
      }, 800);
      setTimeout(function () {
        computerHand.classList.remove("greenglow");
      }, 800);
      return;
    } else if (computerChoice === "s") {
      result_div.textContent = "Spock smashes scissors. You win.";
      userScore++;
      updateScore();
      userHand.src = `./img/${userChoice}.png`;
      computerHand.src = `./img/${computerChoice}.png`;
      userHand.classList.add("greenglow");
      computerHand.classList.add("redglow");
      setTimeout(function () {
        userHand.classList.remove("greenglow");
      }, 800);
      setTimeout(function () {
        computerHand.classList.remove("redglow");
      }, 800);
      return;
    } else if (computerChoice === "r") {
      result_div.textContent = "Spock vaporizes rock. You win.";
      userScore++;
      updateScore();
      userHand.src = `./img/${userChoice}.png`;
      computerHand.src = `./img/${computerChoice}.png`;
      userHand.classList.add("greenglow");
      computerHand.classList.add("redglow");
      setTimeout(function () {
        userHand.classList.remove("greenglow");
      }, 800);
      setTimeout(function () {
        computerHand.classList.remove("redglow");
      }, 800);
      return;
    } else {
      result_div.textContent = "Paper disproves Spock. You lose.";
      computerScore++;
      updateScore();
      userHand.src = `./img/${userChoice}.png`;
      computerHand.src = `./img/${computerChoice}.png`;
      userHand.classList.add("redglow");
      computerHand.classList.add("greenglow");
      setTimeout(function () {
        userHand.classList.remove("redglow");
      }, 800);
      setTimeout(function () {
        computerHand.classList.remove("greenglow");
      }, 800);
      return;
    }
  }
}

game();

function main() {
  //rock_div.addEventListener('click', function(){setTimeout(function() {
  //game("r");
  //}, 1400);
  //});

  rock_div.addEventListener("click", function () {
    game("r");
  });

  paper_div.addEventListener("click", function () {
    game("p");
  });

  scissors_div.addEventListener("click", function () {
    game("s");
  });

  lizzard_div.addEventListener("click", function () {
    game("l");
  });

  spock_div.addEventListener("click", function () {
    game("sp");
  });
}

main();

/*function animateMe() {
    userHand.style.animation = "shakePlayer 2s";
    computerHand.style.animation = "shakeComputer 2s";
};

rock_div.addEventListener("click", animateMe);
paper_div.addEventListener("click", animateMe);
spock_div.addEventListener("click", animateMe);
lizzard_div.addEventListener("click", animateMe);
scissors_div.addEventListener("click", animateMe);*/
