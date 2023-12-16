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
function fibonacci() {
    let a = 0, b = 1;

    return function() {
      let result = a;
      [a, b] = [b, a + b];
      return result;
    };
}
let func = fibonacci();
for (let i = 0; i < 10; ++i) {
    console.log(func());
}