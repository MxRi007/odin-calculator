const display = document.querySelector("#display");
const operationDisplay = document.querySelector("#results");

let content = "";


//BUTTONS BLOCK

const numberButtons = [
    ["1", "#one"],
    ["2", "#two"],
    ["3", "#three"],
    ["4", "#four"],
    ["5", "#five"],
    ["6", "#six"],
    ["7", "#seven"],
    ["8", "#eight"],
    ["9", "#nine"],
    ["0", "#zero"],
    [".", "#dot"],

]

const operatorButtons = [
    [" + ", "#add"],
    [" - ", "#subtract"],
    [" * ", "#multiply"],
    [" / ", "#divide"]
]


for (const button of numberButtons) {
    document.querySelector(button[1]).addEventListener('click', () => {
        if (/\d*\.\d*$/.test(content) && button[0] === '.') return;
        if (!/[0123456789]/.test(content[content.length - 1]) && button[0] === '.') content += '0';
        content += button[0];
        operationDisplay.textContent = content;
    });

    document.addEventListener('keydown', (event) => {
        if(event.key !== button[0]) return;
        if (/\d*\.\d*$/.test(content) && button[0] === '.') return;
        if (!/[0123456789]/.test(content[content.length - 1]) && button[0] === '.') content += '0';
        content += button[0];
        operationDisplay.textContent = content;
    });
}




for (const button of operatorButtons) {
    document.querySelector(button[1]).addEventListener('click', () => {
        if (!/[0123456789]/.test(content[content.length - 1])) return;
            executeOperation();
            content += button[0];
            operationDisplay.textContent = content;
    });

    document.addEventListener('keydown', (event) => {
        if(` ${event.key} ` !== button[0]) return;
        if (!/[0123456789]/.test(content[content.length - 1])) return;
            executeOperation();
            content += button[0];
            operationDisplay.textContent = content;
    });
}

const btnClear = document.querySelector("#clear");
btnClear.addEventListener('click', () => {
    content = "";
    display.textContent = content;
    operationDisplay.textContent = content;
});

const btnEquals = document.querySelector("#equals");
btnEquals.addEventListener('click', () => {
    executeOperation();
    operationDisplay.textContent = '';
    content = '';
});

document.addEventListener('keydown', (event) => {
    if(event.key !== "=") return;
    executeOperation();
    operationDisplay.textContent = '';
    content = '';
});

const btnBack = document.querySelector("#back");
btnBack.addEventListener('click', () => {
    if (!/[0123456789\.]/.test(content[content.length - 1])) return;
    content = content.slice(0, content.length-1);
    operationDisplay.textContent = content;
});

document.addEventListener('keydown', (event) => {
    if(event.key !== "Backspace") return;
    if (!/[0123456789\.]/.test(content[content.length - 1])) return;
    content = content.slice(0, content.length-1);
    operationDisplay.textContent = content;
});





//OPERATIONS BLOCK

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
    if (b === 0) {
        alert("YOU CANNOT!");
        return a;
    }
    return a / b;
}

function operate(operator, a, b) {
    return operator(a, b);
}

function executeOperation() {
    let text = content.split(' ');
    if (text.length >= 3) {
        let left = +text[0];
        let operand;
        switch (text[1]) {
            case '+': operand = add;
                break;
            case '-': operand = subtract;
                break;
            case '*': operand = multiply;
                break;
            case '/': operand = divide;
                break;
            default: console.log('Error!')
        }
        let right = +text[2];
        let result = +operate(operand, left, right).toFixed(20);
        content = result;
        operationDisplay.textContent = result;
        display.textContent = result;
    }
}


