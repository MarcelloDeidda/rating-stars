# rating-stars

[See a preview on Codepen!](https://codepen.io/marcello-deidda/pen/ZEqwYGP "Preview")

This JS script renders a star rating input dinamically, through DOM manipulation.

The files index.html and tutorial-style.css in this repository are only for tutorial purposes.

## Usage

Make sure to connect **stars.js** and **stars-style.css** to your HTML file.

Your HTML file should contain a **number input with id "rating"** and an **empty div with id "stars-root"**. Optionally, your submit button can have an id of "review-submit". By clicking this button, the script will validate the input, preventing an empty value.

    <form action="">
        <input type="number" name="rating" id="rating">
        <div id="stars-root"></div>
        <button id="review-submit">Submit</button>
    </form>

The default number of stars is set to 5 through the **NUMBER_OF_STARS** constant. This can be changed to any number (e.g. 10).

Thre related stars-style.css file contains basic styling to change star colour and size, as well as display them in a row and hide the number input.
