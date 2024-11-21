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
    if(num2 === 0){
        return "infinite";
    }
    let sum = num1 / num2;
    return sum;
}

console.log(divide(15, 3));

let fNum;
let op;
let lNum;

function operate(firstNum, operator, lastNum){
    let answer = 0;
    if(operator === "+"){
        answer = add(firstNum, lastNum);
    } else if(operator === "-"){
        answer = subtract(firstNum, lastNum);
    } else if(operator === "x" || operator === "*"){
        answer = multiply(firstNum, lastNum);
    } else if(operator === "÷"){
        answer = divide(firstNum, lastNum);
    }
    return answer;
}

// Get the display input so we can show the selected buttons on the screen.
const display = document.getElementById("input");
// Gets all of the buttons 
const buttons = document.querySelectorAll("button");
let displayText = "";
//The array which will get all parts of the equation
let contentArray = new Array;
let answer = 0;

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
    if(button.id != "clear" && button.id != "="){
        displayText += button.id;
        display.textContent = displayText;
    } else if(button.id === "clear"){
        clearContent();
    } else if(button.id === "="){
        //Split the string in the input into the first number, the operator and the last number.
        contentArray = splitEquationVars(displayText);
        answer = operate(Number(contentArray[0]), contentArray[1], Number(contentArray[2]));
        console.log(answer);
    }
  });
});

function clearContent(){
    displayText = "";
    fNum = "";
    lNum = "";
    op = "";
    display.textContent = "Try it out!";
}

/*Splits the components of the display text into three variables. Returns an array of the three numbers*/
function splitEquationVars(displayContent){
    if(displayContent === ""){
        return;
    }

    let eqArray = new Array;
    eqArray = displayContent.split(/[+\-x÷]/)

    //Issue here is that the operator is not being extracted

    return eqArray;
}