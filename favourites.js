document.addEventListener('DOMContentLoaded', function () {
    // Target the container where we want to append the cards
    const cardsContainer = document.getElementById('cards-container-favourites');

    const textMeasurement = '[{"private":"False", "dietaryRestrictions":"none", "title":"Mozzarella Sticks", "favourites":"True", "star":"4", "category": "Appetizers", "image": "https://www.allrecipes.com/thmb/BeV2hKihyqT4sQBI6h2fYp2KzuU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/23596-fried-mozzarella-cheese-sticks-DDMFS-4x3-842a0eaebf6b435a8d3a8b04325e13eb.jpg", "author": "John Smith", "href": "https://www.example.com/mozzarella-sticks"}, {"private":"False", "dietaryRestrictions":"none", "title":"Spinach Dip", "favourites":"True", "star":"2", "category": "Appetizers", "image": "https://whatsgabycooking.com/wp-content/uploads/2022/09/WGC-__-Spinach-Dip-2-copy.jpg", "author": "Emily Johnson", "href": "https://www.example.com/spinach-dip"} , {"private":"False", "dietaryRestrictions":"none", "title":"Bruschetta", "favourites":"False", "star":"5", "category": "Appetizers", "image": "https://preppykitchen.com/wp-content/uploads/2023/04/Bruschetta-Recipe-Recipe-Card.jpg", "author": "Michael Davis", "href": "https://www.example.com/bruschetta"}, {"private":"False", "dietaryRestrictions":"none", "title":"Potato Skins", "favourites":"True", "star":"3", "category": "Appetizers", "image": "https://www.iheartnaptime.net/wp-content/uploads/2023/01/Potato-Skins-I-Heart-Naptime-6.jpg", "author": "Sophia Miller", "href": "potatoSkinRecipe.html"}, {"private":"False", "dietaryRestrictions":"none", "title":"Garlic Breadsticks", "favourites":"True", "star":"4", "category": "Appetizers", "image": "https://i1.wp.com/lmld.org/wp-content/uploads/2011/08/Garlic-Bread-Sticks-2.jpg", "author": "Daniel Brown", "href": "https://www.example.com/garlic-breadsticks"}, {"private":"False", "dietaryRestrictions":"none", "title":"Honey Garlic Chicken", "favourites":"False", "star":"4", "category": "MainDishes", "image": "assets/honey_garlic_chicken.jpg", "author": "David Johnson", "href": "viewRecipe.html"} , {"private":"False", "dietaryRestrictions":"none", "title":"Alfredo Pasta", "favourites":"True", "star":"5", "category": "MainDishes", "image": "https://eatinginaninstant.com/wp-content/uploads/2022/08/IP-Chicken-Alfredo-8-1200.jpg", "author": "Emma Smith", "href": "https://www.example.com/chicken-alfredo-pasta"}, {"private":"False", "dietaryRestrictions":"none", "title":"Lava Cake", "favourites":"False", "star":"4", "category": "Desserts", "image": "https://preppykitchen.com/wp-content/uploads/2022/03/Chocolate-Lava-Cake-Recipe.jpg", "author": "Ethan Wilson", "href": "https://www.example.com/chocolate-lava-cake"}, {"private":"False", "dietaryRestrictions":"none", "title":"Strawberry Cheesecake", "favourites":"True", "star":"5", "category": "Desserts", "image": "https://www.wholesomeyum.com/wp-content/uploads/2021/12/wholesomeyum-Keto-Strawberry-Cheesecake-14.jpg", "author": "Olivia Davis", "href": "https://www.example.com/strawberry-cheesecake"},{"private":"False", "dietaryRestrictions":"none", "title":"Deviled Eggs", "favourites":"False", "star":"3", "category": "Appetizers", "image": "https://detoxinista.com/wp-content/uploads/2019/04/avocado-deviled-eggs-recipe.jpg", "author": "Liam Robinson", "href": "https://www.example.com/deviled-eggs"}, {"private":"False", "dietaryRestrictions":"none", "title":"Spring Rolls", "favourites":"True", "star":"4", "category": "Appetizers", "image": "https://www.sugarsaltmagic.com/wp-content/uploads/2023/01/Chinese-Spring-Rolls-4FEAT-500x500.jpg", "author": "Isabella Garcia", "href": "https://www.example.com/crispy-spring-rolls"},{"private":"False", "dietaryRestrictions":"none", "title":"Stir Fry", "favourites":"False", "star":"3", "category": "MainDishes", "image": "https://www.allrecipes.com/thmb/xvlRRhK5ldXuGcXad8XDM5tTAfE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/223382_chicken-stir-fry_Rita-1x1-1-b6b835ccfc714bb6a8391a7c47a06a84.jpg", "author": "Nathan White", "href": "https://www.example.com/vegetarian-stir-fry"} ,{"private":"False", "dietaryRestrictions":"none", "title":"Beef Tacos", "favourites":"True", "star":"4", "category": "MainDishes", "image": "https://www.dinneratthezoo.com/wp-content/uploads/2018/05/ground-beef-tacos-2.jpg", "author": "Sophie Davis", "href": "https://www.example.com/beef-tacos"}, {"private":"False", "dietaryRestrictions":"none", "title":"Margherita Pizza", "favourites":"True", "star":"5", "category": "MainDishes", "image": "https://cdn.loveandlemons.com/wp-content/uploads/2023/07/margherita-pizza-500x375.jpg", "author": "Matt Brown", "href": "https://www.example.com/margherita-pizza"}, {"private":"False", "dietaryRestrictions":"none", "title":"Shrimp Scampi", "favourites":"False", "star":"3", "category": "MainDishes", "image": "https://s23209.pcdn.co/wp-content/uploads/2014/03/Shrimp-ScampiIMG_1006.jpg", "author": "Ava Miller", "href": "https://www.example.com/shrimp-scampi"}, {"private":"False", "dietaryRestrictions":"none", "title":"Apple Pie", "favourites":"True", "star":"3", "category": "Desserts", "image": "https://feelgoodfoodie.net/wp-content/uploads/2023/11/Apple-Pie-TIMG.jpg", "author": "Liam White", "href": "https://www.example.com/apple-pie"} , {"private":"False", "dietaryRestrictions":"none", "title":"Ice Cream", "favourites":"False", "star":"4", "category": "Desserts", "image": "https://www.rachelcooks.com/wp-content/uploads/2022/05/no-churn-vanilla-ice-cream-1500R-13-square.jpg", "author": "Aria Johnson", "href": "https://www.example.com/vanilla-ice-cream"}, {"private":"False", "dietaryRestrictions":"none", "title":"Red Velvet Cupcakes", "favourites":"True", "star":"5", "category": "Desserts", "image": "https://www.livewellbakeoften.com/wp-content/uploads/2021/06/Red-Velvet-Cupcakes-3-New-copy.jpg", "author": "Daniel Smith", "href": "https://www.example.com/red-velvet-cupcakes"} , {"private":"False", "dietaryRestrictions":"none", "title":"Peach Cobbler", "favourites":"False", "star":"3", "category": "Desserts", "image": "https://www.allrecipes.com/thmb/_g_SFdKUwSniBWbzaQWEiGQw6SY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/51535-fresh-southern-peach-cobbler-ddmfs-0652-3x4-cb8d3d5a1e8548728fa1fc3d21fec1f0.jpg", "author": "Sophia Robin", "href": "https://www.example.com/peach-cobbler"} ]';
    const MeasurementArr = JSON.parse(textMeasurement);

    // Group cards by category
    const categories = {};
    MeasurementArr.forEach((data) => {
        if (!categories[data.category]) {
            categories[data.category] = [];
        }
        const card = createCard(data);
        if(card){
            categories[data.category].push(card);
        }
        
    });

    // Append cards to the container by category
    for (const category in categories) {
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container-favourites');

        categories[category].forEach((card) => {
            categoryContainer.appendChild(card);
        });

        cardsContainer.appendChild(categoryContainer);
    }

    // Function to create a card element
    function createCard(data) {
        if(data.favourites === "False"){
            return null;
        }

        const card = document.createElement('div');
        card.classList.add('card-favourites');

        const cardLink = document.createElement('a');
        cardLink.href = data.href || '#'; // Set a default link if 'href' is not provided
        cardLink.target = '_self'; // Open the link in a new tab/window

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
        const filledStars = '★'.repeat(starValue); // Unicode character for a filled star
        const emptyStars = '☆'.repeat(5 - starValue); // Unicode character for an empty star
        return filledStars + emptyStars;
    }
});

