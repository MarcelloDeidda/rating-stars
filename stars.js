// Please change this constant number to modify number of stars
const NUMBER_OF_STARS = 5;

// Selecting elements from page!
// The form should contain a div with id "stars-root"
const starsRoot = document.getElementById("stars-root");
// The form should contain a number input with id "rating", and display property set to "none"
const starRating = document.getElementById("rating");
// The form should contain a submit button with id "review-submit"
const reviewSubmit = document.getElementById("review-submit");

const stars = [];

for (let i = 1; i <= NUMBER_OF_STARS; i++) {
    // Creating star
    const star = document.createElement("p");
    star.id = `star-${i}`;
    star.className = "star";
    star.innerHTML = "&#9734;";

    // Appending star to parent element and pushing into array
    starsRoot.appendChild(star);
    stars.push({ element: star, clicked: false });
}

// Add mouse events to stars
stars.map(star => {
    // When the mouse is over a star, this star is highlighted, as well as the stars on its left
    star.element.addEventListener("mouseover", () => {
        // If any of the stars has already been selected, the stars will not react to the mouse movement
        const isAnyStarClicked = stars.reduce((a, b) => a + b.clicked, 0);
        if (isAnyStarClicked === 0) {
            // Highlight the stars
            const starIndex = stars.indexOf(star);
            for (let i = 0; i <= starIndex; i++) {
                stars[i].element.innerHTML = "&#9733;";
            }
        }
    });

    // When the mouse points away from the star, all of the stars revert to blank
    star.element.addEventListener("mouseout", () => {
        // If any of the stars has already been selected, the stars will not react to the mouse movement
        const isAnyStarClicked = stars.reduce((a, b) => a + b.clicked, 0);
        if (isAnyStarClicked === 0) {
            // Revert to blank stars
            for (let i = 0; i < NUMBER_OF_STARS; i++) {
                stars[i].element.innerHTML = "&#9734;";
            }
        }
    });
});

// Add click event to stars
stars.map(star => {
    star.element.addEventListener("click", () => {
        // If the star hasn't been selected yet, it will be highlighted, as well as the stars on its left.
        // If the star has been selected already, all starts will revert to blank
        if (!star.clicked) {
            // Only current star is clicked
            stars.map(star => {
                if (star.clicked) { star.clicked = false }
            });
            star.clicked = true
            // Set rating value to selected star number
            const starIndex = stars.indexOf(star);
            starRating.value = starIndex + 1;
            // Highlight stars
            for (let i = 0; i < NUMBER_OF_STARS; i++) {
                if (i <= starIndex) {
                    stars[i].element.innerHTML = "&#9733;";
                } else {
                    stars[i].element.innerHTML = "&#9734;";
                }
            }
        } else {
            // No star is clicked
            star.clicked = false;
            // Rating has no value
            starRating.value = undefined;
            // Revert to blank stars
            for (let i = 0; i < NUMBER_OF_STARS; i++) {
                stars[i].element.innerHTML = "&#9734;";
            }
        }
    })
});

// Submit button event
reviewSubmit.addEventListener("click", (e) => {
    if (!starRating.value) {
        e.preventDefault();
        alert("Please enter a rating from 1 to 5!");
    }
})