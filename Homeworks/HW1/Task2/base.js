// Task 2.1
let userInput;
while (true) {
    userInput = prompt("Enter the number from 0 to 9: ");
    if (userInput === null) {
        console.log("Your value is null. Enter again");
    } else if (userInput === "") {
        console.log("Your value is empty string. Enter again");
    } else if (isNaN(userInput)) {
        console.log("Your value is not a number. Enter again");
    } else if (Number(userInput) < 0 || 9 < Number(userInput)) {
        console.log("You should enter a number in a range 0 - 9");
    } else {
        break;
    }
};
switch (Number(userInput)) {
    case 0:
        console.log(")");
        break;
    case 1:
        console.log("!");
        break;
    case 2:
        console.log("@");
        break;
    case 3:
        console.log("#");
        break;
    case 4:
        console.log("$");
        break;
    case 5:
        console.log("%");
        break;
    case 6:
        console.log("^");
        break;
    case 7:
        console.log("&");
        break;
    case 8:
        console.log("*");
        break;
    case 9:
        console.log("(");
        break;
}

// //Alternative method
// const symbols = [")", "!", "@", "#", "$", "%", "^", "&", "*", "("];
// const selectedSymbol = symbols[Number(userInput)];
// console.log(selectedSymbol);

// Task 2.2

let year = getValidYear();
checkLeapYear(year) ? console.log(year + " year is a leap year") : console.log(year + " year is not a leap year");

// Task 2.3
const inputYear = getValidYear();
const inputMonth = getValidMonth();
const inputDay = getValidDay(inputYear, inputMonth);;

const result = getNextDate(inputYear, inputMonth, inputDay);
console.log(result);




// Functions
function getValidYear() {
    while (true) {
        let year = prompt("Enter the year: ");
        if (year === null) {
            console.log("Your value is null. Enter again");
        } else if (year === "") {
            console.log("Your value is empty string. Enter again");
        } else if (isNaN(year)) {
            console.log("Your value is not a number. Enter again");
        } else if (Number(year) < 0) {
            console.log("You should enter a year from 0 ...");
        } else {
            return Number(year);
        }
    };
}
function checkLeapYear(year) {
    return !!(year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
function getValidMonth() {
    while (true) {
        let month = prompt("Enter the month: ");
        if (month === null) {
            console.log("Your value is null. Enter again");
        } else if (month === "") {
            console.log("Your value is empty string. Enter again");
        } else if (isNaN(month)) {
            console.log("Your value is not a number. Enter again");
        } else if (Number(month) <= 0 || 12 < Number(month)) {
            console.log("You should enter a month (from 1 to 12)");
        } else {
            return Number(month);
        }
    };
}
function getValidDay(year, month) {
    while (true) {
        let day = prompt("Enter the day: ");
        if (day === null) {
            console.log("Your value is null. Enter again");
        } else if (day === "") {
            console.log("Your value is empty string. Enter again");
        } else if (isNaN(day)) {
            console.log("Your value is not a number. Enter again");
        } else if (!checkCorrectDay(year, month, day)) {
            console.log("You should enter the correct day, taking into account the month and year");
        } else {
            return Number(day);
        }
    };
}
function getDaysInMonth(nOfMonth, isLeapYear){
    const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (isLeapYear) {
        daysInMonth[2] = 29;
    }
    return daysInMonth[nOfMonth];
}
function checkCorrectDay(year, month, day) {
    if (day < 1 || month < 1 || month > 12 || year < 1 || day > getDaysInMonth(month, checkLeapYear(year))) {
        return false;
    }
    return true;
}

function getNextDate(year, month, day) {
    if (day === getDaysInMonth(month, checkLeapYear(year))) {
        day = 1;
        if (month === 12) {
            month = 1;
            year++;
        } else {
            month++;
        }
    } else {
        day++;
    }

    return `Next date: ${day}.${month}.${year}`;
}
