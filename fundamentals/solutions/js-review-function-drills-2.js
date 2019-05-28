'use strict';

function jediName(firstName,lastName) {
  return `${firstName} ${lastName}`;
}
console.log(jediName('Andrea','Bailey'));

function beyond(num) {
  let response;
  if(!isFinite(num)){
    response = 'And beyond';
  }
  else if(num > 0){
    response = 'To infinity';
  }
  else if(num < 0) {
    response = 'To negative infinity';
  }
  else {
    response = 'Staying home';
  }
  console.log(response);
}
beyond(0);

// Cracking the Code
function decode(word) {
  switch(word[0]) {
  case 'a':
    return word[1];
  case 'b':
    return word[2];
  case 'c':
    return word[3];
  case 'd':
    return word[4];
  default:
    return ' ';
  }
}

const result = `${decode('craft')}${decode('block')}${decode('argon')}${decode('meter')}${decode('bells')}${decode('brown')}${decode('croon')}${decode('droop')}`;
console.log(result);

// alternate solution
function decodeWords(words) {
  return words
    .split(' ')
    .map(word => decode(word))
    .join('');
}
console.log(decodeWords('craft block argon meter bells brown croon droop'));

function daysInAMonth(month, leapYear) {
  let numOfDays;

  switch(month) {
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    numOfDays = 31;
    break;

  case 'September':
  case 'April':
  case 'June':
  case 'November':
    numOfDays = 30;
    break;
    
  case 'February':
    numOfDays = leapYear ? 29 : 28;
    break;

  default:
    throw new Error('Must provide a valid month.');
  }

  return `${month} has ${numOfDays} days.`;
}

console.log(daysInAMonth('September',false));

function rockPaperScissors(playerGuess) {
  
  // Helper function to return the word that matches the numeric guess. It also does 
  // necessary input validation, throwing an error if input is invalid.
  function numToWord(num) {
    switch(num) {
    case 1:
      return 'rock';
    case 2:
      return 'scissors';
    case 3:
      return 'paper';
    default:
      throw new Error('Must pick number between 1-3');
    }
  }

  // Get the random AI guess
  const aiGuess = Math.floor(Math.random() * 3) + 1;

  // Create some variables to hold the word format of the numeric guess
  const playerWord = numToWord(playerGuess);
  const aiWord = numToWord(aiGuess);

  // Check for tie first
  if (playerGuess === aiGuess) {
    return `It's a tie! Both players guessed ${playerWord}.`;

  // Check the three win cases for Player
  } else if (
    (playerGuess === 1 && aiGuess === 2) ||
    (playerGuess === 2 && aiGuess === 3) ||
    (playerGuess === 3 && aiGuess === 1)
  ) {
    return `Player wins! Player had ${playerWord} against ${aiWord}`;

  // Otherwise, AI wins
  } else {
    return `AI wins! AI had ${aiWord} against ${playerWord}.`;
  }
}
console.log(rockPaperScissors(2));