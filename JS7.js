// Factorial using loops

function calculateExponent(base, exponent) {
    let result = 1;
    for (let i = 1; i <= exponent; i++) {
        result *= base;
    }
    return result;
}

let baseInput = prompt("Enter the base: ");
let exponentInput = prompt("Enter the exponent: ");

if (!isNaN(base) && !isNaN(exponent)) {

    let result = calculateExponent(base, exponent);
    console.log(`${base} power of ${exponent} is: ${result}`);
} else {
    console.log("Invalid input. Please enter valid numbers.");
}