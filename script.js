document.addEventListener("DOMContentLoaded", function () {
    // Get references to the buttons and content sections
    var homeButton = document.getElementById("home-button");
    var aboutButton = document.getElementById("about-button");
    var helpButton = document.getElementById("help-button");
    var homeContent = document.getElementById("home-content");
    var aboutContent = document.getElementById("about-content");
    var helpContent = document.getElementById("help-content");

    // Initial state - show home content, hide about content
    homeContent.style.display = "flex";
    aboutContent.style.display = "none";
    helpContent.style.display = "none";

    // Add 'active' class to home button and remove from about button
    homeButton.classList.add("active");
    aboutButton.classList.remove("active");
    helpButton.classList.remove("active");

    // Add click event listeners to the buttons
    homeButton.addEventListener("click", function () {
        homeContent.style.display = "flex";
        aboutContent.style.display = "none";
        helpContent.style.display = "none";

        // Add 'active' class to home button and remove from about button
        homeButton.classList.add("active");
        aboutButton.classList.remove("active");
        helpButton.classList.remove("active");

        showArrows();
    });

    aboutButton.addEventListener("click", function () {
        homeContent.style.display = "none";
        aboutContent.style.display = "flex";
        helpContent.style.display = "none";

        // Add 'active' class to about button and remove from home button
        aboutButton.classList.add("active");
        homeButton.classList.remove("active");
        helpButton.classList.remove("active");

        hideArrows();
    });

    helpButton.addEventListener("click", function () {
        homeContent.style.display = "none";
        aboutContent.style.display = "none";
        helpContent.style.display = "flex";

        // Add 'active' class to about button and remove from home button
        aboutButton.classList.remove("active");
        homeButton.classList.remove("active");
        helpButton.classList.add("active");

        hideArrows();
    });
});

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
