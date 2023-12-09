// Area of a given circle and rectangle

function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}

// Function to calculate the area of a rectangle
function calculateRectangleArea(length, width) {
    return length * width;
}

// Prompt user to choose shape
let shapeChoice = prompt("Enter 'circle' or 'rectangle' to calculate the area:");


// Convert shape choice to lowercase for case-insensitivity
shapeChoice = shapeChoice.toLowerCase();
if (shapeChoice === "circle") {
    // Area of a circle
    let radius = parseFloat(prompt("Enter the radius of the circle:"));
    if (!isNaN(radius) && radius >= 0) {
        let circleArea = calculateCircleArea(radius);
        console.log(`The area of the circle is: ${circleArea.toFixed(2)}`);
    } else {
        console.log("Invalid input for radius. Please enter a valid non-negative number.");
    }
} else if (shapeChoice === "rectangle") {


    // Area of a rectangle
    let length = parseFloat(prompt("Enter the length of the rectangle:"));
    let width = parseFloat(prompt("Enter the width of the rectangle:"));
    if (!isNaN(length) && !isNaN(width) && length >= 0 && width >= 0) {
        let rectangleArea = calculateRectangleArea(length, width);
        console.log(`The area of the rectangle is: ${rectangleArea.toFixed(2)}`);
    } else {
        console.log("Invalid input for length or width. Please enter valid non-negative numbers.");
    }
} else {
    console.log("Invalid shape choice. Please enter 'circle' or 'rectangle'.");
}