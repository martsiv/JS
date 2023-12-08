// Task 1
let str = `it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`;
console.log(`Number of white spaces: ${transformString(str)}`);

function transformString(str) {
    if (typeof (str) == "string") {
        let count = 0;
        for (let element of str) {
            if (element === " ") ++count;
        };
        return count;
    }
    else {
        console.log("Wrong argument");
    }
}

// Task 2
str = setFirstSymbolToUpperCase(str);
console.log(str);

function setFirstSymbolToUpperCase(str) {
    if (typeof (str) == "string") {
        let array = str.split("");
        array[0] = array[0].toUpperCase();
        str = array.join("");
        return str;
    }
    else {
        console.log("Wrong argument");
    }
}

// Task 3
console.log(`Words in strig = ${calcWordsInString(str)}`);

function calcWordsInString(str) {
    if (typeof (str) == "string") {
        let count = str.split(" ").length;
        return count;
    }
    else {
        console.log("Wrong argument");
    }
}

// Task 4
console.log(`Abreviature of \"cascading style sheets\" is ${getAbr("cascading style sheets")}`);

function getAbr(str) {
    if (typeof (str) == "string") {
        let arrayOfWords = str.split(" ");
        return arrayOfWords.reduce((res, item) => res + item[0].toUpperCase(), "");
    }
    else {
        console.log("Wrong argument");
    }
}

// Task 5
let palindrom1 = "Isasi";
let palindrom2 = "Lettel";
let notPalindrom = "fergr";
// console.log(`Is word ${palindrom1} palindrom ? == ${checkIfPalindrom(palindrom1)}`);
console.log(`Is word ${palindrom2} palindrom ? == ${checkIfPalindrom(palindrom2)}`);
console.log(`Is word ${notPalindrom} palindrom ? == ${checkIfPalindrom(notPalindrom)}`);

function checkIfPalindrom(str) {
    if (typeof (str) == "string") {
        let middle = Math.round(str.length / 2);
        leftSideReverse = str.slice(0, middle);
        if (middle % 2 === 0){
            rightSideReverse = str.slice(middle - 1, str.length).split("").reverse().join("");
        }
        else{
            rightSideReverse = str.slice(middle - 1, str.length).split("").reverse().join("");
        }
        console.log(leftSideReverse + " " + rightSideReverse);
        if (leftSideReverse.toUpperCase() === rightSideReverse.toUpperCase()){
            return true;
        }
        else{
            return false;
        }
    }
    else {
        return false;
    }
}