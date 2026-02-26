const products = [
  { name: "Kaos Premium", price: 75000, img: "https://via.placeholder.com/200" },
  { name: "Hoodie Street", price: 180000, img: "https://via.placeholder.com/200" },
  { name: "Topi Casual", price: 45000, img: "https://via.placeholder.com/200" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function formatRupiah(number) {
  return "Rp " + number.toLocaleString("id-ID");
}

function renderProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  products.forEach((p, index) => {
    productList.innerHTML += `
      <div class="product">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>${formatRupiah(p.price)}</p>
        <button onclick="addToCart(${index})">Tambah</button>
      </div>
    `;
  });
}

function addToCart(index) {
  cart.push(products[index]);
  saveCart();
}

function removeItem(i) {
  cart.splice(i, 1);
  saveCart();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById("cart-items");
  const totalEl = document.getElementById("total");
  const countEl = document.getElementById("cart-count");

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, i) => {
    total += item.price;
    cartItems.innerHTML += `
      <li>
        ${item.name} - ${formatRupiah(item.price)}
        <button onclick="removeItem(${i})">❌</button>
      </li>
    `;
  });

  totalEl.innerText = formatRupiah(total);
  countEl.innerText = cart.length;
}

function checkout() {
  if(cart.length === 0) {
    alert("Keranjang kosong!");
    return;
  }

  let message = "Halo Tulloh Market, saya ingin pesan:%0A";
  cart.forEach(item => {
    message += `- ${item.name} (${formatRupiah(item.price)})%0A`;
  });

  window.open(`https://wa.me/628XXXXXXXXXX?text=${message}`, "_blank");
}

renderProducts();
renderCart();
