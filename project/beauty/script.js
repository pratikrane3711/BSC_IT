const products = [
  { id: 1, name: "Lipstick", price: 299, image: "https://via.placeholder.com/150?text=Lipstick" },
  { id: 2, name: "Face Cream", price: 499, image: "https://via.placeholder.com/150?text=Face+Cream" },
  { id: 3, name: "Perfume", price: 899, image: "https://via.placeholder.com/150?text=Perfume" },
  { id: 4, name: "Eyeliner", price: 199, image: "https://via.placeholder.com/150?text=Eyeliner" },
  { id: 5, name: "Nail Polish", price: 149, image: "https://via.placeholder.com/150?text=Nail+Polish" }
];

let cart = [];

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const totalElement = document.getElementById("total");
const cartCount = document.getElementById("cart-count");

function displayProducts() {
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <img src="${product.image}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - ₹${item.price}
      <button onclick="removeItem(${index})">❌</button>
    `;
    cartItems.appendChild(li);
  });

  totalElement.textContent = total;
  cartCount.textContent = cart.length;
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Thank you for shopping! 💖");
    cart = [];
    updateCart();
  }
}

displayProducts();
