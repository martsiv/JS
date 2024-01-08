let myForm = document.forms.products;
let products = [];
$container = $('#card-container');

myForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Зупиняємо стандартну поведінку форми (відправку на сервер)
    downloadProducts();
});

async function downloadProducts() {
    let skip = myForm.elements.from.value;
    let limit = myForm.elements.size.value;
    let url = `https://dummyjson.com/products?skip=${skip}&limit=${limit}`;
    let response = await fetch(url);

    if (response.ok) { 
        let json = await response.json();
        products = json.products;
        console.log(products);
        showProducts();
    } else {
        alert("HTTP-Error: " + response.status);
    }
}
function showProducts() {
    $container.html('');
    for (let i = 0; i < products.length; i++) {
        // let [title, brand, rating, price] = products[i];
        let title = products[i].title;
        let brand = products[i].brand;
        let rating = products[i].rating;
         let price = products[i].price;

        let newDiv = document.createElement('div');
        $(newDiv).addClass('one-card');
        $(newDiv).
        html(`<div><div>Title: </div><div>${title}</div></div>
        <div><div>Brand: </div><div>${brand}</div></div>
        <div><div>Rating: </div><div>${rating}</div></div>
        <div><div>Price: </div><div>${price}</div></div>`);
        $container.append(newDiv);
    }
}