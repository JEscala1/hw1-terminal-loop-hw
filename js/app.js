// Section 1
// Terms
// 1a. Interpolation - utilizing variables to assign a value in place of a string.
// const numOne = 15;
// const numTwo = 6;
// console.log(`First number is ${numOne} and second number is ${numTwo}.);
// 1b. concatenation - combining strings to generate a new single string.
// console.log("Hello" + "world.");
// 2. DRY - [D]on't [R]epeat [Y]ourself
// This is a good practice to create concise coding that can be easily referenced in later code.
// We have been utilizing the DRY concept in our work in Javascript where we can reference existing functions.

// Section 2
// Boolean expressions
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a != b);
console.log(c != d);
console.log('Name' == 'Name');
console.log(a != b != c);
console.log(a == a != d);
console.log(e == 'Kevin');
console.log(48 == '48');

// Section 3
// While loops

// Infinite loop?
// while (true) {
// 	console.log('Do not run this loop');
// }
// This While loop would run infinitely since the condition of true will remain true thus retaining the condition to run the While loop.

// Infinite loop II
// let runProgram = true;
// // Changed variable from const to let for this example.

// while (runProgram) {
// 	console.log('Do not run this loop');
// 	runProgram = false;
// }
// This While loop would not run infinitely since after this loop runs for the first time, it is coded to assign the variable of runProgram the boolean value of false.
// It will run once and then end running the While loop.

// Reading Code
// let letters = "A";
// let i = 0;

// while (i < 20) {
// 	letters += "A";
// 	i++;
// }

// console.log(letters);
// My conclustion would be that this While loop will print out the String "A" and add the numbers as Strings from 1 to 20 afterwards.
// The actual results were that the console had printed A 20 times in a single string.

//Section 4
// For loops
// For loops are intended for loops in which there is a numerically defined count condition that would complete the loop.
// While loops are intended for loops in which a specific condition is met for the loop to complete. This condition would be less guarenteed than a For loop.

// For loop I
for(let i = 0; i <= 999; i++) {
	console.log(i);
}

// For loop control statement
// 1. declaring the variable, establishing the initial value
// 2. defining the condition in which the For loop would cease running
// 3. establishing what should occur to the variable after each run of the For loop

// For loop in reverse
for(let i = 100; i >=0; i--) {
	console.log(i);
}

// More counting
let start = 1;
let finish = 10;

for(let i = start; i <= finish; i++) {
	console.log(`The value of i is: ${i} of ${finish}`);
}