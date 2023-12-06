// Task1
let array = [];
for (let i = 0; i < 20; i++) {
    array[i] = Math.floor(Math.random() * 100) + 1;
}

// Task2
showArrayInConsole(array);

// Task3
let numberMultiplyOfSeven = array.find(n => n % 7 == 0);
numberMultiplyOfSeven === undefined ? 
console.log("There isn't number wich multiply of 7") : 
console.log(`First number wich multiply of 7 is ${numberMultiplyOfSeven}`);

// Task4
array.sort((a, b) => b - a);
console.log("Array after sort");
showArrayInConsole(array);

// Task5
array = array.map((value, index) => array.length / 2 < index ? value = 0 : value = value );
console.log("Array with 2 part with 0");
showArrayInConsole(array);

// Task6
array.splice(0, 3);
console.log("Array without first 3 elements");
showArrayInConsole(array);

// Task7
let areTheteDublicate = array.find((num, index) => {
    for (let i = 0; i < array.length; i++) {
        if (i === index)
        continue;
    if (num === array[i])
    return array[i];
}
});
areTheteDublicate !== undefined ? console.log(`There is dublicate ${areTheteDublicate}`) : console.log("There aren't dublicates");

// Task8
let newArray = array.slice(array.length / 2);
console.log("New array:");
showArrayInConsole(newArray);

// Task9
let result = array.reduce((res, item) => res += item !== 0 && item % 2 == 0 ? 1 : 0, 0);
console.log(`The number of even numbers in an array is ${result}`)



// Functions
function  showArrayInConsole(arr){
    arr.forEach((element, ind) => {
        console.log(`[${ind}] - ${element}`);
    }); 
}