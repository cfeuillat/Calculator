function add(a, b) {
    return a + b;
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
        add(a, b);
    } else if (operator == '-') {
        substract(a, b);
    } else if (operator == 'x') {
        multiply(a, b);
    } else if (operator == '/') {
        divide(a, b);
    }


}