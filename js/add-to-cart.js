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

    localStorage.setItem('cart', JSON.stringify(cart));
});

// Load cart data from localStorage on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
});

// Update cart and display
// Update cart and display
function updateCart() {
    cartItemsContainer.innerHTML = '';
    let totalItems = 0;
    let totalCost = 0;
    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="product-content">
                <h3>${item.name}</h3>
                <p>Price: $${item.price}</p>
                <p>Quantity: 
                    <button class="decrement-quantity-btn" data-index="${index}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="increment-quantity-btn" data-index="${index}">+</button>
                    <button class="remove-item-btn" data-index="${index}">Remove</button>
                </p>
               
            </div>
        `;
        cartItemsContainer.appendChild(itemElement);
        totalItems += item.quantity;
        totalCost += item.price * item.quantity;
    });
    numberOfItems.textContent = totalItems;
    totalPrice.textContent = totalCost.toFixed(2);

    // Add event listeners to remove buttons
    const removeButtons = document.querySelectorAll('.remove-item-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const indexToRemove = parseInt(button.getAttribute('data-index'));
            removeFromCart(indexToRemove);
        });
    });

    // Add event listeners to increment buttons
    const incrementButtons = document.querySelectorAll('.increment-quantity-btn');
    incrementButtons.forEach(button => {
        button.addEventListener('click', () => {
            const indexToUpdate = parseInt(button.getAttribute('data-index'));
            increaseQuantity(indexToUpdate);
        });
    });

    // Add event listeners to decrement buttons
    const decrementButtons = document.querySelectorAll('.decrement-quantity-btn');
    decrementButtons.forEach(button => {
        button.addEventListener('click', () => {
            const indexToUpdate = parseInt(button.getAttribute('data-index'));
            decreaseQuantity(indexToUpdate);
        });
    });
}

// Increase quantity of an item
function increaseQuantity(index) {
    cart[index].quantity++;
    updateCart();
}

// Decrease quantity of an item
function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
        updateCart();
    }
}

// Show "Item added to cart" message
function showAddToCartMessage() {
    const message = document.getElementById('addToCartMessage');
    message.style.display = 'block';
    setTimeout(() => {
        message.style.display = 'none';
    }, 2000);
}

// Remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart(); // Update cart display after removal
    localStorage.setItem('cart', JSON.stringify(cart));
}
