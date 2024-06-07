document.addEventListener('DOMContentLoaded', function () {
    var cardsContainer3 = document.getElementById('community-content');
    var allData;  // Store all data to use when resetting the search

    var MeasurementArr = fetch("./community.json")
        .then(function(resp) {
            return resp.json();
        })
        .then(function(data1) {
            allData = data1;  // Store all data

            // Initial rendering of all users
            makeCards(allData);

            // Listen for input changes in the search bar
            document.getElementById("friend-search").addEventListener('input', function() {
                var userSearched = this.value.toLowerCase().trim();
                console.log(userSearched);

                if (userSearched === "") {
                    // If the search bar is empty, show all users and clear existing search results
                    clearSearchResults();
                    makeCards(allData);
                } else {
                    const data2 = data1.filter(({author}) => author.toLowerCase().includes(userSearched));

                    // Clear existing search results
                    clearSearchResults();

                    // Display new search results
                    makeCards(data2);
                }
            });
        });

    function makeCards(MeasurementArr) {
        const categories = {}
        MeasurementArr.forEach((data) => {
            if (!categories[data.category]) {
                categories[data.category] = [];
            };
            categories[data.category].push(createCard(data));
        });

        for (const category in categories) {
            if (["Friend"].includes(category)){    
                const categoryContainer = document.createElement('div');
                categoryContainer.classList.add('category-container2');

                categories[category].forEach((card) => {
                    categoryContainer.appendChild(card);
                });

                cardsContainer3.appendChild(categoryContainer);
            }
        }
    }

    function createCard(data) {
        const card = document.createElement('div');
        card.classList.add('card-community');

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

        const rating = document.createElement('div');
        rating.classList.add('rating');
        rating.innerHTML = getStarRating(data.star);

        detailsContainer.appendChild(author);
        detailsContainer.appendChild(rating);

        cardLink.appendChild(imageContainer);
        cardLink.appendChild(detailsContainer);

        card.appendChild(cardLink);

        return card;
    }

    function getStarRating(starValue) {
        const filledStars = '★'.repeat(starValue);
        const emptyStars = '☆'.repeat(5 - starValue);
        return filledStars + emptyStars;
    }

    function clearSearchResults() {
        const boxes = document.querySelectorAll('.category-container2');
        boxes.forEach(box => {
            box.remove();
        });
    }
});
