

document.addEventListener('DOMContentLoaded', () => {
    const productsForBuy = [
        {
            name: "corn",
            image: "https://cdn.britannica.com/36/167236-050-BF90337E/Ears-corn.jpg",
            description: "Fresh corn from farms",
            price: "Rs 25 per kg"
        },
        {
            name: "peas",
            image: "https://images.slurrp.com/webstories/wp-content/uploads/2023/11/Marshall-Grain.jpg",
            description:"Fresh peas for daily cooking.",
            price: "Rs 50 per kg"
        },
        {
            name: "Rice",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2fUc9kt_0i62cjkJBYZ-3SzwxI7xk5n9xjw&s",
            description: "Fresh rice for daily cooking.",
            price: "Rs 25 per kg"
        },
        {
            name: "Onion",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn9xaEknCGBBa9VeQXYNk6AeNH0SKAAwtfbw&s",
            description: "Fresh onions for daily cooking.",
            price: "Rs 25 per kg"
        },
        {
            name: "Potato",
            image: "https://cdn.britannica.com/08/194708-050-56FF816A/potatoes.jpg",
            description: "High-quality potatoes for versatile use.",
            price: "Rs 25 per kg"
        },
        {
            name: "Tomato",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn_RpV_Nq_aND67ekZG9sOso6gv4AQatx2sw&s",
            description: "Juicy tomatoes for your favorite recipes.",
            price: "Rs 30 per kg"
        },
        {
            name: "Carrot",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVgd0I7sZ-qvut2ghl-UhyxKSHkTV7RCR8TA&s",
            description: "Crunchy carrots packed with nutrients.",
            price: "Rs 50 per kg"
        },
        {
            name: "Cabbage",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpyELVQ8N1w1i5yudLE3scepLbkwEm60_V-A&s",
            description: "Fresh green cabbage, perfect for salads.",
            price: " Rs 30 per kg"
        }
    ];

    const productContainer = document.querySelector('.products');
    const productSection = document.querySelector('.product-list');
    const buyBtn = document.getElementById('buy-btn');

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

            productContainer.appendChild(productItem);
        });
        productSection.style.display = 'block';
    }

    // Event listener for the Buy button
    if (buyBtn) {
        buyBtn.addEventListener('click', () => {
            // Display products for buying
            displayProducts(productsForBuy);
        });
    }
});
