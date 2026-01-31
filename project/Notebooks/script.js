const notebooks = [
  {
    name: "Classmate Single Line Notebook",
    pages: "200 Pages",
    price: "₹85",
    image: "https://m.media-amazon.com/images/I/71wC4rNR2NL.jpg"
  },
  {
    name: "Navneet Youva Long Notebook",
    pages: "172 Pages",
    price: "₹75",
    image: "https://m.media-amazon.com/images/I/71mU-0NTjGL.jpg"
  },
  {
    name: "Paperkraft Spiral Notebook",
    pages: "160 Pages",
    price: "₹120",
    image: "https://m.media-amazon.com/images/I/71rDP2n9s9L.jpg"
  },
  {
    name: "Camlin Premio Notebook",
    pages: "180 Pages",
    price: "₹95",
    image: "https://m.media-amazon.com/images/I/71zvIEn5qvL.jpg"
  },
  {
    name: "Luxor A4 Notebook",
    pages: "240 Pages",
    price: "₹150",
    image: "https://m.media-amazon.com/images/I/71RZ7dF3IhL.jpg"
  }
];

const notebookList = document.getElementById("notebook-list");

function displayNotebooks(filteredNotebooks = notebooks) {
  notebookList.innerHTML = "";
  filteredNotebooks.forEach(notebook => {
    const notebookDiv = document.createElement("div");
    notebookDiv.classList.add("notebook");
    notebookDiv.innerHTML = `
      <img src="${notebook.image}" alt="${notebook.name}">
      <h3>${notebook.name}</h3>
      <p>${notebook.pages}</p>
      <p><strong>${notebook.price}</strong></p>
      <button onclick="addToCart('${notebook.name}')">Add to Cart</button>
    `;
    notebookList.appendChild(notebookDiv);
  });
}

function searchNotebooks() {
  const searchValue = document.getElementById("search").value.toLowerCase();
  const filtered = notebooks.filter(notebook =>
    notebook.name.toLowerCase().includes(searchValue)
  );
  displayNotebooks(filtered);
}

function addToCart(notebookName) {
  alert(notebookName + " added to cart!");
}

// Load notebooks on page load
displayNotebooks();
