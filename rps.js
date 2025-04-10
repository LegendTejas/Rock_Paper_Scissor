let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const generateCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw! Play Again.";
    msg.style.backgroundColor = "rgb(183, 255, 1)";
};

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "🥳🎉You Win🎉🥳";
        msg.style.backgroundColor = "gold";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You Lose! Better Luck Next Time.";
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {

    //Generate computer choice
    const compChoice = generateCompChoice();

    if (userChoice === compChoice) {
        //Game Draw
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissor , paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock , scissor
            userWin = compChoice === "scissor" ? false : true;
        } else {
            // rock, paper
            compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});