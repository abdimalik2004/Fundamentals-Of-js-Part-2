/*
// LECTURE 32 Strict mode 
'use strict';
let hasDriverLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true;
if(hasDriverLicense) console.log('I can drive');
// const interface = 'Auto';
// const private = 23;
// these some of reserved words that in future will add in js

// LECTURE 33. Functions
function logger() {
    console.log('my name is Abdimalik');
}
// calling/ runing / invoking function
logger();
logger();
logger();
function fruit(apples, oranges) {
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}
const applejuice = fruit(5, 0);
console.log(applejuice);
const appleOrangeJuice = fruit(2, 4);
console.log(fruit(2, 4));

const num = Number(18);
console.log(num);

// LECTURE 34. Function Declarations vs. Expressions
// function declaration
function calcAge1(birthyear) {
    return 2023 - birthyear;
}
const age1 = calcAge1(2004);
console.log(age1);
// function expression
const calcAge2 = function (birthyear) {
    return 2023 - birthyear;  
}
const age2 = calcAge2(2004);
console.log(age2);

// LECTURE 35: Arrow Functions
const calcAge2 = function (birthyear) {
    return 2023 - birthyear;  
}
// Arrow function 
const calcAge3 = birthyear => 2023 - birthyear;
const age3 = calcAge3(2004);
console.log(age3);

const yearsUntillRetirement = (birthyear, fristName) => {
    const age = 2023 - birthyear;
    const retirement = 65 - age;
    // return retirement;
    return `${fristName} retires in ${retirement} years`
}

console.log(yearsUntillRetirement(2004, 'Abdimalik'));
console.log(yearsUntillRetirement(2005, 'Asiya'));

// LECTURE  36: Functions Calling Other Functions
function cutFruitPieces(fruit) {
    return fruit * 5;
}

function fruit(apples, oranges) {

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;
}

console.log(fruit(2, 3));

// LECTURE 37: Reviewing Functions

const calcAge = function (birthyear) {
    return 2023 - birthyear;
}
const yearsUntillRetirement = function (birthyear, fristName) {
    const age = calcAge(birthyear);
    const retirement = 65 - age;
    if(retirement > 0) {
        console.log(`${fristName} retire in ${retirement} years`);
        return retirement;

    } else {
        console.log(`${fristName} has already retired`);
        return - 1;
    }
}

console.log(yearsUntillRetirement(2004, 'Abdimalik'));
console.log(yearsUntillRetirement(1950, 'Asiya'));

// LECTURE 39. Introduction to Arrays
const friend1 = 'Ibrahim';
const friend2 = 'Iraad';
const friend3 = 'Yuusuf';

const friends = ['Ibrahim', 'Iraad', 'Yuusuf'];
console.log(friends);

const years = new Array (1991, 200, 2004, 2023);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends.length - 1);

friends[2] = 'Garad';
console.log(friends);

const Abdimalik = ['Abdimalik', 'Abdirahman', 2023 - 2004, 'Coder', friends];
console.log(Abdimalik);
console.log(Abdimalik.length);
const calcAge = function (birthyear) {
    return 2023 - birthyear;
}
const years1 = [1990, 1967, 2002, 2018, 2020];
const age1 = calcAge(years1[0]);
const age2 = calcAge(years1[1]);
const age3 = calcAge(years.length - 1);
console.log(age1, age2, age3);
const ages = [calcAge(years1[0]), calcAge(years1[1], calcAge(years1[years1.length - 1]))];

// LECTURE 40. Basic Array Operations (Methods)
const freinds = ['Ibrahim', 'Iraad', 'Yuusuf'];
// push method adds element to the end of the array
const newLength=  freinds.push('Abdiii');
console.log(freinds);
console.log(newLength);
// unshift method adds elemnt to the frist of the array
freinds.unshift('Abdi');
console.log(freinds);

// removes the last elements at  the end of the array
const popped = freinds.pop();
console.log(freinds);
console.log(popped);

// shift method removes the frist element of the array
const unshifted = freinds.shift();
console.log(unshifted);
console.log(freinds);
freinds.push(19);
console.log(freinds.indexOf('Iraad'));
console.log(freinds.includes(19));
console.log(freinds.includes('Abdiii'));

if (freinds.includes('Abdi')) {
    console.log('Woo ku jira');
} else {
    console.log('kuma jiro');
}

// LECTURE 42. Introduction to Objects
const abdimalik = {
    firstName: 'Abdimalik',
    lastName: 'Abdirahman',
    age: 2023 - 2004,
    job: 'Teacher',
    freinds: ['Ibra', "Iraad"]
};
console.log(abdimalik);

// LECTURE 43. Dot vs. Bracket Notation
const abdimalik = {
    firstName: 'Abdimalik',
    lastName: 'Abdirahman',
    age: 2023 - 2004,
    job: 'Teacher',
    freinds: ['Ibra', "Iraad", "abdii"]
};
// console.log(abdimalik);
console.log(abdimalik.lastName);
console.log(abdimalik['lastName']);

const nameKey = 'Name';
console.log(abdimalik['first' + nameKey]);
console.log(abdimalik['last' + nameKey]);

// console.log(abdimalik.'last' + nameKey);
// const interestedIn = prompt('What do you want to know about abdimalik? choose between firstname, lastname,age,job,friends');
// console.log(abdimalik[interestedIn]);

// if(abdimalik[interestedIn]) {
//     console.log(abdimalik[interestedIn]);
// } else {
//     console.log('Wrong request! choose between firstname, lastname,age,job,friends')
// }

abdimalik.location = 'Somalia';
abdimalik['twitter'] = '@AbdimalikMahad1';
console.log(abdimalik);

console.log(`${abdimalik.firstName} has ${abdimalik.freinds.length} friends, and his best freind is called ${abdimalik.freinds[0]}`);

// LECTURE 44. Object Methods
const abdimalik = {
    firstName: 'Abdimalik',
    lastName: 'Abdirahman',
    birthyear: 2004,
    job: 'Teacher',
    freinds: ['Ibra', "Iraad", "abdii"],
    hasDriverslicence: true,

    // calcAge: function(birthyear) {
    //     return 2023 - birthyear;
    // }

    // calcAge: function() {
    //     // console.log(this);
    //     return 2023 - this.birthyear;
    // }
    calcAge: function() {
        this.age = 2023 - this.birthyear;
        return this.age;
    },
    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${abdimalik.job}, and he has ${this.hasDriverslicence ? 'a' : 'no'} drivers license.`
    }
};
console.log(abdimalik.calcAge());
console.log(abdimalik.age); // Output 19;
console.log(abdimalik.age); // Output 19;
console.log(abdimalik.age); // Output 19;
console.log(abdimalik.getSummary());
// console.log(abdimalik['age'](2004)); // Output 19;
console.log(`${abdimalik.firstName} is a ${abdimalik.calcAge()}-year old ${abdimalik.job}, and he has ${abdimalik.hasDriverslicence ? 'a' : 'no'} drivers license`);

// LECTURE 46. Iteration: The for Loop
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4 ');
// for loop keeps running while condition is true
for(let rep = 1; rep <= 10; rep++ ) {
    console.log(`Lifting weights repetition ${rep}`);
};

// LECTURE 47. Looping Arrays, Breaking and Continuing
const abdimalik = [
    'Abdimalik',
    'Abdirahman',
    2023 - 2004,
    'Teacher',
    ['Ibra', "Iraad", 'Yuusuf'],
    true
];
const types = [];
for (let i = 0; i < abdimalik.length ; i++) {
    console.log(abdimalik[i],typeof abdimalik[i]);
    // types[i] = typeof abdimalik[i];
    types.push(typeof abdimalik[i])
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];
for(let i = 0; i < years.length; i++) {
    ages.push(2023 - years[i]);
}
console.log(ages);

// continue and break
console.log('------ONLY STRINGS----');
for (let i = 0; i < abdimalik.length ; i++) {
    if(typeof abdimalik[i] !== 'string') continue;
    console.log(abdimalik[i],typeof abdimalik[i]);
};

// continue and break
console.log('------BREAK WITH NUMBER----');
for (let i = 0; i < abdimalik.length ; i++) {
    if(typeof abdimalik[i] === 'number') break;
    console.log(abdimalik[i], typeof abdimalik[i]);
};

// LECTURE 48. Looping Backwards and Loops in Loops
const abdimalik = [
    'Abdimalik',
    'Abdirahman',
    2023 - 2004,
    'Teacher',
    ['Ibra', "Iraad", 'Yuusuf'],
    true
];
for(let i = abdimalik.length - 1; i >= 0; i-- ) {
    console.log(i, abdimalik[i]);
}

for(let exercise = 1; exercise <4; exercise++) {
    console.log(`---------Strating exercise ${exercise} `);

    for(let rep = 1; rep < 6; rep++){
        console.log(`Exercise ${exercise} Lifting weight repetition ${rep} 💪`)
    }
};
*/
// LECTURE 49. The while Loop
for(let rep = 1; rep <= 10; rep++ ) {
    console.log(`Lifting weights repetition ${rep}`);
};
let rep = 1; 
while (rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
};

let dice =Math.trunc(Math.random() * 6) +1;
console.log(dice);

while (dice !== 6) {
    console.log(`you rolled a ${dice}`);
    dice =Math.trunc (Math.random() * 6) + 1;
    if(dice === 6) console.log(`Loops is about to end`);
}