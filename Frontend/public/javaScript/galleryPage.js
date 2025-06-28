document.addEventListener("DOMContentLoaded", function () {
    // Select the parent container
    const infiniteLoopContainer = document.querySelector(".infinite-logoloop-animation");
  
    // Array of image URLs
    const images = [
      '../../assets/images/GalleryPage-assets/PartnerLogos/partner-logos-1.PNG',
      '../../assets/images/GalleryPage-assets/PartnerLogos/partner-logos-2.PNG',
      '../../assets/images/GalleryPage-assets/PartnerLogos/partner-logos-3.PNG',
      '../../assets/images/GalleryPage-assets/PartnerLogos/partner-logos-4.PNG',
      '../../assets/images/GalleryPage-assets/PartnerLogos/partner-logos-5.PNG',
      '../../assets/images/GalleryPage-assets/PartnerLogos/partner-logos-6.PNG',
      '../../assets/images/GalleryPage-assets/PartnerLogos/partner-logos-7.PNG',
      '../../assets/images/GalleryPage-assets/PartnerLogos/partner-logos-8.PNG',
      '../../assets/images/GalleryPage-assets/PartnerLogos/partner-logos-9.PNG',
      '../../assets/images/GalleryPage-assets/PartnerLogos/partner-logos-10.PNG',
      '../../assets/images/GalleryPage-assets/PartnerLogos/partner-logos-11.PNG',
      '../../assets/images/GalleryPage-assets/PartnerLogos/partner-logos-12.PNG'
    ];
  
    // Number of items to create
    const totalItems = images.length;
  
    // Loop to create and append items
    for (let i = 0; i < totalItems; i++) {
      // Create a new div element
      const loopItem = document.createElement("div");
  
      // Add the base class
      loopItem.classList.add("looping-item");
  
      // Add the specific class for animation delay
      loopItem.classList.add(`img-loop-item${i + 1}`);
  
      // Set the background image
      loopItem.style.backgroundImage = `url(${images[i]})`;
      loopItem.style.backgroundPosition = "center";
      loopItem.style.backgroundSize = "cover";
      loopItem.style.backgroundRepeat = "no-repeat";
  
      // Append the item to the parent container
      infiniteLoopContainer.appendChild(loopItem);
    }

    // Circle contianer logic
    const circleContainers = document.querySelectorAll(".div-circle-container > div");

    const totalCircles = 20;

    circleContainers.forEach(container => {
        for (let i = 0; i < totalCircles; i++) {
            const circleDiv = document.createElement("div");
            circleDiv.classList.add("circle");

            const centerIndex = Math.floor(totalCircles / 2);
            const distanceFromCenter = Math.abs(i - centerIndex);
            const opacity = 1 - (distanceFromCenter / centerIndex);

            circleDiv.style.opacity = opacity;

            container.appendChild(circleDiv);
        }
    })
});