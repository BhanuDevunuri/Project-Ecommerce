export const ProductDataModule = {
    products: [
        { id: 1, name: "Phone 1", category: "phones", price: 499, description: "A great phone", img: "phone1.jpg" },
        { id: 2, name: "Laptop 1", category: "laptops", price: 999, description: "A powerful laptop", img: "laptop1.jpg" },
        { id: 3, name: "Desktop 1", category: "desktops", price: 799, description: "A reliable desktop", img: "desktop1.jpg" },
        { id: 4, name: "Watch 1", category: "watches", price: 199, description: "A stylish watch", img: "watch1.jpg" },
        { id: 5, name: "Phone 2", category: "phones", price: 599, description: "An upgraded phone", img: "phone2.jpg" },
        { id: 6, name: "Laptop 2", category: "laptops", price: 1299, description: "A high-end laptop", img: "laptop2.jpg" },
        { id: 7, category: 'laptops', name: 'DELL Inspiron 3520', price: 39999, description: 'Dell Inspiron 3520, 12th Gen i3 Processor, 8GB/512GB SSD, Integrated Graphics, 39.62 cm display.', img: 'laptop3.jpg' },
        { id: 8, category: 'laptops', name: 'ASUS Zenbook 14', price: 50990, description: 'ASUS Zenbook 14, AMD Ryzen 5 7530U, 16GB/512GB SSD, Windows 11, UM3402YA-KP514WS.', img: 'laptop4.jpg' },
        { id: 9, category: 'desktops', name: 'ASUS AIO A3', price: 37990, description: 'ASUS AIO A3 Series with Touchscreen, Intel 12th Gen Core i5, 8GB DDR4/512GB SSD/Windows 11 Home/23.8 Inch Screen.', img: 'desktop1.jpg' },
        { id: 10, category: 'desktops', name: 'Lenovo Ideacentre', price: 29790, description: 'Lenovo Ideacentre Core i3 (10th Gen), 8 GB DDR4/1 TB/Windows 10 Home/21.5 Inch Screen.', img: 'desktop2.jpg' },
        { id: 11, category: 'desktops', name: 'BitFry', price: 18659, description: 'BitFry Core 15 Complete Desktop, Core 15 3rd Generation, 8GB RAM/512GB NVMe SSD, Windows 10 Pro.', img: 'desktop3.jpg' },
        { id: 12, category: 'desktops', name: 'TECH- Assemblers Z', price: 13999, description: 'TECH- Assemblers Z Core i5, 8 GB DDR3/500 GB/Windows 10 Home/17 Inch Screen.', img: 'desktop4.jpg' },
        { id: 13, category: 'watches', name: 'SMAEL Digital Watch', price: 999, description: 'SMAEL Sports Digital Quartz watch, 2 Time, Alarm, Chronograph, Date, Week, LED light, Shock Resistant, Waterproof.', img: 'watch1.jpg' },
        { id: 14, category: 'watches', name: 'AJO mi Smartwatch', price: 1599, description: 'Smart Watch with Pedometer, Sedentary Reminder, Sleep Monitor, Instant Notification, Anti-Lost, for Android & iOS - Black.', img: 'watch2.jpg' },
        { id: 15, category: 'watches', name: 'Fire-Boltt Gladiator', price: 4599, description: 'Fire-Boltt Gladiator + 1.96" Smartwatch, Rotating Crown, 115+ Sports Modes & Bluetooth Calling, AI Voice Assistant.', img: 'watch3.jpg' },
        { id: 16, category: 'watches', name: 'Fire-Boltt Phoenix Pro', price: 4550, description: 'Fire-Boltt Phoenix Pro Smartwatch, 3.53 cm (1.39 inch) HD Display, Bluetooth Calling, Upto 7 Days Battery, 120+ Sports Modes, IP67 Water Resistant, AI Voice Assistant.', img: 'watch4.jpg' }
    ],

    getProducts: function() {
        return this.products;
    },

    getProductById: function(id) {
        return this.products.find(product => product.id === id);
    },

    setProducts: function(newProducts) {
        this.products = newProducts;
    }
};
