function sortProducts() {
    const sortValue = document.getElementById("sort").value;
    const productsContainers = document.querySelectorAll(".procontainer");

    productsContainers.forEach(container => {
        const products = Array.from(container.querySelectorAll(".product"));

        products.sort((a, b) => {
            if (sortValue === "price-asc") {
                return a.dataset.price - b.dataset.price;
            } else if (sortValue === "price-desc") {
                return b.dataset.price - a.dataset.price;
            } else if (sortValue === "name-asc") {
                return a.dataset.name.localeCompare(b.dataset.name);
            } else if (sortValue === "name-desc") {
                return b.dataset.name.localeCompare(a.dataset.name);
            }
        });

        // Re-arrange the sorted products in the DOM
        products.forEach(product => container.appendChild(product));
    });
}
