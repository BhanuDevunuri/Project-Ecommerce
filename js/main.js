document.addEventListener('DOMContentLoaded', function() {
    // Sample products data with descriptions and images
    const products = [
        { id: 1, category: 'phones', name: 'Galaxy S23 Ultra', price: 109999, description: 'Samsung Galaxy S23 Ultra, smartphone, Qualcomm Snapdragon 8, 12GB, 256GB, 6.8in, 5G.', img: 'phone1.jpg' },
        { id: 2, category: 'phones', name: 'Apple iPhone 13', price: 51999, description: 'Apple iPhone 13, 5G, smartphone, 4GB, 128GB, dual sim, 6.1in, A15.', img: 'phone2.jpg' },
        { id: 3, category: 'phones', name: 'Redmi 12 5G', price: 13999, description: 'Redmi 12 5G, Moonstone Silver, 8GB, 256GB, 50MP AI camera.', img: 'phone3.jpg' },
        { id: 4, category: 'phones', name: 'Realme NARZO 70 Pro 5G', price: 17999, description: 'Realme NARZO 70 Pro 5G, 8GB RAM, GSM, unlocked phone, MediaTek Dimensity 7050, 50MP.', img: 'phone4.jpg' },
        { id: 5, category: 'laptops', name: 'MSI Modern 15', price: 58999, description: 'MSI Intel Core i5, 1235U, 16GB/512GB SSD, Windows 11 Home, Modern 15 B12M-277IN thin laptop.', img: 'laptop1.jpg' },
        { id: 6, category: 'laptops', name: 'MSI Raider GE78 HX', price: 299999, description: 'MSI Raider GE78 HX, Intel 14th Gen i9-14900HX, 43cm QHD, 32GB/2TB NVMe SSD, Windows 11 Home laptop.', img: 'laptop2.jpg' },
        { id: 7, category: 'laptops', name: 'DELL Inspiron 3520', price: 39999, description: 'Dell Inspiron 3520, 12th Gen i3 Processor, 8GB/512GB SSD, Integrated Graphics, 39.62 cm display.', img: 'laptop3.jpg' },
        { id: 8, category: 'laptops', name: 'ASUS Zenbook 14', price: 50990, description: 'ASUS Zenbook 14, AMD Ryzen 5 7530U, 16GB/512GB SSD, Windows 11, UM3402YA-KP514WS.', img: 'laptop4.jpg' },
        { id: 9, category: 'desktops', name: 'ASUS AIO A3', price: 37990, description: 'ASUS AIO A3 Series with Touchscreen, Intel 12th Gen Core i5, 8GB DDR4/512GB SSD/Windows 11 Home/23.8 Inch Screen.', img: 'desktop1.jpg' },
        { id: 10, category: 'desktops', name: 'Lenovo Ideacentre', price: 29790, description: 'Lenovo Ideacentre Core i3 (10th Gen), 8 GB DDR4/1 TB/Windows 10 Home/21.5 Inch Screen.', img: 'desktop2.jpg' },
        { id: 11, category: 'desktops', name: 'BitFry', price: 18659, description: 'BitFry Core 15 Complete Desktop, Core 15 3rd Generation, 8GB RAM/512GB NVMe SSD, Windows 10 Pro.', img: 'desktop3.jpg' },
        { id: 12, category: 'desktops', name: 'TECH- Assemblers Z', price: 13999, description: 'TECH- Assemblers Z Core i5, 8 GB DDR3/500 GB/Windows 10 Home/17 Inch Screen.', img: 'desktop4.jpg' },
        { id: 13, category: 'watches', name: 'SMAEL Digital Watch', price: 999, description: 'SMAEL Sports Digital Quartz watch, 2 Time, Alarm, Chronograph, Date, Week, LED light, Shock Resistant, Waterproof.', img: 'watch1.jpg' },
        { id: 14, category: 'watches', name: 'AJO mi Smartwatch', price: 1599, description: 'Smart Watch with Pedometer, Sedentary Reminder, Sleep Monitor, Instant Notification, Anti-Lost, for Android & iOS - Black.', img: 'watch2.jpg' },
        { id: 15, category: 'watches', name: 'Fire-Boltt Gladiator', price: 4599, description: 'Fire-Boltt Gladiator + 1.96" Smartwatch, Rotating Crown, 115+ Sports Modes & Bluetooth Calling, AI Voice Assistant.', img: 'watch3.jpg' },
        { id: 16, category: 'watches', name: 'Fire-Boltt Phoenix Pro', price: 4550, description: 'Fire-Boltt Phoenix Pro Smartwatch, 3.53 cm (1.39 inch) HD Display, Bluetooth Calling, Upto 7 Days Battery, 120+ Sports Modes, IP67 Water Resistant, AI Voice Assistant.', img: 'watch4.jpg' },
    ];

    let filteredProducts = [...products];

    // Initial display of products
    displayProducts(filteredProducts);

    // Event listener for sorting
    document.getElementById('sort-dropdown').addEventListener('change', function() {
        sortProducts(this.value);
    });

    // Event listener for filtering
    document.getElementById('filter-category').addEventListener('change', function() {
        filterProducts(this.value);
    });

    // Function to display products
    function displayProducts(products) {
        const productContainer = document.getElementById('product-container');
        productContainer.innerHTML = '';

        products.forEach(product => {
            productContainer.innerHTML += `
                <div class="product-item">
                    <img src="${product.img || 'placeholder.jpg'}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description || ''}</p>
                    <p>Price: $${product.price}</p>
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            `;
        });

        attachAddToCartListeners(); // Re-attach event listeners after updating the DOM
    }

    // Function to sort products
    function sortProducts(criteria) {
        let sortedProducts = [...filteredProducts];

        if (criteria === 'price-asc') {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (criteria === 'price-desc') {
            sortedProducts.sort((a, b) => b.price - a.price);
        } else if (criteria === 'name-asc') {
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        } else if (criteria === 'name-desc') {
            sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        }

        displayProducts(sortedProducts);
    }

    // Function to filter products
    function filterProducts(category) {
        if (category === 'all') {
            filteredProducts = [...products];
        } else {
            filteredProducts = products.filter(product => product.category === category);
        }

        // Reapply sorting after filtering
        const sortCriteria = document.getElementById('sort-dropdown').value;
        sortProducts(sortCriteria);
    }

    // Function to attach 'Add to Cart' listeners
    function attachAddToCartListeners() {
        const buttons = document.querySelectorAll('.add-to-cart');
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                addToCart(productId);
            });
        });
    }

    // Function to handle adding products to cart
    function addToCart(id) {
        // Your cart handling logic
        alert(`Product with ID ${id} added to cart`);
    }
});
