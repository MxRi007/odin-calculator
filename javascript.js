const display = document.querySelector("#display");
let content = "";


//BUTTONS BLOCK

const buttons = [
                ["+", "#add"], 
                ["-", "#subtract"],
                ["*", "#multiply"],
                ["/", "#divide"],
                ["1", "#one"],
                ["2", "#two"],
                ["3", "#three"],
                ["4", "#four"],
                ["5", "#five"],
                ["6", "#six"],
                ["7", "#seven"],
                ["8", "#eight"],
                ["9", "#nine"],
                ["0", "#zero"]
                ]

function addButtonListener(symbol, selector){
    document.querySelector(selector).addEventListener('click', () => 
    {
        content += symbol;
        display.textContent = content;
    });
}

for(const button of buttons){
    addButtonListener(...button);
}

const btnClear = document.querySelector("#clear"); 
btnClear.addEventListener('click', () => {
    content = "";
    display.textContent = content;
});

//OPERATIONS BLOCK

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}


function multiply(a, b){
    return a * b;
}


function divide(a, b){
    return a / b;
}

function operate(operator, a, b){
    return operator(a, b);
}



