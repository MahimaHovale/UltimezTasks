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

// Function to run advanced array operations
function runAdvancedArrayOperations() {
    clearOutput();
    console.group('Name Array Operations');
    log("=== Name Array Operations ===\n");
    
    // 1. Initialize names array
    let names = ['John', 'Jane', 'Doe', 'Alice', 'Bob'];
    log("Initial names array: " + names.join(','));
    
    // 2. Print each name on a new line
    log("\nNames in the array:");
    names.forEach(name => log(name));
    
    // 3. Add a new name
    names.push('Eve');
    log("\nAfter adding Eve: " + names.join(','));
    
    // 4. Remove a specific name
    names = names.filter(name => name !== 'Doe');
    log("\nAfter removing Doe: " + names.join(','));
    
    // 5. Sort alphabetically
    names.sort();
    log("\nAfter sorting alphabetically: " + names.join(','));
    
    // 6. Check if a name exists
    if (names.includes('Alice')) {
        log("\nAlice is present");
    }
    
    // 7. Convert to uppercase
    const upperNames = names.map(name => name.toUpperCase());
    log("\nUppercase names: " + upperNames.join(','));
    
    console.groupEnd();
}

// Add event listener to button
runButton.addEventListener('click', runAdvancedArrayOperations);

// Initial state - clear output
clearOutput();
log("Click the button above to run array operations with names.");
