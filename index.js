const chalk = require('chalk');
var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("Enter Your Name : ");

console.log("Welcome "+ chalk.underline.bgBlue(userName));


// data of high score
var highScores = [
  {
    name: "San",
    score: 5,
  },

  {
    name: "Suri",
    score: 4,
  },
]

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Correct!");
    score = score + 1;
    
  } else {
    console.log("Oops!");
   
  }

  console.log("Current score: ", score);
}

var questions = [{
  question: "What is my last name? ",
  answer: "Sarangapani"
}, {
  question: "What is my favourite series? ",
  answer: "Friends"
},
{
  question: "How old am I? ",
  answer: "23"
},
{
  question: "What is my major in engineering? ",
  answer: "mechanical"
},
{
  question: "What is my favourite food? ",
  answer: "biryani"
}];

for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
  
  if (i < ((questions.length)-1)){
    console.log("Next Question");
  }
  
}

console.log("Your final score: ", score);
