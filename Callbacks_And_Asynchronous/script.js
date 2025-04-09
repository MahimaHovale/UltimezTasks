// DOM elements
const output = document.getElementById('output');
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const addBtn = document.getElementById('addBtn');
const subtractBtn = document.getElementById('subtractBtn');
const multiplyBtn = document.getElementById('multiplyBtn');
const divideBtn = document.getElementById('divideBtn');
const clearBtn = document.getElementById('clearBtn');

// Toast notification function
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.display = 'block';
    
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}

// Calculate function that takes two numbers, an operation, and a callback
function calculate(num1, num2, operation, callback) {
    let result;
    
    switch(operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                callback(new Error('Cannot divide by zero'));
                return;
            }
            result = num1 / num2;
            break;
        default:
            callback(new Error('Invalid operation'));
            return;
    }
    
    callback(null, result);
}

// Function to clear output
function clearOutput() {
    output.textContent = '';
    console.clear();
    num1Input.value = '';
    num2Input.value = '';
}

// Function to log output
function log(message) {
    output.textContent += message + '\n';
    console.log(message);
}

// Function to handle calculation
function handleCalculation(operation) {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    
    if (isNaN(num1) || isNaN(num2)) {
        showToast("Please enter valid numbers in both fields");
        return;
    }
    
    calculate(num1, num2, operation, (err, result) => {
        if (err) {
            showToast(err.message);
        } else {
            let operationSymbol;
            switch(operation) {
                case 'add': operationSymbol = '+'; break;
                case 'subtract': operationSymbol = '-'; break;
                case 'multiply': operationSymbol = '×'; break;
                case 'divide': operationSymbol = '÷'; break;
            }
            log(`${num1} ${operationSymbol} ${num2} = ${result}`);
        }
    });
}

// Add event listeners to buttons
addBtn.addEventListener('click', () => handleCalculation('add'));
subtractBtn.addEventListener('click', () => handleCalculation('subtract'));
multiplyBtn.addEventListener('click', () => handleCalculation('multiply'));
divideBtn.addEventListener('click', () => handleCalculation('divide'));
clearBtn.addEventListener('click', clearOutput);

// Initial state
clearOutput();
log("Enter two numbers and click an operation button.");