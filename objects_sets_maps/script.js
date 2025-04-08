const output = document.getElementById('output');
const runBtn = document.getElementById('runBtn');

// Function to clear output
function clearOutput() {
    output.textContent = '';
    console.clear();
}

// Function to add text to output
function log(text) {
    output.textContent += text + '\n';
}

//TASK 1: PERSON OBJECT
function runPersonObjectsTask() {
    clearOutput();
    console.group('Person Objects Task');
    
    log("=== Objects ===");
    
    // Define the Person class
    class Person {
        constructor(name, age, gender, occupation) {
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.occupation = occupation;
        }
    }
    
    // Create two instances of the Person class with different values
    const person1 = new Person('John Doe', 30, 'Male', 'Developer');
    const person2 = new Person('Jane Smith', 25, 'Female', 'Designer');
    
    // Display the details of both persons
    log("Person 1:");
    console.log('Person 1:', person1);
    log(JSON.stringify(person1));
    
    log("Person 2:");
    console.log('Person 2:', person2);
    log(JSON.stringify(person2));
    
    console.groupEnd();
}

//TASK 2: SETS OPERATIONS
function runSetsOperationsTask() {
    clearOutput();
    console.group('Sets Operations Task');
    
    log("=== Sets ===");
    
    // 1. Function to create a Set from an array (removing duplicates)
    function createUniqueSet(array) {
        return new Set(array);
    }
    
    // Test the createUniqueSet function
    const numbersWithDuplicates = [1, 2, 2, 3, 3, 4, 5, 5];
    const uniqueSet = createUniqueSet(numbersWithDuplicates);
    
    log("Original array:");
    console.log('Original array:', numbersWithDuplicates);
    log(`(${numbersWithDuplicates.length}) [${numbersWithDuplicates}]`);
    
    log("Unique numbers:");
    console.log('Unique numbers:', [...uniqueSet]);
    log(`(${uniqueSet.size}) [${[...uniqueSet]}]`);
    
    // 2. Set Operations
    // Create two sets
    const setA = new Set([1, 2, 3, 4]);
    const setB = new Set([3, 4, 5, 6]);
    
    log("\nSet A:");
    console.log('Set A:', setA);
    log(`(${setA.size}) [${[...setA]}]`);
    
    log("Set B:");
    console.log('Set B:', setB);
    log(`(${setB.size}) [${[...setB]}]`);
    
    // Union: Combine two sets
    function union(setA, setB) {
        return new Set([...setA, ...setB]);
    }
    
    const unionSet = union(setA, setB);
    log("Union:");
    console.log('Union:', unionSet);
    log(`(${unionSet.size}) [${[...unionSet]}]`);
    
    // Intersection: Find common elements between two sets
    function intersection(setA, setB) {
        return new Set([...setA].filter(element => setB.has(element)));
    }
    
    const intersectionSet = intersection(setA, setB);
    log("Intersection:");
    console.log('Intersection:', intersectionSet);
    log(`(${intersectionSet.size}) [${[...intersectionSet]}]`);
    
    // Difference: Elements in setA that are not in setB
    function difference(setA, setB) {
        return new Set([...setA].filter(element => !setB.has(element)));
    }
    
    const differenceSet = difference(setA, setB);
    log("Difference (A-B):");
    console.log('Difference (A-B):', differenceSet);
    log(`(${differenceSet.size}) [${[...differenceSet]}]`);
    
    // 3. Function to check if setA is a subset of setB
    function isSubset(setA, setB) {
        return [...setA].every(element => setB.has(element));
    }
    
    // Test the isSubset function
    const setC = new Set([1, 2]);
    log(`Is setA subset of setB: ${isSubset(setA, setB)}`);
    log(`Is setC subset of setA: ${isSubset(setC, setA)}`);
    
    console.groupEnd();
}

//TASK 3: MAPS OPERATIONS
function runMapsOperationsTask() {
    clearOutput();
    console.group('Maps Operations Task');
    
    log("=== Maps ===");
    
    // Create a new Map
    const userMap = new Map();
    
    // Add key-value pairs to the Map
    userMap.set('user1', {
        name: 'John',
        role: 'Admin'
    });
    
    userMap.set('user2', {
        name: 'Sarah',
        role: 'Editor'
    });
    
    // Display the initial Map
    log("Original Map:");
    console.log('Original Map:', userMap);
    log(JSON.stringify(Object.fromEntries(userMap)));
    
    // Accessing values
    log("\nGet user1:");
    console.log('Get user1:', userMap.get('user1'));
    log(JSON.stringify(userMap.get('user1')));
    
    // Updating values
    log("\nAfter updating user2:");
    userMap.set('user2', {
        name: 'Sarah',
        role: 'Admin'
    });
    console.log('Updated Map:', userMap);
    log(JSON.stringify(Object.fromEntries(userMap)));
    
    // Deleting an entry
    log("\nAfter deleting user1:");
    userMap.delete('user1');
    console.log('Map after deletion:', userMap);
    log(JSON.stringify(Object.fromEntries(userMap)));
    
    console.groupEnd();
}

