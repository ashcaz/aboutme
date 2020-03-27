'use strict';

/* Greeting the User*/

var userName = prompt('What is your name?');
console.log('This is the answer to username promt: ' + userName);
alert('Hi ' + userName + '! Welcome to my about me site!');

/*First part of the code should be a button that they click when they are ready to take the quiz*/

/*The button should then prompt the set of questions to run*/
var whereFrom = prompt('Am I from New Jersey?').toLowerCase();//prompt question 1

console.log('This is the answer to whereFrom promt: ' + whereFrom);

/* If-else statement for correct answer*/

if(whereFrom === 'yes'|| whereFrom === 'y'){
  alert('You are correct!! You sure do pay attention!');
}else if (whereFrom === 'no'|| whereFrom === 'n'){
  alert('WRONG!');
}else {
  alert('Whoops! You should probably answer using yes or no');
}

var degree = prompt('Is my degree in computer science?').toLowerCase(); //prompt question 2

console.log('This is the answer to degree promt: ' + degree);

/* If-else statement for correct answer*/

if(degree === 'yes'|| degree === 'y'){
  alert('Are you sure??');
}else if (degree === 'no' || degree === 'n'){
  alert('Absolutely right! I have a Biology dgree!');
}else {
  alert('Please answer using yes or no');
}


var navy = prompt('Did I join the Marines?').toLowerCase(); //prompt question 3

console.log('This is the answer to navy promt: ' + navy);

/* If-else statement for correct answer*/

if(navy === 'yes'|| navy === 'y'){
  alert('A Jarhead I was not');
}else if (navy === 'no' || navy === 'n'){
  alert('You are good at this. I joined the worlds greatest Navy! Hooyah!!');
}else {
  alert('Please answer using yes or no');
}


var job = prompt('Do I work for Amazon?').toLowerCase(); //prompt question 4

console.log('This is the answer to the job promt: ' + job);

/* If-else statement for correct answer*/

if(job === 'yes'|| job === 'y'){
  alert('I do not work at Amazon...yet');
}else if (job === 'no' || job === 'n'){
  alert('Absolutely right! I have a Biology dgree!');
}else {
  alert('Please answer using yes or no');
}


var goal = prompt('Is my #1 Goal is to graduate Code Fellows?').toLowerCase(); //prompt question 5

console.log('This is the answer to the goal promt: ' + goal);

/* If-else statement for correct answer*/

if(goal === 'yes'|| goal === 'y'){
  alert('HELL YES it is!!!');
}else if (goal === 'no' || goal === 'n'){
  alert('Hmmmmmmm...lets think about this one again');
}else {
  alert('Please answer using yes or no');
}

alert('Thank you ' + userName + ' for playing and taking the time to get to know me. See you again soon!');
