// UNIT 2 ASSESSMENT: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.


 describe("multiplied", () => {
   const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
 const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]
   it("returns all numbers in an array multpied by 3", () => {
     expect(multiplied(numbersArray1))
     expect(multiplied(numbersArray2))
   })
 })
// ReferenceError: multiplied is not defined



// b) Create the function that makes the test pass.


// Create a function called multpied that inputs an array of numbers
// Outputs an array with all of the numbers multpied by 3
 const multiplied = (arrayofNums) => {
  // Iterate through each value multiplying it by 3
  // Return the result
   return arrayofNums.map(value => value * 3)
   }
// PASS  ./code-challenges.test.js
// multiplied
// ✓ returns all numbers in an array multpied by 3 (1 ms)


// Explain your code:
// The test takes in 2 arrays returning if the result multiplied by 3 will pass.
// The function for the test takes in an array of numbers, then we return the parameter.map which will iterate through the array allowing us to return the value multiplied times 3.





// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.
 describe("divisibleByThree", () => {
   const object1 = { number: 15 }
// // Expected output: "15 is divisible by three"
 const object2 = { number: 0 }
// // Expected output: "0 is divisible by three"
 const object3 = { number: -7 }
// // Expected output: "-7 is not divisible by three"
   it("returns if the objects value is divisible by 3", () => {
     expect(divisibleByThree(object1))
     expect(divisibleByThree(object2))
     expect(divisibleByThree(object3))
   })
 })
// ReferenceError: divisibleByThree is not defined

// b) Create the function that makes the test pass.
//  Create a function called divisibleByThree that takes in an object 
//  Outputs if the objects value is divible by 3 or not
 const divisibleByThree = (object) => {
  //  return if the object.key modulo 3 stricly equals 0
   return object.key % 3 === 0
 }

// PASS  ./code-challenges.test.js
// divisibleByThree
//   ✓ returns if the objects value is divisible by 3 (1 ms)

// Explain your code:
// I created a test that checks to see if a function called divisibleByThree takes an object and returns whether the value is divisible by 3. Then I created the function called divisibleByThree, set the parameter to take an object and returned the object.key is divisble by 3 using the modulus and setting it strictly equal to zero.





// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.



// a) Create a test with expect statements for each of the variables provided.
 describe("allCapitalized", () => {
  const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
   // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
   const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
   // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
   it("returns an array with all the words capitalized", () => {
     expect(allCapitalized(randomNouns1))
     expect(allCapitalized(randomNouns2))
   })
 })
// ReferenceError: allCapitalized is not defined



// b) Create the function that makes the test pass.
// Create a function that takes in an array of words
// Outputs an array of words with all the words capitolized
const allCapitalized = (arrayOfWords) => {
  // Iterate value of the first character to uppercase
  // Add the remaining values of the element to the Capitilized first value 
  // Return the Array
  return arrayOfWords.map(value => value[0].toUpperCase() + value.slice(1))
}
// PASS  ./code-challenges.test.js
// allCapitalized
//     ✓ returns an array with all the words capitalized

// Explain your code:
// I created the test to check to see if a function called allCapialized  that takes an array of words and returns those words with the first letter capitalized. I created the function called allCapitalized. Set the parameter to arrayOfNumbers and have it returning the parameter using the .map built in function. Within dot map I set the value of the first character per element to be uppercased with the toUpperCase method. It returned only an array of the first characters capitalized. I tried a few different ways to get the function to return the whole word. Using .filter and .map, using .slice trying to set the end point to arrayOfWords.length, adding the values together and eventually settled on .slice. Setting the starting value to 1 and not setting an ending value added the remainder of the characters of each item to the capitalized first letter.
