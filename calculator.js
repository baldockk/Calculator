/*Adds two numbers together*/
function add(num1, num2){
    let sum = num1 + num2;
    return sum;
}

console.log(add(1, 5));

/*Subtracts the first number by the second"*/
function subtract(num1, num2){
    let sum = num1 - num2;
    return sum;
}

console.log(subtract(5, 3));

/*Multiplies to numbers together*/
function multiply(num1, num2){
    let sum = num1 * num2;
    return sum;
}

console.log(multiply(5, 3));

/*Divides the first number by the second number*/
function divide(num1, num2){
    let sum = num1 / num2;
    return sum;
}

console.log(divide(15, 3));

let fNum;
let op;
let lNum;

function operate(firstNum, operator, lastNum){
    let answer;
    if(operator === "+"){
        answer = add(firstNum, lastNum);
    } else if(operator === "-"){
        answer = subtract(firstNum, lastNum);
    } else if(operator === "x" || operator === "*"){
        answer = multiply(firstNum, lastNum);
    } else if(operator === "/"){
        answer = divide(firstNum, lastNum);
    }
}

// Gets all of the buttons 
const buttons = document.querySelectorAll("button");
// Get the display input so we can show the selected buttons on the screen.
const display = document.getElementById("input");

// Iterate through each button
buttons.forEach((button) => {
  // Change background color on mouseover
  button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "white";
  });

  // Revert background color on mouse leave
  button.addEventListener("mouseleave", () => {
    button.style.backgroundColor = ""; // Resets to the original color (defined in CSS)
  });

  // Add button click logic
  button.addEventListener("click", () => {
    
  });
});


