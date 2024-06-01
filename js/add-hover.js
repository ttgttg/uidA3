function showAddToCartButton(element) {
    const addButton = element.querySelector('.add-to-cart-btn');
    addButton.style.opacity = '1';
    addButton.style.visibility = 'visible';
}

function hideAddToCartButton(element) {
    const addButton = element.querySelector('.add-to-cart-btn');
    addButton.style.opacity = '0';
    addButton.style.visibility = 'hidden';
}
