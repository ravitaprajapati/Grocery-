// 🔥 PAGE LOAD (Register ya Login decide karega)
window.onload = function () {
  let user = localStorage.getItem("user");

  if (user) {
    document.getElementById("loginBox").style.display = "block";
  } else {
    document.getElementById("registerBox").style.display = "block";
  }
};


// 🔐 REGISTER
function register() {
  let user = {
    username: document.getElementById("regUsername").value,
    mobile: document.getElementById("regMobile").value,
    address: document.getElementById("regAddress").value,
    password: document.getElementById("regPassword").value
  };

  localStorage.setItem("user", JSON.stringify(user));
  alert("Sign Up Successful!");
  location.reload();
}




// 🔐 LOGIN
function login() {
  let stored = JSON.parse(localStorage.getItem("user"));

  let username = document.getElementById("loginUsername").value;
  let password = document.getElementById("loginPassword").value;

  if (stored && username === stored.username && password === stored.password) {
    
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("mainContent").style.display = "block";

    // 👤 USER DETAILS SIDEBAR ME
    document.getElementById("uName").innerText = "Username: " + stored.username;
    document.getElementById("uMobile").innerText = "Mobile: " + stored.mobile;
    document.getElementById("uAddress").innerText = "Address: " + stored.address;

    // renderTable();
    startSlider();

  } else {
    alert("Wrong Username or Password!");
  }
}

// 🚪 LOGOUT
function logout() {
  location.reload();
}

function searchRecord() {

    let input = document.getElementById("search").value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {

        let text = card.innerText.toLowerCase();

        if (text.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

}




// 🎞️ SLIDER
function startSlider(){
    let images = [
        "image/17.jpg",
        "image/18.jpg",
        "image/19.jpg",
        "image/20.jpg",
        "image/F2.jpg",
        "image/22.jpg",
        "image/R.webp"
    ];

    let i = 0;
    let slide = document.getElementById("slide");

    setInterval(function(){

        i++;

        if(i >= images.length){
            i = 0;
        }

        slide.src = images[i];

    }, 2000);
}


// window.onload = function(){
//     startSlider();
// }








function paymentDone() {

    document.body.innerHTML = `
    <div style="
        height:100vh;
        width:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        background:#f4fff4;
        font-family:Arial,sans-serif;
    ">
        <h1 style="
            color:green;
            font-size:50px;
            margin-bottom:20px;
        ">
            ✅ Payment Successful
        </h1>

        <p style="
            font-size:22px;
            color:#333;
            margin-bottom:30px;
        ">
            Thank You For Shopping 🛍️
        </p>

        <button onclick="location.reload()"
        style="
            padding:12px 25px;
            font-size:18px;
            border:none;
            border-radius:8px;
            background:green;
            color:white;
            cursor:pointer;
        ">
            🏠 Back To Home
        </button>
    </div>
    `;
}









function addToCart(item, quantity){

    let cart = document.getElementById("cartItems");

    cart.innerHTML += `
        <div class="cart-row">
            ${item} - ${quantity}
        </div>
    `;
}




let cartItems = [];

// PAGE LOAD

window.addEventListener("load", function(){

    let savedCart =
        JSON.parse(localStorage.getItem("cartItems")) || [];

    cartItems = savedCart;

    let count = document.getElementById("cart-count");

    if(count){
        count.innerText = cartItems.length;
    }
});


function addToCart(item){

    alert("Button Working: " + item);

    cartItems.push(item);

    document.getElementById("cart-count").innerText =
    cartItems.length;

    displayCart();
}


function addToCart(item){

    alert(item + " added to cart");

    cartItems.push(item);

    displayCart();
}

// SHOW CART

function showCart(){

    if(cartItems.length === 0){

        alert("Cart is Empty 🛒");

        return;
    }

    let message = "🛒 Cart Items\n\n";

    cartItems.forEach(function(item,index){

        message += (index + 1) + ". " + item + "\n";

    });

    alert(message);
}




function removeItem(index){

    cartItems.splice(index,1);

    document.getElementById("cart-count").innerText =
    cartItems.length;

    displayCart();
}

function showCart(){

    let cart = document.getElementById("cartItems");

    if(cart.style.display === "block"){
        cart.style.display = "none";
    }else{
        cart.style.display = "block";
    }
}







// ADD TO CART
function addToCart(item) {

    cartItems.push(item);

    localStorage.setItem(
        "cartItems",
        JSON.stringify(cartItems)
    );

    let count = document.getElementById("cart-count");

    if (count) {
        count.innerText = cartItems.length;
    }

    displayCart();

    alert(item + " Added To Cart 🛒");
}














function displayCart(){

    let cart = document.getElementById("cartItems");

    if(cartItems.length === 0){
        cart.innerHTML = "<h3>🛒 Cart Empty</h3>";
        return;
    }

    cart.innerHTML = "<h3>🛒 Cart Items</h3>";

    cartItems.forEach((item,index)=>{

        cart.innerHTML += `
        <div class="cart-row">
            <span>${item}</span>

            <button onclick="removeItem(${index})">
                ❌
            </button>
        </div>
        `;
    });
}












// REMOVE ITEM
function removeItem(index) {

    cartItems.splice(index, 1);

    localStorage.setItem(
        "cartItems",
        JSON.stringify(cartItems)
    );

    document.getElementById("cart-count").innerText =
        cartItems.length;

    displayCart();
}

// SHOW / HIDE CART
function showCart() {

    let cart = document.getElementById("cartItems");

    if (!cart) return;

    if (cart.style.display === "block") {
        cart.style.display = "none";
    } else {
        cart.style.display = "block";
    }
}






function toggleCart(){

    let cart =
    document.getElementById("cartSidebar");

    cart.classList.toggle("show");
}





function openSidebar() {
    sidebar.style.left = "0";
}

function closeSidebar() {
    sidebar.style.left = "-320px";
}
