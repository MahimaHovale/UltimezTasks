const output = document.getElementById('output');
const runButton = document.getElementById('runButton');

// Function to clear output
function clearOutput() {
    output.textContent = '';
    console.clear();
}

// Function to log output to both console and output element
function log(message) {
    output.textContent += message + '\n';
    console.log(message);
}

// Function to run array operations
function runArrayOperations() {
    clearOutput();
    console.group('Array Operations');
    log("=== Array Operations ===\n");
    
    // 1. Initialize an array named numbers
    let numbers = [10, 5, 8, 3, 12, 6];
    log("Initial array: " + numbers);
    
    // 2. Print the length of the array
    log("Array length: " + numbers.length);
    
    // 3. Add the number 7 to the end of the array
    numbers.push(7);
    log("After adding 7: " + numbers);
    
    // 4. Remove the first element of the array
    numbers.shift();
    log("After removing first element: " + numbers);
    
    // 5. Sort the array in ascending order
    numbers.sort((a, b) => a - b);
    log("After sorting in ascending order: " + numbers);
    
    // 6. Reverse the array
    numbers.reverse();
    log("After reversing: " + numbers);
    
    // 7. Check if the number 8 exists in the array
    if (numbers.includes(8)) {
        log("Number 8 exists");
    } else {
        log("Number 8 doesn't exist");
    }
    
    // 8. Find the index of the number 12 in the array
    const indexOfTwelve = numbers.indexOf(12);
    log("Index of number 12: " + indexOfTwelve);
    
    // 9. Create a new array by doubling each number
    const doubledNumbers = numbers.map(num => num * 2);
    
    // 10. Print the doubled numbers array
    log("Doubled numbers: " + doubledNumbers);
    
    console.groupEnd();
}

// Add event listener to button
runButton.addEventListener('click', runArrayOperations);

// Initial state - clear output
clearOutput();
log("Click the button above to run array operations.");
