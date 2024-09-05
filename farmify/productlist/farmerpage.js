
document.addEventListener('DOMContentLoaded', () => {
    const productsForBuy = [
        {
            name: "Organic Fertilizer",
            image: "https://i0.wp.com/www.bigtoolbox.com/wp-content/uploads/2022/05/BTB-Blog-Organic.jpg",
            description: "High-quality organic fertilizer for healthy plants.",
            price: "Rs 359",
            for: ["farmer"]
        },
        {
            name: "Tractor",
            image: "https://www.deere.co.in/assets/images/region-1/products/tractors/john-deere-e-series-cab.jpg",
            description: "Efficient and powerful tractor for large-scale farming.",
            price: "Rs 6,00,000",
            for: ["farmer", "retailer"]
        },
        {
            name: "Irrigation System",
            image: "https://www.kcjlandscaping.ae/wp-content/uploads/2022/01/How-to-choose-the-perfect-irrigation-system-for-your-garden.jpg",
            description: "Automated irrigation system to save water and increase yield.",
            price: "Rs 20,000",
            for: ["farmer"]
        },
        
        {
            name: "Greenhouse Kit",
            image: "https://static.wixstatic.com/media/d94be2_01168afe9ae9488c96924dde30f873db~mv2.jpeg/v1/fill/w_480,h_360,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d94be2_01168afe9ae9488c96924dde30f873db~mv2.jpeg",
            description: "Complete greenhouse kit for year-round farming.",
            price: "Rs 2200",
            for: ["farmer"]
        },
        {
            name: "Compost Bin",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJTa7Naoo7ap0risK_o6cpT9Ai4EGmEhg1Jw&s",
            description: "Durable compost bin for organic waste management.",
            price: "Rs 1100",
            for: ["farmer"]
        },
        {
            name: "Solar Water Pump",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS33r24Xs72pTxl7Ig9EO5F9vIVEwPmE2psUA&s",
            description: "Eco-friendly solar water pump for sustainable irrigation.",
            price: "Rs 1,00,005",
            for: ["farmer", "retailer"]
        },
        
        
        {
            name: "Pesticide Sprayer",
            image: "https://t4.ftcdn.net/jpg/02/28/34/83/360_F_228348379_6JHsGfSCqX4wof121lkzqc7JVL1NYL0U.jpg",
            description: "High-efficiency pesticide sprayer for effective crop protection.",
            price: "Rs 1100",
            for: ["farmer", "retailer"]
        },
        {
            name: "Soil Testing Kit",
            image: "https://getbusygardening.com/wp-content/uploads/2017/06/garden-soil-testing-FB.jpg",
            description: "Comprehensive soil testing kit for accurate nutrient analysis.",
            price: "Rs 1400",
            for: ["farmer"]
        },
        {
            name: "Harvesting Tools",
            image: "https://www.theenglishgarden.co.uk/_gatsby/file/430712dc068ac1846aa7ba3a9c021b9e/Burgon%20and%20Ball%20trug.png",
            description: "Essential tools for efficient harvesting.",
            price: "Rs 200",
            for: ["farmer"]
        },
        
        
       
       
        {
            name: "Drone Sprayer",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIAYFzY3BBsWAaAN5zudWLkg9bvMSZFhgWeg&s",
            description: "Advanced drone for efficient pesticide spraying.",
            price: "Rs 7,00,000",
            for: ["farmer"]
        },
        {
            name: "Hydroponic System",
            image: "https://rocketskills.in/wp-content/uploads/2021/08/hydroponics-vegetable-farm-L65BADV-1024x683.jpg",
            description: "Complete hydroponic system for soil-less farming.",
            price: "Rs 2600",
            for: ["farmer", "retailer"]
        },
        
        
       
        {
            name: "Beehive Kit",
            image: "https://m.media-amazon.com/images/I/611ZqK1tTtL._SS600_.jpg",
            description: "Complete beehive kit for beginner beekeepers.",
            price: "Rs 4000",
            for: ["farmer"]
        }
    ];

    const productContainer = document.querySelector('.products');
    const productSection = document.querySelector('.product-list');
    const farmerBtn = document.getElementById('farmer-btn');
    const buyBtn = document.getElementById('buy-btn');
    const sellBtn = document.getElementById('sell-btn');

    // Function to display products based on the selected category
    function displayProducts(products) {
        productContainer.innerHTML = '';
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');

            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">${product.price}</p>
            `;

            productItem.addEventListener('click', () => {
                // Store selected product details in local storage
                localStorage.setItem('selectedProduct', JSON.stringify(product));
                // Redirect to product details page
                window.location.href = 'product-details.html';
            });

            productContainer.appendChild(productItem);
        });
        productSection.style.display = 'block';
    }

    // Function to display the sell form
    function displaySellForm() {
        productContainer.innerHTML = `
            <form id="sell-form">
                <h2>Sell Your Product</h2>
                <label for="product-name">Product Name:</label>
                <input type="text" id="product-name" name="product-name" required><br>

                <label for="product-price">Price:</label>
                <input type="text" id="product-price" name="product-price" required><br>

                <label for="product-description">Details:</label>
                <textarea id="product-description" name="product-description" required></textarea><br>

                

                
                <button type="submit">Submit</button>
            </form>
            `;
        
        productSection.style.display = 'block';

        const sellForm = document.getElementById('sell-form');
        sellForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Product submitted successfully!');
            // You can add further functionality here to handle the form submission
        });
    }

    // Event listeners for role selection
    if (farmerBtn) {
        farmerBtn.addEventListener('click', () => {
            productSection.style.display = 'none'; // Hide the product section
        });
    }

    if (buyBtn) {
        buyBtn.addEventListener('click', () => {
            // Display products for buying
            displayProducts(productsForBuy);
        });
    }

    if (sellBtn) {
        sellBtn.addEventListener('click', () => {
            // Display the sell form
            displaySellForm();
        });
    }

    // Check if we're on the product details page
    if (window.location.pathname.includes('product-details.html')) {
        // Retrieve the selected product details from local storage
        const product = JSON.parse(localStorage.getItem('selectedProduct'));

        if (product) {
            document.getElementById('product-name').textContent = product.name;
            document.getElementById('product-image').src = product.image;
            document.getElementById('product-image').alt = product.name;
            document.getElementById('product-description').textContent = product.description;
            document.getElementById('product-price').textContent = `Price: ${product.price}`;

            
            
        } else {
            document.querySelector('.product-details').innerHTML = '<p>Product not found.</p>';
        }
    }
});
