
//close cart
document.addEventListener("DOMContentLoaded", function() {
    var cart = document.getElementById("cart");
    var continueShoppingBtn = document.querySelector(".continueShopping");

    // Function to close the shopping cart
    function closeCart() {
        cart.classList.remove("active");
    }

    // Add event listener to the "Continue Shopping" button
    continueShoppingBtn.addEventListener("click", closeCart);

    // Add event listener to the cart icon to open the cart (optional)
    var cartIcon = document.getElementById("cartIcon");
    cartIcon.addEventListener("click", function() {
        cart.classList.add("active");
    });
});