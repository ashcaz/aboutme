'use strict';

/* Greeting the User*/

var userName = prompt('What is your name?');

alert('Hi ' + userName + '! Welcome to my about me site!');

//esablish a counter for correct answers
var counter = 0;

//prompt question 1
function askWhereFrom (){
  var whereFrom = prompt('Am I from New Jersey?').toLowerCase();

  /* If-else statement for correct answer*/

  if(whereFrom === 'yes'|| whereFrom === 'y'){
    alert('You are correct!! You sure do pay attention!');
    counter++;
  }else if (whereFrom === 'no'|| whereFrom === 'n'){
    alert('WRONG!');
  }else {
    alert('Whoops! You should probably answer using yes or no');
  }
}
askWhereFrom();

//prompt question 2
function askDegree(){
  var degree = prompt('Is my degree in computer science?').toLowerCase();

  /* If-else statement for correct answer*/

  if(degree === 'yes'|| degree === 'y'){
    alert('Are you sure??');
  }else if (degree === 'no' || degree === 'n'){
    alert('Absolutely right! I have a Biology dgree!');
    counter++;
  }else {
    alert('Please answer using yes or no');
  }
}
askDegree();

//prompt question 3
function askNavy(){
  var navy = prompt('Did I join the Marines?').toLowerCase();

  /* If-else statement for correct answer*/

  if(navy === 'yes'|| navy === 'y'){
    alert('A Jarhead I was not');
  }else if (navy === 'no' || navy === 'n'){
    alert('You are good at this. I joined the worlds greatest Navy! Hooyah!!');
    counter++;
  }else {
    alert('Please answer using yes or no');
  }
}
askNavy();

//prompt question 4
function askJob(){
  var job = prompt('Do I work for Amazon?').toLowerCase();

  /* If-else statement for correct answer*/

  if(job === 'yes'|| job === 'y'){
    alert('I do not work at Amazon...yet');
  }else if (job === 'no' || job === 'n'){
    alert('Way to Go! You are correct. I work for Oracle Cloud Infastructure.');
    counter++;
  }else {
    alert('Please answer using yes or no');
  }
}
askJob();

//prompt question 5
function askGoal(){
  var goal = prompt('Is my #1 Goal is to graduate Code Fellows?').toLowerCase();

  /* If-else statement for correct answer*/

  if(goal === 'yes'|| goal === 'y'){
    alert('HELL YES it is!!!');
    counter++;
  }else if (goal === 'no' || goal === 'n'){
    alert('Hmmmmmmm...lets think about this one again');
  }else {
    alert('Please answer using yes or no');
  }
}
askGoal();

//Question 6

function askAge(){
  var correctAge = false;
  var userAttempts = 0;

  while (correctAge === false && userAttempts < 4){

    var age = prompt(userName + ', how old do you think I am?');

    if (age === '32') {
      alert('I know, I know. I don\'t look 32. But your guess is correct');
      correctAge = true;
      counter++;
    }
    else if (age > '32'){
      alert( 'Wow! You think i\'m that old?!? Try something lower.');
    }
    else if (age < '32'){
      alert ('I\'m flattered! But you should guess higher.');
    }

    userAttempts++;
  }

  if (correctAge === false && userAttempts === 4){
    alert('Oh No! You guessed too many times. I\'m 32 years old.');
  }
}
askAge();

//Question 7

//Put the 6 states I lived in other than Washington are placed into an Array
function askStatesLivedIn(){
  var statesLivedIn = ['new york','new jersey','california', 'florida', 'conneticut', 'mississippi'];

  //Create a For loop that allows the user to attempt 6 answers
  for(var i = 0; i < 6; i++){

    //prompt the user for an answer
    var statesUserAnswer = prompt('Can you name a state I have lived in other than Washington?').toLowerCase();

    if(statesUserAnswer === statesLivedIn[0]){
      alert('Wow! That was a good guess! I have lived in that state! I have also lived in New Jersey, Cailifornia, Florida, Conneticut and Mississippi.');
      counter++;
      break;
    }
    else if(statesUserAnswer === statesLivedIn[1]){
      alert('Wow! That was a good guess! I have lived in that state! I have also lived in New York, Cailifornia, Florida, Conneticut and Mississippi.');
      counter++;
      break;
    }
    else if(statesUserAnswer === statesLivedIn[2]){
      alert('Wow! That was a good guess! I have lived in that state! I have also lived in New York, New Jersey, Florida, Conneticut and Mississippi.');
      counter++;
      break;
    }
    else if(statesUserAnswer === statesLivedIn[3]){
      alert('Wow! That was a good guess! I have lived in that state! I have also lived in New York, New Jersey, California, Conneticut and Mississippi.');
      counter++;
      break;
    }
    else if(statesUserAnswer === statesLivedIn[4]){
      alert('Wow! That was a good guess! I have lived in that state! I have also lived in New York, New Jersey, California, Florida and Mississippi.');
      counter++;
      break;
    }
    else if(statesUserAnswer === statesLivedIn[5]){
      alert('Wow! That was a good guess! I have lived in that state! I have also lived in New York, New Jersey, California, Florida and Conneticut.');
      counter++;
      break;
    }
    else {
      if(i !== 6){
        alert('Nope! Try again!');
      }
    }
  }
  if(i === 6){
    alert('You had too many attempts. I have lived in New Jersey, New York, Conneticut, Mississippi, Florida and California!');
  }
}
askStatesLivedIn();

alert('Thank you for playing and taking the time to get to know me. You got ' + counter + ' out of 7 questions right! See you again soon ' + userName + '!');
