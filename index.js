var readLine = require("readline-sync");
//console.log("Welcome");
var userName = readLine.question("May I have your name? ");
var score = 0;
console.log('Hi '+userName+ ', Welcome to Kaun mujhe kitna janta hai...');

function judge(que, ans){
  var userAns = readLine.question(que);

  if(userAns === ans){
    console.log('Yes! You are right.');
    score +=1;
  }
  else {
    console.log('No! Your are wrong.');
  }
  console.log('Your current score is: '+score);
  console.log('------------------------------------');
}

var questions = [{
  question: "What is my first pet's name? ",
  answer: "Ollie"
},
{
  question: "What do I enjoy the most? ",
  answer: "Playing outdoor"
},
{
  question: "What is my favorite sitcom? ",
  answer: "Friends"
},
{
  question: "What is my favorite color? ",
  answer: "Maroon"
},
{
  question: "Which car brand do I love? ",
  answer: "Audi"
}];


for(i =0; i<questions.length; i++){
  judge(questions[i].question, questions[i].answer);
}

console.log("Your final score is: ", score);


