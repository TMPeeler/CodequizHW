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

var startButtonEl = document.querySelector(".startButton");
var timerElementEl = document.querySelector(".timerElement");
var quizQuestionsEl = document.querySelector(".quizQuestions");
var quizAnswersEl = document.querySelector(".quizAnswers");
var gameOverScreenEl = document.querySelector(".gameOverScreen");


var questionIndex = 0;


var timer;
var timerCount;
var score = 0;
//var correctAnswer = document.querySelector(".correctAnswer");
// var wrongAnswer = false;
// var quizQuestions = [
//     {
//         question: "Which color is my favorite?",
//         correctAnswer: "blue",
//         incorrect: ["yellow", "red", "green"]
//     },

//     {
//         question: "Common data types do NOT include...",
//         correctAnswer: "alerts",
//         incorrect: ["numbers", "booleans", "strings"]
//     },

//     {
//         question: "Arrays in JavaScript can be used to store...",
//         correctAnswer: "all of the above",
//         incorrect: ["numbers and strings", "other arrays", "booleans"]
//     },

//     {
//         question: "The condition in an if/else statement is enclosed within...",
//         correctAnswer: "parentheses",
//         incorrect: ["square brackets", "quotes", "curly brackets"]
//     },

//     {
//         question: "String values must be enclosed within ... when being assigned to variables.",
//         correctAnswer: "quotes",
//         incorrect: ["parentheses", "curly brackets", "commas"]
//     },

//     {
//         question: "A very useful tool used during development and debugging for printing content to the debugger is:",
//         correctAnswer: "console.log",
//         incorrect: ["JavaScript", "terminal/gitbash", "for loops"]
//     }
// ]

var quizQuestions = [
    {
        question: "Which color is my favorite?",
        choice1: "blue",
        choice2:  "red",
        correctAnswer: "answer1" 
    },

    {
        question: "Common data types do NOT include...",
        choice1: "booleans",
        choice2: "alerts",
        correctAnswer: "answer2"
    },

    {
        question: "Arrays in JavaScript can be used to store...",
        choice1: "numbers and strings, other arrays and booleans",
        choice2: "Light particles",
        correctAnswer: "answer1"
    },

    {
        question: "The condition in an if/else statement is enclosed within...",
        choice1: "parentheses",
        choice2: "curly brackets",
        correctAnswer: "answer1",
    },

    {
        question: "String values must be enclosed within ... when being assigned to variables.",
        choice1: "parentheses", 
        choice2: "quotes",
        correctAnswer: "answer2"
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice1: "console.log",
        choice2: "terminal/gitbash",
        correctAnswer: "answer1"
    }
]

// some function that starts the game
function startGame(){
    timerCount = 20;
    startTimer();
}

//function that starts the timer
function startTimer(){
    timer = setInterval(function() {
        timerCount --;
        timerElementEl.textContent = timerCount;
        if (timerCount <= 0) {
            clearInterval(timer);
            gameOver();
    }
        // if (wrongAnswer === true) {
        //     timerCount -= 10;
        // }
        //needs something where if you pick the wrong answer it subtracts time
        //needs something where if timer hits 0 it's game over 
    }, 1000);
    //nextQuestion();
    //if (correctAnswer === true {
    // nextQuestion(); }
    nextQuestion();
}

// function nextQuestion (quizQuestions){
//     // var randomQuestion = quizQuestions.question[Math.floor(Math.random() * quizQuestions.length)];
//     // quizQuestionsEl.innerHTML = randomQuestion.textContent();
//     for(i = 0; i < quizQuestions; i++) {
//     }
//     var questionText = document.createElement("li");
//     //for (i = 0; i < quizQuestions.length; i++){
//     //}
//     //quizQuestions.question = quizQuestions.textContent(i);
//     //whenever you click an answer it will call the next question
// }
function nextQuestion() {
    var questionText = document.querySelector(".quizQuestions");
    questionText.textContent = quizQuestions[questionIndex].question; 

    document.querySelector("#answer1").textContent = quizQuestions[questionIndex].choice1;
    document.querySelector("#answer2").textContent = quizQuestions[questionIndex].choice2;
    
}

function checkAnswer(event) {
    if (event.target.id === quizQuestions[questionIndex].correctAnswer) {
        //this is where I'll say "nice" for getting the answer right


        // console.log ("anything I want");
        // return event.target.id;

        //^^^ this broke the code because when I wanted to console log, I needed to return the value that the console was supposed to log.

        //this returns what answer I clicked
    } else {
        //display thing that says "bad"

        timerCount -=10;
        // this updates the timer from the initial or current value by subtracting by 10. If i put a normal minus sign, it won't work because it's not telling the timer to do anything.
    }

    if (questionIndex >= quizQuestions.length - 1) {
        gameOver();

    }  else {
    //if answer___ is equal to the correct answer, then increment the question index otherwise 
    // i click on a particular button, the value associated with that particular button is equal to quizQuestions[questionIndex].correctAnswer
    questionIndex ++;
    
    nextQuestion();
    }

    // if()

    console.log(event.target.id);
    // console.log(quizQuestions.length);
    // console.log(questionIndex);
    console.log(quizQuestions[questionIndex].correctAnswer);
    
}

document.querySelector(".quizAnswers").addEventListener("click", checkAnswer);
// document.querySelector("#answer2").addEventListener("click", checkAnswer);
    // i need a function to check that the answer is true or false and then return the value and move to the next question
    // and then if the value is false, subtract time from the timeCount, and if true just move to the next question
    //

    // the query selector should be pointing to a dom element as such
    //choice1.addEventListener("click",) ;//the function that checks if the choice was true or false )




    //if (asdfasdf === true) {
        //if true then nextQuestion()
        //if false -10 seconds from timer
    //}

    // var choice1Value = quizQuestions [questionIndex].choice1
    // var choice2Value = quiz

    //addEventListener("click" );


    //if correctAnswer = false {
        //decrement timer
    //}



    


// function() {



// }

function gameOver(){
    var score = timerCount;

    clearInterval(timer)
    // var 
    // document.createElement("")
    console.log("you lose");
    document.querySelector("#answer1").textContent = "";
    document.querySelector("#answer2").textContent = "";
    document.querySelector(".quizQuestions").textContent = "YOU LOSE";
// should change text content of h1 tag to GAME OVER
// has localStorage displayed for when the player enters their initials per win
// includes start button again
}




startButtonEl.onclick = function() {
    console.log("game is on");
}

//start button click begins the game
startButtonEl.addEventListener("click", startGame);

//event target to check if button is a win or loss