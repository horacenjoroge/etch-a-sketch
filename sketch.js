const btn = document.querySelector('#btn');

btn.addEventListener('click', function () {
    let numberOfSquares = prompt("Enter the number of squares you want inside the grid");

    if (numberOfSquares === null) {
        // User clicked Cancel or closed the prompt dialog
        return;
    }

    numberOfSquares = parseInt(numberOfSquares);

    if (isNaN(numberOfSquares) || numberOfSquares >= 100) {
        alert("Please enter a valid number less than 100.");
    } else {
        console.log("Number of squares you want inside the grid: " + numberOfSquares);

        // Here, you can perform further actions with the validated numberOfSquares value.
    }
});










