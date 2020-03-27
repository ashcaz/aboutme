'use strict';

/* Greeting the User*/

var userName = prompt('What is your name?');
console.log('This is the answer to username promt: ' + userName);
alert('Hi ' + userName + '!');

/*First part of the code should be a button that they click when they are ready to take the quiz*/

/*The button should then prompt the set of questions to run*/
var a = prompt('Am I from New Jersey?').toLowerCase();//prompt question 1

console.log(a);

/* If-else statement for correct answer*/

if(a === 'yes'|| a === 'y'){
  alert('You are correct!! You sure do pay attention!');
}else if (a === 'no'|| a === 'n'){
  alert('WRONG!');
}else {
  alert('Whoops! You should probably answer using yes or no');
}

var b = prompt('Is my degree in computer science?').toLowerCase(); //prompt question 2

/* If-else statement for correct answer*/

if(b === 'yes'|| b === 'y'){
  alert('Are you sure??');
}else if (b === 'no' || b === 'n'){
  alert('Absolutely right! I have a Biology dgree!');
}else {
  alert('Please answer using yes or no');
}
console.log(b);

var c = prompt('Did I join the Marines?').toLowerCase(); //prompt question 2
/* If-else statement for correct answer*/

if(c === 'yes'|| c === 'y'){
  alert('A Jarhead I was not');
}else if (c === 'no' || c === 'n'){
  alert('You are good at this. I joined the worlds greatest Navy! Hooyah!!');
}else {
  alert('Please answer using yes or no');
}
console.log(c);

var d = prompt('Is my degree in computer science?').toLowerCase(); //prompt question 2
/* If-else statement for correct answer*/

if(d === 'yes'|| d === 'y'){
  alert('Are you sure??');
}else if (d === 'no' || d === 'n'){
  alert('Absolutely right! I have a Biology dgree!');
}else {
  alert('Please answer using yes or no');
}
console.log(d);

var e = prompt('Is my #1 Goal is to graduate Code Fellows?').toLowerCase(); //prompt question 2
/* If-else statement for correct answer*/

if(e === 'yes'|| e === 'y'){
  alert('HELL YES it is!!!');
}else if (e === 'no' || e === 'n'){
  alert('Hmmmmmmm...lets think about this one again');
}else {
  alert('Please answer using yes or no');
}
console.log(e);