document.addEventListener("DOMContentLoaded", function () {

    const urlParams = new URLSearchParams(window.location.search);
    if(urlParams.has('flag') && urlParams.get('flag') === '1') {
        const dietaryRestrictions = urlParams.get('dietaryRestrictions');
        const title = urlParams.get('title');
        const favourites = urlParams.get('favourites');
        const star = urlParams.get('star');
        const category = urlParams.get('category');
        const image = urlParams.get('image');
        const author = urlParams.get('author');
        const href = urlParams.get('href');

        const data = {"dietaryRestrictions":dietaryRestrictions, "title":title, "favourites":favourites, "star":star, "category":category, "image": image, "author": author, "href":href};   
        const card = createCard(data);

        document.getElementById("favorites-button").click();
        if(category == "Appetizers"){
            document.getElementById('cards-container-favourites').getElementsByClassName('category-container-favourites')[0].appendChild(card);
        } else if(category == "MainDishes"){
            document.getElementById('cards-container-favourites').getElementsByClassName('category-container-favourites')[1].appendChild(card);
        } else{
            document.getElementById('cards-container-favourites').getElementsByClassName('category-container-favourites')[2].appendChild(card);
        }   
    }
});


function createCard(data) {
    if(data.favourites === "False"){
        return null;
    }

    const card = document.createElement('div');
    card.classList.add('card-favourites');

    const cardLink = document.createElement('a');
    cardLink.href = data.href || '#'; // Set a default link if 'href' is not provided
    cardLink.target = '_blank'; // Open the link in a new tab/window

    // Image container
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container-favourites');
    const image = document.createElement('img');
    image.src = data.image;
    image.alt = 'Image';
    imageContainer.appendChild(image);

    // Details container
    const detailsContainer = document.createElement('div');
    detailsContainer.classList.add('details-container-favourites');

    // Author name
    const author = document.createElement('div');
    author.classList.add('author-favourites');
    author.textContent = data.author;

    const title = document.createElement('div');
    title.classList.add('title-favourites');
    title.textContent = data.title;

    // Star rating
    const rating = document.createElement('div');
    rating.classList.add('rating-favourites');
    rating.innerHTML = getStarRating(data.star); //'&#9733;&#9733;&#9733;&#9733;&#9733;';

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

function getStarRating(starValue) {
    const filledStars = '★'.repeat(starValue); 
    const emptyStars = '☆'.repeat(5 - starValue); 
    return filledStars + emptyStars;
}