function buttonScrollAppetizerFavourites(direction) {
    const categoryContainers = document.getElementById('cards-container-favourites').getElementsByClassName('category-container-favourites')[0];

    const buttonRight = document.getElementById('moveRightAppetizer-favourites');
    const buttonLeft = document.getElementById('moveLeftAppetizer-favourites');

    buttonRight.onclick = function () {
        categoryContainers.scrollLeft += 252;
    };
    buttonLeft.onclick = function () {
        categoryContainers.scrollLeft -= 252;
    };
}

function buttonScrollMainFavourites(direction) {
    const categoryContainers = document.getElementById('cards-container-favourites').getElementsByClassName('category-container-favourites')[1];

    const buttonRight = document.getElementById('moveRightMain-favourites');
    const buttonLeft = document.getElementById('moveLeftMain-favourites');

    buttonRight.onclick = function () {
        categoryContainers.scrollLeft += 252;
    };
    buttonLeft.onclick = function () {
        categoryContainers.scrollLeft -= 252;
    };
}

function buttonScrollDessertFavourites(direction) {
    const categoryContainers = document.getElementById('cards-container-favourites').getElementsByClassName('category-container-favourites')[2];

    const buttonRight = document.getElementById('moveRightDessert-favourites');
    const buttonLeft = document.getElementById('moveLeftDessert-favourites');

    buttonRight.onclick = function () {
        categoryContainers.scrollLeft += 252;
    };
    buttonLeft.onclick = function () {
        categoryContainers.scrollLeft -= 252;
    };
}