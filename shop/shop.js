// Cart functionality
let cart = [];
let total = 0;

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productCard = button.parentElement;
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = parseFloat(productCard.querySelector('p').textContent.slice(1));

        // Add the item to the cart array
        cart.push({ name: productName, price: productPrice });
        total += productPrice;

        updateCartUI();
    });
});

// Update the cart UI
function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Clear the current list

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    document.getElementById('cart-total').textContent = total.toFixed(2);
}

// Checkout button functionality
document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty.');
    } else {
        alert('Thank you for your purchase!');
        cart = [];
        total = 0;
        updateCartUI();
    }
});
