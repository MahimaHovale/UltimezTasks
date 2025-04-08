function reverseString(str) {
    return str.split('').reverse().join('');
}

const testCases = [
    "Hello World",
    "JavaScript Programming",
    "12345 67890",
    "Coding is fun!",
    "The quick brown fox",
    "Programming 101"
];

// Function to clear output
function clearOutput() {
    document.getElementById('output').textContent = '';
    console.clear();
}

// Function to log output to both console and output element
function log(message) {
    document.getElementById('output').textContent += message + '\n';
    console.log(message);
}

// Function to run tests and display results in console and webpage
function runTests() {
    clearOutput();
    console.group('String Reversal Tests');
    
    log("=== String Reversal Tests ===");
    log("");
    
    testCases.forEach(input => {
        const result = reverseString(input);
        log(`Original: "${input}"`);
        log(`Reversed: "${result}"`);
        log("------");
    });
    
    console.groupEnd();
}


