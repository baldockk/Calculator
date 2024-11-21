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
    /*Handles the possibility of the user dividing something by zero*/
    if(num2 === 0 && num1 != 0){
        return "infinite";
    }
    let sum = num1 / num2;
    return sum;
}

console.log(divide(15, 3));

let fNum;
let op;
let lNum;

/*Does the calculation based on the operator in the equation*/
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
    } else if(operator === "clear"){
        clearData();
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
        clearData();
        display.textContent = "Try it out!";
    } else if(button.id === "="){
        // Split the string in the input into numbers and operators
    contentArray = splitEquationVars(displayText);

    if (contentArray.length > 2) {
        // Initialize runningTotal with the first number
        let runningTotal = Number(contentArray[0]);

        // Loop through the array, evaluating left-to-right
        for (let i = 1; i < contentArray.length; i += 2) {
            let op = contentArray[i]; // Operator
            let nextNum = Number(contentArray[i + 1]); // Next number

            // Operate on the running total and the next number
            runningTotal = operate(runningTotal, op, nextNum);
        }

        // Display the final result
        answer = runningTotal;
        display.textContent = answer;
    } else {
        // Handle simple equations with one operator
        fNum = Number(contentArray[0]);
        op = contentArray[1];
        lNum = Number(contentArray[2]);

        answer = operate(fNum, op, lNum);
        display.textContent = answer;
    }
    }
  });
});

/*Clears the data on the calculator so the user can do multiple equations*/
function clearData(){
    displayText = "";
    fNum = "";
    lNum = "";
    op = "";
}

/*Splits the components of the display text into three variables. Returns an array of the three numbers*/
function splitEquationVars(displayContent){
    if(displayContent === ""){
        return;
    }

    let eqArray = new Array;
    //Splits the array by the operators, keeping the operators as an array item. E.g. arr[0] = 8, arr[1] = x, arr[2] = 7
    eqArray = displayContent.split(/([+\-x÷])/)

    return eqArray;
}