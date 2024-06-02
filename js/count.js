document.addEventListener('DOMContentLoaded', function() {
    const decreaseBtn = document.querySelector('.decrease-btn');
    const increaseBtn = document.querySelector('.increase-btn');
    const quantityInput = document.querySelector('.quantity-input');

    decreaseBtn.addEventListener('click', function() {
        // Decrease the input value by 1, but don't go below the minimum value
        if (parseInt(quantityInput.value) > quantityInput.min) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }
    });

    increaseBtn.addEventListener('click', function() {
        // Increase the input value by 1, but don't go above the maximum value
        if (parseInt(quantityInput.value) < quantityInput.max || !quantityInput.hasAttribute('max')) {
            quantityInput.value = parseInt(quantityInput.value) + 1;
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
