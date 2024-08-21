document.addEventListener('DOMContentLoaded', () => {
    const cartButton = document.getElementById('cart-button');
    const cart = document.getElementById('cart');
    const closeCartButton = document.getElementById('close-cart');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItems = document.getElementById('cart-items');
    let cartCount = 0;

    // Savatga mahsulot qo'shish
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.parentElement;
            const productName = product.querySelector('h3').innerText;
            const productPrice = product.querySelector('p').innerText;

            // Savatdagi mahsulotlarni qo'shish
            const cartItem = document.createElement('li');
            cartItem.innerHTML = `${productName} - ${productPrice}`;
            cartItems.appendChild(cartItem);

            // Savatdagi mahsulotlar sonini yangilash
            cartCount++;
            cartButton.innerText = `Cart (${cartCount})`;
        });
    });

    // Savatni ochish
    cartButton.addEventListener('click', () => {
        cart.classList.add('show');
    });

    // Savatni yopish
    closeCartButton.addEventListener('click', () => {
        cart.classList.remove('show');
    });
});
