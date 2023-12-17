// get elements from the HTML
const addBtn = document.querySelector('#submit-btn');
const tableBody = document.querySelector('#product-table tbody');
const clearBtn = document.querySelector('#clear-btn');
const findBtn = document.querySelector('#find-btn');

// get form by name
const form = document.forms.creationForm;
const searchingForm = document.forms.searchingForm;
// get input by name
const manufacturerIn = form.elements.manufacturer;
const yearIn = form.elements.year;
const nameIn = form.elements.name;
const vinIn = form.elements.vin;
const statusCb = form.elements.status;
const keywordIn = searchingForm.elements.keyword;

// products collection
const products = [];

// --------------- Product class
class Product {
    static initial = 10;

    constructor(manufacturer, year, name, vin, status) {
        this.manufacturer = manufacturer;
        this.year = year;
        this.name = name;
        this.vin = vin;
        this.status = status;
        // set ID value
        this.id = Product.initial++;
    }

    get statusName() {
        return this.status ? "First registration" : "Secondary market";
    }
}


function checkInputData() {
    if (!manufacturerIn.value || !nameIn.value || !vinIn.value || !yearIn.value) {
        return false;
    }
    return true;
}

// add event listener
addBtn.onclick = (event) => {
    // add new product item
    event.preventDefault();
    if (!checkInputData()) {
        return;
    }
    const product = new Product(manufacturerIn.value, yearIn.value, nameIn.value, vinIn.value, statusCb.checked);
    // add new item to array
    products.push(product);
    // add new item to table
    addProductToTable(product);
    addProductsNameOnForm(product.name);
}

findBtn.onclick = (event) => {
    // add new product item
    event.preventDefault();
    tableBody.innerHTML = '';
    let filteredProducts = products.filter(item => item.name.includes(keywordIn.value));
    // add new item to table
    filteredProducts.forEach(item => addProductToTable(item))
}

clearBtn.onclick = () => {
    tableBody.innerHTML = '';
}


function addProductToTable(item) {
    tableBody.innerHTML += `<tr>
                                <td>${item.id}</td>
                                <td>${item.manufacturer}</td>
                                <td>${item.year}</td>
                                <td>${item.name}</td>
                                <td>${item.vin}</td>
                                <td>${item.statusName}</td>
                            </tr>`;
}
function addProductsNameOnForm(itemName) {
    let newElement = document.createElement('option');
    newElement.value = itemName;
    document.getElementById('keywords').append(newElement);
}

// Init table
let arr = [new Product("Audi", 2013, "TT", "SDd23d823dh3Dd", 1), new Product("Renault", 2021, "Megan", "DKd209du230du", 0)];
arr.forEach(item => {
    products.push(item);
    addProductToTable(item);
    addProductsNameOnForm(item.name);
});