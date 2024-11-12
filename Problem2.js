var var1 = 10;
var var2 = 5;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log("Addition: " + add(var1, var2));

var var1 = 20;
var var2 = 10;
console.log("Updated var1: " + var1);
console.log("Updated var2: " + var2); 

console.log("Subtraction: " + subtract(var1, var2));
console.log("Multiplication: " + multiply(var1, var2));
console.log("Division: " + divide(var1, var2));



equal = var1 == var2
console.log("Is num1 equal to num2?: " + equal);

greater = var1 > var2
console.log("Is num1 greater than num2?: " + greater);

notEqual = var1 != var2
console.log("Is num1 not equal to num2?: " + notEqual);


let positiveNumbers = var1 > 0 && var2 > 0
console.log("Are both numbers positive?: " + positiveNumbers);

let onePositive = var1 > 0 || var2 > 0
console.log("Is at least one number positive?: " + onePositive);