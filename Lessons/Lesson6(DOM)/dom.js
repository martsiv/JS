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
const nameIn = form.elements.name;
const vinIn = form.elements.vin;
const statusCb = form.elements.status;
const keywordIn = searchingForm.elements.keyword;

// products collection
const products = [];

// --------------- Product class
class Product {
    static initial = 10;

    constructor(manufacturer, name, vin, status) {
        this.manufacturer = manufacturer;
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

// add event listener
addBtn.onclick = (event) => {
    // add new product item
    event.preventDefault();
    const product = new Product(manufacturerIn.value, nameIn.value, vinIn.value, statusCb.checked);
    // add new item to array
    products.push(product);
    // add new item to table
    addProductToTable(product);
}

findBtn.onclick = (event) => {
    // add new product item
    event.preventDefault();

    let filteredProducts = products.filter(item => item.name.toUpperCase().includes(keywordIn.toUpperCase()));
    // add new item to table
    filteredProducts.forEach(item => addProductToTable(item))
}

clearBtn.onclick = () => {
    tableBody.innerHTML = '';
    products.splice(0);
}

function addProductToTable(item) {
    tableBody.innerHTML += `<tr>
                                <td>${item.id}</td>
                                <td>${item.manufacturer}</td>
                                <td>${item.name}</td>
                                <td>${item.vin}</td>
                                <td>${item.statusName}</td>
                            </tr>`;
}