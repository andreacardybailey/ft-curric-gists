'use strict';
/**
PLEASE LOOK AT THESE SOLUTIONS *ONLY* AFTER YOU HAVE COMPLETED
THE DRILLS TO COMPARE YOUR METHOD.  
 **/

// Functions as arguments (1)
function repeat(fn, n) {
  for (let i=0; i<n; i++) {
    fn();
  }
}

function sayHello() {
  console.log('Hello');
}

repeat(sayHello, 10);


// Functions as arguments (2)
function filter(arr, fn){
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];
    if (fn(currentElement)) {
      newArr.push(currentElement);
    }
  }
  return newArr;
}
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// bonus one-liner:
console.log(filter(myNames, name => name[0] === 'R'));

// Functions as return values
function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;
  return location => {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    // console.log(`The ${typeOfWarning} has triggered ${warningCounter} times.`);
    // bonus:
    console.log(`The ${typeOfWarning} has triggered ${warningCounter} ${warningCounter === 1 ? 'time' : 'times'}.`);
  };
}
const rocksWarning = hazardWarningCreator('Rocks on the Road');
const manholeWarning = hazardWarningCreator('Manhole Cover Uncovered');
const godzillaWarning = hazardWarningCreator('Godzilla on the Loose');

rocksWarning('Main St');
rocksWarning('Smith Ave');
godzillaWarning('King\'s Road');

// forEach, filter, map
let movements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
movements = movements.filter(movement => movement[0] >= 0 && movement[1] >= 0);

let distances = movements.map(movement => movement[0] + movement[1]);

distances.forEach(distance => {
  console.log(distance);
});

// reduce
const words = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

const wordsAry = words.split(' ');
const decoded = wordsAry.reduce((decodedString,word) => {
  if(word.length === 3) {
    return decodedString + ' ';
  }
  else {
    return decodedString + word[word.length-1].toUpperCase();
  }
}, '');

console.log(decoded);

// example of initialValue:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#examples