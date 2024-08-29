// Initialize the cart as an empty array or get from localStorage if it already exists
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Array of product details based on the product_catalog.html
const products = [
    { id: 1, name: 'Samsung Galaxy S23 Ultra', price: 109999 },
    { id: 2, name: 'Apple iPhone 13', price: 51999 },
    { id: 3, name: 'Redmi 12 5G', price: 13999 },
    { id: 4, name: 'realme NARZO 70 Pro 5G', price: 17999 },
    { id: 5, name: 'MSI Modern 15', price: 58999 },
    { id: 6, name: 'MSI Raider GE78 HX', price: 299999 },
    { id: 7, name: 'Dell Inspiron 3520', price: 39999 },
    { id: 8, name: 'ASUS Zenbook 14', price: 50990 },
    { id: 9, name: 'ASUS AIO A3', price: 37990 },
    { id: 10, name: 'Lenovo Ideacentre', price: 29990 },
    { id: 11, name: 'BitFry Core 15', price: 18659 },
    { id: 12, name: 'TECH-Assemblers Z', price: 13999 },
    { id: 13, name: 'SMAEL Sports Digital Watch', price: 999 },
    { id: 14, name: 'AJO Mi Smartwatch', price: 1599 },
    { id: 15, name: 'Fire-Boltt Gladiator', price: 2499 },
    { id: 16, name: 'Apple Watch SE 2nd Gen', price: 27900 }
];

// Function to add a product to the cart
function addToCart(productId) {
    // Find the product based on productId
    const product = products.find(p => p.id === productId);

    if (product) {
        // Check if the product is already in the cart
        
        const existingProductIndex = cart.findIndex(item => item.id === productId);

        if (existingProductIndex > -1) {
            // Update quantity if the product is already in the cart
            cart[existingProductIndex].quantity += 1;
        } else {
            // Add new product to the cart
            cart.push({ ...product, quantity: 1 });
        }

        // Save the updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`${product.name} has been added to your cart.`);
    } else {
        alert('Product not found.');
    }
}
