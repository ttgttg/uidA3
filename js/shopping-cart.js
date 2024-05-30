document.addEventListener('DOMContentLoaded', function() {
  const cartIcon = document.getElementById('cartIcon');
  const cart = document.getElementById('cart');

  // Toggle the 'show' class on the cart when the cart icon is clicked
  cartIcon.addEventListener('click', function() {
    cart.classList.toggle('show');
  });
});

