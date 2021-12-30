//import chalk from 'chalk';
var chalk = require("chalk")
var readLine = require("readline-sync");
//console.log("Welcome");
var highScores = [
  {name: "Edu",
  score:5},
  {name: "Sankar",
  score:5}
]
var userName = readLine.question("May I have your name? ");
var score = 0;
console.log(chalk.bgBlue('Hi '+chalk.white.bold(userName)+ ', Let\'s play a quiz on India...'));
console.log("-------------------------------------");

function judge(que, opt, ans){
  console.log(que);
  userAns = readLine.keyInSelect(opt, "Choose from the above options", {cancel:false});

  if(userAns == ans-1){
    console.log(chalk.bgGreen.bold('Yes! You are right.'));
    score +=1;
  }
  else {
    console.log(chalk.bgRed.bold('No! You are wrong.'));
  }
  console.log('Your current score is: '+score);
  console.log('------------------------------------');
}

var questions = [
{ question: "The name India originates from which river?",
answer: 1,
options:["Indus", "Chenab", "Sutlej", "Ravi"]
},
{ question: "India's national sport is?",
answer: 2,
options:["Hockey", "None", "Wrestling", "Kabbadi"]
},
{ question: "The statue of unity is in which state?",
answer: 3,
options:["Kerala", "Punjab", "Gujarat", "Goa"]
},
{ question: "Who won the first individual gold medal for India in olympics?",
answer: 1,
options:["Abhinav Bindra", "Dhyanchand", "Neeraj Chopra", "PV Sindhu"]
},
{ question: "Yoga originated in which country?",
answer: 4,
options:["Russia", "USA", "China", "India"]
}
];


for(i =0; i<questions.length; i++){
  judge(questions[i].question,questions[i].options, questions[i].answer);
}

console.log("Your final score is: ", score);
for(i =0; i<highScores.length; i++){
  if(score>=highScores[i].score){console.log(chalk.bgYellow.italic("You set a new highscore!"))
  break;}
;}


