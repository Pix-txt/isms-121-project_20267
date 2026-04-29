let currentInput = '';
let currentOpp = '';
let previousInput = '';

function appendnumber(number){
    currentInput += number;
    document.getElementById('display').innerHTML = previousInput + currentOpp + currentInput;
}

function clearscreen(){
    currentInput = '';
    currentOpp = '';
    previousInput = '';
    document.getElementById('display').innerHTML = previousInput + currentOpp + currentInput;
}

function appendoperator(operator){
    if (currentInput === '') return;
    if (previousInput !== ''){
        calculate();
    }

    currentOpp = operator;
    previousInput = currentInput;
    currentInput = '';
    document.getElementById('display').innerHTML = previousInput + currentOpp + currentInput;
}

function calculate(){
    if(currentInput === '' || previousInput === '') return;
    let result;
    let prev = parseFloat(previousInput);
    let cur = parseFloat(currentInput);

    switch(currentOpp){
        case '+':
            result = cur + prev;
            break;
        case '-':
            result = cur - prev;
            break;
        case '*':
            result = cur * prev;
            break;
        case '/':
            result = cur/prev;
            break;
        default:
            return;
    }

    currentInput = result.toString();
        currentOpp = '';
        previousInput = '';
        document.getElementById('display').innerHTML = previousInput + currentOpp + currentInput;
}