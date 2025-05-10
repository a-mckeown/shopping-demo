// Initialize the cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update the cart count
function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

// Add product to cart
function addToCart(productId, productName, productPrice) {
    cart.push({ id: productId, name: productName, price: productPrice });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// View Cart functionality
document.getElementById('view-cart').addEventListener('click', function() {
    const cartModal = document.getElementById('cart-modal');
    const cartItemsList = document.getElementById('cart-items');
    
    // Clear previous cart items
    cartItemsList.innerHTML = '';

    // Display cart items
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(li);
    });

    // Show cart modal
    cartModal.style.display = 'flex';
});

// Close Cart functionality
document.getElementById('close-cart').addEventListener('click', function() {
    document.getElementById('cart-modal').style.display = 'none';
});

// Add to cart buttons
const addButtons = document.querySelectorAll('.add-to-cart');
addButtons.forEach(button => {
    button.addEventListener('click', function() {
        const product = this.closest('.product');
        const productId = product.getAttribute('data-id');
        const productName = product.querySelector('h3').textContent;
        const productPrice = parseFloat(product.querySelector('p').textContent.replace('$', ''));

        addToCart(productId, productName, productPrice);
    });
});

// Checkout functionality (just for demo, you can add any action here)
document.getElementById('checkout').addEventListener('click', function() {
    alert('Checkout process (just a demo, no payment handled)');

    // Clear cart after checkout
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    document.getElementById('cart-modal').style.display = 'none';
});
