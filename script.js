let cart = [];
let total = 0;

function addToCart(product, price) {
  cart.push({ product, price });
  total += price;
  displayCart();
}

function displayCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.product} - Rp ${item.price} 
      <button onclick="removeItem(${index})">❌</button>`;
    cartItems.appendChild(li);
  });

  document.getElementById("total").innerText = total;
}

function removeItem(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  displayCart();
}
