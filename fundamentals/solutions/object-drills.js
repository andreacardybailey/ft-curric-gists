'use strict';
// Object Initializers and Methods
const loaf = {
  flour: 300,
  water: 210,
  hydration: function () {
    return (this.water / this.flour) * 100;
  }
};
console.log('Hydration:', loaf.hydration());

// Iterating over an object's properties
const meta = {
  foo: 'scram',
  bar: 'whiskey',
  fum: 'giant',
  quux: 'steele',
  spam: 'van rossum'
};
for (let name in meta) {
  console.log(name, meta[name]);
}

// Arrays in objects
const hobbit = {
  meals: [
    'breakfast',
    'second breakfast',
    'elevenses',
    'lunch',
    'afternoon tea',
    'dinner',
    'supper'
  ]
};
console.log(hobbit.meals[3]);

// Arrays of objects
const staff = [
  { name: 'Roy', job_title: 'Off-And-On Again Guy' },
  { name: 'Moss', job_title: 'Nerd' },
  { name: 'Jen', job_title: 'IT manager' },
  { name: 'Reynholm', job_title: 'Large Ham' }
];
staff.forEach(employee => {
  console.log(employee.name, 'is the', employee.job_title);
});

// Properties that aren't there
const otherStaff = [
  { name: 'Roy', job_title: 'Off-And-On Again Guy', boss: 'Jen' },
  { name: 'Moss', job_title: 'Nerd', boss: 'Jen' },
  { name: 'Jen', job_title: 'IT manager', boss: 'Reynholm' },
  { name: 'Reynholm', job_title: 'Large Ham' }
];

otherStaff.forEach(employee => {
  if (!employee.boss) {
    console.log(
      employee.job_title,
      employee.name,
      'doesn\'t report to anybody.'
    );
  } else {
    console.log(employee.job_title, employee.name, 'reports to', employee.boss);
  }
});

// Cracking the Code
function decodeWords(words) {
  const cipher = {
    a: 2,
    b: 3,
    c: 4,
    d: 5
  };
  const wordsArray = words.split(' ');
  const decodedChars = wordsArray.map(word => {
    let charIndex;
    // if the first letter of the word 
    // is a key in 'cipher'...
    if (cipher[word[0]]) {
      charIndex = cipher[word[0]] - 1;
    }
    // if we have a value for charIndex, 
    // then return the letter at that index of 'word'
    // otherwise return ' '
    return charIndex ? word[charIndex] : ' ';
  });

  return decodedChars.join('');
}
console.log(decodeWords('craft block argon meter bells brown croon droop'));

// Functions with Lord Of The Rings
// Create the factory function:
function createCharacter(name, nickname, race, origin, attack, defense) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe() {
      console.log(`${name} is a ${race} from ${origin}.`);
    },
    evaluateFight(characterObj) {
      let dmgDealt = 0;
      let dmgReceived = 0;

      if (this.attack > characterObj.defense) {
        dmgDealt = this.attack - characterObj.defense;
      }

      if (this.defense < characterObj.attack) {
        dmgReceived = characterObj.attack - this.defense;
      }

      console.log(
        `Your opponent takes ${dmgDealt} damage and you receive ${dmgReceived} damage.`
      );
    }
  };
}

// Create array of characters:

const characters = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunedain', 6, 8),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5)
];

// Add character to array:
characters.push(
  createCharacter('Arwen Undomiel', 'arwen', 'Half-elf', 'Rivendell', 3, 5)
);

// Find character and call its `describe` method

characters.find(character => character.nickname === 'aragorn').describe();

// Create array of only hobbits:
const onlyHobbits = characters.filter(character => character.race === 'Hobbit');
console.log(onlyHobbits);

// Create array of only high attack characters:
const onlyHighAttack = characters.filter(character => character.attack > 5);
console.log(onlyHighAttack);

// Database Search
// This solution aims to perform the least iterations necessary for best performance, exiting a loop at earliest known moment where further searching is not necessary. It implements the continue and break keywords.
const findOne = function (arr, query) {
  // Iterates through array placing current element in locally scoped variable `hero`
  for (const hero of arr) {
    let assumeMatch = true;
    // loop through each key in `query` object
    for (const key in query) {
      // when first value in query[key] does NOT match hero[key]
      // break out of the loop and set assumeMatch = false
      if (query[key] !== hero[key]) {
        assumeMatch = false;
        break;
      }
    }
    // if failed to match, continue to next hero or exit loop if at last hero
    if (!assumeMatch) continue;
    // otherwise a match was found! return the hero
    return hero;
  }
  // heroes array was exited without a match so return null
  return null;
};

// Bonus Database Method
const Database = {
  store: {
    heroes: [
      /* {}, {}, {} */
    ]
  },

  findOne: function (query) {
    for (const hero of this.store.heroes) {
      let assumeMatch = true;

      for (const key in query) {
        if (query[key] !== hero[key]) {
          assumeMatch = false;
          break;
        }
      }

      if (!assumeMatch) continue;

      return hero;
    }

    return null;
  }
};
