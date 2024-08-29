// Function to filter products based on the selected category
function filterProducts() {
    const category = document.getElementById("category").value;
    const allProducts = document.querySelectorAll(".products ");
    
    allProducts.forEach(product => {
        // Show all products initially
        product.style.display = "block";

        // Get the product's category from its parent container's ID
        const productCategory = product.closest(".products").parentElement.id.replace("-products", "");

        // If the selected category is not 'all', hide products that don't match the selected category
        if (category !== "all" && productCategory !== category) {
            product.style.display = "none";
        }
    });
}

// Initial call to display all products
filterProducts();
