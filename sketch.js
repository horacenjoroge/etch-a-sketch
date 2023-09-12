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

        
    }
});

const grid = document.querySelector('.container');

// Function to change the color of a grid cell when hovered
function changeColorOnHover(event) {
    const gridCell = event.target; // Get the grid cell that triggered the event
    gridCell.style.backgroundColor = 'blue'; // Change the background color
}

// Function to reset the color of a grid cell when the mouse leaves
function resetColorOnLeave(event) {
    const gridCell = event.target; // Get the grid cell that triggered the event
    gridCell.style.backgroundColor = ''; // Reset the background color
}

// Create the grid cells and add event listeners
for (let i = 0; i < 16 * 16; i++) {
    const gridCell = document.createElement('div');
    gridCell.classList.add('cell');
    grid.appendChild(gridCell);

    // Add event listeners for hover and mouse leave
    gridCell.addEventListener('mouseover', changeColorOnHover);
    gridCell.addEventListener('mouseleave', resetColorOnLeave);
}
















