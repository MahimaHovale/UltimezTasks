// JavaScript program to perform various operations on an array of numbers

// 1. Initialize an array named numbers
let numbers = [10, 5, 8, 3, 12, 6];

// 2. Print the length of the array
console.log("Array length:", numbers.length);

// 3. Add the number 7 to the end of the array
numbers.push(7);
console.log("After adding 7:", numbers);

// 4. Remove the first element of the array
numbers.shift();
console.log("After removing first element:", numbers);

// 5. Sort the array in ascending order
numbers.sort((a, b) => a - b);
console.log("After sorting in ascending order:", numbers);

// 6. Reverse the array
numbers.reverse();
console.log("After reversing:", numbers);

// 7. Check if the number 8 exists in the array
if (numbers.includes(8)) {
  console.log("Number 8 exists");
} else {
  console.log("Number 8 doesn't exist");
}

// 8. Find the index of the number 12 in the array
const indexOfTwelve = numbers.indexOf(12);
console.log("Index of number 12:", indexOfTwelve);

// 9. Create a new array by doubling each number
const doubledNumbers = numbers.map(num => num * 2);

// 10. Print the doubled numbers array
console.log("Doubled numbers:", doubledNumbers);
