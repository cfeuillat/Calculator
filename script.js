function add(a, b) {
    return Number(a) + Number(b);
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
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
let operatorValue;
let operation;

number.forEach((num) => {
    num.addEventListener('click', function() {
        if (isNaN(screen.textContent)) {
            screen.textContent = '';
        }
        screen.textContent += num.textContent;
        displayValue = Number(screen.textContent);
    })
})

operator.forEach((el) => {
    el.addEventListener('click', function() {
        operatorValue = el.textContent;
        operation = [displayValue, el.textContent]
        screen.textContent = el.textContent;
        displayValue = '';
    })
})

equal.addEventListener('click', function() {
    screen.textContent = operate(operation[1], operation[0], displayValue);
    displayValue = screen.textContent;
})

clear.addEventListener('click', () => { screen.textContent = '' })