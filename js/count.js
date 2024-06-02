document.addEventListener('DOMContentLoaded', function() {
    const decreaseBtn = document.querySelector('.decrease-btn');
    const increaseBtn = document.querySelector('.increase-btn');
    const quantityInput = document.querySelector('.quantity-input');

    decreaseBtn.addEventListener('click', function() {
        if (parseInt(quantityInput.value) > quantityInput.min) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
            console.log('hello');
        }
    });

    increaseBtn.addEventListener('click', function() {
        if (parseInt(quantityInput.value) < quantityInput.max || !quantityInput.hasAttribute('max')) {
            quantityInput.value = parseInt(quantityInput.value) + 1;
            console.log('hello');
        }
    });

    // Prevent default behavior of the buttons, such as form submission
    decreaseBtn.addEventListener('mousedown', function(event) {
        event.preventDefault();
    });

    increaseBtn.addEventListener('mousedown', function(event) {
        event.preventDefault();
    });
});
