/*
let js = 'amaizing';
console.log(3 + 4 + 5);
console.log('Allan');
console.log(43);

let myName = 'Allan';

console.log(myName);

//Assignment Lecture 1
//Declare variables

let myCountry = "Kenya";
let myContinent = "Africa";
let myCountryPopulation = 54000000


console.log(myCountry);
console.log(myContinent);
console.log(myCountryPopulation);


let javaScriptFun = true;
console.log(javaScriptFun);

console.log(typeof javaScriptFun);
console.log(typeof 23);
console.log(typeof "Allan");

javaScriptFun = 'YES';
console.log(typeof javaScriptFun);

//undefined variables
let year;
console.log(year);
console.log(typeof year);

year = 2021;
console.log(typeof year);


//let Keyword is used to define variables that will change later.Also used to declare undefined variables
// let age = 30;
// age = 31; //reassigning or variable mutation

//const: creating immutable variables
// We can also not declare empty variables using const

// const birthYear = 1990;
// birthYear = 2000; //This will throw an error
// const birthYear;

//var : used to declare variables before ES6
//Avoid using var

var job = 'Frontend';
job = 'Scala Eng'



const currentYear = 2037
const ageAllan = currentYear - 1990;
const ageNat = currentYear - 1994

console.log(ageAllan);
console.log(ageNat);

//log multiple values
console.log(ageNat, ageAllan);

console.log(ageAllan * 2, ageNat / 3, ageNat ** 3);

// ageNat ** 3 means ageNat * ageNat * ageNat


const firstName = 'Allan';
const lastName = 'Bankus'

// + operator can be used to concat strings

console.log(firstName + lastName);

// adding spaces

console.log(firstName + ' ' + lastName)

// = is an operator

let x = 10 + 5; // x = 15

x += 10; // means x = x + 10 = 15 + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; //
x--;
console.log(x);

//comparison operators

console.log(ageNat > ageAllan);
console.log(ageAllan == ageNat);
console.log(ageAllan > ageNat);



//Operator precedence
const currentYear = 2037
const ageAllan = currentYear - 1990;
const ageNat = currentYear - 1994

console.log(currentYear - 2020 < currentYear - 2030);

let x, y;

x = y = 10 * 3 + 7 - 2

console.log(x, y)

/////////////////////////////////////
//Coding challenge No.1

// const heightMark = 1.69;
// const heightJohn = 1.95;
// const weightMark = 78;
// const weightJohn = 92;

const heightMark = 1.88;
const heightJohn = 1.76;
const weightMark = 95;
const weightJohn = 85;


const bmiMark = weightMark / (heightMark * heightMark);
const bmiJohn = weightJohn / (heightJohn * heightJohn);
console.log(bmiJohn, bmiMark);

const markHigherBMI = bmiMark > bmiJohn;

console.log(markHigherBMI);

///////////////////////////////


//Template literals

const firstName = 'Allan'
const job = 'Engineer'
const year = 2037
const birthYear = 1990

const allan = "I'm " + firstName + ' ,a ' + (year - birthYear) + ' year OLD ' + job
console.log(allan)

const allanNew = `I'm ${firstName} ,a ${(year - birthYear)} year OLD ${job}`
console.log(allanNew)

console.log(`Using backticks for string: ${job} vibes`)


/////////////////
// if/else statements

const amountPaid = 1000
const clearedLoan = amountPaid >= 5000

if (clearedLoan) {
    console.log('Farmer cleared loan');
} else {
    const pendingAmount = 5000 - amountPaid;
    console.log(`Farmer hasn't cleared the loan: ${pendingAmount} remaining`);
}

const daysPastDeadline = 30;
const daysRenewalCutoff = 14;
let eligible;

if (daysPastDeadline > daysRenewalCutoff) {
    eligible = true;
} else {
    eligible = false;
    console.log(eligible)
}

//Coding challenge 2

const heightMark = 1.88;
const heightJohn = 1.76;
const weightMark = 95;
const weightJohn = 85;


const bmiMark = weightMark / (heightMark * heightMark);
const bmiJohn = weightJohn / (heightJohn * heightJohn);
console.log(bmiJohn, bmiMark);

//With no template literals
if (bmiMark > bmiJohn) {
    console.log("Mark's BMI is greater than John's");
} else {
    console.log("John's BMI is greater thann Mark's");
}

//Using template literals
if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI: ${bmiMark} is greater than John's BMI: ${bmiJohn}`);
} else {
    console.log(`John's BMI: ${bmiJohn} is greater than Marks BMI: ${bmiMark}`);
}




//Type conversion and coercion

//type conversion
const signUpYear = '2017';
const yearsClient = 4;
console.log(signUpYear + yearsClient)
//res = 20174

console.log(Number(signUpYear) + yearsClient)
//res 2021

console.log(Number('Mkulima'))
//res NaN

//type coercion

console.log('This farmer has a ' + 'Ksh.' + 4000 + ' loan')
console.log('40' - '30' + 23)
*/

//Equality Operators
// === > strict, doesn't perform type coercion
// == > loose, performs type coercion
/*
const loanAmount = 10000;
const paidAmount = '10000';

//Strict equality operator
if (loanAmount === 10000) {
    console.log('Farmer cleared loan');
}

if (paidAmount === 10000) {
    console.log('This will not print')
}

//this will work
const packagePrice = Number(prompt("What is the farmers package price?"));
if (packagePrice === 4000) {
    console.log(typeof packagePrice)
    console.log("Farmer qualified for draw");
} else if (packagePrice > 10000) {
    console.log("Do nothing")
} else {
    console.log("Farmer qualified for Tshirt")
}
*/


/*
//loose equality operator
//paidAmount is a string
if (paidAmount == 10000) {
    console.log('Farmer cleared loan')
}

//This will work too even though acreage is a string
const acreage = prompt("What is the total acreage of the farmer")//string
if (acreage == 5) {
    console.log("The farmer qualifies for additional J4a loan")
} else {
    console.log("Do nothing")
}
*/

// Not equal to operator

/*
const adminRank = Number(prompt("What is the admin's rank"))

if (adminRank !== 5) {
    console.log("Cannot approve request")
}
*/