document.addEventListener("DOMContentLoaded", function () {
    // Function to extract query parameters from the URL
    function getQueryParam(name) {
        const url = new URL(window.location.href);
        return url.searchParams.get(name);
    }

    // Get the restaurant ID from the URL
    const selectedRestaurantId = getQueryParam("restaurant_id");

    // Sample JSON data for the menu
    const jsonData = {
        // ... (Include the data for all restaurants)
        "1": {
            "restaurant_name": "Spice Palace",
            "image_source": "https://example.com/spicepalace.jpg",
            "price_range": "$$",
            "cuisine_type": "North Indian",
            "menu": [
                {
                    "dish_name": "Butter Chicken",
                    "price": 14.99,
                    "image_source": "img/butterChicken.webp"
                },
                {
                    "dish_name": "Aloo Gobi",
                    "price": 11.99,
                    "image_source": "img/aaloGobi.webp"
                },
                {
                    "dish_name": "Paneer Tikka",
                    "price": 10.99,
                    "image_source": "img/paneerTikka.webp"
                },
                {
                    "dish_name": "Malai Kofta",
                    "price": 12.99,
                    "image_source": "img/malaiKofta.jpeg"
                },
                {
                    "dish_name": "Chicken Tikka",
                    "price": 15.99,
                    "image_source": "img/chickenTikkaMasala.webp"
                },
                {
                    "dish_name": "Vegetable Biryani",
                    "price": 12.99,
                    "image_source": "img/vegBiryani.jpeg"
                },
                {
                    "dish_name": "Tandoori Roti",
                    "price": 2.99,
                    "image_source": "img/tandooriRoti.jpeg"
                },
                {
                    "dish_name": "Samosas",
                    "price": 5.99,
                    "image_source": "img/samosa.jpeg"
                },                
                {
                    "dish_name": "Dal Makhani",
                    "price": 9.99,
                    "image_source": "img/dalMakhni.jpeg"
                },
                {
                    "dish_name": "Chana Masala",
                    "price": 10.99,
                    "image_source": "img/chanaMasala.jpeg"
                },
                {
                    "dish_name": "Rogan Josh",
                    "price": 16.99,
                    "image_source": "img/roganJosh.jpeg"
                },
                {
                    "dish_name": "Naan",
                    "price": 2.99,
                    "image_source": "img/naan.jpeg"
                },
                {
                    "dish_name": "Mango Lassi",
                    "price": 4.99,
                    "image_source": "img/mangoLassi.jpeg"
                },
                {
                    "dish_name": "Gulab Jamun",
                    "price": 3.99,
                    "image_source": "img/gulabJamun.jpeg"
                },
                {
                    "dish_name": "Pakoras",
                    "price": 6.99,
                    "image_source": "img/pakora.jpeg"
                },
                {
                    "dish_name": "Tandoori Salmon",
                    "price": 18.99,
                    "image_source": "img/tandooriSalmon.jpeg"
                },
                {
                    "dish_name": "Baingan Bharta",
                    "price": 10.99,
                    "image_source": "img/bainganBharta.jpeg"
                },
                {
                    "dish_name": "Mutton Biryani",
                    "price": 17.99,
                    "image_source": "img/muttonBiryani.jpeg"
                },
                {
                    "dish_name": "Pulao Rice",
                    "price": 8.99,
                    "image_source": "img/pulaoRice.jpeg"
                },
                {
                    "dish_name": "Papadums",
                    "price": 2.99,
                    "image_source": "img/papadums.jpeg"
                },
                {
                    "dish_name": "Raita",
                    "price": 3.99,
                    "image_source": "img/raita.jpeg"
                }
            ]
        }

    };

    // Function to create a menu card for a dish
    function createMenuCard(dish) {
        // Same function as in the previous example
        const menuCard = document.createElement("div");
        menuCard.classList.add("sd-card");

        const imgDiv = document.createElement("div");
        imgDiv.classList.add("img");
        const img = document.createElement("img");
        img.src = dish.image_source;
        img.alt = dish.dish_name;
        imgDiv.appendChild(img);

        const textDiv = document.createElement("div");
        textDiv.classList.add("sd-text");

        const nameDiv = document.createElement("div");
        nameDiv.classList.add("sd-name");
        const dishName = document.createElement("h4");
        dishName.textContent = dish.dish_name;
        const price = document.createElement("p");
        price.classList.add("Price");
        price.textContent = "$" + dish.price;

        nameDiv.appendChild(dishName);
        nameDiv.appendChild(price);

        textDiv.appendChild(nameDiv);

        menuCard.appendChild(imgDiv);
        menuCard.appendChild(textDiv);

        return menuCard;
    }

    // Function to display menu cards for the selected restaurant
    function displayMenu(selectedRestaurantId) {
        const menuContainer = document.getElementById("menu-container");

        if (menuContainer) {
            const selectedRestaurant = jsonData[selectedRestaurantId];

            if (selectedRestaurant) {
                document.title = selectedRestaurant.restaurant_name; // Set the page title
                const menu = selectedRestaurant.menu;

                menu.forEach((dish) => {
                    const menuCard = createMenuCard(dish);
                    menuContainer.appendChild(menuCard);
                });
            } else {
                console.error(`Restaurant with ID ${selectedRestaurantId} not found.`);
            }
        } else {
            console.error("menuContainer is null. Check your HTML structure.");
        }
    }

    // Call the displayMenu function with the selectedRestaurantId (from the URL)
    displayMenu(selectedRestaurantId);
});
