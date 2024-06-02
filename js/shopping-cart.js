document.addEventListener('DOMContentLoaded', function() {
    const cartIcon = document.getElementById('cartIcon');
    const cart = document.getElementById('cart');
    const continueShopping = document.querySelector('.continueShopping');
    const overlay = document.getElementById("overlay");
  
    // Toggle 'show' class for cart & overlay when the cart icon is clicked
    cartIcon.addEventListener('click', function() {
      cart.classList.toggle('show');
      overlay.classList.toggle('show');
    });
  
    // Close the cart & overlay when "Continue Shopping" text is clicked
    continueShopping.addEventListener('click', function() {
      cart.classList.remove('show');
      overlay.classList.remove("show");
    });
  });
  
  