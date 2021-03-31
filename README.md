# CodequizHW


The purpose 

## Getting Started

I started a fresh repo and started generating all my files, then I started pseudocoding and taking notes about what functions and steps I needed to take in order to solve the problem. A lot of the functions I thought about were deeper on a conceptual level than I was used to and I had to make a lot of variables in order for the pieces to actually interact with each other as well as thinking about a plan of attack and changing my ideas while coming up with the code to make my ideas operate.

### Prerequisites

In order to accomplish the goal of this assignment, I had to use VSCode for the HTML but particularly JavaScript as well as Gitbash for moving files between my repository and local machine. I also used Github to create the repository that I was sending to. This assignment also called for CSS for styling the elements that I appended and created via javascript in the HTML.

### Solving

I honestly wouldn't even consider this assignment truly solved because there are several features that I intended to create that I either: didn't have enough time to experiment with after so much time was spent on debugging or asking for help with trying to go from pseudocode to actual code, or that I straight up didn't know how to use my current tool/skillset to implement them. Regardless I did the best that I could and the things I thought about are as follows. I thought about my variable declaration and how I could have certain elements of my HTML controlled by my javascript functions, creating an array of questions and deciding to simplify the prompt by creating true or false questions and answers, having a working timer and a method of decrementing the timer based on which question answer was chosen, having a way to select my elements on the page via click, tracking the value of the answer that was clicked on via event.target.id, a function that determines if the game is over either by the timer reaching zero or the last question being asked. Something that I didn't get to fully realize was the high scores but I wanted to have a text box element created on the game over screen that stored the remaining time as the score and the initials as the user in the local storage that could be called on whenever the game over screen would be reached but I just didn't have enough time to try to make it work. Also wanted to add additional styling as well as fix some known bugs such as:

1. Answers are clickable before and after game starts because the li elements were not created or removed via javascript function (to solve this I would've included both of these pieces in the function that calls next question so that they're created during that function and on the gameover screen they're removed)
2. Question index can be altered while on the game over screen ( this is just a symptom of the first problem but I thought it was interesting to include)
3. Start button not styled to appear larger in the middle of the page (for some reason that button just wouldn't style and I'm not sure if it's because the button wasn't created via javascript or if it was the location of the button in the HTML or maybe that buttons can't be styled by conventional means)
4. Timer count isn't always representative or responsive to what it should be ( this probably just has to do with the way the timer decrements and the start count not matching the appended text)



## Technologies Used

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [JS](https://www.javascript.com/)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Deployed Link

* [https://tmpeeler.github.io/CodequizHW/](#)

## Code snippet of important work:
Probably my favorite and what I believe to be my most creative "solution" to the criteria of the prompt:
var quizQuestions = [
    {
        question: "Which color is my favorite?",
        choice1: "blue",
        choice2:  "red",
        correctAnswer: "answer1" 
    },
    ----- and -----

function nextQuestion() {
    var questionText = document.querySelector(".quizQuestions");
    questionText.textContent = quizQuestions[questionIndex].question; 

    document.querySelector("#answer1").textContent = quizQuestions[questionIndex].choice1;
    document.querySelector("#answer2").textContent = quizQuestions[questionIndex].choice2;
    
}

using both of these ideas in tandem to actual accomplish part of the assignment felt very satisfying and whether I felt that I did or did not grasp every concept presented with the assignment, I feel that I actually learned a lot about logistical thinking and how to express myself more computationally

## Picture of website currently deployed

![screenshot](codeQuizHWScreenshot.png);

## Authors

* **Thomas Peeler** 

- [https://github.com/TMPeeler/CodequizHW]

## Acknowledgments

* Super big thanks to Dylan for helping me along the logistical path I needed to understanding what I was doing with my work and why. Incredibly helpful for this assignment and I honestly don't think I would have felt I learned so much without his assistance. Also special thanks to Mahi for helping me find the syntax for the tools that I wanted to use so that my code would have a basis for me to work on, that really helped me understand how to setup my problems better so that I would have an easier time coming up with the language and deciding which tools I wanted to use to solve my problem.