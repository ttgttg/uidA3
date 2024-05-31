document.addEventListener('DOMContentLoaded', function() {
    const cartIcon = document.getElementById('cartIcon');
    const cart = document.getElementById('cart');
    const continueShopping = document.querySelector('.continueShopping');
  
    // Toggle the 'show' class on the cart when the cart icon is clicked
    cartIcon.addEventListener('click', function() {
      cart.classList.toggle('show');
    });
  
    // Close the cart when "Continue Shopping" text is clicked
    continueShopping.addEventListener('click', function() {
      cart.classList.remove('show');
    });
  });
  