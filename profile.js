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

  fetch("./data.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data1) {
      makeCards(data1);
    });

  const categories = {
    MyRecipe: cardsContainer1,
    PersonalRecipe: cardsContainer2,
    Friend: cardsContainer3,
  };

  function makeCards(MeasurementArr) {
    MeasurementArr.forEach((data) => {
      const card = createCard(data, handleCardClick, handleProfileCardClick);
      categories[data.category].appendChild(card);
      initializeCard(card, data.category);
    });
  }

  function createCard(data, clickCallback, profileClickCallback) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-category", data.category);

    const cardLink = document.createElement("a");
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

    if (data.category === "MyRecipe" || data.category === "PersonalRecipe") {
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
        toggleCard(card, card.getAttribute("data-category"));
      });

      image.style.cursor = "pointer"; 
      image.addEventListener("click", function () {
        // Invoke the provided click callback with the card data
        clickCallback(data);
      });
    }

    if (data.category === "Friend") {
      card.style.cursor = "pointer"; 
      card.addEventListener("click", function () {
        // Invoke the provided click callback with the card data
        profileClickCallback();
      });
    }

    detailsContainer.appendChild(author);
    detailsContainer.appendChild(rating);

    cardLink.appendChild(imageContainer);
    cardLink.appendChild(detailsContainer);
    card.appendChild(cardLink);

    return card;
  }

  function handleCardClick(data) {

    const mainPanel = document.getElementById("main-panel");
    const previousContent = mainPanel.innerHTML;


    mainPanel.innerHTML = `
        <link rel="stylesheet" type="text/css" href="create_recipe_filled_in.css">
        <button id="back-button">
          <img id="back-button-icon" src ="assets/left arrow icon.png" alt="Go back"/>
        </button>
        <div id="create-recipe-filled-content" class="content">
        <h1 id="create-recipe-filled-h1">Edit Recipe</h1>
        <h2 id="recipe-title">Recipe Title:</h2>
        <input type="text" id="recipe-title-filled-input" name="recipe-title" value="Apple Pie"><br>
        <div class="visibility-toggle-filled">
            <label class="toggle-filled">
                <input type="checkbox" id="toggleBtn-filled">
                <span class="slider-filled"></span>
            </label>
            <span id="toggleText-filled">Private recipe</span>
        </div>
        <h2 id="recipe-cover-filled">Enter a Recipe Cover Picture:</h2>
        <div class="recipe-cover-drop-zone-filled">
            <img id="uploaded-image-static" src="assets/ApplePie.jpg">  
        </div>
        <h2 id="recipe-description">Recipe Description:</h2>
        <textarea type="text" id="recipe-description-input" name="recipe-description" placeholder="Enter description here...">Dear Sweethearts,
        Oh, my darlings, gather 'round, for I have a treasure to share with you - a recipe that has been whispered through the generations, a secret delight that warms the heart and fills the soul. It's none other than Grandma's Love-Filled Apple Pie!
        As the crisp autumn breeze dances through the orchard, my heart swells with love for each one of you. The scent of cinnamon and apples wafting through the kitchen transports me back to the days when I, too, sat at my own grandmother's table, savoring the magic of her apple pie.
        Now, let me share this precious recipe with you, my dears. First, start with the apples - a mix of tart and sweet varieties, hand-picked from the trees with care. Peel them with laughter in your hearts, knowing that the joy you infuse into each slice will make the pie taste all the more delightful.
        As you dice the apples, remember the times we spent together, telling stories and sharing secrets. Let those memories flavor the filling, creating a symphony of warmth and nostalgia. Sprinkle in cinnamon, nutmeg, and a pinch of love, for these are the spices that transform a simple pie into a masterpiece.</textarea>
        <h2 id="recipe-category-question">How would you categorize your recipe?</h2>
        <select id="recipe-category-select" name="recipe-category">
            <option value="Appetizers">Appetizer</option>
            <option value="MainDishes">Main Dish</option>
            <option value="Desserts" selected>Dessert</option>
        </select>
        <h2 id="recipe-ingredients">Recipe Ingredients:</h2>
        <input type="text" id="recipe-ingredients-input" placeholder="Enter an ingredient then hit return, do this for all recipe ingredients...">
        <div id="ingredients-list">
            <div class="ingredient-tag">Flour<button class="remove-button">×</button></div>
            <div class="ingredient-tag">Eggs<button class="remove-button">×</button></div>
            <div class="ingredient-tag">Salt<button class="remove-button">×</button></div>
            <div class="ingredient-tag">Butter<button class="remove-button">×</button></div>
            <div class="ingredient-tag">Shortening<button class="remove-button">×</button></div>
            <div class="ingredient-tag">Apples<button class="remove-button">×</button></div>
            <div class="ingredient-tag">Sugar<button class="remove-button">×</button></div>
            <div class="ingredient-tag">Cinnamon<button class="remove-button">×</button></div>
            <div class="ingredient-tag">Water<button class="remove-button">×</button></div>
        </div>
        <h2 id="recipe-measurements">Enter Recipe Measurements:</h2>
        <ul id="measurements-list">
            <li>
                <span>Flour:</span>
                <input type="text" class="measurement-input" placeholder="Enter measurement" value="2 cups">
            </li>
            <li>
                <span>Eggs:</span>
                <input type="text" class="measurement-input" placeholder="Enter measurement" value="3 eggs">
            </li>
            <li>
                <span>Salt:</span>
                <input type="text" class="measurement-input" placeholder="Enter measurement" value="1 teaspoon">
            </li>
            <li>
                <span>Butter:</span>
                <input type="text" class="measurement-input" placeholder="Enter measurement" value="3/4 cups">
            </li>
            <li>
                <span>Shortening:</span>
                <input type="text" class="measurement-input" placeholder="Enter measurement" value="2 tablespoons">
            </li>
            <li>
                <span>Apples:</span>
                <input type="text" class="measurement-input" placeholder="Enter measurement" value="6-7 apples">
            </li>
            <li>
                <span>Sugar:</span>
                <input type="text" class="measurement-input" placeholder="Enter measurement" value="1 cup">
            </li>
            <li>
                <span>Cinnamon:</span>
                <input type="text" class="measurement-input" placeholder="Enter measurement" value="1 1/2 teaspoons">
            </li>
            <li>
                <span>Water:</span>
                <input type="text" class="measurement-input" placeholder="Enter measurement" value="1/2 cups">
            </li>
        </ul>
        <h2 id="recipe-instructions">Enter Recipe Instructions:</h2>
        <div id="instructions-list">
            <div class="recipe-step-input-container">
                <span>1.</span>
                <input type="text" class="recipe-step-input" placeholder="Enter recipe step here..." value="In a large mixing bowl, combine flour, sugar, and salt for the crust. Add the cold, cubed butter to the flour mixture. Use a pastry cutter or your fingers to cut the butter into the flour until the mixture resembles coarse crumbs.">
                <span>Attach image (optional):</span>
                <input type="file" class="recipe-step-image-input" accept="image/*" onchange="handleImageUpload(this)">
            </div>
            <div class="recipe-step-input-container">
                <span>2.</span>
                <input type="text" class="recipe-step-input" placeholder="Enter recipe step here..." value="Gradually add ice water, one tablespoon at a time, and mix until the dough just comes together. Be careful not to over-mix.">
                <span>Attach image (optional):</span>
                <input type="file" class="recipe-step-image-input" accept="image/*" onchange="handleImageUpload(this)">
            </div>
            <div class="recipe-step-input-container">
                <span>3.</span>
                <input type="text" class="recipe-step-input" placeholder="Enter recipe step here..." value="Divide the dough into two equal portions, shape each into a disk, wrap in plastic wrap, and refrigerate for at least 1 hour.">
                <span>Attach image (optional):</span>
                <input type="file" class="recipe-step-image-input" accept="image/*" onchange="handleImageUpload(this)">
            </div>
            <div class="recipe-step-input-container">
                <span>4.</span>
                <input type="text" class="recipe-step-input" placeholder="Enter recipe step here..." value="Preheat your oven to 375°F (190°C).">
                <span>Attach image (optional):</span>
                <input type="file" class="recipe-step-image-input" accept="image/*" onchange="handleImageUpload(this)">
            </div>
            <div class="recipe-step-input-container">
                <span>5.</span>
                <input type="text" class="recipe-step-input" placeholder="Enter recipe step here..." value="On a floured surface, roll out one disk of dough to fit your pie dish. Place it in the dish, pressing it gently against the bottom and sides.">
                <span>Attach image (optional):</span>
                <input type="file" class="recipe-step-image-input" accept="image/*" onchange="handleImageUpload(this)">
            </div>
            <div class="recipe-step-input-container">
                <span>6.</span>
                <input type="text" class="recipe-step-input" placeholder="Enter recipe step here..." value="In a large bowl, combine the sliced apples, granulated sugar, brown sugar, cinnamon, nutmeg, flour, and lemon juice. Toss until the apples are evenly coated.">
                <span>Attach image (optional):</span>
                <input type="file" class="recipe-step-image-input" accept="image/*" onchange="handleImageUpload(this)">
            </div>
            <div class="recipe-step-input-container">
                <span>7.</span>
                <input type="text" class="recipe-step-input" placeholder="Enter recipe step here..." value="Fill the pie crust with the prepared apple mixture, mounding it slightly in the center.">
                <span>Attach image (optional):</span>
                <input type="file" class="recipe-step-image-input" accept="image/*" onchange="handleImageUpload(this)">
            </div>
        </div>
        <h2 id="recipe-prep-time">Enter Prep Time:</h2>
        <input type="text" id="prep-time-input" placeholder="Enter prep time here..." value="30 minutes">
        <h2 id="recipe-cook-time">Enter Cook Time:</h2>
        <input type="text" id="cook-time-input" placeholder="Enter cook time here..." value="1 hour">
        <h2 id="recipe-total-time">Enter Total Recipe Time:</h2>
        <input type="text" id="cook-total-input" placeholder="Enter total time here..." value="1 hour and 30 minutes">
        <h2 id="recipe-restriction-question">Does your recipe satisfy any dietary restrictions?</h2>
        <div id="recipe-restriction-checkboxes">
            <label>
                <input type="checkbox" id="restriction-option1" name="recipe-restriction[]" value="lactose" checked>
                Lactose Free
            </label>

            <label>
                <input type="checkbox" id="restriction-option2" name="recipe-restriction[]" value="gluten">
                Gluten Free
            </label>

            <label>
                <input type="checkbox" id="restriction-option3" name="recipe-restriction[]" value="vegan">
                Vegan
            </label>

            <label>
                <input type="checkbox" id="restriction-option4" name="recipe-restriction[]" value="kosher">
                Kosher
            </label>
        </div>
        <h2 id="recipe-restriction-message">Don't worry we will double check this for you!</h2>
        <button id="draft-button" onclick="addToProfilePage()">Save Draft</button>
        <button id="publish-button" onclick="addToMainPage()">PUBLISH</button>
        <div class="spacer"></div>
    </div>
    `;

    const backButton = document.getElementById("back-button");
    if (backButton) {
      backButton.addEventListener("click", function () {
        mainPanel.innerHTML = previousContent;
        // Refresh the entire HTML page
        location.reload();
      });
    }
  }

  function handleProfileCardClick() {

    const mainPanel = document.getElementById("main-panel");
    const previousContent = mainPanel.innerHTML;

    mainPanel.innerHTML = `
        <link rel="stylesheet" type="text/css" href="create_recipe_filled_in.css">
        <button id="back-button">
          <img id="back-button-icon" src ="assets/left arrow icon.png" alt="Go back"/>
        </button>
        <div id="profile-content" class="content">
            <img id="profile-image" src="assets/another_user_img.png" alt="Profile Picture of Chef">
            <h2 id="profile-h2">Chef Fuego</h2>
            <h3 id="profile-h3">Cooking Level: MasterChef</h3>
            <div class="crown-icon">&#128081;</div>
            <h4 id="profile-filled-h4">FOLLOWING</h4>
            <div class="profile-toggle">
                <div id="profile-my-recipes-button" class="profile-toggle-button active">
                    <svg id="my-recipes-icon" width="30" height="30" viewBox="0 0 39 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.3523 23.9419H1C1 36.4154 12.5044 47.1401 12.5044 47.1401H19.3523" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.34094 26.7923C6.34094 35.985 13.9081 42.7685 13.9081 42.7685M19.3523 23.9419H37.7046C37.7046 36.4154 26.2002 47.1402 26.2002 47.1402H19.3523M9.52532 23.9419C8.19006 17.1218 17.1182 12.4335 25.1298 10.9853L25.9135 9.01733L29.0721 14.2552L27.339 14.6396C26.4908 18.4428 22.245 23.9419 22.245 23.9419" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.9301 23.9419C11.2158 20.4311 14.1997 16.479 25.5841 11.7351" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M25.8778 12.2236C21.5725 15.166 16.5529 18.5469 13.0352 23.9418M26.7181 13.6136C22.2441 21.9049 19.3523 23.9418 19.3523 23.9418M16.8772 23.9418C19.5755 21.7898 26.2915 12.9057 26.2915 12.9057M28.3569 13.0939L36.4428 4.15293C36.5756 4.00632 36.6859 3.82542 36.7674 3.62059C36.8489 3.41575 36.9 3.19101 36.9178 2.9592C36.9356 2.7274 36.9197 2.49308 36.8711 2.26966C36.8224 2.04625 36.7419 1.83811 36.6343 1.65716C36.5267 1.47612 36.3941 1.32577 36.244 1.21466C36.0939 1.10356 35.9292 1.0339 35.7593 1.00964C35.5894 0.985383 35.4177 1.00701 35.254 1.07329C35.0902 1.13958 34.9377 1.24921 34.805 1.39594L26.7181 10.3355" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    My Recipes
                </div>
                <div id="profile-friends-button" class="profile-toggle-button">
                    <svg id="friends-icon" width="28" height="28" viewBox="0 0 640 512" fill="black" xmlns="http://www.w3.org/2000/svg">
                        <path d="M96 224C131.3 224 160 195.3 160 160C160 124.7 131.3 96 96 96C60.7 96 32 124.7 32 160C32 195.3 60.7 224 96 224ZM544 224C579.3 224 608 195.3 608 160C608 124.7 579.3 96 544 96C508.7 96 480 124.7 480 160C480 195.3 508.7 224 544 224ZM576 256H512C494.4 256 478.5 263.1 466.9 274.6C507.2 296.7 535.8 336.6 542 384H608C625.7 384 640 369.7 640 352V320C640 284.7 611.3 256 576 256ZM320 256C381.9 256 432 205.9 432 144C432 82.1 381.9 32 320 32C258.1 32 208 82.1 208 144C208 205.9 258.1 256 320 256ZM396.8 288H388.5C367.7 298 344.6 304 320 304C295.4 304 272.4 298 251.5 288H243.2C179.6 288 128 339.6 128 403.2V432C128 458.5 149.5 480 176 480H464C490.5 480 512 458.5 512 432V403.2C512 339.6 460.4 288 396.8 288ZM173.1 274.6C161.5 263.1 145.6 256 128 256H64C28.7 256 0 284.7 0 320V352C0 369.7 14.3 384 32 384H97.9C104.2 336.6 132.8 296.7 173.1 274.6Z"/>
                    </svg>
                    Friends
                </div>
            </div>
            <div class="profile-content-container">
                <div id="profile-my-recipes-content" class="profile-content active">
                  <div class="card" data-category="MyRecipe">
                    <a target="_blank">
                        <div class="image-container">
                            <img src="assets/fuego_lasagna.jpg" alt="Image">
                        </div>
                        <div class="details-container">
                            <div class="author">Fuego Lasagna</div>
                            <div class="rating">★★★★★</div>
                        </div>
                    </a>
                  </div>
                  <div class="card" data-category="MyRecipe">
                    <a target="_blank">
                        <div class="image-container">
                            <img src="assets/fuego_burger.jpg" alt="Image">
                        </div>
                        <div class="details-container">
                            <div class="author">Fuego Burger</div>
                            <div class="rating">★★★★★</div>
                        </div>
                    </a>
                  </div>
                  <div class="card" data-category="MyRecipe">
                    <a target="_blank">
                        <div class="image-container">
                            <img src="assets/fuego_salsa.jpg" alt="Image">
                        </div>
                        <div class="details-container">
                            <div class="author">Fuego Salsa</div>
                            <div class="rating">★★★★★</div>
                        </div>
                    </a>
                  </div>
                </div>
                <div id="profile-friends-content" class="profile-content">
                </div>
            </div>
            <script src="profile.js"></script>
        </div>
    `;

    const backButton = document.getElementById("back-button");
    if (backButton) {
      backButton.addEventListener("click", function () {
        mainPanel.innerHTML = previousContent;
        // Refresh the entire HTML page
        location.reload();
      });
    }
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
      card.classList.toggle("active", checkbox.checked);
      updateToggleColor(checkbox);
    }
  }

  function toggleCard(card, currentCategory) {
    const newCategory =
      currentCategory === "MyRecipe" ? "PersonalRecipe" : "MyRecipe";
    card.setAttribute("data-category", newCategory);
    card.classList.toggle("active");

    const targetContainer = categories[newCategory];
    card.remove();
    targetContainer.appendChild(card);

    const checkbox = card.querySelector(".profile-toggle-checkbox");
    if (checkbox) {
      updateToggleColor(checkbox);
    }
  }

  function updateToggleColor(checkbox) {
    const slider = checkbox.nextElementSibling;
    if (checkbox.checked) {
      slider.style.backgroundColor = "#9747FF";
    } else {
      slider.style.backgroundColor = "#ccc";
    }
  }
});
