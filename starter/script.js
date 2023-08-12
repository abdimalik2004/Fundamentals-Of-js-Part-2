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
*/
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