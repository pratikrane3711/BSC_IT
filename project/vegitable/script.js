let cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const totalPrice = document.getElementById('total-price');
  const cartCount = document.getElementById('cart-count');

  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.product} - ₹${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  totalPrice.textContent = total;
  cartCount.textContent = cart.length;
}

function clearCart() {
  cart = [];
  updateCart();
}
   

