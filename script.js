// ============ DATA ============
const products = [
  {
    name: "Tailored Wool Coat",
    price: 128.00,
    desc: "Structured silhouette, lined for warmth.",
    tag: "New",
    img: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Classic White Tee",
    price: 24.00,
    desc: "Breathable cotton, everyday fit.",
    tag: "Bestseller",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Pleated Midi Skirt",
    price: 58.00,
    desc: "Flowing fabric with a soft drape.",
    tag: "",
    img: "https://images.unsplash.com/photo-1583496661160-fb5886a13d77?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Relaxed Linen Trouser",
    price: 64.00,
    desc: "Light, airy, perfect for warm days.",
    tag: "",
    img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Oversized Knit Cardigan",
    price: 72.00,
    desc: "Cosy layer for cooler evenings.",
    tag: "Limited",
    img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Leather Crossbody Bag",
    price: 96.00,
    desc: "Compact, durable, hand-finished.",
    tag: "",
    img: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=500&q=80"
  }
];

let cartTotal = 0;

// ============ RENDER PRODUCTS ============
function renderProducts(){
  const grid = document.getElementById('productGrid');
  grid.innerHTML = products.map((p, i) => `
    <div class="product-card">
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        ${p.tag ? `<span class="product-tag">${p.tag}</span>` : ''}
        <button class="add-btn" data-index="${i}" aria-label="Add ${p.name} to cart">
          <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
        </button>
      </div>
      <div class="product-body">
        <p class="product-name">${p.name}</p>
        <p class="product-desc">${p.desc}</p>
        <p class="product-price">$${p.price.toFixed(2)}</p>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = +btn.dataset.index;
      addToCart(products[idx].price);
      pulseCart();
    });
  });
}

function addToCart(price){
  cartTotal += price;
  document.getElementById('cartPrice').textContent = `$${cartTotal.toFixed(2)}`;
}

function pulseCart(){
  const cartBtn = document.getElementById('cartBtn');
  cartBtn.style.transform = 'scale(1.12)';
  setTimeout(() => { cartBtn.style.transform = 'scale(1)'; }, 180);
}

// ============ NAVBAR SCROLL ============
function handleScroll(){
  const nav = document.getElementById('navbar');
  if (window.scrollY > 40) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
}

// ============ MOBILE MENU ============
function setupMobileMenu(){
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => {
    menu.classList.toggle('open');
    hamburger.classList.toggle('open');
  });
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => menu.classList.remove('open'));
  });
}

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  setupMobileMenu();
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});