// Shopping cart functionality

const addToCartBtn = document.querySelector('.add-to-cart-btn');
const quantityInput = document.querySelector('.quantity-input');
const cartItemsContainer = document.querySelector('.listCart');
const numberOfItems = document.getElementById('numberOfItems');
const totalPrice = document.getElementById('totalPrice');

// Initialize cart
let cart = [];

// Add to cart button click event
addToCartBtn.addEventListener('click', () => {
    const quantity = parseInt(quantityInput.value);
    const itemName = document.querySelector('.productOptions h1').textContent;
    const itemPrice = parseFloat(document.querySelector('.productOptions .price h1').textContent.slice(1)); // Remove '$' sign and convert to float
    const itemImage = document.querySelector('.pageLeft .image img').src;
    
    const item = {
        name: itemName,
        price: itemPrice,
        quantity: quantity,
        image: itemImage
    };
    cart.push(item);
    updateCart();
    showAddToCartMessage();
});

/// Update cart and display
function updateCart() {
    cartItemsContainer.innerHTML = '';
    let totalItems = 0;
    let totalCost = 0;
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image"> <!-- Added class to the image -->
            <div class="product-content">
                <h3>${item.name}</h3>
                <p>Price: $${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
            </div>
        `;
        cartItemsContainer.appendChild(itemElement);
        totalItems += item.quantity;
        totalCost += item.price * item.quantity;
    });
    numberOfItems.textContent = totalItems;
    totalPrice.textContent = totalCost.toFixed(2);
}
// Show "Item added to cart" message
function showAddToCartMessage() {
    const message = document.getElementById('addToCartMessage');
    message.style.display = 'block';
    setTimeout(() => {
        message.style.display = 'none';
    }, 2000);
}