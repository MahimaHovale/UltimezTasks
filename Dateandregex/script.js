const output = document.getElementById('output');
const dateBtn = document.getElementById('dateBtn');
const regexBtn = document.getElementById('regexBtn');

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

// Function to run date examples
function runDateExamples() {
    clearOutput();
    console.group('Date Operations');
    log("=== Date Operations ===");
    
    const currentDate = new Date();
    log(`Current Date: ${currentDate}`);
    log(`Formatted Date: ${currentDate.toDateString()}`);
    
    const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
    log(`Formatted Date: ${formattedDate}`);
    
    // Access individual date components
    log("\nDate Components:");
    log(`Year: ${currentDate.getFullYear()}`);
    log(`Month: ${currentDate.getMonth() + 1}`); // Months are zero-based
    log(`Day: ${currentDate.getDate()}`);
    log(`Hours: ${currentDate.getHours()}`);
    log(`Minutes: ${currentDate.getMinutes()}`);
    log(`Seconds: ${currentDate.getSeconds()}`);
    
    const futureDate = new Date();
    futureDate.setDate(currentDate.getDate() + 7);
    log(`\nDate after 7 days: ${futureDate}`);
    
    // Compare two dates
    log("\nDate Comparison:");
    const date1 = new Date('2024-04-29');
    const date2 = new Date('2024-05-05');
    if (date1 < date2) {
        log("Date 1 is earlier than Date 2");
    } else if (date1 > date2) {
        log("Date 1 is later than Date 2");
    } else {
        log("Date 1 is the same as Date 2");
    }
    
    console.groupEnd();
}

// Function to run regex 
function runRegexExamples() {
    clearOutput();
    console.group('RegEx Operations');
    log("=== RegEx Operations ===");
    
    // Email Validation
    log("\nEmail Validation:");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emails = [
        "user@example.com",
        "invalid.email",
        "user@domain.co.in"
    ];
    emails.forEach(email => {
        log(`${email}: ${emailPattern.test(email)}`);
    });
    
    // Phone Number Validation
    log("\nPhone Number Validation:");
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    const phones = [
        "123-456-7890",
        "1234567890",
        "123-456-789"
    ];
    phones.forEach(phone => {
        log(`${phone}: ${phonePattern.test(phone)}`);
    });
    
    console.groupEnd();
}

// Add event listeners to buttons
dateBtn.addEventListener('click', runDateExamples);
regexBtn.addEventListener('click', runRegexExamples);

// Initial state - clear output
clearOutput();
log("Click a button above to run operations.");
