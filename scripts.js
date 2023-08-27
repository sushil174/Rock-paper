let playerCount = 0;
let computerCount = 0;

function getComputerChoice()
{
    let choice = Math.floor(Math.random() * 3)
    switch(choice)
    {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissior";
            break;
    }
}

function winning(player, computer)
{
    if(player == "paper" && computer == "rock" ||
    player == "rock" && computer == "scissior" ||
    player == "scissor" && computer == "paper" )
        return 1;
    else
        return 0;
}

function Round(player,computer)
{
    if(player == computer)
    {
        return `both selected ${player} match is tie`;
    }
    else
    {
        if(winning)
        {
            playerCount++;
            return `won ${player} beats ${computer}`;
        }
        else
        {
            computerCount++;
            return `lose ${computer} beats ${player}`;
        }
    }
}

function game()
{   
    for(let i=0;i<5;i++)
    {
        const player = prompt("enter the choice : ").toLowerCase();
        const computer = getComputerChoice();
        result = Round(player,computer);
        console.log(result);
    }
}
game();
console.log("computer Score : "+computerCount);
console.log("player Score : "+playerCount);