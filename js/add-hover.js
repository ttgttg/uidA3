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

function addToCart(button) {
    const productInfo = button.closest('.product-info');
    const itemName = productInfo.querySelector('.product-title').textContent;
    const itemPrice = parseFloat(productInfo.querySelector('.product-price').textContent.slice(1));
    // Add more logic if needed
    
    // Example: Send data to a cart or store
    console.log(`Item Name: ${itemName}, Item Price: ${itemPrice}`);
}
