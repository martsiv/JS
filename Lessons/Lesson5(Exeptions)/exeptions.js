// Task 1
class CssStyle {
    constructor(property, value) {
        this.property = property;
        this.value = value;
    }
}
class CssClass {
    styles = [];
    constructor(name, styles) {
        this.name = name;
        for (let i = 0; i < styles.length; i++) {
            let newItem = new CssStyle(styles[i].property, styles[i].value);
            this.styles.push(newItem);
        }
    }
    addCssStyle = (property, value) => {
        if (this.styles?.find(item => item.property === property && item.value === value) === undefined) {
            this.styles.push(new CssStyle(property, value));
        }
    }
    deleteCssStyle = (property) => {
        let index;
        do {
            index = this.styles.findIndex(item => item.property == property);
            if (index !== -1) {
                this.styles.splice(index, 1);
            }
        } while (index !== -1);
    }
    getCSS = () => {
        let result = this.styles.reduce((str, item) => str += item.property + ": " + item.value + "; ", "")
        return `.${this.name} { ${result} }`;
    }
}
let arrayStyles = [new CssStyle("display", "flex"), new CssStyle("justify-content", "flex-end")];
let myClass = new CssClass("myClass", arrayStyles);
console.log(myClass.getCSS());
myClass.addCssStyle("margin", 8);
myClass.addCssStyle("padding", 5);
myClass.addCssStyle("padding", 3);
myClass.addCssStyle("padding", 7);
myClass.addCssStyle("margin", 2);
console.log(myClass.getCSS());
myClass.deleteCssStyle("margin");
console.log(myClass.getCSS());

// Task 2
class Button {
    #width;
    #height;
    #text;
    constructor(width, height, text) {
        this.setWidth = width;
        this.setHeight = height;
        this.setText = text;
    }
    get getWidth() {
        return this.#width;
    }
    get getHeight() {
        return this.#height;
    }
    get getText() {
        return this.#text;
    }
    set setWidth(value) {
        this.#width = value;
    }
    set setHeight(value) {
        this.#height = value;
    }
    set setText(value) {
        this.#text = value;
    }
    showBtn = () => {
        document.write(`<button type = "button" name = "button1" style = "width: ${this.getWidth}px; height: ${this.getHeight}px;">${this.getText}</button>`);
    }
}
class BootstrapButton extends Button {
    #color
    constructor(width, height, text, color) {
        super(width, height, text);

        this.setColor = color;
    }
    get getColor() {
        return this.#color;
    }
    set setColor(value) {
        this.#color = value;
    }

    showBtn = () => {
        super.get
        document.write(`<button type = "button" name = "button1" style = "width: ${super.getWidth}px; height: ${super.getHeight}px; color: ${this.getColor}">${super.getText}</button>`);
    }
}
let myButton = new Button(100, 50, "My BUTTON");
myButton.showBtn();
let newBtn = new BootstrapButton(90, 40, "New BTN", "Red");
newBtn.showBtn();


// Task 3
class ExtendedDate extends Date {
    constructor(year, month, date, hours, minutes, seconds, ms) {
        super(year, month, date, hours, minutes, seconds, ms);
    }
    static days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    static dates = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty", "Twenty-one", "Twenty-two", "Twenty-three", "Twenty-four", "Twenty-five", "Twenty-six", "Twenty-seven", "Twenty-eight", "Twenty-nine", "Thirty", "Thirty-one"];

    displayDate() {
        console.log(ExtendedDate.dates[this.getDate()] + " " + ExtendedDate.days[this.getDay()]);
    }
}
let extDate = new ExtendedDate(2023, 11, 12);
extDate.displayDate();