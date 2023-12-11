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
            if (index !== -1){
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