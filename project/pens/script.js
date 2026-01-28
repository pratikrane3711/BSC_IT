const pens = [
    {
        name: "Reynolds Ball Pen",
        price: 10,
        type: "ball",
        image: "https://via.placeholder.com/200x150?text=Ball+Pen"
    },
    {
        name: "Cello Gel Pen",
        price: 15,
        type: "gel",
        image: "https://via.placeholder.com/200x150?text=Gel+Pen"
    },
    {
        name: "Parker Fountain Pen",
        price: 250,
        type: "fountain",
        image: "https://via.placeholder.com/200x150?text=Fountain+Pen"
    },
    {
        name: "Pilot Ball Pen",
        price: 20,
        type: "ball",
        image: "https://via.placeholder.com/200x150?text=Ball+Pen"
    },
    {
        name: "Pentonic Gel Pen",
        price: 25,
        type: "gel",
        image: "https://via.placeholder.com/200x150?text=Gel+Pen"
    }
];

const productList = document.getElementById("product-list");

function displayPens(penArray) {
    productList.innerHTML = "";
    penArray.forEach(pen => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${pen.image}" alt="${pen.name}">
            <h3>${pen.name}</h3>
            <p>₹${pen.price}</p>
            <button onclick="addToCart('${pen.name}')">Add to Cart</button>
        `;
        productList.appendChild(card);
    });
}

function filterPens(type) {
    const filtered = pens.filter(pen => pen.type === type);
    displayPens(filtered);
}

function showAll() {
    displayPens(pens);
}

function addToCart(name) {
    alert(name + " added to cart!");
}

// Load all pens on page load
showAll();
