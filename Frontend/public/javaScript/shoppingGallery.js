document.addEventListener("DOMContentLoaded", function () {
    // Select the Swiper wrapper
    const swiperWrapper = document.querySelector(".swiper-wrapper");
  
    // Array of icons and titles
    const icons = [
      { image: "../../assets/images/ShoppingPage-assets/ShoppingPageicon1.png", title: "Icon 1" },
      { image: "../../assets/images/ShoppingPage-assets/ShoppingPageicon2.png", title: "Icon 2" },
      { image: "../../assets/images/ShoppingPage-assets/ShoppingPageicon3.png", title: "Icon 3" },
      { image: "../../assets/images/ShoppingPage-assets/ShoppingPageicon4.png", title: "Icon 4" },
      { image: "../../assets/images/ShoppingPage-assets/ShoppingPageicon5.png", title: "Icon 5" },
      { image: "../../assets/images/ShoppingPage-assets/ShoppingPageicon6.png", title: "Icon 6" },
      { image: "../../assets/images/ShoppingPage-assets/ShoppingPageicon7.png", title: "Icon 7" },
      { image: "../../assets/images/ShoppingPage-assets/ShoppingPageicon8.png", title: "Icon 8" },
      { image: "../../assets/images/ShoppingPage-assets/ShoppingPageicon9.png", title: "Icon 9" },
    ];
  
    // Loop through the icons array and create Swiper slides
    icons.forEach(icon => {
      // Create a Swiper slide div
      const slideDiv = document.createElement("div");
      slideDiv.classList.add("swiper-slide");
  
      // Create a container div for the card
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("card");
  
      // Create an image element
      const imgElement = document.createElement("img");
      imgElement.src = icon.image;
      imgElement.alt = icon.title;
  
      // Create a title element
      const titleElement = document.createElement("h3");
      titleElement.textContent = icon.title;
  
      // Append the image and title to the card div
      cardDiv.appendChild(imgElement);
      cardDiv.appendChild(titleElement);
  
      // Append the card div to the slide div
      slideDiv.appendChild(cardDiv);
  
      // Append the slide div to the Swiper wrapper
      swiperWrapper.appendChild(slideDiv);
    });
  
    // Initialize Swiper
    const swiper = new Swiper(".swiper", {
      slidesPerView: 3, // Number of cards visible at once
      spaceBetween: 20, // Space between cards
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true, // Infinite loop
    });
  });