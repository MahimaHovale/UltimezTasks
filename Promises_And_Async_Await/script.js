// DOM elements
const output = document.getElementById('output');
const promiseBtn = document.getElementById('promiseBtn');
const asyncBtn = document.getElementById('asyncBtn');
const clearBtn = document.getElementById('clearBtn');

// Function to clear output
function clearOutput() {
    output.textContent = '';
    console.clear();
}

// Function to log output
function log(message) {
    output.textContent += message + '\n';
    console.log(message);
}

// Simulated API call   
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 42,
                message: "Data successfully fetched!",
                timestamp: new Date().toISOString()
            });
        }, 1500);
    });
}

// Promise-based implementation
function handlePromise() {
    log("Fetching data using Promise...\n");
    
    fetchData()
        .then(data => {
            log("Success! Received data:");
            log(JSON.stringify(data, null, 2));
        })
        .catch(error => {
            log(`Error: ${error.message}`);
        });
}

// Async/Await implementation
async function handleAsync() {
    log("Fetching data using Async/Await...\n");
    
    try {
        const data = await fetchData();
        log("Success! Received data:");
        log(JSON.stringify(data, null, 2));
    } catch (error) {
        log(`Error: ${error.message}`);
    }
}

// Event listeners
promiseBtn.addEventListener('click', handlePromise);
asyncBtn.addEventListener('click', handleAsync);
clearBtn.addEventListener('click', clearOutput);

// Initial state
clearOutput();
log("Click a button to fetch data using different methods.");