document.addEventListener('DOMContentLoaded', function() {
  const cartIcon = document.getElementById('cartIcon');
  const cart = document.getElementById('cart');
  const overlay = document.getElementById('overlay');
  const continueShoppingBtn = document.querySelector('.continueShopping');

  // Toggle 'show' class for cart & overlay when the cart icon is clicked
  cartIcon.addEventListener('click', function() {
      cart.classList.toggle('show');
      overlay.classList.toggle('show');
      console.log("Cart toggled");
  });

  // Close the cart & overlay when "Continue Shopping" button is clicked
  continueShoppingBtn.addEventListener('click', function() {
      cart.classList.remove('show');
      overlay.classList.remove('show');
      console.log("Cart closed");
  });
});

