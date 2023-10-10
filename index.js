// Take input user's name
const readlineSync = require('readline-sync');
var userName = readlineSync.question("May I know your name ?");

// Welcome user
console.log("Hello! , "+ userName +" Welcome to 'The Big Bang Theory' game.");
console.log("Let's see, how well you know the sitcom.");

//Quiz Bank
var state = [{
  question:"What is protagonist's Middle Name? ",
  answer:"Lee",
},
{
  question:"What is protagonist's favourite show? ",
  answer:"Star Wars",
},
{
  question:"What is protagonist's sister's Name? ",
  answer:"Melissa",
},
{
  question:"What is protagonist's Best friend's Name? ",
  answer:"Leonard",
},
{
  question:"What is protagonist's Wife's Name? ",
  answer:"Amy",
}]

//High scores
var highScores = [{
  player:'Mohit',
  score:1,
}]



function play(userName,state,highScores){
 score=0;var score;
  
// loop to run quiz
  for(i=0;i<state.length;i++){
    // var readlineSync = require('readline-sync');
    userAnswer = readlineSync.question(state[i].question);
    if(state[i].answer.toUpperCase() === userAnswer.toUpperCase()){
      console.log("Right!!!");
      score++;
    }
    else{
      console.log("Wrong!!!");
      score--;
    }
  }

// player record
var player = {
  player:userName,
  score:score,
}

// loop to display result
  for(i=0;i<highScores.length;i++){
    if(highScores[i].score > score){
      console.log("Hey " + userName + " your score is "+ score);
      console.log("Thanks for playing! ");
    }
    else if(highScores[i].score == score){
      highScores.push(player);
      console.log(highScores);
      console.log("Congratulations!!! You have a new high score.");
      break;
    }
    else{
      highScores.pop();
      highScores.push(player);
      console.log(highScores);
      console.log("Congratulations!!! You have the highest score.");
    }
  }
}

play(userName,state,highScores);
