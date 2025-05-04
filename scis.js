let userScore = 0;
let compScore = 0;

// sari choice ko access krne ke liye
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

// string randomly generate krna possible ni hota isliye number generate krte h taki vo no array ka index bn jaaye 
// Math.floor(Math.random() *3) -> floor whole no deta h or random method ke saath jo no multiply krege use ek kam tk ki value generate krva skte h 0 to n-1 
const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}


const drawGame = () =>{
    msg.innerText = ("Game was draw. Play again.");
    msg.style.backgroundColor = "black";
}
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win!! :) Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You Lose :( ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

// play game computer se ke choice lene ko bolega fir score set krega

const playGame = (userChoice) => {
    console.log("user choice was : ",userChoice);
    // generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice was : ",compChoice);

    // kon jeetega
    
    if(userChoice === compChoice){
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        } else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click" ,() => {

        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

        // console.log("choice was clicked")

//    
        // get attribute mein hm apni choice ki id lekr aayege
        // const choiceId = choice.getAttribute("id");
        // id paane ka taruka
        // console.log("choice",choiceId)
// 


    })
})