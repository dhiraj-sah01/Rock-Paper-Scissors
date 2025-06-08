let choice1 = document.querySelector(".choice1");
let choice2 = document.querySelector(".choice2");
let choice3 = document.querySelector(".choice3");
let resultxt = document.querySelector("#resultxt");
let userScores = document.querySelector("#userScore");
let compScores = document.querySelector("#compScore");
let resultdiv = document.querySelector(".result");
let selectedChoice = document.querySelector(".selectedChoice");
let selectedResult = document.querySelector("#selectedResult");
let selectedUserChoice = document.querySelector("#userSelected");
let selectedCompChoice = document.querySelector("#compSelected");
let heading = document.querySelector(".heading");
let main = document.querySelector(".main");


let userScore = 0;
let compScore = 0;
let user = "";
let comp = "";

choice1.addEventListener("click",()=>{
    let userSelected = "rock";
    user = "rock";
    results(userSelected);
});

choice2.addEventListener("click",()=>{
    let userSelected = "paper";
    user = "paper";
    results(userSelected);
});

choice3.addEventListener("click",()=>{
    let userSelected = "scissors";
    user = "scissors";
    results(userSelected);
});

let results = (userSelected) => {
    let compSelected = compChoice();
    if(userSelected === compSelected){
        resultxt.innerText = "It's a TIE!! Try Again...";
        resultxt.setAttribute('style', 'background-color: rgb(227, 161, 37);');
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
    let option = ["rock", "paper", "scissors"];
    let compSelect = option[index];
    comp = compSelect;
    return compSelect;
};

let win = () => {
    resultxt.innerText = "Hurray!! You won.";
    resultxt.setAttribute('style', 'background-color: green;');
    userScore++;
    userScores.innerText = userScore;
    selChoice(resultxt.innerText, "green");
};

let loss = () => {
    resultxt.innerText = "Sorry!! Try Again.";
    resultxt.setAttribute('style', 'background-color: red;');
    compScore++;
    compScores.innerText = compScore;
    selChoice(resultxt.innerText, "red");
};

let selChoice = (text, color) => {
    selectedChoice.setAttribute('style', 'display: flex;');
    heading.setAttribute('style', 'opacity: 10%; pointer-events: none;');
    main.setAttribute('style', 'opacity: 10%; pointer-events: none;');
    selectedResult.innerText = text;
    selectedResult.setAttribute('style', `background-color: ${color};`);
    selectedUserChoice.src = "images/" + user + ".png";
    selectedCompChoice.src = "images/" + comp + ".png";
    setTimeout(restart, 1000);
};

let restart = () => {
    selectedChoice.setAttribute('style', 'display: none;');
    heading.setAttribute('style', 'opacity: 100%; pointer-events: all;');
    main.setAttribute('style', 'opacity: 100%; pointer-events: all;');
};
