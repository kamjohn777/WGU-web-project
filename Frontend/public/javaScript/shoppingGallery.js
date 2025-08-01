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

    // Filter products related to fitness
    const fitnessProducts = products.filter(product =>
      product.category.toLowerCase().includes("fitness") || // Check category
      product.title.toLowerCase().includes("fitness") || // Check title
      product.description.toLowerCase().includes("fitness") // Check description
    );

    // Populate Swiper slides
    const swiperWrapper = document.querySelector(".swiper-wrapper");
    fitnessProducts.slice(0, 9).forEach(product => {
      const slideDiv = document.createElement("div");
      slideDiv.classList.add("swiper-slide");

      const cardDiv = document.createElement("div");
      cardDiv.classList.add("card");

      const imgElement = document.createElement("img");
      imgElement.src = product.image;
      imgElement.alt = product.title;

      const titleElement = document.createElement("h3");
      titleElement.textContent = product.title;

      cardDiv.appendChild(imgElement);
      cardDiv.appendChild(titleElement);
      slideDiv.appendChild(cardDiv);
      swiperWrapper.appendChild(slideDiv);
    });

    // Initialize Swiper
    const swiper = new Swiper(".swiper", {
      slidesPerView: 3,
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
});