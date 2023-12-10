// Task 3.1
let leftRange, rigthRange;
do {
    leftRange = prompt("Enter left range: ");
} while (!checkIsNumber(leftRange));
do {
    rigthRange = prompt("Enter rigth range: ");
} while (!checkIsNumber(rigthRange));
leftRange = +leftRange;
rigthRange = +rigthRange;
if (Number(rigthRange) < Number(leftRange)) {
    let tmp = rigthRange;
    rigthRange = leftRange;
    leftRange = tmp;
}
let summ = 0;
for (let i = leftRange; i <= rigthRange; i++) {
    summ += i;
}
console.log(`In the range from ${leftRange} to ${rigthRange} summ of all numbers = ${summ}`);

// Task 3.2
let number;
do {
    number = prompt("Enter any number: ");
} while (!checkIsNumber(number));
console.log(`Number of digits in the number ${number} is ${getNumberOfDigitsInNumber(number)}`);

// Task 3.3
let myNumber, positive = 0, negative = 0, zero = 0, even = 0, odd = 0;
for (let i = 0; i < 10; i++) {
    console.log(`Number ${i + 1}`);
    do {
        myNumber = prompt("Enter any number: ");
    } while (!checkIsNumber(myNumber));
    myNumber = Number(myNumber);
    if (myNumber < 0) {
        ++negative;
    }
    if (0 < myNumber) {
        ++positive;
    }
    if (myNumber === 0) {
        ++zero;
    }
    if ((myNumber !== 0) && (myNumber % 2 === 0)) {
        ++even;
    }
    if ((myNumber !== 0) && (myNumber % 2 !== 0)) {
        ++odd;
    }
}
console.log(`There was: \n${positive} positive \n${negative} negative \n${zero} zero \n${even} even \n${odd} odd`);

// Task 3.4
let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let counter = 0;
while (confirm(`Day of week: ${week[counter]} \nDo you want to see next day of week?`)){
    ++counter;
    if (week.length <= counter){
        counter = 0;
    }
}

// Functions
function checkIsNumber(number) {
    let result = false;
    if (number === null) {
        console.log("Your value is null. Enter again");
    } else if (number === "") {
        console.log("Your value is empty string. Enter again");
    } else if (isNaN(number)) {
        console.log("Your value is not a number. Enter again");
    } else {
        result = true;
    }
    return result;
}

function getNumberOfDigitsInNumber(number) {
    if (!checkIsNumber(number)) {
        return NaN;
    }
    number = String(number);
    let result = 0;
    for (let i = 0; i < number.length; i++) {
        if (!isNaN(number[i])) {
            ++result;
        }
    }
    return result;
}