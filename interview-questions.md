# UNIT 2 ASSESSMENT: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. Tip: providing an example can help communicate your point if you struggle with the vocabulary.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

Type your initials here to confirm you read the instructions: MB

1. What is the difference between a parameter and an argument?

Your answer: The parameter is a placeholder for the argument. When creating a function or a class. You use a parameter to simulate the type of data that will be taken in later. The argument takes the place of the parameter when a function or class is being invoked.

Researched answer: Parameters act like a variable, given a name and set to equal an undefined value. That undefined value is defined when you pass an argument. The argument is the actual data or value being used. You can look at it like a rewritable local scope variable. Say (let parameter = argument). There are 2 types of parameters input parameters. The value that is passed into a function and ouput parameters. Output parameters are usually used to return more than one value. 

2. What is the difference between an object and a class?

Your answer: An object is a variable containing a set of key: value pairs. While they can be changed and added to. They are essentially just a type of data storage. A class is a reusable data storage container. Classes can create objects. Classes act like functions in a way that they can be reused and use parameters and take in arguments. They have similar syntax. However, objects are named using camelCase and classes are named using PascalCase.

Researched answer: Classes are what define an objects structure and behavior. They act like a template for an object. Classes define how an object acts and what it does. Classes also set what an object will look like. You can use getter and setter methods within the Class. To both retrieve or define an objects value. Objects are the most important data type within JavaScript. primitive datatypes can only contain one value where as objects can contain multiple different values of varying datatypes.

3. What is iteration?

Your answer: Iterations are like taking a list of things you need to the grocery store. Each time you iterate you are taking one of those items on your list and doing something to it. Then searching for the next item on the list and doing something to that. Until you've reached your stopping point. 

Researched answer: There are mulitple different methods to iterate through both objects and arrays. Iterations unlike a loop only run code once per item or element in an array or object. Iterations will only ever be infinite if you have an infinite amount of data. 

4. STRETCH: What is hoisting in JavaScript?

Answer: Hoisting is the action of a variable affecting a piece of logic before its been declared. For example using a a variables value on a line above where it is being declared. Or accessing the data being stored by the variable on a line before its declared. Lexical declarations such as const, class, and let cause behavioral changes to its local scope though may not provide any benefit due to throwing an error which could be viewd as non-hoisting. Because var is global it can be hoisted from anywhere in your code. There is another variable also called import that allows you to access the variables data before its declared but could also cause side effects before all the code has been evaluated.

## Looking Ahead: Terms for Next Unit

Research and define the following terms. Hint: use the syllabus!

1. React State: React State is a data structure that stores data inside of a react component. It utilizes a built in methods called a react hook that affects a components reusable features. It uses useState() as a means to define and update the value of the component. 

2. React Props: Props are a tool used to transfer a components behavior and data. Props stands for properties and acts like a one way flight sending data and behavior from a component to a nested one. Props typically utilize data from states. Acting like shared list. When the owner of the list updates it with new information. The lists recipient can see the changes on there end but cannot update it themselves. Props data is in the form of an object.

3. DOM events: Are essentially what happens when the user interacts with a software or webpage. If a user clicks on a button, or hovers the mouse pointer over a link. Those are DOM events. Every time the mouse moves or a letter is typed on a keyboard the DOM is listening for those events to occur than executing code based on the type of input.
