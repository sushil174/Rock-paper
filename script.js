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
      return "scissors";
      break;
  }
}
function playerSelection(player, computer) {
  if (computer === player) {
    return `tie both selected ${player}`;
  } else if (
    (player == "rock" && computer == "scissors") ||
    (player =="paper" && computer == "rock") ||
    (player =="scissors" && computer =="paper")
  ) {
    return `you win ${player} beats ${computer}`;
  } else {
    return `you lose ${computer} beats ${player}`;
  }
}

function counter(player, computer) {
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "rock" && computer === "scissors")
  ) {
    return true;
  } else {
    return false;
  }
}

let count = 0;
for (i = 0; i < 5; i++) {
  const player = prompt("Enter the choice : ").toLocaleLowerCase();
  const computer = getComputerChoice();
  if (counter(player, computer)){count++} ;
  console.log(playerSelection(player, computer));
  console.log(count);
  console.log(player);
  console.log(computer);
}
