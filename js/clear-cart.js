document.addEventListener('DOMContentLoaded', function() {
    const backHomeButton = document.getElementById('backhome');
    
    // Add event listener to the "BACK TO HOME" button
    backHomeButton.addEventListener('click', function() {
        localStorage.removeItem('cart');
    });
});
