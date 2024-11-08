var productForm = document.querySelector(".productForm");
var nameInput = document.querySelector("#productName");
var Description = document.querySelector("#Description");
var Price = document.querySelector("#Price");

var products = [];

productForm.onsubmit = function(e) {
    e.preventDefault();

    var product = {
        name: nameInput.value,
        Description: Description.value,
        Price: Price.value,
    };
    products.push(product);
    printData();
};
function printData() {
    var data = ``;
    for (var i = 0; i < products.length; i++) {
        data += `
        <tr>
            <td>${products[i].name}</td>
            <td>${products[i].Description}</td>
            <td>${products[i].Price}</td>
        </tr>
        `;
    }
    document.querySelector("tbody").innerHTML = data;
}
