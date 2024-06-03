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

    //Clear previous content
    cartItemsSummary.innerHTML = '';

    //Populate cart items
    cart.forEach(item => {
        const itemSummary = document.createElement('div');
        itemSummary.innerHTML = `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <p>${item.name}</p>
                    <p>Quantity: ${item.quantity}</p>
                    <p>Price: $${(item.price * item.quantity).toFixed(2)}</p>
                </div>
            </div>
        `;
        cartItemsSummary.appendChild(itemSummary);
    });
    //Populate total items and total cost
    totalItemsSummary.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
    totalCostSummary.textContent = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
}