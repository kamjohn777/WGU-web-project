// const mainBlock = document.getElementsByClassName(".content-block.main");
// const sideBlock = document.getElementsByClassName(".content-block.side");

document.addEventListener("DOMContentLoaded", function () {
  const dealsImageArray = [
    {
      image:
        "../../assets/images/HomePage-assets/Deals/Gemini_Generated_Image_rpdwyurpdwyurpdw.png",
      title: "Deal 1",
      expires: new Date("2026-1-31"),
    },
    {
      image:
        "../../assets/images/HomePage-assets/Deals/Gemini_Generated_Image_rpdwyvrpdwyvrpdw.png",
      title: "Deal 2",
      expires: new Date("2026-1-31"),
    },
    {
      image:
        "../../assets/images/HomePage-assets/Deals/Gemini_Generated_Image_s5abf5s5abf5s5ab.png",
      title: "Deal 3",
      expires: new Date("2026-7-31"),
    },
    {
      image:
        "../../assets/images/HomePage-assets/Deals/Gemini_Generated_Image_s5abf8s5abf8s5ab.png",
      title: "Deal 4",
      expires: new Date("2026-1-31"),
    },
    {
      image:
        "../../assets/images/HomePage-assets/Deals/Gemini_Generated_Image_s5abf8s5abf8s5ab.png",
      title: "Deal 5",
      expires: new Date("2026-1-31"),
    },
    {
      image:
        "../../assets/images/HomePage-assets/Deals/Gemini_Generated_Image_s5abf9s5abf9s5ab.png",
      title: "Deal 6",
      expires: new Date("2026-2-28"),
    },
    {
      image:
        "../../assets/images/HomePage-assets/Deals/Gemini_Generated_Image_s5abfas5abfas5ab.png",
      title: "Deal 7",
      expires: new Date("2026-4-30"),
    },
  ];

  const defaultDeals = [
    {
      image:
        "../../assets/images/HomePage-assets/Deals/Gemini_Generated_Image_rpdwyurpdwyurpdw.png",
      title: "Default Deal 1",
    },
    {
      image:
        "../../assets/images/HomePage-assets/Deals/Gemini_Generated_Image_rpdwyvrpdwyvrpdw.png",
      title: "Default Deal 2",
    },
  ];

  const mainBlock = document.querySelector(".content-block.main");
  const sideBlock = document.querySelector(".content-block.side");

  // Display deals in the main block
  mainBlock.style.backgroundImage = `url(${dealsImageArray[1].image})`;
  sideBlock.style.backgroundImage = `url(${dealsImageArray[0].image})`;

  // Additional styling for the divs
  mainBlock.style.backgroundPosition = "center";
  mainBlock.style.backgroundSize = "cover";
  mainBlock.style.backgroundRepeat = "no-repeat";
  mainBlock.style.boxshadow = "3px 3px 4px #00000057";

  sideBlock.style.backgroundPosition = "center";
  sideBlock.style.backgroundSize = "cover";
  sideBlock.style.backgroundRepeat = "no-repeat";
  sideBlock.style.boxshadow = "3px 3px 4px #00000057";
  //   function displayDeal(deal) {

  //   }

  let currentDealIndex = 0;

  function rotateDeals() {
    // Rotate through dealsImageArray for mainBlock and sideBlock
    const mainDeal = dealsImageArray[currentDealIndex];

    let sideDealIndex = (currentDealIndex + 1) % dealsImageArray.length; // Next deal for sideBlock
    while (dealsImageArray[sideDealIndex].image === mainDeal.image) {
      sideDealIndex = (sideDealIndex + 1) % dealsImageArray.length;
    }
    const sideDeal = dealsImageArray[sideDealIndex];

    mainBlock.style.backgroundImage = `url(${mainDeal.image})`;
    sideBlock.style.backgroundImage = `url(${sideDeal.image})`;

    currentDealIndex = (currentDealIndex + 1) % dealsImageArray.length;
  }

  setInterval(rotateDeals, 3600000);

  rotateDeals();

  // Special Features dynamic content
  const specialFeatures = [
    {
      image:
        "../../assets/images/HomePage-assets/SpecialFeatures/Gemini_Generated_Image_17rs3117rs3117rs.png",
      title: "Feature 1",
    },
    {
      image:
        "../../assets/images/HomePage-assets/SpecialFeatures/Gemini_Generated_Image_7ar3u47ar3u47ar3.png",
      title: "Feature 2",
    },
    {
      image:
        "../../assets/images/HomePage-assets/SpecialFeatures/Gemini_Generated_Image_cq1nk2cq1nk2cq1n.png",
      title: "Feature 3",
    },
    {
      image:
        "../../assets/images/HomePage-assets/SpecialFeatures/Gemini_Generated_Image_na1145na1145na11.png",
      title: "Feature 4",
    },
  ];

  const specialFeatureContainer = document.querySelector(
    ".special-features-wrap"
  );

  specialFeatures.forEach((feature) => {
    // Create the main feature container
    const featureDiv = document.createElement("div");
    featureDiv.className = "special-feature";

    // Create the image container
    const imageContainer = document.createElement("div");
    imageContainer.className = "special-feature-image";
    imageContainer.style.backgroundImage = `url(${feature.image})`;
    imageContainer.style.backgroundPosition = "center";
    imageContainer.style.backgroundSize = "cover";
    imageContainer.style.backgroundRepeat = "no-repeat";

    // Create the text container
    const textContainer = document.createElement("div");
    textContainer.className = "special-feature-text";
    textContainer.innerHTML = `<h3>${feature.title}</h3>`;

    // Append the image and text containers to the main feature container
    featureDiv.appendChild(imageContainer);
    featureDiv.appendChild(textContainer);

    // Append the main feature container to the special features wrap
    specialFeatureContainer.appendChild(featureDiv);
  });
});