// Function to run all tasks
function runAllTasks() {
    clearOutput();
    
    // Run Person Objects task
    log("\n===== PERSON OBJECTS =====\n");
    console.group('Person Objects Task');
    
    // Define the Person class
    class Person {
        constructor(name, age, gender, occupation) {
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.occupation = occupation;
        }
    }
    
    // Create two instances of the Person class with different values
    const person1 = new Person('John Doe', 30, 'Male', 'Developer');
    const person2 = new Person('Jane Smith', 25, 'Female', 'Designer');
    
    // Display the details of both persons
    log("Person 1:");
    console.log('Person 1:', person1);
    log(JSON.stringify(person1));
    
    log("\nPerson 2:");
    console.log('Person 2:', person2);
    log(JSON.stringify(person2));
    
    console.groupEnd();
    
    // Run Sets Operations task
    log("\n\n===== SETS OPERATIONS =====\n");
    console.group('Sets Operations Task');
    
    // 1. Function to create a Set from an array (removing duplicates)
    function createUniqueSet(array) {
        return new Set(array);
    }
    
    // Test the createUniqueSet function
    const numbersWithDuplicates = [1, 2, 2, 3, 3, 4, 5, 5];
    const uniqueSet = createUniqueSet(numbersWithDuplicates);
    
    log("Original array:");
    console.log('Original array:', numbersWithDuplicates);
    log(`(${numbersWithDuplicates.length}) [${numbersWithDuplicates}]`);
    
    log("\nUnique numbers:");
    console.log('Unique numbers:', [...uniqueSet]);
    log(`(${uniqueSet.size}) [${[...uniqueSet]}]`);
    
    // 2. Set Operations
    // Create two sets
    const setA = new Set([1, 2, 3, 4]);
    const setB = new Set([3, 4, 5, 6]);
    
    log("\nSet A:");
    console.log('Set A:', setA);
    log(`(${setA.size}) [${[...setA]}]`);
    
    log("Set B:");
    console.log('Set B:', setB);
    log(`(${setB.size}) [${[...setB]}]`);
    
    // Union: Combine two sets
    function union(setA, setB) {
        return new Set([...setA, ...setB]);
    }
    
    const unionSet = union(setA, setB);
    log("\nUnion:");
    console.log('Union:', unionSet);
    log(`(${unionSet.size}) [${[...unionSet]}]`);
    
    // Intersection: Find common elements between two sets
    function intersection(setA, setB) {
        return new Set([...setA].filter(element => setB.has(element)));
    }
    
    const intersectionSet = intersection(setA, setB);
    log("Intersection:");
    console.log('Intersection:', intersectionSet);
    log(`(${intersectionSet.size}) [${[...intersectionSet]}]`);
    
    // Difference: Elements in setA that are not in setB
    function difference(setA, setB) {
        return new Set([...setA].filter(element => !setB.has(element)));
    }
    
    const differenceSet = difference(setA, setB);
    log("Difference (A-B):");
    console.log('Difference (A-B):', differenceSet);
    log(`(${differenceSet.size}) [${[...differenceSet]}]`);
    
    // 3. Function to check if setA is a subset of setB
    function isSubset(setA, setB) {
        return [...setA].every(element => setB.has(element));
    }
    
    // Test the isSubset function
    const setC = new Set([1, 2]);
    log("\nIs setC subset of setA: " + isSubset(setC, setA));
    log("Is setA subset of setB: " + isSubset(setA, setB));
    
    console.groupEnd();
    
    // Run Maps Operations task
    log("\n\n===== MAPS OPERATIONS =====\n");
    console.group('Maps Operations Task');
    
    // Create a new Map
    const userMap = new Map();
    
    // Add key-value pairs to the Map
    userMap.set('user1', {
        name: 'John',
        role: 'Admin'
    });
    
    userMap.set('user2', {
        name: 'Sarah',
        role: 'Editor'
    });
    
    // Display the initial Map
    log("Original Map:");
    console.log('Original Map:', userMap);
    log(JSON.stringify(Object.fromEntries(userMap)));
    
    // Accessing values
    log("\nGet user1:");
    console.log('Get user1:', userMap.get('user1'));
    log(JSON.stringify(userMap.get('user1')));
    
    // Updating values
    log("\nAfter updating user2:");
    userMap.set('user2', {
        name: 'Sarah',
        role: 'Admin'
    });
    console.log('Updated Map:', userMap);
    log(JSON.stringify(Object.fromEntries(userMap)));
    
    // Deleting an entry
    log("\nAfter deleting user1:");
    userMap.delete('user1');
    console.log('Map after deletion:', userMap);
    log(JSON.stringify(Object.fromEntries(userMap)));
    
    console.groupEnd();
}

// Add event listener to the run button
runBtn.addEventListener('click', runAllTasks);

// Initial state - clear output
clearOutput();
log("Click the button above to run all tasks.");
