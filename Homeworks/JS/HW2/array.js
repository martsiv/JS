// Tast 1
let messages = ["Good morning", "Good day", "Good evening", "Good night"];
let currentHour = new Date().getHours();
if (6 <= currentHour && currentHour < 12){
    console.log(messages[0]);
} else if (12 <= currentHour && currentHour < 18){
    console.log(messages[1]);
} else if (18 <= currentHour && currentHour < 24){
    console.log(messages[2]);
} else if (0 <= currentHour && currentHour < 6){
    console.log(messages[3]);
}

// Tast 2
let array = [];
for (let i = 0; i < 20; i++) {
    array[i] = Math.floor(Math.random() * 100) + 1;
}

// Task 3
showArrayInConsole(array);

// Task 4
let numberMultiplyOfSeven = array.find(n => n % 7 == 0);
numberMultiplyOfSeven === undefined ? 
console.log("There isn't number wich multiply of 7") : 
console.log(`First number wich multiply of 7 is ${numberMultiplyOfSeven}`);

// Task 5
array.sort((a, b) => b - a);
console.log("Array after sort");
showArrayInConsole(array);

// Task 6
// array = array.map((value, index) => array.length / 2 < index ? value = 0 : value = value );
array.fill(0, array.length / 2, array.length - 1);
console.log("Array with 2 part with 0");
showArrayInConsole(array);

// Task 7
let areTheteDublicate = array.find((num, index) => {
    for (let i = 0; i < array.length; i++) {
        if (i === index)
        continue;
    if (num === array[i])
    return array[i];
}
});
areTheteDublicate !== undefined ? console.log(`There is dublicate ${areTheteDublicate}`) : console.log("There aren't dublicates");

// Task 8
let newArray = array.slice(1, array.length - 1);
console.log("New array:");
showArrayInConsole(newArray);

// Task 9
let result = array.reduce((res, item) => res += item !== 0 && item % 2 == 0 ? 1 : 0, 0);
console.log(`The number of even numbers in an array is ${result}`)

// Tast 10
let arrayAfterFunc = createArray(15, 6);
console.log("Array wich created in function");
showArrayInConsole(arrayAfterFunc);

// Functions
function  showArrayInConsole(arr){
    arr.forEach((element, ind) => {
        console.log(`[${ind}] - ${element}`);
    }); 
}
function createArray(start, end){
    if (+end < start){
        let tmp = +start;
        start = end;
        end = tmp;
    }
    let array = [];
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
}