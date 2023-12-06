// task 1.1
const currentYear = 2023;
let birthdate = null;
let isCorrectData = false;

do {
    isCorrectData = false;
    let text = "Enter your year of birth";
    birthdate = +prompt(text, 2000);

    if (isNaN(birthdate) || birthdate <= 0 || birthdate > currentYear || 130 < (currentYear - birthdate)) {
        alert("You must enter a valid year of birth!");
    }
    else {
        isCorrectData = true;
    }
} while (!isCorrectData);

alert(`You are ${currentYear - birthdate} years old`);

// Task 2
const sizeFileInMB = 820;
let sizeSDinGB;

    sizeSDinGB = prompt("Enter memory size of your flash drive");

    if (isNaN(sizeSDinGB) || sizeSDinGB === null) {
        alert("We will check it next time. Good bye!");
    }
    else if (sizeSDinGB <= 0.82) {
        alert("Unfortunately, no 820 MB file will fit on your USB flash drive");
    }
    else {
        let result = Math.trunc(sizeSDinGB * 1024 / sizeFileInMB);
        alert(`Your flash drive will fit ${result} files of ${sizeFileInMB}MB`);
    }
    
