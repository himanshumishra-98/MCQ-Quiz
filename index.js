
const readlineSync = require ("readline-sync");

const chalk = require("chalk");

let score = 0;

console.log(chalk.blue.bold("Welcome to Himanshu's WebDev quiz"));

quiz = [{
  options : ['Hyperlink and Text Markup Language', 'Hyper Text Markup Language', 'High Technology Markup Language', 'Hyper Transfer Markup Language'],

  question : 'What does HTML stand for?',

  correctAns : 'Hyper Text Markup Language'
},
        {
  options : ['HTML', 'CSS', 'JavaScript', 'Python'],

  question : 'Which programming language is commonly used for adding interactivity to web pages?',

  correctAns : 'JavaScript'
},
        {
  options : ['Central Style Sheets', 'Computer Style Sheets', 'Cascading Style Sheets', 'Complete Style Sheets'],

  question : 'What does CSS stand for in web development?',

  correctAns : 'Cascading Style Sheets'
   
},
         {
  options : ['200 OK', 'Computer Style Sheets404 Not Found', '500 Internal Server Error', '302 Found'],

  question : ' Which HTTP status code indicates a successful response for a GET request in web development?',

  correctAns : '200 OK'
   
}
]


function play(question, options, correctAns) {

  index = readlineSync.keyInSelect(options, question);

  let selAns = options[index];

  if(selAns===correctAns){
    console.log(chalk.green("Right"));
    score += 1;
  }else{
    console.log(chalk.red("Wrong"));
  }

}

for(let i=0; i<quiz.length; i++) {
  let currQuiz = quiz[i];
  play(currQuiz.question, currQuiz.options, currQuiz.correctAns);
}

console.log("Wow! Your Final score is :",chalk.yellow.bold(score));

console.log(chalk.yellow("Thanks for playing..."));

