function makeGrids(size) {
    let screen = document.querySelector(".sketch-screen");
    screen.innerHTML = ""; // Clear or clean previous grid
    
    // Create grid squares
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseover", function() {
                this.style.backgroundColor = "#ff0000"; // Change color on hover
            });
            screen.appendChild(square);
        }
    }
    // Set CSS variable --grid-size to the new size
    document.documentElement.style.setProperty('--grid-size', size);
}

// Function to prompt the user for the desired grid size
function changeGridSize() {
    let newSize = prompt("Enter the number of squares per side for the new grid (max 100):");
    newSize = newSize === null ? 16 : parseInt(newSize);
    if (!isNaN(newSize) && newSize > 0 && newSize <= 100) {
        makeGrids(newSize);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
}

// Add event listener to the button
document.getElementById("change-size-btn").addEventListener("click", changeGridSize);

// Initial grid creation with default size of 16x16
makeGrids(16);
