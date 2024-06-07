document.addEventListener("DOMContentLoaded", function () {
  var cardsContainer1 = document.getElementById("profile-my-recipes-content");
  var cardsContainer2 = document.getElementById(
    "profile-private-recipes-content"
  );
  var cardsContainer3 = document.getElementById("profile-friends-content");

  var myRecipesButton = document.getElementById("profile-my-recipes-button");
  var privateRecipesButton = document.getElementById(
    "profile-private-recipes-button"
  );
  var friendsButton = document.getElementById("profile-friends-button");

  myRecipesButton.addEventListener("click", function () {
    cardsContainer1.style.display = "flex";
    cardsContainer2.style.display = "none";
    cardsContainer3.style.display = "none";

    myRecipesButton.classList.add("active");
    privateRecipesButton.classList.remove("active");
    friendsButton.classList.remove("active");
  });

  privateRecipesButton.addEventListener("click", function () {
    cardsContainer1.style.display = "none";
    cardsContainer2.style.display = "flex";
    cardsContainer3.style.display = "none";

    myRecipesButton.classList.remove("active");
    privateRecipesButton.classList.add("active");
    friendsButton.classList.remove("active");
  });

  friendsButton.addEventListener("click", function () {
    cardsContainer1.style.display = "none";
    cardsContainer2.style.display = "none";
    cardsContainer3.style.display = "flex";

    myRecipesButton.classList.remove("active");
    privateRecipesButton.classList.remove("active");
    friendsButton.classList.add("active");
  });

  //   fetch("./data.json")
  // .then(function (resp) {
  //   return resp.json();
  // })
  // .then(function (data1) {
  //   makeCards(data1);
  // });

  const categories = {
    MyRecipe: cardsContainer1,
    PersonalRecipe: cardsContainer2,
    Friend: cardsContainer3,
  };

  function makeCards(MeasurementArr) {
    MeasurementArr.forEach((data) => {
      const card = createCard(data, toggleCard);
      categories[data.category].appendChild(card);
      initializeCard(card, data.category);
    });
  }

  function createCard(data, toggleCardCallback) {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardLink = document.createElement("a");
    cardLink.href = data.href || "#";
    cardLink.target = "_blank";

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    const image = document.createElement("img");
    image.src = data.image;
    image.alt = "Image";
    imageContainer.appendChild(image);

    const detailsContainer = document.createElement("div");
    detailsContainer.classList.add("details-container");

    const author = document.createElement("div");
    author.classList.add("author");
    author.textContent = data.author;

    const rating = document.createElement("div");
    rating.classList.add("rating");
    rating.innerHTML = getStarRating(data.star);

    // Adding toggle functionality only for "MyRecipe" and "PersonalRecipe" categories
    if (data.category !== "Friend") {
      const toggleContainer = document.createElement("label");
      toggleContainer.classList.add("profile-switch");

      const input = document.createElement("input");
      input.type = "checkbox";
      input.classList.add("profile-toggle-checkbox");

      const sliderSpan = document.createElement("span");
      sliderSpan.classList.add("profile-slider", "round");

      toggleContainer.appendChild(input);
      toggleContainer.appendChild(sliderSpan);

      detailsContainer.appendChild(toggleContainer);

      input.addEventListener("change", function () {
        toggleCardCallback(card, data.category);
      });
    }

    detailsContainer.appendChild(author);
    detailsContainer.appendChild(rating);

    cardLink.appendChild(imageContainer);
    cardLink.appendChild(detailsContainer);

    card.appendChild(cardLink);

    return card;
  }

  function getStarRating(starValue) {
    const filledStars = "★".repeat(starValue);
    const emptyStars = "☆".repeat(5 - starValue);
    return filledStars + emptyStars;
  }

  function initializeCard(card, initialCategory) {
    const checkbox = card.querySelector(".profile-toggle-checkbox");
    if (checkbox) {
      checkbox.checked = initialCategory === "MyRecipe";
      if (checkbox.checked) {
        card.classList.add("active");
      }
      updateToggleColor(card);
    }
  }

  function toggleCard(card, currentCategory) {
    // Determine the target category based on the current state of the toggle
    const checkbox = card.querySelector(".profile-toggle-checkbox");
    const targetCategory = checkbox.checked ? "PersonalRecipe" : "MyRecipe";
    const targetContainer = categories[targetCategory];

    // Check if the card is already in the right container
    if (targetContainer !== card.parentNode) {
      // Remove the card from its current container
      card.remove();

      // Append the card to the target container
      targetContainer.appendChild(card);
    }

    updateToggleColor(card);
  }
  function updateToggleColor(card) {
    const checkbox = card.querySelector(".profile-toggle-checkbox");
    const slider = card.querySelector(".profile-slider");

    if (checkbox && slider) {
      const isActive = card.classList.contains("active");
      if (isActive) {
        slider.style.backgroundColor = "#9747FF";
      } else {
        slider.style.backgroundColor = "#ccc";
      }
    }
  }
});
