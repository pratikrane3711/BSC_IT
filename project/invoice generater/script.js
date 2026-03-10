let totalAmount = 0;

function addItem(){

let item = document.getElementById("item").value;
let price = Number(document.getElementById("price").value);
let qty = Number(document.getElementById("qty").value);

if(item=="" || price=="" || qty=="") return;

let total = price * qty;

totalAmount += total;

let table = document.getElementById("bill");

let row = table.insertRow();

row.innerHTML = `
<td>${item}</td>
<td>${price}</td>
<td>${qty}</td>
<td class="rowTotal">${total}</td>
<td><button onclick="deleteItem(this)">Delete</button></td>
`;

document.getElementById("total").innerText = totalAmount;

}

function deleteItem(button){

let row = button.parentElement.parentElement;

let rowTotal = Number(row.querySelector(".rowTotal").innerText);

totalAmount -= rowTotal;

document.getElementById("total").innerText = totalAmount;

row.remove();

}

