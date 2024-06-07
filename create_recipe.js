const toggleBtn = document.getElementById('toggleBtn');
const toggleText = document.getElementById('toggleText');

// toggle button between public and private recipes
toggleBtn.addEventListener('change', () => {
    toggleText.textContent = toggleBtn.checked ? 'Public recipe' : 'Private recipe';
});

document.addEventListener("DOMContentLoaded", function () {
    const ingredientInput = document.getElementById("recipe-ingredients-input");
    const ingredientList = document.getElementById("ingredients-list");
    const ingredientMeasurements = document.getElementById("measurements-list");
    const addStepButton = document.getElementById("add-step-button");
    const instructionsList = document.getElementById("instructions-list");
    let stepNumber = 1;

    addDefaultIngredient();

    // ingredient text bar that calls tag creator below it
    ingredientInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            const ingredientName = ingredientInput.value.trim();

            if (ingredientName !== "") {
                addIngredientTag(ingredientName);
                addIngredientMeasurement(ingredientName);
                ingredientInput.value = "";
                ingredientList.scrollTop = ingredientList.scrollHeight;
                ingredientMeasurements.scrollTop = ingredientMeasurements.scrollHeight;
            }
        }
    });

    // example ingredients so there is not too much white space
    function addDefaultIngredient() {
        addIngredientTag("Example Ingredient");
        addIngredientMeasurement("Example Ingredient");
    }

    // creating ingredient tags
    function addIngredientTag(ingredientName) {
        const tag = document.createElement("div");
        tag.classList.add("ingredient-tag");
        tag.textContent = ingredientName;

        const removeButton = document.createElement("button");
        removeButton.classList.add("remove-button");
        removeButton.innerHTML = "&times;"; // × symbol
        removeButton.addEventListener("click", function () {
            tag.remove();
            removeIngredientMeasurement(ingredientName);
        });

        tag.appendChild(removeButton);
        ingredientList.appendChild(tag);
    }

    // creating measurement fields
    function addIngredientMeasurement(ingredientName) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${ingredientName}:</span>
            <input type="text" class="measurement-input" placeholder="Enter measurement">
        `;
        ingredientMeasurements.appendChild(listItem);
    }

    // function to remove measurements if tag is removed
    function removeIngredientMeasurement(ingredientName) {
        const items = ingredientMeasurements.getElementsByTagName("li");
        for (let i = 0; i < items.length; i++) {
            const span = items[i].getElementsByTagName("span")[0];
            const spanText = span.textContent.trim();
            if (spanText.startsWith(ingredientName)) {
                items[i].remove();
                break;
            }
        }
    }

    addStepButton.addEventListener("click", function (event) {
        event.preventDefault();
        addRecipeStepInput();
    });

    // function to create step inputs with necessary, step number, input field, remove button, and file input
    function addRecipeStepInput() {
        const stepInput = document.createElement("div");
        stepInput.classList.add("recipe-step-input-container");
    
        const stepNumberSpan = document.createElement("span");
        stepNumberSpan.textContent = `${calculateStepNumber()}.`;
    
        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.classList.add("recipe-step-input");
        inputField.placeholder = "Enter recipe step here...";

        const fileSpan = document.createElement("span");
        fileSpan.textContent = `Attach image (optional):`;
    
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "image/*";
        fileInput.classList.add("recipe-step-image-input");
        fileInput.addEventListener("change", function () {
            handleImageUpload(fileInput);
        });

        const removeButton = document.createElement("button");
        removeButton.classList.add("step-remove-button");
        removeButton.innerHTML = "&times;"; // × symbol
        removeButton.addEventListener("click", function () {
            stepInput.remove();
        });
    
        stepInput.appendChild(stepNumberSpan);
        stepInput.appendChild(inputField);
        stepInput.appendChild(removeButton);
        stepInput.appendChild(fileSpan);
        stepInput.appendChild(fileInput);
    
        instructionsList.insertBefore(stepInput, addStepButton);
    
        inputField.value = "";
        fileInput.value = "";

        instructionsList.scrollTop = instructionsList.scrollHeight;
    }

    // function to calculate step number so that if a step is removed it will correctly calculate next step to be added
    function calculateStepNumber() {
        const stepInputs = instructionsList.querySelectorAll('.recipe-step-input-container');
        return stepInputs.length + 1;
    }

    // function to update numbers if they are removed
    function updateStepNumbers() {
        const stepInputs = instructionsList.querySelectorAll('.recipe-step-input-container');
        stepInputs.forEach((stepInput, index) => {
            const stepNumberSpan = stepInput.querySelector('span');
            if (stepNumberSpan) {
                stepNumberSpan.textContent = `${index + 1}.`;
            }
        });
    }
    
    // listening to all clicks on remove button
    instructionsList.addEventListener('click', function (event) {
        const removeButton = event.target.closest('.step-remove-button');
        if (removeButton) {
            const stepInput = removeButton.closest('.recipe-step-input-container');
            if (stepInput) {
                stepInput.remove();
                updateStepNumbers();
            }
        }
    });
    
    
});

function addToMainPage() {
    var checkedBox = document.querySelectorAll('input[name="recipe-restriction[]"]:checked');
    
    var dietaryRestrictions = "none";
    if(checkedBox.length > 0){
        dietaryRestrictions = checkedBox[0].value;
    }
    // console.log(dietaryRestrictions);
    // var selectedRestrictions = [];
    // dietaryRestrictions.forEach(function (checkbox) {
    //     selectedRestrictions.push(checkbox.value);
    // });
    // const restrictions = selectedRestrictions.join(',');

    var categorySelect = document.getElementById('recipe-category-select');
    var selectedOption = categorySelect.options[categorySelect.selectedIndex];

    const title = document.getElementById("recipe-title-input").value;
    const category = selectedOption.value;
    const author = document.getElementById("profile-h2").textContent;
    const href = (author + title).replace(/\s+/g, '') + ".html";
    const image = document.getElementById("uploaded-image").src;
    //console.log(image);

    
    var isPublicRecipe = document.getElementById("toggleBtn").checked;

    const data = {"private":!isPublicRecipe, "dietaryRestrictions":dietaryRestrictions, "title":title, "favourites":"False", "star":"0", "category":category, "image": image, "author": author, "href":href};
    
    const card = createNewCard(data);
    
    if(isPublicRecipe){
        document.getElementById("home-button").click();
        if(category == "Appetizers"){
            document.getElementById('cards-container').getElementsByClassName('category-container')[0].appendChild(card);
        } else if(category == "MainDishes"){
            document.getElementById('cards-container').getElementsByClassName('category-container')[1].appendChild(card);
        } else{
            document.getElementById('cards-container').getElementsByClassName('category-container')[2].appendChild(card);
        }
        addToProfilePageMyRecipes();
    } else{
        addToProfilePage();
    }
}

function addToProfilePageMyRecipes() {

    var checkedBox = document.querySelectorAll('input[name="recipe-restriction[]"]:checked');
    
    var dietaryRestrictions = "none";
    if(checkedBox.length > 0){
        dietaryRestrictions = checkedBox[0].value;
    }

    // var dietaryRestrictions = document.querySelectorAll('input[name="recipe-restriction[]"]:checked');
    // var selectedRestrictions = [];
    // dietaryRestrictions.forEach(function (checkbox) {
    //     selectedRestrictions.push(checkbox.value);
    // });
    // const restrictions = selectedRestrictions.join(',');

    var categorySelect = document.getElementById('recipe-category-select');
    var selectedOption = categorySelect.options[categorySelect.selectedIndex];

    const title = document.getElementById("recipe-title-input").value;
    const category = "PersonalRecipe";
    const author = document.getElementById("profile-h2").textContent;
    const href = (author + title).replace(/\s+/g, '') + ".html";
    const image = document.getElementById("uploaded-image").src;
    //console.log(image);

    const data = {"private":"false", "dietaryRestrictions":dietaryRestrictions, "title":"", "favourites":"False", "star":"0", "category":category, "image": image, "author": title, "href":href};
    
    const card = createNewCard(data);
    
    document.getElementById('profile-my-recipes-content').appendChild(card);
}

function addToProfilePage() {
    var checkedBox = document.querySelectorAll('input[name="recipe-restriction[]"]:checked');
    
    var dietaryRestrictions = "none";
    if(checkedBox.length > 0){
        dietaryRestrictions = checkedBox[0].value;
    }
    
    // var dietaryRestrictions = document.querySelectorAll('input[name="recipe-restriction[]"]:checked');
    // var selectedRestrictions = [];
    // dietaryRestrictions.forEach(function (checkbox) {
    //     selectedRestrictions.push(checkbox.value);
    // });
    // const restrictions = selectedRestrictions.join(',');

    var categorySelect = document.getElementById('recipe-category-select');
    var selectedOption = categorySelect.options[categorySelect.selectedIndex];

    const title = document.getElementById("recipe-title-input").value;
    const category = "PersonalRecipe";
    const author = document.getElementById("profile-h2").textContent;
    const href = (author + title).replace(/\s+/g, '') + ".html";
    const image = document.getElementById("uploaded-image").src;
    //console.log(image);

    const data = {"private":"false", "dietaryRestrictions":dietaryRestrictions, "title":"", "favourites":"False", "star":"0", "category":category, "image": image, "author": title, "href":href};
    
    const card = createNewCard(data);
    
    document.getElementById("profile-button").click();
    document.getElementById('profile-private-recipes-content').appendChild(card);
}





    function getNewStarRating(starValue) {
        const filledStars = '★'.repeat(starValue);
        const emptyStars = '☆'.repeat(5 - starValue);
        return filledStars + emptyStars;
    }

    function createNewCard(data) {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardLink = document.createElement('a');
        cardLink.href = data.href || '#';
        cardLink.target = '_blank';

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');
        const image = document.createElement('img');
        image.src = data.image;
        image.alt = 'Image';
        imageContainer.appendChild(image);

        const detailsContainer = document.createElement('div');
        detailsContainer.classList.add('details-container');

        const author = document.createElement('div');
        author.classList.add('author');
        author.textContent = data.author;

        const title = document.createElement('div');
        title.classList.add('title');
        title.textContent = data.title;

        const rating = document.createElement('div');
        rating.classList.add('rating');
        rating.innerHTML = getNewStarRating(data.star); //'&#9733;&#9733;&#9733;&#9733;&#9733;';

        detailsContainer.appendChild(author);
        detailsContainer.appendChild(title);
        detailsContainer.appendChild(rating);

        cardLink.appendChild(imageContainer);
        cardLink.appendChild(detailsContainer);

        card.appendChild(cardLink);

        return card;
    }