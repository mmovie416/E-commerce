function openModal() {
  document.querySelector("#myModal").style.display = "block";
  document.querySelector("#myContentModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myContentModal").style.display = "none";
  document.getElementById("myModal").style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n){
  let i;
  let slides = document.querySelectorAll(".mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "flex";
}




// increament and decreament item
    const tambah = document.querySelector(".plus");
    const kurang = document.querySelector(".minus");
    const display=document.querySelector("#display");
    let count = 0 ;

    tambah.addEventListener('click',function(){
      count++;
      display.innerHTML=count;
    });

    kurang.addEventListener('click',function(){
      if(count<=0) return
      count--;
      display.innerHTML=count;
    });
// increament and decreament

const cartbtn=document.querySelector(".cart-btn");
const invisible = document.querySelector(".invisible");


cartbtn.addEventListener('click',function(){
  if(invisible.style.display==="none"){
    invisible.style.display="flex";
  }else{
    invisible.style.display="none";
  }
});

// add Cart
  const cartContent = document.querySelector(".cart-content");
  const notification = document.querySelector(".notification");
  const addtocart = document.querySelector(".addtocart");
  const addtocartMobile = document.querySelector(".addtocartMobile");
   const addtocartMobile1 = document.querySelector(".addtocartMobile1");

  function addItem(){
    if (count >0 ){
      const total = 125.00 * count;
      cartContent.classList.remove("empty");
      cartContent.innerHTML=`
              <div class="product">
                <div class="product-detail">
                      <img src="./images/image-product-1-thumbnail.jpg" class="product-img" alt="product">
                      <div class="product-info">
                        <p class="product-title">Fall Limited Edition Sneakers</p>
                        <p><span>$125.00</span> × <span class="number">${count}</span> <b>$${total}</b></p>
                      </div>
                      <button class="delete-btn" onclick="hapusItem()"><img src="./images/icon-delete.svg" alt="delete"></button>
                </div>
                    <button class="checkout-btn">Checkout</button>
              </div>
      `
      notification.style.display="flex";
      notification.style.position="absolute";
      notification.style.top="-0.5em";
      notification.style.right="0.1em";
      notification.style.backgroundColor="hsl(26, 100%, 55%)";
      notification.style.color="white";
      notification.style.borderRadius="10px";
      notification.style.width="50%";
      notification.style.margin="auto";
      notification.style.justifyContent="center";
      notification.style.alignItems="center";
      notification.innerText=count;
      notification.style.zIndex="1000";
    }
  }

// addItemMobile

  function addItemMobile(){
    if (count >0 ){
      const total = 125.00 * count;
      cartContent.classList.remove("empty");
      cartContent.innerHTML=`
              <div class="product">
                <div class="product-detail">
                      <img src="./images/image-product-1-thumbnail.jpg" class="product-img" alt="product">
                      <div class="product-info">
                        <p class="product-title">Fall Limited Edition Sneakers</p>
                        <p><span>$125.00</span> × <span class="number">${count}</span> <b>$${total}</b></p>
                      </div>
                      <button class="delete-btn" onclick="hapusItem()"><img src="./images/icon-delete.svg" alt="delete"></button>
                </div>
                    <button class="checkout-btn">Checkout</button>
              </div>
      `
      notification.style.display="flex";
      notification.style.position="absolute";
      notification.style.top="-0.5em";
      notification.style.right="-0.7em";
      notification.style.backgroundColor="hsl(26, 100%, 55%)";
      notification.style.color="white";
      notification.style.borderRadius="10px";
      notification.style.width="55%";
      notification.style.margin="auto";
      notification.style.justifyContent="center";
      notification.style.alignItems="center";
      notification.innerText=count;
      notification.style.zIndex="1000";
    }
  }

// addItemMobile 768px

function addItemMobile1(){
    if (count >0 ){
      const total = 125.00 * count;
      cartContent.classList.remove("empty");
      cartContent.innerHTML=`
              <div class="product">
                <div class="product-detail">
                      <img src="./images/image-product-1-thumbnail.jpg" class="product-img" alt="product">
                      <div class="product-info">
                        <p class="product-title">Fall Limited Edition Sneakers</p>
                        <p><span>$125.00</span> × <span class="number">${count}</span> <b>$${total}</b></p>
                      </div>
                      <button class="delete-btn" onclick="hapusItem()"><img src="./images/icon-delete.svg" alt="delete"></button>
                </div>
                    <button class="checkout-btn">Checkout</button>
              </div>
      `
      notification.style.display="flex";
      notification.style.position="absolute";
      notification.style.top="-0.5em";
      notification.style.right="-0.7em";
      notification.style.backgroundColor="hsl(26, 100%, 55%)";
      notification.style.color="white";
      notification.style.borderRadius="10px";
      notification.style.width="11%";
      notification.style.margin="auto";
      notification.style.justifyContent="center";
      notification.style.alignItems="center";
      notification.innerText=count;
      notification.style.zIndex="1000";
    }
  }

// addItemMobile 768px


  function hapusItem(){
    cartContent.classList.add("empty");
    cartContent.innerHTML=`
      <p> Your Cart Is Empty</p>
    `;
    indicator.style.display="none";
  }

  addtocart.addEventListener('click',addItem);
  addtocartMobile.addEventListener('click',addItemMobile);
  addtocartMobile1.addEventListener('click',addItemMobile1);

// add Cart

// navbar button

const open = document.querySelector(".openbtn");
const menu = document.querySelector("nav .menu ul");
const menu1= document.querySelectorAll("nav .menu ul li ");
const tutup = document.querySelector("nav .menu ul .tutup ");
const kotak = document.querySelector("body .kotak"); 

  open.addEventListener('click',function(){
    menu.classList.toggle('slide');  
    menu.style.transition='0.5s';
    kotak.classList.toggle('slide1');
    kotak.style.visibility="visible";
    kotak.style.transition='0.5s';
    menu.style.zIndex="1000";
    for(let i=0;i<=menu1.length;i++){
      menu1[i].style.color="black";  
    }
    
  });

  tutup.addEventListener('click',function(){
    menu.classList.remove('slide');
    kotak.classList.remove('slide1');
    kotak.style.transition='0.5s';
    kotak.style.visibility="hidden";
    menu.style.transition='0.5s';
  });
// navbar button



