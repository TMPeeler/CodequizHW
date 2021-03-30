//required functions: a timer, a start button, an array of questions, a game over screen, 
//local storage for initials and amount of questions correct
//make an array of objects where each one has a correct answer and then incorrect answers



// first I will need a webpage that has a start button and a title. $$$$$$$$$$$$$$$$$$$
// when i click the start button it begins the game $$$$$$$$$$$$$$$


// the game will randomly pick a question from an array of questions


// the question appears on the page with mutiple choice answers
// if the correct answer is chosen it will display a message that says "nice" and then move onto the next question
// if the answer is incorrect it will display a message that says "incorrect", decrement the timer, and then move onto the next question
// when all the questions have been answered or the timer hits 0 then the game is over
// then display the game over screen 
// every time someone finishes the game, they may add their initials and it will save to the game over screen with their score.
// display start button

var startButton = document.querySelector(".startButton");
var timerElement = document.querySelector(".timerElement");
var quizQuestions = document.querySelector(".quizQuestions");
var quizAnswers = document.querySelector(".quizAnswers");
//var correctAnswer = document.querySelector(".correctAnswer");
var gameOverScreen = document.querySelector(".gameOverScreen");


var timer;
var timerCount;
var score = 0;
var quizQuestions = [
    {
        question: "Which color is my favorite?",
        correctAnswer: "blue",
        incorrect: ["yellow", "red", "green"]
    },

    {
        question: "Common data types do NOT include...",
        correctAnswer: "alerts",
        incorrect: ["numbers", "booleans", "strings"]
    },

    {
        question: "Arrays in JavaScript can be used to store...",
        correctAnswer: "all of the above",
        incorrect: ["numbers and strings", "other arrays", "booleans"]
    },

    {
        question: "The condition in an if/else statement is enclosed within...",
        correctAnswer: "parentheses",
        incorrect: ["square brackets", "quotes", "curly brackets"]
    },

    {
        question: "String values must be enclosed within ... when being assigned to variables.",
        correctAnswer: "quotes",
        incorrect: ["parentheses", "curly brackets", "commas"]
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        correctAnswer: "console.log",
        incorrect: ["JavaScript", "terminal/gitbash", "for loops"]
    }
]



// some function that starts the game
function startGame(){
    timerCount = 10;
    startTimer();
}


function startTimer(){
    timer = setInterval(function() {
        timerCount --;
        timerElement.textContent = timerCount;
        if (timerCount === 0) {
            clearInterval(timer);
            gameOver();
    }


     // if (timerCount === 0); {
        //     clearInterval(timer);
        //     gameOver();
        // }

        //needs something where if you pick the wrong answer it subtracts time
        //needs something where if timer hits 0 it's game over 
    }, 1000);

}

// function populateQuestions() {
// }

function nextQuestion (){

    for (i = 0; i < quizQuestions.length; i++){
        quizQuestions.question = quizQuestions.textContent(i);
    }
    appendChild(quizQuestions)
    


    //whenever you click an answer it will call the next question

}

function gameOver(){
    console.log("you lose");
// should change text content of h1 tag to GAME OVER

// has localStorage displayed for when the player enters their initials per win
// includes start button again
}




startButton.onclick = function() {
    console.log("game is on");
}

//start button click begins the game
startButton.addEventListener("click", startGame);

//event target to check if button is a win or loss