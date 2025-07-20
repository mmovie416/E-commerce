// Debug marker
console.log("script.js loaded");

// Modal for product image preview (if used)
function openModal() {
  const modal = document.querySelector("#myModal");
  const contentModal = document.querySelector("#myContentModal");
  if (modal && contentModal) {
    modal.style.display = "flex";
    modal.style.alignItems="center";
    modal.style.justifyContent="center";
    contentModal.style.display = "flex";
    contentModal.style.backgroundColor="transparent";
    
    contentModal.style.flexDirection="column";

    // contentModal.style.height="100vh";
    // contentModal.style.width="100vw";
    
  }
}

function closeModal() {
  const modal = document.querySelector("#myModal");
  const contentModal = document.querySelector("#myContentModal");
  if (modal && contentModal) {
    modal.style.display = "none";
    contentModal.style.display = "none";
  }
}

// Slideshow logic (if modal preview is used)
let slideIndex = 1;
function showSlides(n) {
  const slides = document.querySelectorAll(".mySlides");
  if (!slides.length) return;
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;
  slides.forEach((slide, i) => {
    slide.style.display = i === slideIndex - 1 ? "flex" : "none";
  });
}

function plusSlides(n) { showSlides(slideIndex += n); }
function currentSlide(n) { showSlides(slideIndex = n); }
showSlides(slideIndex);

// Counter logic
let count = 0;
const tambah = document.querySelector(".plus");
const kurang = document.querySelector(".minus");
const display = document.querySelector("#display");

if (tambah && kurang && display) {
  tambah.addEventListener('click', function () {
    count++;
    display.textContent = count;
  });

  kurang.addEventListener('click', function () {
    if (count > 0) count--;
    display.textContent = count;
  });
}

// Cart toggle logic
const cartbtn = document.querySelector(".cart-btn");
const cartWrapper = document.querySelector(".cart-wrp");
if (cartbtn && cartWrapper) {
  cartbtn.addEventListener("click", () => {
    cartWrapper.classList.toggle("invisible");
    cartWrapper.style.display = cartWrapper.classList.contains("invisible") ? "none" : "flex";
  });
}

// Add to cart
const cartContent = document.querySelector(".cart-content");
const notification = document.querySelector(".notification");
const addtocart = document.querySelector(".addtocart");

function hapusItem() {
  if (cartContent && notification) {
    cartContent.classList.add("empty");
    cartContent.innerHTML = `<p>Your Cart Is Empty</p>`;
    notification.style.display = "none";
  }
}

function addItemToCart() {
  if (count > 0 && cartContent && notification) {
    const total = 125.00 * count;
    cartContent.classList.remove("empty");
    cartContent.innerHTML = `
      <div class="product">
        <div class="product-detail d-flex align-items-center gap-3">
          <img src="./images/image-product-1-thumbnail.jpg" class="product-img" alt="product" style="width: 50px; height: 50px; border-radius: 5px;">
          <div>
            <p class="product-title mb-1">Fall Limited Edition Sneakers</p>
            <p><span>$125.00</span> × <span class="number">${count}</span> <strong>$${total.toFixed(2)}</strong></p>
          </div>
          <button class="delete-btn" onclick="hapusItem()" style="background: none; border: none;">
            <img src="./images/icon-delete.svg" alt="delete">
          </button>
        </div>
        <button class="checkout-btn mt-3 w-100 btn btn-warning">Checkout</button>
      </div>`;

    notification.style.display = "inline-block";
    notification.textContent = count;
  }
}

if (addtocart) {
  addtocart.addEventListener("click", addItemToCart);
}

function openMobileMenu() {
  document.getElementById("mobileSidebar").classList.add("active");
  document.getElementById("mobileMenuOverlay").classList.add("active");
}

function closeMobileMenu() {
  document.getElementById("mobileSidebar").classList.remove("active");
  document.getElementById("mobileMenuOverlay").classList.remove("active");
}
