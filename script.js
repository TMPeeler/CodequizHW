//required functions: a timer, a start button, an array of questions, a game over screen, 
//local storage for initials and amount of questions correct



// first I will need a webpage that has a start button and a title. $$$$$$$$$$$$$$$$$$$
// when i click the start button it begins the game
// the game will randomly pick a question from an array of questions
// the question appears on the page with mutiple choice answers
// if the correct answer is chosen it will display a message that says "nice" and then move onto the next question
// if the answer is incorrect it will display a message that says "incorrect", decrement the timer, and then move onto the next question
// when all the questions have been answered or the timer hits 0 then the game is over
// then display the game over screen 
// every time someone finishes the game, they may add their initials and it will save to the game over screen with their score.
// display start button

var startButton = document.querySelector("#startButton");


var timer;
var timerCount;
var score;
var questions;



function startGame(){
timerCount = 10;
}


function startTimer(){

}


startButton.addEventListener("click", startGame);