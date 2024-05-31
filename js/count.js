// Add event listeners to increase and decrease buttons
const increaseBtn = document.querySelector('.increase-btn');
const decreaseBtn = document.querySelector('.decrease-btn');
const quantityInput = document.querySelector('.quantity-input');

increaseBtn.addEventListener('click', () => {
    quantityInput.value = parseInt(quantityInput.value) + 1;
});

decreaseBtn.addEventListener('click', () => {
    const currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
});
