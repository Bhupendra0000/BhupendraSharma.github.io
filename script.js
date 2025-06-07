const products = [
  { id: 1, name: "Apples", price: 120, image: "images/apple.jpg", description: "Fresh apples." },
  { id: 2, name: "Rice", price: 200, image: "images/brown rice.jpg", description: "Brown rice." },
  { id: 3, name: "Masoor Dal", price: 90, image: "images/masoor dal.jpg", description: "Red lentils." },
  { id: 4, name: "Milk", price: 50, image: "images/milk.jpg", description: "Fresh milk." },
  { id: 5, name: "Oil", price: 100, image: "images/oil.jpg", description: "Refined oil for all your cooking needs." },
  { id: 6, name: "Parle-G", price: 40, image: "images/parleg.jpg", description: "Popular biscuits." },
  { id: 7, name: "Salt", price: 25, image: "images/salt.jpg", description: "Iodized salt." },
  { id: 8, name: "Wheat Flour", price: 270, image: "images/flour.jpg", description: "Aashirvaad atta." },
  {
    id: 9,
    name: "Shop More",
    description: "Discover more items in our store!",
    isShopMore: true
  }
];

const cart = [];

function displayProducts() {
  const container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("product-card");

    if (p.isShopMore) {
      div.innerHTML = `
        <div class="shop-more-card">
          <h2>🛍️ ${p.name}</h2>
          <p>${p.description}</p>
          <button onclick="shopMore()">Explore More</button>
        </div>
      `;
    } else {
      div.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <p><strong>₹${p.price}</strong></p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      `;
    }

    container.appendChild(div);
  });
}
function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  cartItems.innerHTML = "";

  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = total;
}

document.getElementById("buy-now").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty.");
  } else {
    alert("Thanks for your purchase!");
    cart = [];
    updateCart();
  }
});

function shopMore() {
  alert("More products coming soon!");
}
displayProducts();





