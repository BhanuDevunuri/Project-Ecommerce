document.addEventListener('DOMContentLoaded', function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalContainer = document.getElementById('cart-total');

    const products = [
        { id: 1, name: 'Samsung Galaxy S23 Ultra', price: 109999, img: 'img/phone1.jpg' },
        { id: 2, name: 'Apple iPhone 13', price: 51999, img: 'img/phone2.jpg' },
        { id: 3, name: 'Redmi 12 5G', price: 13999, img: 'img/phone3.jpg' },
        { id: 4, name: 'realme NARZO 70 Pro 5G', price: 17999, img: 'img/phone4.jpg' },
        { id: 5, name: 'MSI Modern 15', price: 58999, img: 'img/laptop1.jpg' },
        { id: 6, name: 'MSI Raider GE78 HX', price: 299999, img: 'img/laptop2.jpg' },
        { id: 7, name: 'Dell Inspiron 3520', price: 39999, img: 'img/laptop3.jpg' },
        { id: 8, name: 'ASUS Zenbook 14', price: 50990, img: 'img/laptop4.jpg' },
        { id: 9, name: 'ASUS AIO A3', price: 37990, img: 'img/desktop1.jpg' },
        { id: 10, name: 'Lenovo Ideacentre', price: 29990, img: 'img/desktop2.jpg' },
        { id: 11, name: 'BitFry Core 15', price: 18659, img: 'img/desktop3.jpg' },
        { id: 12, name: 'TECH-Assemblers Z', price: 13999, img: 'img/desktop4.jpg' },
        { id: 13, name: 'SMAEL Sports Digital Watch', price: 999, img: 'img/watch1.jpg' },
        { id: 14, name: 'AJO Mi Smartwatch', price: 1599, img: 'img/watch2.jpg' },
        { id: 15, name: 'Fire-Boltt Gladiator', price: 2499, img: 'img/watch3.jpg' },
        { id: 16, name: 'Apple Watch SE 2nd Gen', price: 27900, img: 'img/watch4.jpg' }
    ];

    function displayCartItems() {
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            cartTotalContainer.innerHTML = '';
            return;
        }

        let total = 0;

        cart.forEach((item, index) => {
            const product = products.find(p => p.id === item.id);
            if (product) {
                const itemTotal = product.price * item.quantity;
                total += itemTotal;

                cartItemsContainer.innerHTML += `
                    <div class="cart-item">
                        <img src="${product.img}" alt="${product.name}" class="cart-item-image">
                        <div class="cart-item-details">
                            <h2>${product.name}</h2>
                            <p>Price: Rs. ${product.price}</p>
                            <p>Quantity: ${item.quantity}</p>
                            <p>Total: Rs. ${itemTotal}</p>
                            <button class="remove-btn" data-index="${index}">Remove</button>
                        </div>
                    </div>
                `;
            }
        });

        cartTotalContainer.innerHTML = `<h2>Total Price: Rs. ${total}</h2>`;

        // Add event listeners to all remove buttons
        document.querySelectorAll('.remove-btn').forEach(button => {
            button.addEventListener('click', removeItem);
        });
    }

    function removeItem(event) {
        const index = event.target.getAttribute('data-index');
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
    }

    displayCartItems();
});
