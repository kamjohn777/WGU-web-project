document.addEventListener("DOMContentLoaded", async function () {
  try {
    // Fetch product data from the backend
    const response = await fetch("http://localhost:4000/api/products");
    const products = await response.json();

    // Select the product cards section
    const parentProductCardSec = document.querySelector(".product-cards-section");

    // Create a container div for the product cards
    const cardsContainer = document.createElement("div");
    cardsContainer.classList.add("cards-container");

    // Initialize cart from localStorage or create an empty array
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Function to save cart to localStorage
    const saveCartToLocalStorage = () => {
      localStorage.setItem("cart", JSON.stringify(cart));
    };

    // Loop through the products and create cards
    products.slice(0, 10).forEach(product => {
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("card");

      // Create an image element
      const imgElement = document.createElement("img");
      imgElement.src = product.image; // Use product image
      imgElement.alt = product.title;

      // Create a title element
      const titleElement = document.createElement("h3");
      titleElement.textContent = product.title; // Use product title

      // Create a price element
      const priceElement = document.createElement("p");
      priceElement.textContent = `$${product.price}`; // Display product price

      // Create a button element
      const buttonElement = document.createElement("button");
      buttonElement.classList.add("add-to-cart-button");
      buttonElement.textContent = "Add to Cart";

      // Add event listener for "Add to Cart" button
      buttonElement.addEventListener("click", () => {
        // Check if the product is already in the cart
        const existingProduct = cart.find(item => item.id === product.id);
        if (!existingProduct) {
          cart.push(product); // Add product to cart
          saveCartToLocalStorage(); // Save updated cart to localStorage
          alert("Item added to the cart");
        } else {
          alert("Item is already in the cart");
        }
      });

      // Append the image, title, price, and button to the card div
      cardDiv.appendChild(imgElement);
      cardDiv.appendChild(titleElement);
      cardDiv.appendChild(priceElement);
      cardDiv.appendChild(buttonElement);

      // Append the card div to the cards container
      cardsContainer.appendChild(cardDiv);
    });

    // Append the cards container to the product cards section
    parentProductCardSec.appendChild(cardsContainer);


    // Append the cards container to the product cards section
parentProductCardSec.appendChild(cardsContainer);


// Add "Order Item" functionality
const orderButton = document.createElement("button");
orderButton.textContent = "Order Items";
orderButton.classList.add("order-button");
orderButton.addEventListener("click", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length > 0) {
    alert("Thank you for your order!");
    localStorage.removeItem("cart"); // Clear the cart after ordering
  } else {
    alert("Your cart is empty. Please add items to the cart before ordering.");
  }
});
parentProductCardSec.appendChild(orderButton);

    // Add "Subscribe" alert functionality
    const subscribeButton = document.querySelector(".trial-btn");
    if (subscribeButton) {
      subscribeButton.addEventListener("click", () => {
        alert("Thank you for subscribing.");
      });
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }

});