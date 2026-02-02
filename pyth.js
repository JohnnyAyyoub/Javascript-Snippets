// Prompt the user for side a
let a = parseFloat(prompt("Enter length of side a:"));

// Prompt the user for side b
let b = parseFloat(prompt("Enter length of side b:"));

// Calculate the hypotenuse using Pythagorean theorem
let c = Math.sqrt(a * a + b * b);

// Show the result
alert("The length of the hypotenuse is: " + c);