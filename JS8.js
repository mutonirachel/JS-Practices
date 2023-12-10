//Exponent or Power of

function Exponent(base, exponent) {
    let result = 1;
    for (let i = 1; i <= exponent; i++) {
        result *= base;
    }
    return result;
}

let baseInput = prompt("Enter the base: ");
let exponentInput = prompt("Enter the exponent: ");

let base = parseFloat(baseInput);
let exponent = parseInt(exponentInput);

if (!isNaN(base) && !isNaN(exponent)) {
    
    let result = Exponent(base, exponent);
    console.log(`${base} power of ${exponent} is: ${result}`);
} else {
    console.log("You Entered an invalid input, Please enter a valid numbers.");
}