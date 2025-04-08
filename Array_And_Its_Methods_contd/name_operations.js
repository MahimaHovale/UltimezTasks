// 1. Initialize an array named names
let names = [" John", "Jane", "Doe", "Alice", "Bob"];
console.log("Initial names array:", names);

// 2. Print all the names in the array, each on a new line
console.log("\nNames in the array:");
names.forEach(name => console.log(name));

// 3. Add the name " Eve" to the end of the array
names.push(" Eve");
console.log("\nAfter adding Eve:", names);

// 4. Remove the name "Doe" from the array
names = names.filter(name => name !== "Doe");
console.log("\nAfter removing Doe:", names);

// 5. Sort the array in alphabetical order
names.sort();
console.log("\nAfter sorting alphabetically:", names);

// 6. Check if the name "Alice" exists in the array
if (names.includes("Alice")) {
    console.log("\nAlice is present");
} else {
    console.log("\nAlice is not present");
}

// 7. Convert all the names to uppercase and store them in a new array
const uppercaseNames = names.map(name => name.toUpperCase());

// 8. Print the uppercaseNames array to the console
console.log("\nUppercase names:", uppercaseNames);
