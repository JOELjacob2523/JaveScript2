//Declare and initilize variables
let howOldAreYou;
let invalidInput;
const minimumAge = 21;
const WELCOME_MESSAGE = `Welcome To The Kosher Wine Cellar!
You must be over ${minimumAge} years to purchase on our site!`;

alert(WELCOME_MESSAGE);

let age = prompt('Please Enter Your Age');

console.log(typeof age);

isNaN(age);

age = +age;

console.log(typeof age);

if (isNaN(age)) {
    alert('You have entered an invalid input!');
    throw 'INVALID_INPUT';
}

if (age >= minimumAge) {
    alert(`You are welcome to purchase on our site!`);
} else {
    alert(`Sorry! You are underage!`)
}