const books = [
  { title: "The Alchemist", author: "Paulo Coelho", price: 299, image: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg" },
  { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", price: 349, image: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg" },
  { title: "Atomic Habits", author: "James Clear", price: 399, image: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg" },
  { title: "Think and Grow Rich", author: "Napoleon Hill", price: 279, image: "https://m.media-amazon.com/images/I/71UypkUjStL.jpg" },
  { title: "Ikigai", author: "Héctor García", price: 249, image: "https://m.media-amazon.com/images/I/71tbalAHYCL.jpg" }
];

const bookList = document.getElementById("bookList");

function displayBooks(bookArray) {
  bookList.innerHTML = "";
  bookArray.forEach(book => {
    bookList.innerHTML += `
      <div class="book-card">
        <img src="${book.image}" alt="${book.title}">
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Price: ₹${book.price}</p>
        <button onclick="addToCart('${book.title}')">Add to Cart</button>
      </div>
    `;
  });
}

function searchBooks() {
  const searchValue = document.getElementById("searchInput").value.toLowerCase();
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchValue) ||
    book.author.toLowerCase().includes(searchValue)
  );
  displayBooks(filteredBooks);
}

function addToCart(bookTitle) {
  alert(bookTitle + " added to cart! 🛒");
}

displayBooks(books);
