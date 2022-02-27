function add(a, b) {
    return Number(a) + Number(b);
}

function substract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, operator, b) {
    if (operator == '+') {
        return add(a, b);
    } else if (operator == '-') {
        return substract(a, b);
    } else if (operator == 'x') {
        return multiply(a, b);
    } else if (operator == '/') {
        return divide(a, b);
    }


}

const number = document.querySelectorAll(".number")
const operator = document.querySelectorAll(".operator")
const equal = document.querySelector("#equal")
const screen = document.querySelector(".screen")
const clear = document.querySelector("#clear")



let displayValue = Number(screen.textContent);
let currVal;
let operatorValue;
let operation = Array();

number.forEach((num) => {
    num.addEventListener('click', function() {
        if (isNaN(screen.textContent)) {
            screen.textContent = '';
        }
        if ("+ x / -".includes(operation[1])) {
            screen.textContent = num.textContent;
        } else {
            screen.textContent += num.textContent;
        }
        displayValue = Number(screen.textContent);
        if (operation.length == 2) {
            currVal = operate(operation[0], operation[1], displayValue);
            operation = [currVal]
        } else {
            operation.push(displayValue);
        }

    })
})

operator.forEach((el) => {
    el.addEventListener('click', function() {
        screen.textContent = operation[0];
        operatorValue = el.textContent;
        operation.push(operatorValue);

    })
})

equal.addEventListener('click', function() {
    screen.textContent = operation[0];
    displayValue = screen.textContent;
})

clear.addEventListener('click', () => {
    screen.textContent = '';
    displayValue = 0
    operation = [];
})