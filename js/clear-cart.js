document.addEventListener('DOMContentLoaded', function() {
    const backHomeButton = document.getElementById('backhome');
    
    // "BACK TO HOME" button
    backHomeButton.addEventListener('click', function() {
        localStorage.removeItem('cart');
    });
});
