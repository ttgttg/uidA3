window.addEventListener('DOMContentLoaded', () => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        const cart = JSON.parse(savedCart);
        populateOrderSummary(cart);
    }
});

function populateOrderSummary(cart) {
    const cartItemsSummary = document.getElementById('cartItemsSummary');
    const totalItemsSummary = document.getElementById('totalItemsSummary');
    const totalCostSummary = document.getElementById('totalCostSummary');

    // Clear previous content
    cartItemsSummary.innerHTML = '';

    // Populate cart items
    cart.forEach(item => {
        const itemSummary = document.createElement('div');
        itemSummary.innerHTML = `
            <p>${item.name} - Quantity: ${item.quantity}</p>
        `;
        cartItemsSummary.appendChild(itemSummary);
    });

    // Populate total items and total cost
    totalItemsSummary.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
    totalCostSummary.textContent = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
}