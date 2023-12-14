// Task 1
function displayScoups(num) {
    let result = "";
    let symbol = "(";
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < num; j++) {
            result += symbol;
        }
        symbol = ")";
    }
    return result;
}

console.log(displayScoups(5));

// Task 2
// Реалізуйте функцію getRectangleArea(width, height), яка приймає 2 параметри ширина 
// прямокутника width і висота прямокутника height і обраховує його площу. 
// Передбачити припинення виконання програми і генерацію винятку у випадку, якщо функції передано не числові параметри. 
// Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.
function getRectangleArea(width, height) {
    if (width == null || height == null || typeof width !== "number" || typeof height !== "number" || Number.isNaN(width || Number.isNaN(height))) {
        throw new TypeError();
    }
    if (width <= 0 || height <= 0) {
        throw new RangeError();
    }
    return width * height;
}

try {
    console.log("\n\nRectangle area = " + getRectangleArea(5, 4));
}
catch (error) {
    console.log("Error name:", error.name);
    console.log("Error message:", error.message);
    console.log("Error stack:", error.stack);
}

// Task 3
// Створіть клас WeekdayError, конструктор якого приймає параметр message і ініціалізує поле name значенням WeekdayError.
// Реалізуйте функцію showWeekdayName(day), в якій параметр day – це порядковий номер дня в тижні.
// Функція повертає назву дня (Monday, Tuesday...) відповідно до введеного номера.
// У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу WeekdayError з повідомленням Incorrect weekday number.
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.

// console.log(showWeekdayName(5));  // Friday
// console.log(showWeekdayName(23)); // WeekdayError: Incorrect weekday number
class WeekdayError extends Error {
    constructor(message) {
        super(message);
    }
}

function showWeekdayName(day) {
    if (typeof day !== "number" || Number.isNaN(day)) {
        throw new TypeError("Incorrect type");
    }
    if (day < 1 || 7 < day) {
        throw new WeekdayError("Incorrect weekday number");
    }
    days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return this.days[--day];
}

try {
    console.log(showWeekdayName("true"));
}
catch (error) {
    if (error instanceof WeekdayError){
        console.log(error.message);
    }
    else if (error instanceof TypeError) {
        console.log(error.message);
    }
}

// Task 4
// function fibonacci() {
//     let number = 0;
//     return () => {
//         if (number === 0)
//             return 0;
//         if (number === 1)
//             return 1;
//         return (number - 1) + (number - 2);
//     }
// }
// let func = fibonacci();
// for (let i = 0; i < 10; ++i) {
//     console.log(func());
// }