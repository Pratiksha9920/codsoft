// calculator.js//
document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".button");
    let currentInput = "";
    let operator = "";
    let previousInput = "";
    
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const value = button.getAttribute("data-value");
            
            if (value === "C") {
                currentInput = "";
                operator = "";
                previousInput = "";
                display.textContent = "0";
                return;
            }

            if (value === "=") {
                if (currentInput !== "" && previousInput !== "" && operator !== "") {
                    currentInput = calculate(parseFloat(previousInput), parseFloat(currentInput), operator);
                    display.textContent = currentInput;
                    previousInput = "";
                    operator = "";
                }
                return;
            }
            
            if (["+", "-", "*", "/"].includes(value)) {
                if (currentInput !== "") {
                    if (previousInput === "") {
                        previousInput = currentInput;
                    } else {
                        previousInput = calculate(parseFloat(previousInput), parseFloat(currentInput), operator);
                        display.textContent = previousInput;
                    }
                    operator = value;
                    currentInput = "";
                }
                return;
            }

            currentInput += value;
            display.textContent = currentInput;
        });
    });

    function calculate(a, b, operator) {
        switch(operator) {
            case "+":
                return a + b;
            case "-":
                return a - b;
            case "*":
                return a * b;
            case "/":
                return a / b;
            default:
                return b;
        }
    }
});
