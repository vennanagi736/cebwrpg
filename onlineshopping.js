const productContainer = document.getElementById("productcontainer");
const cartContainer = document.getElementById("cartcontainer");
const feedback = document.getElementById("feedback");
const totalElement = document.getElementById("total");

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  { id: 3, name: "Tablet", price: 5000 },
  { id: 4, name: "Smartwatch", price: 1000 },
  { id: 5, name: "Headphones", price: 500 }
];

let cart = [];

// Show products
products.forEach(product => {
  const row = `
    <div class="productrow">
      <p>${product.name} - Rs. ${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    </div>`;
  productContainer.insertAdjacentHTML("beforeend", row);
});

// ADD TO CART
function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  showFeedback(`${item.name} added to cart`);
  updateCart();
}

// REMOVE FROM CART
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  showFeedback("Item removed from cart");
  updateCart();
}

// UPDATE CART UI
function updateCart() {
  cartContainer.innerHTML = "";

  cart.forEach(item => {
    const row = `
      <div class="productrow">
        <p>${item.name} - Rs. ${item.price}</p>
        <button onclick="removeFromCart(${item.id})">Remove</button>
      </div>`;
    cartContainer.insertAdjacentHTML("beforeend", row);
  });

  // TOTAL PRICE
  let total = cart.reduce((sum, item) => sum + item.price, 0);
  totalElement.textContent = `Total: Rs. ${total}`;
}

// FEEDBACK MESSAGE
function showFeedback(message) {
  feedback.style.display = "block";
  feedback.textContent = message;

  setTimeout(() => {
    feedback.style.display = "none";
  }, 1500);
}
// CLEAR CART
function clearCart() {
  cart = [];
  updateCart();
  showFeedback("Cart cleared");
}
// SORT CART BY PRICE
function sortmyprice() {
  cart.sort((a, b) => a.price - b.price);
  updateCart();
}
