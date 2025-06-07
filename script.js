let choice1 = document.querySelector(".choice1");
let choice2 = document.querySelector(".choice2");
let choice3 = document.querySelector(".choice3");
let resultxt = document.querySelector("#resultxt");
let userScores = document.querySelector("#userScore");
let compScores = document.querySelector("#compScore");
let resultdiv = document.querySelector(".result");

let userScore = 0;
let compScore = 0;

choice1.addEventListener("click",()=>{
    let userSelected = "rock";
    results(userSelected);
});

choice2.addEventListener("click",()=>{
    let userSelected = "paper";
    results(userSelected);
});

choice3.addEventListener("click",()=>{
    let userSelected = "scissors";
    results(userSelected);
});

let results = (userSelected) => {
    let compSelected = compChoice();
    if(userSelected === compSelected){
        resultxt.innerText = "It's a TIE!! Try Again...";
    }
    else{
        if(userSelected === "paper" && compSelected === "rock"){
            userSelected === "paper" && compSelected === "rock" ? win(): loss();
        }
        else if(userSelected === "scissors" && compSelected === "paper"){
            userSelected === "scissors" && compSelected === "paper" ? win(): loss();
        }
        else{
            userSelected === "rock" && compSelected === "scissors" ? win(): loss();
        }
    }
};

let compChoice = () =>{
    let index = 0;
    index = Math.floor(Math.random() *3);
    console.log(index)
    let option = ["rock", "paper", "scissors"];
    console.log(option[index]);
    let compSelect = option[index];
    return compSelect;
};

let win = () => {
    resultxt.innerText = "Hurray!! You won.";
    userScore++;
    userScores.innerText = userScore;
};

let loss = () => {
    resultxt.innerText = "Sorry!! Try Again.";
    
    compScore++;
    compScores.innerText = compScore;
};

