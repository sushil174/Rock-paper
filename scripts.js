let playerCount = 0;
let computerCount = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const play = document.querySelector('#player');
const comp = document.querySelector('#computer');
const re = document.querySelector('#display3')
rock.addEventListener("click", () => game(rock));
paper.addEventListener("click", () => game(paper));
scissor.addEventListener("click", () => game(scissor));

play.textContent = playerCount;
comp.textContent = computerCount;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissor";
      break;
  }
}

function Round(player, computer) {
  if (player == computer) return `both selected ${player} match is tie`;

  if (
    (player == "paper" && computer == "rock") ||
    (player == "rock" && computer == "scissor") ||
    (player == "scissor" && computer == "paper")
  ) {
    playerCount++;
    return `Won ${player} beats ${computer}`;
  } else {
    computerCount++;
    return `Lose ${computer} beats ${player}`;
  }
}

function game(e) {
  const player = String(e.id);
  const computer = getComputerChoice();
  result = Round(player, computer);
  play.textContent = playerCount;
  comp.textContent = computerCount;
  re.textContent = result;

  if(playerCount >= 5 || computerCount >= 5)
  {
    rock.disabled = true;
    paper.disabled = true;
    scissor.disabled = true;
    

    const tryAgain = document.createElement('button');
    const score = document.querySelector('.score');
    score.appendChild(tryAgain);
    tryAgain.textContent = "Try again";
    tryAgain.addEventListener('click', () => {
      rock.disabled = false;
      paper.disabled = false;
      scissor.disabled = false;
      playerCount = 0;
      computerCount = 0;
      play.textContent = 0;
      comp.textContent = 0;
      re.textContent = "Score";
      re.style.color = "black";
      score.removeChild(tryAgain);
    })
  }
  if(playerCount >= 5)
  {
      re.style.color = "green";
      re.textContent = "You Won";
  }
  else if(computerCount >=5)
  {
      re.style.color = "red";
      re.textContent = "You Lose";
  }

}
