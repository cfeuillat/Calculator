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
const del = document.querySelector("#delete")
const dot = document.querySelector("#dot")
const buttons = document.querySelectorAll("button")


let currVal = Number(screen.textContent);
let operatorValue;
let operation = Array();
let restartScreen = false;

number.forEach((num) => {
    num.addEventListener('click', function() {
        if (isNaN(screen.textContent)) {
            screen.textContent = '';
        }
        if (restartScreen) {
            screen.textContent = num.textContent;
            restartScreen = false;
        } else {
            screen.textContent += num.textContent;
        }
        currVal = Number(screen.textContent);


    })
})

dot.addEventListener('click', function() {
    if ((screen.textContent).includes('.')) {
        dot.disabled = true;
    } else {
        screen.textContent += '.';
    }
})

operator.forEach((el) => {
    el.addEventListener('click', function() {

        operatorValue = el.textContent;
        operation.push(currVal);

        if (operation.length == 3) {
            currVal = operate(operation[0], operation[1], operation[2]);
            screen.textContent = currVal;
            operation = [currVal, operatorValue]
        } else {
            operation.push(operatorValue);
        }
        restartScreen = true;
        dot.disabled = false;

    })
})

equal.addEventListener('click', function() {
    if (operation.length == 2) {
        screen.textContent = operate(operation[0], operation[1], currVal);
    } else {
        screen.textContent = currVal;
    }
    currVal = screen.textContent;
    operation = [];
})


clear.addEventListener('click', () => {
    screen.textContent = '';
    currVal = 0
    operation = [];
})

del.addEventListener('click', () => {
    screen.textContent = screen.textContent.slice(0, -1);
    currVal = Number(screen.textContent);
})