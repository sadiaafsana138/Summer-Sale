//It will take SELL200 code to input filed by clicking the button
document.getElementById("Sell200").addEventListener('click', function (event) {
    //console.log("buttonclicked");
    document.getElementById('SELL200').value = "SELL200";
});
// Reusable function to get the price from a product's price div
function getPrice(fieldId) {
    const value = parseFloat(document.getElementById(fieldId).innerText);
    return value;
}
let totalPrice = 0;
// Function to update and display the total price
function updateTotalPrice() {
    document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);

}

// Add click event listeners to the productDiv elements
for (let i = 1; i <= 9; i++) {
    const productDiv = document.getElementById(`productDiv${i}`);
    productDiv.addEventListener("click", function () {
        const price = getPrice(`Accessories-Price${i}`);
        totalPrice += price;
        //console.log(`Clicked Product ${i}, Price Added: ${price}`);
        updateTotalPrice(); // Update and display the total price
        //enable Purchase Button
        const purchaseButton = document.getElementById("purchase");
        if (totalPrice > 0) {
            purchaseButton.removeAttribute("disabled");
            purchaseButton.style.backgroundColor = "#ff00bf";
        }
        else {
            purchaseButton.setAttribute("disabled",true);
        }
        //enable Apply Button
        const discountButton = document.getElementById("discountButton");
        if (totalPrice >= 200) {
            discountButton.removeAttribute("disabled");
            discountButton.style.backgroundColor = "#ff00bf";
        }
        else {
            discountButton.setAttribute("disabled",true);
        }
    });
    //20% discount
    let discount = 0;
    // Function to calculate and display the discount
    function calculateDiscount() {
        discount = totalPrice * 0.20;
        document.getElementById("discountPrice").innerText = discount.toFixed(2);
        //console.log("Discount Calculated:", discount.toFixed(2));

        // Calculate the price after discount
        const priceAfterDiscount = totalPrice - discount;
        document.getElementById("priceAfterDiscount").innerText = priceAfterDiscount.toFixed(2);
        console.log("Price After Discount:", priceAfterDiscount.toFixed(2));
    }

    document.getElementById("SELL200").addEventListener("keyup", function (event) {
        const InputText = event.target.value;
        if (InputText == "SELL200") {
            discountButton.addEventListener('click', function () {
                calculateDiscount();
            });
        }
    });
}
document.getElementById("GoHome").addEventListener('click', function () {
    window.location.href = "index.html";
    document.getElementById('totalPrice').value = "0.00TK";
    document.getElementById('discountPrice').value =  "0.00TK";
    document.getElementById('priceAfterDiscount').value =  "0.00TK";
    purchaseButton.setAttribute("disabled",true);
    discountButton.setAttribute("disabled",true);
});
function addToCalculationEntry(ProdName, Price) {
    const Entry = document.getElementById('Entry');
    const count = Entry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${ProdName} ${Price} TK`;

    Entry.appendChild(p);
}


