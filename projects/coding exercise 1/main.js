const squares = document.querySelector("#squares-div");
const inputElement = document.querySelector("#input");
const submitBtn = document.querySelector("#btn");

function createSquares() {
    // Clear the previous squares
    squares.innerHTML = "";

    // Get the number of squares to be created
    const numberOfSquares = inputElement.value;

    // Create the squares
    for(let i = 0; i < numberOfSquares; i++) {
        // Create a div element
        const square = document.createElement("div");
        
        // Give it a classname of "square"
        square.className = "square";
        
        // Append the element to the squares div
        squares.appendChild(square);
    }
    
}

submitBtn.addEventListener("click", createSquares);