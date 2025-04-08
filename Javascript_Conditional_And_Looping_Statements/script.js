// Get DOM elements
const outputDiv = document.getElementById('output');
const conditionalBtn = document.getElementById('conditionalBtn');
const loopingBtn = document.getElementById('loopingBtn');

// Helper function to display results in both console and web page
function log(message) {
    console.log(message);
    outputDiv.textContent += message + '\n';
}

// Function to clear output
function clearOutput() {
    outputDiv.textContent = '';
    console.clear();
}

// Function to run conditional statements
function runConditionalStatements() {
    clearOutput();
    
    // Conditional Statements
    log("=== Conditional Statements ===");

    // 1. Simple if statement
    log("\n1. Simple if statement:");
    const age = 21;
    if (age >= 18) {
        log("User is an adult (21 years old)");
    }

    // 2. if-else statement
    log("\n2. if-else statement:");
    const isLoggedIn = false;
    if (isLoggedIn) {
        log("User is logged in");
    } else {
        log("User is not logged in");
    }

    // 3. if-else if-else statement
    log("\n3. if-else if-else statement:");
    const currentHour = 14;
    if (currentHour < 12) {
        log("Good morning!");
    } else if (currentHour < 18) {
        log("Good afternoon!");
    } else if (currentHour < 22) {
        log("Good evening!");
    } else {
        log("Good night!");
    }

    // 4. switch statement
    log("\n4. switch statement:");
    const foodCategory = "fruit";
    switch (foodCategory) {
        case "vegetable":
            log("Carrot, Broccoli, Spinach");
            break;
        case "fruit":
            log("Apple, Banana, Orange");
            break;
        case "dairy":
            log("Milk, Cheese, Yogurt");
            break;
        case "grain":
            log("Bread, Rice, Pasta");
            break;
        default:
            log("Unknown food category");
    }
}

// Function to run looping statements
function runLoopingStatements() {
    clearOutput();
    
    // Looping Statements
    log("=== Looping Statements ===");

    // 1. for loop
    log("\n1. for loop:");
    for (let i = 1; i <= 3; i++) {
        log(`Loop iteration: ${i}`);
    }

    // 2. while loop
    log("\n2. while loop:");
    let count = 0;
    while (count < 3) {
        log(`While count: ${count}`);
        count++;
    }

    // 3. do-while loop
    log("\n3. do-while loop:");
    let num = 1;
    do {
        log(`Number value: ${num}`);
        num++;
    } while (num <= 3);
}

// Add event listeners to buttons
conditionalBtn.addEventListener('click', runConditionalStatements);
loopingBtn.addEventListener('click', runLoopingStatements);

// Initial message
outputDiv.textContent = "Click a button above to run examples.";
