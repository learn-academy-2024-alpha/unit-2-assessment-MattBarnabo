// UNIT 2 ASSESSMENT: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain WHY your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Alpha 2024"
console.log(cohort.split(" "))

// a) Your answer: this will log an array containing ["Alpha", "2024"]
// b) Verify and explain: This did log an array containing ["Alpha", "2024"]. .split(" ") changes a string into an array and the space inside the qoutation marks says to split at every space.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: This will log undefined
// b) Verify and explain: it logged undefined as there is no return in the function.

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: This will log an array containing [11,13,15]
// b) Verify and explain: This filters the array and if the value of the array is odd it will return that value in a new array.

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: This should log Javascript
// b) Verify and explain: it called the object myCodingSkills, taking in the languages key and pulling the element at index 0.

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Alpha"
    this.year = 2024
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: This should console log student: George, cohort: Alpha, year: 2024
// b) Verify and explain: It logged the class Learn{ student: 'George', cohort: 'Alpha', year: 2024}. When we set a new variable adding a new object to the class it took the argument of "George" and inserted it into the constructor. Which then puts it into this.student = "George". returning the remained of the key: value pairs following that.
