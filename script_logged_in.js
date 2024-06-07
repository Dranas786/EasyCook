document.addEventListener("DOMContentLoaded", function () {
    // Get references to the buttons and content sections
    var homeButton = document.getElementById("home-button");
    var profileButton = document.getElementById("profile-button");
    var favoritesButton = document.getElementById("favorites-button");
    var createRecipeButton = document.getElementById("create-recipe-button");
    var aboutButton = document.getElementById("about-button");
    var communityButton = document.getElementById("community-button");
    var helpButton = document.getElementById("help-button");
    var homeContent = document.getElementById("home-content");
    var profileContent = document.getElementById("profile-content");
    var favoritesContent = document.getElementById("favorites-content");
    var createRecipeContent = document.getElementById("create-recipe-content");
    var aboutContent = document.getElementById("about-content");
    var helpContent = document.getElementById("help-content");
    var communityContent = document.getElementById("community-content");

    const logoutButton = document.getElementById("logout-button");

    // Add a click event listener to the logout button
    logoutButton.addEventListener("click", function () {
    // Redirect to the index.html page when the logout button is clicked
    window.location.href = "index.html";
    });

    // Initial state - show home content, hide about content
    homeContent.style.display = "flex";
    profileContent.style.display = "none";
    favoritesContent.style.display = "none";
    createRecipeContent.style.display = "none";
    aboutContent.style.display = "none";
    helpContent.style.display = "none";
    communityContent.style.display = "none";

    // Add 'active' class to home button and remove from about button
    homeButton.classList.add("active");
    profileButton.classList.remove("active");
    favoritesButton.classList.remove("active");
    createRecipeButton.classList.remove("active");
    aboutButton.classList.remove("active");
    helpButton.classList.remove("active");
    communityButton.classList.remove("active");

    // Add click event listeners to the buttons
    homeButton.addEventListener("click", function () {
        homeContent.style.display = "flex";
        profileContent.style.display = "none";
        favoritesContent.style.display = "none";
        createRecipeContent.style.display = "none";
        aboutContent.style.display = "none";
        helpContent.style.display = "none";
        communityContent.style.display = "none";

        homeButton.classList.add("active");
        profileButton.classList.remove("active");
        favoritesButton.classList.remove("active");
        createRecipeButton.classList.remove("active");
        aboutButton.classList.remove("active");
        helpButton.classList.remove("active");
        communityButton.classList.remove("active");

        showArrows();
    });

    profileButton.addEventListener("click", function () {
        homeContent.style.display = "none";
        profileContent.style.display = "flex";
        favoritesContent.style.display = "none";
        createRecipeContent.style.display = "none";
        aboutContent.style.display = "none";
        helpContent.style.display = "none";
        communityContent.style.display = "none";

        homeButton.classList.remove("active");
        profileButton.classList.add("active");
        favoritesButton.classList.remove("active");
        createRecipeButton.classList.remove("active");
        aboutButton.classList.remove("active");
        helpButton.classList.remove("active");
        communityButton.classList.remove("active");

        hideArrows();
    });

    favoritesButton.addEventListener("click", function () {
        homeContent.style.display = "none";
        profileContent.style.display = "none";
        favoritesContent.style.display = "flex";
        createRecipeContent.style.display = "none";
        aboutContent.style.display = "none";
        helpContent.style.display = "none";
        communityContent.style.display = "none";

        homeButton.classList.remove("active");
        profileButton.classList.remove("active");
        favoritesButton.classList.add("active");
        createRecipeButton.classList.remove("active");
        aboutButton.classList.remove("active");
        helpButton.classList.remove("active");
        communityButton.classList.remove("active");

        hideArrows();
    });

    createRecipeButton.addEventListener("click", function () {
        homeContent.style.display = "none";
        profileContent.style.display = "none";
        favoritesContent.style.display = "none";
        createRecipeContent.style.display = "flex";
        aboutContent.style.display = "none";
        helpContent.style.display = "none";
        communityContent.style.display = "none";

        homeButton.classList.remove("active");
        profileButton.classList.remove("active");
        favoritesButton.classList.remove("active");
        createRecipeButton.classList.add("active");
        aboutButton.classList.remove("active");
        helpButton.classList.remove("active");
        communityButton.classList.remove("active");

        hideArrows();
    });

    aboutButton.addEventListener("click", function () {
        homeContent.style.display = "none";
        profileContent.style.display = "none";
        favoritesContent.style.display = "none";
        createRecipeContent.style.display = "none";
        aboutContent.style.display = "flex";
        helpContent.style.display = "none";
        communityContent.style.display = "none";

        homeButton.classList.remove("active");
        profileButton.classList.remove("active");
        favoritesButton.classList.remove("active");
        createRecipeButton.classList.remove("active");
        aboutButton.classList.add("active");
        helpButton.classList.remove("active");
        communityButton.classList.remove("active");

        hideArrows();
    });

    communityButton.addEventListener("click", function () {
        homeContent.style.display = "none";
        profileContent.style.display = "none";
        favoritesContent.style.display = "none";
        createRecipeContent.style.display = "none";
        aboutContent.style.display = "none";
        helpContent.style.display = "none";
        communityContent.style.display = "flex";

        homeButton.classList.remove("active");
        profileButton.classList.remove("active");
        favoritesButton.classList.remove("active");
        createRecipeButton.classList.remove("active");
        aboutButton.classList.remove("active");
        helpButton.classList.remove("active");
        communityButton.classList.add("active");

        hideArrows();
    });

    helpButton.addEventListener("click", function () {
        homeContent.style.display = "none";
        profileContent.style.display = "none";
        favoritesContent.style.display = "none";
        createRecipeContent.style.display = "none";
        aboutContent.style.display = "none";
        helpContent.style.display = "flex";
        communityContent.style.display = "none";

        homeButton.classList.remove("active");
        profileButton.classList.remove("active");
        favoritesButton.classList.remove("active");
        createRecipeButton.classList.remove("active");
        aboutButton.classList.remove("active");
        helpButton.classList.add("active");
        communityButton.classList.remove("active");

        const data = {"dietaryRestrictions":"lactose-free", "title":"Reg Chicken", "favourites":"True", "star":"3", "category": "Appetizers", "image": "https://imageio.forbes.com/specials-images/imageserve/65072bc1a50c29d7592250c0/Healthy-food--Healthy-eating-background--Fruit--vegetable--berry---Vegetarian-eating-/960x0.jpg?format=jpg&width=960","author": "Author 1", "href": "https://www.facebook.com"};
        const card = createNewCard(data);
        document.getElementById('cards-container').getElementsByClassName('category-container')[0].appendChild(card);
        hideArrows();
    });

    function getNewStarRating(starValue) {
        const filledStars = '★'.repeat(starValue); // Unicode character for a filled star
        const emptyStars = '☆'.repeat(5 - starValue); // Unicode character for an empty star
        return filledStars + emptyStars;
    }

    function createNewCard(data) {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardLink = document.createElement('a');
        cardLink.href = data.href || '#'; // Set a default link if 'href' is not provided
        cardLink.target = '_blank'; // Open the link in a new tab/window

        // Image container
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');
        const image = document.createElement('img');
        image.src = data.image;
        image.alt = 'Image';
        imageContainer.appendChild(image);

        // Details container
        const detailsContainer = document.createElement('div');
        detailsContainer.classList.add('details-container');

        // Author name
        const author = document.createElement('div');
        author.classList.add('author');
        author.textContent = data.author;

        const title = document.createElement('div');
        title.classList.add('title');
        title.textContent = data.title;

        // Star rating 
        const rating = document.createElement('div');
        rating.classList.add('rating');
        rating.innerHTML = getNewStarRating(data.star); //'&#9733;&#9733;&#9733;&#9733;&#9733;';

        // Append elements to the details container
        detailsContainer.appendChild(author);
        detailsContainer.appendChild(title);
        detailsContainer.appendChild(rating);

        // Append image container and details container to the card link
        cardLink.appendChild(imageContainer);
        cardLink.appendChild(detailsContainer);

        // Append the card link to the main card container
        card.appendChild(cardLink);

        return card;
    }

    function hideArrows() {
        document.getElementById("moveLeftAppetizer").style.display = "none";
        document.getElementById("moveRightAppetizer").style.display = "none";
        document.getElementById("moveLeftMain").style.display = "none";
        document.getElementById("moveRightMain").style.display = "none";
        document.getElementById("moveLeftDessert").style.display = "none";
        document.getElementById("moveRightDessert").style.display = "none";
    }

    function showArrows() {
        document.getElementById("moveLeftAppetizer").style.display = "block";
        document.getElementById("moveRightAppetizer").style.display = "block";
        document.getElementById("moveLeftMain").style.display = "block";
        document.getElementById("moveRightMain").style.display = "block";
        document.getElementById("moveLeftDessert").style.display = "block";
        document.getElementById("moveRightDessert").style.display = "block";
    }

    //const logoutButton = document.getElementById("logout-button");

    // Add a click event listener to the logout button
    logoutButton.addEventListener("click", function () {
    // Redirect to the index.html page when the logout button is clicked
    window.location.href = "index.html";
    });
});
// const logoutButton = document.getElementById("logout-button");

// // Add a click event listener to the logout button
// logoutButton.addEventListener("click", function () {
//   // Redirect to the index.html page when the logout button is clicked
//   window.location.href = "index.html";
// });
