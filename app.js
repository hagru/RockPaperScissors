var userScore = 0;
var compScore = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getCompChoice() {
  const choices = ['rock', 'paper', 'scissors']
  const randomNum = (Math.floor(Math.random() * 3));
  return choices[randomNum];
}

function convert(choice) {
  if (choice === "rock") return "Rock";
  if (choice === "paper") return "Paper";
  if (choice === "scissors") return "Scissors";
}

function win(user, comp) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(user);
  result_p.innerHTML = convert(user) + smallUserWord + " beats " + convert(comp) + smallCompWord + ". You win!";
  userChoice_div.classList.add('green-glow');
  setTimeout(function() { userChoice_div.classList.remove('green-glow') }, 500)
}

function lose(user, comp) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(user);
  result_p.innerHTML = convert(user) + smallUserWord + " loses to " + convert(comp) + smallCompWord + ". You lost.";
  userChoice_div.classList.add('red-glow');
  setTimeout(function() { userChoice_div.classList.remove('red-glow') }, 500)
}

function draw(user, comp) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(user);
  result_p.innerHTML = convert(user) + smallUserWord + " draws against " + convert(comp) + smallCompWord + ". You draw.";
  userChoice_div.classList.add('gray-glow');
  setTimeout(() => userChoice_div.classList.remove('gray-glow'), 500)
}

function game(userChoice) {
  const computerChoice = getCompChoice();

  switch(userChoice + computerChoice) {
  case "rockscissors":
  case "paperrock":
  case "scissorspaper":
    win(userChoice, computerChoice);
    break;
  case "rockpaper":
  case "paperscissors":
  case "scissorsrock":
    lose(userChoice, computerChoice);
    break;
  case "rockrock":
  case "paperpaper":
  case "scissorsscissors":
    draw(userChoice, computerChoice);
}
}

function main() {
  rock_div.addEventListener("click", function() {
    game("rock")
  })

  paper_div.addEventListener("click", function() {
    game("paper")
  })

  scissors_div.addEventListener("click", function() {
    game("scissors")
  })
}

main();
