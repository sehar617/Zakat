// Get user inputs
let name = prompt("Enter your name: ");
let total_wealth = parseFloat(prompt("Enter your total wealth (in your local currency): "));

// Calculate Zakat (2.5% of total wealth)
let zakat = total_wealth * 0.025;

// Output the result
document.write(name + ", the amount of Zakat you need to pay is " + zakat.toFixed(2) + " in your local currency.");
alert(name + ", the amount of Zakat you need to pay is " + zakat.toFixed(2) + " in your local currency.");
console.log(name + ", the amount of Zakat you need to pay is " + zakat.toFixed(2) + " in your local currency.");