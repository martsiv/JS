// Task 1
class Figure {
    _name;
    set name(value) {
        this._name = value;
    }
    get name() {
        return this._name;
    }
    displayInfo() {
        return this.name;
    }
    calculateArea() {
        return 0;
    }
    calculatePerimeter() {
        return 0;
    }
}

class Square extends Figure {
    _side;
    constructor(sideLength) {
        super();
        this.side = sideLength;
        super.name = "square"
    }
    get side() {
        return this._side;
    }
    set side(value) {
        if (value != null && typeof value === 'number' && 0 < value){
            this._side = value;
        }
    }
    displayInfo() {
        return `side = ${this.side}`;
    }
    calculateArea() {
        return +((this.side * this.side).toFixed(2));
    }
    calculatePerimeter() {
        return 4 * this.side;
    }
}
class Rectangle extends Figure {
    _side1;
    _side2;
    constructor(side1Length, side2Length) {
        super();
        this._side1 = side1Length;
        this._side2 = side2Length;
        super.name = "rectangle"
    }
    get side1() {
        return this._side1;
    }
    set side1(value) {
        if (value != null && typeof value === 'number' && 0 < value) {
            this._side1 = value;
        }
    }
    get side2() {
        return this._side2;
    }
    set side2(value) {
        if (value != null && typeof value === 'number' && 0 < value) {
            this._side2 = value;
        }
    }
    displayInfo() {
        return `side #1 = ${this.side1}, side #2 = ${this.side2}`;
    }
    calculateArea() {
        return +((this.side1 * this.side2).toFixed(2));
    }
    calculatePerimeter() {
        return 2 * (this.side1 + this.side2);
    }
}
class Triangle extends Figure {
    _side1;
    _side2;
    _side3;
    constructor(side1Length, side2Length, side3Length) {
        super();
        this._side1 = side1Length;
        this._side2 = side2Length;
        this._side3 = side3Length;
        super.name = "triangle"
    }
    get side1() {
        return this._side1;
    }
    set side1(value) {
        if (value != null && typeof value === 'number' && 0 < value) {
            this._side1 = value;
        }
    }
    get side2() {
        return this._side2;
    }
    set side2(value) {
        if (value != null && typeof value === 'number' && 0 < value) {
            this._side2 = value;
        }
    }
    get side3() {
        return this._side3;
    }
    set side3(value) {
        if (value != null && typeof value === 'number' && 0 < value) {
            this._side3 = value;
        }
    }
    displayInfo() {
        return `side #1 = ${this.side1}, side #2 = ${this.side2}, , side #3 = ${this.side3}`;
    }
    calculateArea() {
        let s = (this.side1 + this.side2 + this.side3) / 2;
        return +(Math.sqrt(s * (s - this.side1) * (s * this.side2) * (s * this.side3)).toFixed(2));
    }
    calculatePerimeter() {
        return this.side1 + this.side2 + this.side3;
    }
}
let arr = [new Square(2), new Triangle(3, 3, 5), new Rectangle(3, 4), new Triangle(5, 2, 6)];
arr.forEach(item => {
    console.log(`${item.name}, sides: ${item.displayInfo()}, area = ${item.calculateArea()}, perimeter = ${item.calculatePerimeter()}`);
});
