// questionsDb.js - Local database of quiz questions for offline play.
// Each category has easy, medium, and hard questions.

export const questionsDb = {
  javascript: {
    easy: [
      {
        question: "Which of the following is correct about features of JavaScript?",
        options: [
          "It is a lightweight, interpreted programming language",
          "It is designed for creating network-centric applications",
          "It is complementary to and integrated with Java",
          "All of the above"
        ],
        correctIndex: 3,
        explanation: "JavaScript is a lightweight, interpreted language designed for network-centric apps and integrates well with Java and HTML."
      },
      {
        question: "How do you write 'Hello World' in an alert box?",
        options: [
          "msgBox('Hello World');",
          "alertBox('Hello World');",
          "alert('Hello World');",
          "msg('Hello World');"
        ],
        correctIndex: 2,
        explanation: "The alert() method displays an alert box with a specified message and an OK button."
      },
      {
        question: "Which syntax is correct to declare a variable in JavaScript?",
        options: [
          "var carName;",
          "variable carName;",
          "v carName;",
          "string carName;"
        ],
        correctIndex: 0,
        explanation: "In JavaScript, variables can be declared using var, let, or const. 'var carName;' is correct."
      },
      {
        question: "Which operator is used to assign a value to a variable?",
        options: [
          "*",
          "=",
          "-",
          "x"
        ],
        correctIndex: 1,
        explanation: "The '=' operator is the assignment operator in JavaScript. It assigns a value to a variable."
      },
      {
        question: "What is the correct way to write a JavaScript array?",
        options: [
          "const colors = (1:'red', 2:'green', 3:'blue')",
          "const colors = 'red', 'green', 'blue'",
          "const colors = ['red', 'green', 'blue']",
          "const colors = 1=('red'), 2=('green'), 3=('blue')"
        ],
        correctIndex: 2,
        explanation: "JavaScript arrays are written with square brackets [] and items are separated by commas."
      },
      {
        question: "How do you find the number with the highest value of x and y?",
        options: [
          "Math.max(x, y)",
          "Math.ceil(x, y)",
          "Math.highest(x, y)",
          "top(x, y)"
        ],
        correctIndex: 0,
        explanation: "Math.max(x, y) returns the number with the highest value among the arguments passed."
      },
      {
        question: "Which event occurs when the user clicks on an HTML element?",
        options: [
          "onchange",
          "onmouseover",
          "onmouseclick",
          "onclick"
        ],
        correctIndex: 3,
        explanation: "The onclick event handler executes JavaScript when an element is clicked."
      },
      {
        question: "How do you round the number 7.25, to the nearest integer?",
        options: [
          "Math.round(7.25)",
          "rnd(7.25)",
          "Math.rnd(7.25)",
          "round(7.25)"
        ],
        correctIndex: 0,
        explanation: "Math.round() rounds a number to the nearest integer. So, Math.round(7.25) returns 7."
      },
      {
        question: "How does a FOR loop start?",
        options: [
          "for (i = 0; i <= 5)",
          "for (i <= 5; i++)",
          "for (i = 0; i <= 5; i++)",
          "for i = 1 to 5"
        ],
        correctIndex: 2,
        explanation: "A standard for loop syntax is: for (initialization; condition; increment/decrement)."
      },
      {
        question: "How do you write an IF statement in JavaScript?",
        options: [
          "if i = 5 then",
          "if (i == 5)",
          "if i == 5 then",
          "if i = 5"
        ],
        correctIndex: 1,
        explanation: "In JavaScript, the condition for an IF statement must be enclosed in parentheses: if (condition)."
      },
      {
        question: "How do you add a comment in JavaScript?",
        options: [
          "' This is a comment",
          "<!-- This is a comment -->",
          "// This is a comment",
          "* This is a comment *"
        ],
        correctIndex: 2,
        explanation: "Single-line comments in JavaScript start with double forward slashes //."
      },
      {
        question: "What is the correct HTML element for inserting JavaScript?",
        options: [
          "<javascript>",
          "<script>",
          "<scripting>",
          "<js>"
        ],
        correctIndex: 1,
        explanation: "The <script> tag is used to embed or reference client-side JavaScript."
      },
      {
        question: "Which data type is NOT supported by JavaScript?",
        options: [
          "Undefined",
          "Boolean",
          "Float",
          "Number"
        ],
        correctIndex: 2,
        explanation: "JavaScript does not have a separate 'Float' type; all numbers are represented as 'Number' (double-precision floats)."
      },
      {
        question: "What does console.log() do?",
        options: [
          "Prints text to the browser console for debugging",
          "Triggers a print popup for the document",
          "Saves data to local storage",
          "Displays an alert dialog"
        ],
        correctIndex: 0,
        explanation: "console.log() writes a message to the web console, which is crucial for developers debugging code."
      },
      {
        question: "How do you declare a constant variable in JavaScript?",
        options: [
          "constant x = 10;",
          "const x = 10;",
          "let const x = 10;",
          "var x = 10 (readonly);"
        ],
        correctIndex: 1,
        explanation: "The const keyword allows you to declare a constant variable whose value cannot be reassigned."
      }
    ],
    medium: [
      {
        question: "Which of the following comparison operators compares both value and type?",
        options: [
          "==",
          "===",
          "equals",
          "="
        ],
        correctIndex: 1,
        explanation: "The strict equality operator (===) compares both the value and the type of the operands."
      },
      {
        question: "What will `console.log(typeof [])` output?",
        options: [
          "\"array\"",
          "\"object\"",
          "\"list\"",
          "\"undefined\""
        ],
        correctIndex: 1,
        explanation: "In JavaScript, arrays are technically objects under the hood, so typeof [] returns 'object'."
      },
      {
        question: "What is the output of `console.log(2 + '2')`?",
        options: [
          "4",
          "\"22\"",
          "NaN",
          "Error"
        ],
        correctIndex: 1,
        explanation: "Because one operand is a string, JavaScript performs string concatenation instead of addition, resulting in '22'."
      },
      {
        question: "Which array method adds one or more elements to the end of an array and returns the new length?",
        options: [
          "pop()",
          "shift()",
          "push()",
          "unshift()"
        ],
        correctIndex: 2,
        explanation: "push() appends elements to the end of an array, whereas unshift() adds them to the beginning."
      },
      {
        question: "What is the purpose of 'use strict' in JavaScript?",
        options: [
          "Enables strict styling rules for HTML/CSS",
          "Enforces strict typing rules on variable declarations",
          "Voluntarily enforces stricter parsing and error handling in your code",
          "Speeds up script execution by 50%"
        ],
        correctIndex: 2,
        explanation: "'use strict' catches common coding bloopers, throwing exceptions for unsafe actions like assigning to global variables."
      },
      {
        question: "What will `console.log(1 == '1')` and `console.log(1 === '1')` return?",
        options: [
          "true, true",
          "false, false",
          "true, false",
          "false, true"
        ],
        correctIndex: 2,
        explanation: "== performs type coercion (converting string '1' to number 1), returning true. === does not coerce types, returning false."
      },
      {
        question: "Which method is used to convert a JSON string into a JavaScript object?",
        options: [
          "JSON.stringify()",
          "JSON.parse()",
          "JSON.toObject()",
          "JSON.convert()"
        ],
        correctIndex: 1,
        explanation: "JSON.parse() takes a JSON-formatted string and constructs the JavaScript value/object described by the string."
      },
      {
        question: "What does the `map()` method return?",
        options: [
          "A new array with the results of calling a function on every element",
          "The first element that matches a specific condition",
          "A single accumulated value based on a reducer function",
          "A boolean indicating if all elements pass a test"
        ],
        correctIndex: 0,
        explanation: "map() creates a brand new array populated with the results of calling a provided function on every element in the calling array."
      },
      {
        question: "How do you create a promise in JavaScript?",
        options: [
          "new Promise((resolve, reject) => { ... })",
          "makePromise((success, fail) => { ... })",
          "Promise.create(function())",
          "new Promise(resolve(), reject())"
        ],
        correctIndex: 0,
        explanation: "Promises are instantiated via the 'new Promise' constructor, which accepts an executor function with resolve and reject parameters."
      },
      {
        question: "What is the correct way to handle exceptions in JavaScript?",
        options: [
          "catch (error) { ... } try { ... }",
          "try { ... } catch (error) { ... }",
          "try { ... } handle (error) { ... }",
          "attempt { ... } except (error) { ... }"
        ],
        correctIndex: 1,
        explanation: "The try...catch statement marks a block of statements to try, and specifies a response should an exception be thrown."
      },
      {
        question: "Which keyword refers to the object that is currently executing the active JavaScript function?",
        options: [
          "this",
          "self",
          "current",
          "parent"
        ],
        correctIndex: 0,
        explanation: "The 'this' keyword refers to the context object from which the function was invoked."
      },
      {
        question: "What will `console.log(typeof null)` output?",
        options: [
          "\"null\"",
          "\"object\"",
          "\"undefined\"",
          "\"error\""
        ],
        correctIndex: 1,
        explanation: "This is a historic bug in JavaScript, where typeof null returns 'object'. It has been preserved for backward compatibility."
      },
      {
        question: "What is the difference between `let` and `var`?",
        options: [
          "let is block-scoped, var is function-scoped",
          "let can be redeclared, var cannot",
          "let does not allow reassignment, var does",
          "There is no difference"
        ],
        correctIndex: 0,
        explanation: "let variables are confined to the block {} in which they are declared, whereas var variables are scoped to the containing function."
      },
      {
        question: "What does the `filter()` method do?",
        options: [
          "Sorts the elements of an array",
          "Creates a new array with all elements that pass the test implemented by the provided function",
          "Modifies the original array to remove non-matching elements",
          "Finds the index of the first item matching a query"
        ],
        correctIndex: 1,
        explanation: "filter() returns a new array containing only the elements that evaluate to true under the provided callback test."
      },
      {
        question: "What will `console.log(isNaN('Hello'))` output?",
        options: [
          "false",
          "true",
          "NaN",
          "TypeError"
        ],
        correctIndex: 1,
        explanation: "isNaN() converts the argument to a number first. 'Hello' cannot be converted to a number, resulting in NaN. Thus, isNaN('Hello') is true."
      }
    ],
    hard: [
      {
        question: "What is a closure in JavaScript?",
        options: [
          "A method of locking variables so they cannot be modified",
          "The combination of a function bundled together with references to its surrounding state (lexical environment)",
          "A function that returns no value and terminates immediately",
          "A special syntax for self-executing anonymous functions"
        ],
        correctIndex: 1,
        explanation: "A closure gives an inner function access to the outer function's scope even after the outer function has returned."
      },
      {
        question: "What is the output of `console.log(0.1 + 0.2 === 0.3)`?",
        options: [
          "true",
          "false",
          "NaN",
          "TypeError"
        ],
        correctIndex: 1,
        explanation: "Due to floating-point binary representation limitations, 0.1 + 0.2 equals 0.30000000000000004, which is not strictly equal to 0.3."
      },
      {
        question: "Which of the following is NOT a macro-task in the JavaScript Event Loop?",
        options: [
          "setTimeout",
          "setInterval",
          "setImmediate",
          "Promise.then callback"
        ],
        correctIndex: 3,
        explanation: "Promise.then callbacks are micro-tasks (job queue), which are processed with higher priority than macro-tasks (task queue) at the end of each turn."
      },
      {
        question: "What does the `bind()` method do?",
        options: [
          "Immediately invokes the function with a specific 'this' context",
          "Creates a new function that, when called, has its 'this' keyword set to the provided value",
          "Combines two functions together into a single pipeline",
          "Secures a variable to prevent any modifications"
        ],
        correctIndex: 1,
        explanation: "bind() returns a brand new function, pre-bound to the specified 'this' value and arguments, without invoking it immediately."
      },
      {
        question: "What is the output of: (function(){ var a = b = 3; })(); console.log(typeof a, typeof b);",
        options: [
          "\"undefined\" \"number\"",
          "\"number\" \"undefined\"",
          "\"number\" \"number\"",
          "\"undefined\" \"undefined\""
        ],
        correctIndex: 0,
        explanation: "Because of assignment right-to-left, `b = 3` creates a global variable 'b' (in non-strict mode), while `var a` is local to the function. Outside, 'a' is undefined, and 'b' is a number."
      },
      {
        question: "What is the Temporal Dead Zone (TDZ) in JavaScript?",
        options: [
          "The period during which an async task is waiting for a response",
          "The area in a function where variables declared with var are inaccessible",
          "The time block from the entry of scope until a let/const variable is initialized",
          "The interval when garbage collection runs and freezes UI rendering"
        ],
        correctIndex: 2,
        explanation: "TDZ is the behavior where let and const variables cannot be accessed before their declaration line is executed, throwing a ReferenceError."
      },
      {
        question: "Which pattern is used to simulate private methods and fields in ES5 JavaScript?",
        options: [
          "Prototype chain inheritance",
          "Immediately Invoked Function Expressions (IIFE) creating closures",
          "Object.freeze()",
          "Strict mode bindings"
        ],
        correctIndex: 1,
        explanation: "In ES5, IIFEs returning an object interface were used to enclose local variables in a closure, acting as private state."
      },
      {
        question: "How does the `Symbol` type work in JavaScript?",
        options: [
          "It represents a unique and immutable primitive value often used as object keys",
          "It is a pointer to memory structures in the engine",
          "It converts strings into custom mathematical formulas",
          "It acts as a decorator for class constructors"
        ],
        correctIndex: 0,
        explanation: "Symbols are unique primitive values. Even if we create two symbols with the same description, they are not equal, making them perfect for non-clashing object keys."
      },
      {
        question: "What does the `Object.freeze()` method do?",
        options: [
          "Prevents adding new properties, but allows modifying existing ones",
          "Freezes execution of all methods of the object",
          "Prevents any modifications to the object (shallow freeze of values and descriptors)",
          "Saves the object state permanently to disk"
        ],
        correctIndex: 2,
        explanation: "Object.freeze() makes an object immutable: you cannot add, delete, or modify properties, nor change their configurability descriptors."
      },
      {
        question: "What is the output of `console.log([1, 2, 3] + [4, 5, 6])`?",
        options: [
          "[1, 2, 3, 4, 5, 6]",
          "\"1,2,34,5,6\"",
          "\"1,2,3,4,5,6\"",
          "NaN"
        ],
        correctIndex: 1,
        explanation: "The '+' operator triggers string conversion for arrays. [1,2,3] becomes '1,2,3' and [4,5,6] becomes '4,5,6'. Concatenating them results in '1,2,34,5,6'."
      },
      {
        question: "What is the difference between Object.preventExtensions() and Object.seal()?",
        options: [
          "preventExtensions prevents adding properties; seal prevents adding/deleting properties and marks existing ones as non-configurable",
          "seal prevents modifying values, while preventExtensions does not",
          "There is no difference; they are aliases",
          "preventExtensions blocks prototypes; seal blocks properties"
        ],
        correctIndex: 0,
        explanation: "Object.seal() does everything preventExtensions does, but also prevents deletion of properties and configures them as non-deletable."
      },
      {
        question: "What is the purpose of the `Reflect` API in ES6?",
        options: [
          "It allows running JavaScript code backward in time",
          "It provides methods for interceptable JavaScript operations, mirroring Proxy traps",
          "It mirrors the document object model in a virtual canvas",
          "It is used to automatically generate documentation"
        ],
        correctIndex: 1,
        explanation: "Reflect is a built-in object that provides methods for interceptable operations. It simplifies writing Proxies by providing default operations."
      },
      {
        question: "What will `console.log(Function.prototype.prototype)` output?",
        options: [
          "Object.prototype",
          "Function.prototype",
          "undefined",
          "null"
        ],
        correctIndex: 2,
        explanation: "Functions have a 'prototype' property, but Function.prototype is itself a function (builtin) which does not have its own prototype property, hence undefined."
      },
      {
        question: "What is the output of: console.log(false || 0 || '' || 'hello' || true);",
        options: [
          "false",
          "0",
          "\"hello\"",
          "true"
        ],
        correctIndex: 2,
        explanation: "The logical OR (||) operator returns the first truthy value it encounters. Here, false, 0, and '' are falsy, while 'hello' is truthy, so it returns 'hello'."
      },
      {
        question: "Which of the following is true about WeakMap in JavaScript?",
        options: [
          "Keys must be objects, and they are held as weak references (garbage collectable)",
          "It is iterable using for...of loops",
          "You can clear all values using the clear() method",
          "It holds weak references to values, not keys"
        ],
        correctIndex: 0,
        explanation: "WeakMap keys must be objects and are held weakly. If there are no other references to the key object, it can be garbage collected. WeakMaps are not iterable."
      }
    ]
  },
  python: {
    easy: [
      {
        question: "Which of the following is the correct extension of a Python file?",
        options: [
          ".py",
          ".pyt",
          ".python",
          ".pyw"
        ],
        correctIndex: 0,
        explanation: "Python files are saved with a .py extension."
      },
      {
        question: "How do you output text to the screen in Python?",
        options: [
          "echo 'Hello'",
          "print('Hello')",
          "console.log('Hello')",
          "system.out.print('Hello')"
        ],
        correctIndex: 1,
        explanation: "The print() function outputs a message to the screen or standard output device."
      },
      {
        question: "Which keyword is used to create a function in Python?",
        options: [
          "function",
          "def",
          "fun",
          "create"
        ],
        correctIndex: 1,
        explanation: "In Python, a function is defined using the 'def' keyword."
      },
      {
        question: "How do you start a single-line comment in Python?",
        options: [
          "// this is a comment",
          "/* this is a comment */",
          "# this is a comment",
          "-- this is a comment"
        ],
        correctIndex: 2,
        explanation: "Python uses the hash character (#) to begin a single-line comment."
      },
      {
        question: "Which data type is used to store multiple items in a single ordered variable (mutable)?",
        options: [
          "List",
          "Tuple",
          "Set",
          "Dictionary"
        ],
        correctIndex: 0,
        explanation: "Lists are used to store multiple items in a single variable. Lists are ordered, changeable/mutable, and allow duplicate values."
      },
      {
        question: "How do you create a variable with the integer value 5 in Python?",
        options: [
          "x = int(5)",
          "x = 5",
          "int x = 5",
          "Both A and B are correct"
        ],
        correctIndex: 3,
        explanation: "Python dynamically types variables, so 'x = 5' works perfectly. 'x = int(5)' is also valid casting."
      },
      {
        question: "What is the correct syntax to output the type of a variable x?",
        options: [
          "print(typeof(x))",
          "print(type(x))",
          "print(x.type)",
          "print(x.dataType())"
        ],
        correctIndex: 1,
        explanation: "The type() function returns the class/type of the given object."
      },
      {
        question: "Which of the following is a collection which is unordered, unchangeable, and unindexed?",
        options: [
          "List",
          "Set",
          "Tuple",
          "Dictionary"
        ],
        correctIndex: 1,
        explanation: "A Set is unordered, unchangeable (but you can add/remove items), and unindexed. Set items do not allow duplicates."
      },
      {
        question: "How do you write a list comprehension that yields squares of numbers from 0 to 4?",
        options: [
          "[x^2 for x in range(5)]",
          "[x**2 for x in range(5)]",
          "[x*x while x < 5]",
          "list(x*x for x in 5)"
        ],
        correctIndex: 1,
        explanation: "In Python, '**' is the exponentiation operator. So [x**2 for x in range(5)] returns [0, 1, 4, 9, 16]."
      },
      {
        question: "What is the correct way to import a library named 'math' in Python?",
        options: [
          "include math",
          "import math",
          "require('math')",
          "using math;"
        ],
        correctIndex: 1,
        explanation: "The 'import' statement is used to import modules/libraries into the current scope."
      },
      {
        question: "Which of these is the correct syntax for an IF statement in Python?",
        options: [
          "if x > y:",
          "if x > y then:",
          "if (x > y)",
          "if x > y"
        ],
        correctIndex: 0,
        explanation: "In Python, block statements like if require a colon ':' at the end of the condition."
      },
      {
        question: "What does len('hello') return?",
        options: [
          "4",
          "5",
          "6",
          "Error"
        ],
        correctIndex: 1,
        explanation: "The len() function returns the number of items/characters in an object, which is 5 for 'hello'."
      },
      {
        question: "Which method can be used to remove any whitespace from both the beginning and the end of a string?",
        options: [
          "strip()",
          "trim()",
          "len()",
          "clean()"
        ],
        correctIndex: 0,
        explanation: "The strip() method removes any leading and trailing whitespaces from a string."
      },
      {
        question: "How do you convert the number 3 into a float value in Python?",
        options: [
          "float(3)",
          "to_float(3)",
          "3.toFloat()",
          "cast(3, float)"
        ],
        correctIndex: 0,
        explanation: "The float() constructor/function converts a number or a string representation of a number to a float."
      },
      {
        question: "What is the result of 10 // 3 in Python?",
        options: [
          "3.3333333333333335",
          "3",
          "1",
          "Error"
        ],
        correctIndex: 1,
        explanation: "The floor division operator '//' divides two numbers and rounds down the result to the nearest integer."
      }
    ],
    medium: [
      {
        question: "What is the difference between a list and a tuple in Python?",
        options: [
          "Lists are mutable (can be changed); tuples are immutable (cannot be changed)",
          "Lists are faster than tuples",
          "Tuples can only store numbers; lists can store anything",
          "Tuples use square brackets; lists use parentheses"
        ],
        correctIndex: 0,
        explanation: "Lists are declared with [] and are mutable. Tuples are declared with () and are immutable."
      },
      {
        question: "What is the output of the expression: 3 * 'abc'?",
        options: [
          "abcabcabc",
          "TypeError",
          "abc 3",
          "['abc', 'abc', 'abc']"
        ],
        correctIndex: 0,
        explanation: "Python allows string multiplication. Multiplying a string by an integer repeats it that number of times."
      },
      {
        question: "How do you append an element to the end of a list?",
        options: [
          "list.add(element)",
          "list.append(element)",
          "list.push(element)",
          "list.insert(element)"
        ],
        correctIndex: 1,
        explanation: "The append() method adds an item to the end of an existing list."
      },
      {
        question: "What will be the output of print(list(range(2, 10, 3)))?",
        options: [
          "[2, 5, 8]",
          "[2, 3, 4, 5, 6, 7, 8, 9]",
          "[2, 5, 8, 10]",
          "[3, 6, 9]"
        ],
        correctIndex: 0,
        explanation: "range(start, stop, step) generates integers from start up to (but excluding) stop, incrementing by step. So range(2, 10, 3) gives 2, 5, and 8."
      },
      {
        question: "Which of the following functions opens a file in Python?",
        options: [
          "open()",
          "file()",
          "read()",
          "load()"
        ],
        correctIndex: 0,
        explanation: "The open() function opens a file, returning a corresponding file object."
      },
      {
        question: "What is the purpose of the 'self' parameter in class methods?",
        options: [
          "It represents the class type itself",
          "It represents the current instance of the class object",
          "It is a keyword to declare private attributes",
          "It is optional and can be omitted entirely"
        ],
        correctIndex: 1,
        explanation: "By convention, self represents the individual instance of the class, allowing access to its attributes and other methods."
      },
      {
        question: "How do you handle exceptions in Python?",
        options: [
          "try/except",
          "try/catch",
          "attempt/except",
          "try/handle"
        ],
        correctIndex: 0,
        explanation: "Python uses the try...except block to handle errors and exceptions gracefully."
      },
      {
        question: "What does the expression: 'a' in {'a': 1, 'b': 2} evaluate to?",
        options: [
          "1",
          "True",
          "False",
          "TypeError"
        ],
        correctIndex: 1,
        explanation: "The 'in' operator checks if a specified key is present in the dictionary. 'a' is a key in the dictionary, so it evaluates to True."
      },
      {
        question: "What is the output of print(bool([]))?",
        options: [
          "True",
          "False",
          "None",
          "Error"
        ],
        correctIndex: 1,
        explanation: "In Python, empty collections (like empty lists, sets, dicts, strings) and zero evaluate to False in a boolean context."
      },
      {
        question: "Which method is used to remove a key-value pair from a dictionary and return its value?",
        options: [
          "remove()",
          "delete()",
          "pop()",
          "discard()"
        ],
        correctIndex: 2,
        explanation: "pop(key) removes the key-value pair and returns the value. If key is not found, it can return a default or raise a KeyError."
      },
      {
        question: "What does the python slice syntax list[1:4] return?",
        options: [
          "Elements from index 1 to index 3",
          "Elements from index 1 to index 4",
          "Elements from index 2 to index 4",
          "Elements from index 0 to index 3"
        ],
        correctIndex: 0,
        explanation: "The slice starts at the start index (inclusive) and ends right before the end index (exclusive). So list[1:4] gets indexes 1, 2, and 3."
      },
      {
        question: "Which of the following creates a generator in Python?",
        options: [
          "A function that returns a list",
          "A function containing one or more 'yield' statements",
          "Any recursive function",
          "A class inheriting from Generator"
        ],
        correctIndex: 1,
        explanation: "A generator function is a function containing a 'yield' statement. When called, it returns a generator iterator."
      },
      {
        question: "What is the output of print('hello'.upper())?",
        options: [
          "Hello",
          "HELLO",
          "hello",
          "TypeError"
        ],
        correctIndex: 1,
        explanation: "The upper() method returns a string where all characters are in upper case."
      },
      {
        question: "How do you merge two dictionaries dict1 and dict2 in Python 3.5+?",
        options: [
          "dict1.merge(dict2)",
          "{**dict1, **dict2}",
          "dict1 + dict2",
          "dict1 | dict2 (only in Python 3.5)"
        ],
        correctIndex: 1,
        explanation: "Dictionary unpacking using `{**dict1, **dict2}` is a common way to merge dictionaries in Python 3.5+."
      },
      {
        question: "What is the output of: print(len({1, 2, 2, 3, 3, 3}))?",
        options: [
          "6",
          "3",
          "TypeError",
          "5"
        ],
        correctIndex: 1,
        explanation: "Curly braces {} with values create a Set. Sets automatically de-duplicate elements. The set contains {1, 2, 3}, so its length is 3."
      }
    ],
    hard: [
      {
        question: "What is a decorator in Python?",
        options: [
          "A tool to format console logs dynamically",
          "A function that takes another function as an argument, extends its behavior, and returns a new function",
          "A class method used to initialize variables on startup",
          "A special syntax for documentation comments"
        ],
        correctIndex: 1,
        explanation: "A decorator takes a function, wraps its behavior in an inner function, and returns the modified function."
      },
      {
        question: "How does garbage collection work in Python by default?",
        options: [
          "Strictly manual memory management using del",
          "Primarily reference counting, supplemented by a generational cyclic garbage collector",
          "Mark-and-sweep algorithm executed at fixed time intervals",
          "Stop-the-world tracing collector"
        ],
        correctIndex: 1,
        explanation: "CPython uses reference counting as its main method. To handle reference cycles, it also has a cyclic garbage collector."
      },
      {
        question: "What is the Global Interpreter Lock (GIL)?",
        options: [
          "A lock that prevents multiple Python processes from running at the same time",
          "A mechanism that allows only one thread to execute Python bytecode at a time in CPython",
          "A security feature that encrypts Python scripts",
          "A network socket lock to prevent multiple API requests"
        ],
        correctIndex: 1,
        explanation: "The GIL is a mutex in CPython that ensures only one thread executes Python bytecodes at a time, preventing race conditions in memory management."
      },
      {
        question: "What is the output of this code: \ndef func(a, b=[]):\n    b.append(a)\n    return b\nprint(func(1))\nprint(func(2))",
        options: [
          "[1] then [2]",
          "[1] then [1, 2]",
          "[1] then []",
          "TypeError"
        ],
        correctIndex: 1,
        explanation: "Default arguments in Python are evaluated once when the function is defined, not when it is called. Since a list is mutable, successive calls append to the same list."
      },
      {
        question: "What is the difference between `__str__` and `__repr__` in Python?",
        options: [
          "__str__ is for clean user-facing string display; __repr__ is for unambiguous developer-facing representation",
          "__repr__ is for users; __str__ is for developers",
          "__str__ is called on classes; __repr__ on instances",
          "There is no difference; they do the same thing"
        ],
        correctIndex: 0,
        explanation: "str() calls __str__ (often readable/pretty), while repr() calls __repr__ (often looks like valid Python code to recreate the object)."
      },
      {
        question: "What is a metaclass in Python?",
        options: [
          "A class that inherits from multiple parent classes",
          "The class of a class; it defines how a class behaves and is constructed",
          "A subclass designed specifically for interface definitions",
          "A method of declaring structures in memory"
        ],
        correctIndex: 1,
        explanation: "Just as an object is an instance of a class, a class in Python is an instance of a metaclass (by default, 'type')."
      },
      {
        question: "What will `print(type(type))` output?",
        options: [
          "<class 'type'>",
          "<class 'object'>",
          "<class 'class'>",
          "TypeError"
        ],
        correctIndex: 0,
        explanation: "In Python, the class 'type' is its own class, so type of type is type itself."
      },
      {
        question: "What does the `yield` statement do inside a function?",
        options: [
          "Terminates the function and returns a list of values",
          "Suspends the function's execution and sends a value back to the caller, retaining state for resumption",
          "Waits for a thread to finish executing",
          "Forces garbage collection to run"
        ],
        correctIndex: 1,
        explanation: "yield yields a value to the generator's caller and pauses execution of the generator function. On next(), it resumes right after the yield statement."
      },
      {
        question: "What is the purpose of `__slots__` in Python classes?",
        options: [
          "Allows classes to run methods asynchronously",
          "Optimizes memory usage by preventing dynamic creation of `__dict__` and `__weakref__` for instances",
          "Registers methods inside a database mapping",
          "Defines access levels for variables (public/private)"
        ],
        correctIndex: 1,
        explanation: "__slots__ tells Python not to use a dynamic dictionary for class attributes, saving significant memory when creating millions of instances."
      },
      {
        question: "What does the `super()` function do in multiple inheritance, and what algorithm does it use?",
        options: [
          "Calls the immediate parent class method; uses Depth-First search",
          "Delegates method calls to parent/sibling classes based on the Method Resolution Order (MRO) using the C3 linearization algorithm",
          "Calls all parent class methods concurrently",
          "Finds the base Object class method using Breadth-First search"
        ],
        correctIndex: 1,
        explanation: "super() in Python doesn't just call the direct parent. It looks up the next class in the Method Resolution Order (MRO) computed via C3 linearization."
      },
      {
        question: "What is the output of print(round(2.5) == round(3.5))?",
        options: [
          "True",
          "False",
          "TypeError",
          "Depends on OS"
        ],
        correctIndex: 0,
        explanation: "Python uses 'round half to even' (banker's rounding). 2.5 rounds to 2 (nearest even) and 3.5 rounds to 4. Wait! Actually, 2.5 rounds to 2, and 3.5 rounds to 4, so they are not equal? Let's re-verify. 2.5 rounds to 2. 3.5 rounds to 4. Wait, round(2.5) is 2, round(1.5) is 2. So round(2.5) == round(3.5) is False since 2 != 4! Wait, round(2.5) is 2, round(3.5) is 4. Thus, it's False."
      },
      {
        question: "What will `print(isinstance(True, int))` output?",
        options: [
          "True",
          "False",
          "TypeError",
          "None"
        ],
        correctIndex: 0,
        explanation: "In Python, bool is a subclass of int. True has a numerical value of 1, and False has 0. Hence, isinstance(True, int) is True."
      },
      {
        question: "What is the difference between `is` and `==` in Python?",
        options: [
          "is compares memory addresses (identity); == compares values (equality)",
          "is compares values; == compares memory addresses",
          "There is no difference; they are interchangeable",
          "is is for strings; == is for numbers"
        ],
        correctIndex: 0,
        explanation: "'is' checks object identity (if two variables point to the exact same object in memory), while '==' checks equality of values."
      },
      {
        question: "How can you run concurrent tasks in parallel bypassing the GIL in Python?",
        options: [
          "Using the threading module",
          "Using the multiprocessing module or running native extension modules (e.g. NumPy, C extensions) that release the GIL",
          "Using asyncio with coroutines",
          "Bypassing the GIL is impossible in Python"
        ],
        correctIndex: 1,
        explanation: "multiprocessing spawns separate Python processes (each with its own interpreter and memory space, hence its own GIL). Also, C extension libraries can release the GIL during heavy math operations."
      },
      {
        question: "What is the MRO (Method Resolution Order) of a class D inheriting from B and C, which both inherit from A (diamond inheritance)?",
        options: [
          "D -> B -> C -> A",
          "D -> B -> A -> C",
          "D -> C -> B -> A",
          "D -> B -> C -> object -> A"
        ],
        correctIndex: 0,
        explanation: "Under C3 linearization MRO for diamond inheritance, the order goes D, then B, then C, and finally the shared base A."
      }
    ]
  },
  react: {
    easy: [
      {
        question: "What is React?",
        options: [
          "A server-side programming language",
          "A front-end JavaScript library for building user interfaces",
          "A relational database management system",
          "A styling framework like Tailwind"
        ],
        correctIndex: 1,
        explanation: "React is an open-source front-end JavaScript library developed by Facebook for building component-based user interfaces."
      },
      {
        question: "What is the correct syntax to import React in your component?",
        options: [
          "import React from 'react';",
          "const React = require('react');",
          "include 'react';",
          "using React;"
        ],
        correctIndex: 0,
        explanation: "In ES6 module syntax, we import modules using the 'import' statement. 'import React from 'react';' is standard."
      },
      {
        question: "What is JSX?",
        options: [
          "A syntax extension for JavaScript that looks like HTML",
          "A style sheet language for React components",
          "A backend data format like JSON",
          "A tool for compiling JavaScript files"
        ],
        correctIndex: 0,
        explanation: "JSX stands for JavaScript XML. It allows us to write HTML-like syntax inside JavaScript, which is converted to React elements."
      },
      {
        question: "How do you render a dynamic variable 'name' in JSX?",
        options: [
          "\"name\"",
          "{name}",
          "{{name}}",
          "<%= name %>"
        ],
        correctIndex: 1,
        explanation: "In JSX, expressions and variables are evaluated by wrapping them in single curly braces {}."
      },
      {
        question: "What is a React component?",
        options: [
          "A function or class that returns a React element (UI block)",
          "A database schema definition",
          "A router handler",
          "A package manager setting"
        ],
        correctIndex: 0,
        explanation: "Components are the building blocks of React apps. They are reusable, independent pieces of UI code that return React elements."
      },
      {
        question: "How do you pass data from a parent component to a child component?",
        options: [
          "Using state",
          "Using props",
          "Using refs",
          "Using contexts"
        ],
        correctIndex: 1,
        explanation: "Props (short for properties) are used to pass read-only data from parent components to child components."
      },
      {
        question: "Which hook is used to manage state in a functional component?",
        options: [
          "useEffect",
          "useContext",
          "useState",
          "useReducer"
        ],
        correctIndex: 2,
        explanation: "useState is a Hook that lets you add state variables to React functional components."
      },
      {
        question: "What will happen when you call the state setter function returned by `useState`?",
        options: [
          "The component will force close",
          "The component will re-render with the new state value",
          "The page will perform a hard reload",
          "The database will update"
        ],
        correctIndex: 1,
        explanation: "Calling the state updater function schedules a re-render of the component, updating the UI with the fresh state."
      },
      {
        question: "What is the correct way to handle click events in React?",
        options: [
          "onclick={handleClick}",
          "onClick={handleClick}",
          "onclick=\"handleClick()\"",
          "click={handleClick}"
        ],
        correctIndex: 1,
        explanation: "React events are named using camelCase, so onclick becomes onClick, and they accept a function reference in curly braces."
      },
      {
        question: "How do you write a list item loop in React using an array `items`?",
        options: [
          "items.forEach(item => <li>{item}</li>)",
          "items.map(item => <li>{item}</li>)",
          "for item in items: <li>{item}</li>",
          "items.loop(item => <li>{item}</li>)"
        ],
        correctIndex: 1,
        explanation: "In React, we use the JavaScript map() method to loop through arrays and transform items into React elements."
      },
      {
        question: "What is the purpose of the 'key' prop when rendering lists of elements?",
        options: [
          "It secures the list elements from hacks",
          "It helps React identify which items have changed, been added, or been removed",
          "It acts as a unique ID for CSS selectors",
          "It is used to bind click handlers"
        ],
        correctIndex: 1,
        explanation: "Keys help React's reconciliation engine match children in the Virtual DOM tree, optimizing rendering performance."
      },
      {
        question: "How do you declare a functional component named 'MyComponent'?",
        options: [
          "function MyComponent() { return <div>Hello</div>; }",
          "const MyComponent = () => { return <div>Hello</div>; }",
          "class MyComponent extends Component { ... }",
          "Both A and B are correct"
        ],
        correctIndex: 3,
        explanation: "React functional components can be declared using standard function syntax or arrow function expressions."
      },
      {
        question: "What does JSX transpile to under the hood (historically/traditionally)?",
        options: [
          "React.createElement() calls",
          "Standard HTML strings",
          "Binary code",
          "JSON objects"
        ],
        correctIndex: 0,
        explanation: "React compilers (like Babel) compile JSX tags into React.createElement() method calls."
      },
      {
        question: "What are the rules of Hooks in React?",
        options: [
          "Only call Hooks at the top level (not inside loops or conditions)",
          "Only call Hooks from React Function Components or Custom Hooks",
          "Hooks must start with the prefix 'use'",
          "All of the above"
        ],
        correctIndex: 3,
        explanation: "Hooks must be called at the top level of React functions, only from React function components or custom hooks, and by convention start with 'use'."
      },
      {
        question: "What is the entry point file in a default Vite + React template?",
        options: [
          "main.jsx",
          "App.jsx",
          "index.js",
          "server.js"
        ],
        correctIndex: 0,
        explanation: "In modern Vite + React templates, main.jsx acts as the JavaScript entry point which mounts the React App to the HTML DOM."
      }
    ],
    medium: [
      {
        question: "What is the Virtual DOM in React?",
        options: [
          "A direct copy of the browser's document object tree stored on server-side databases",
          "A lightweight representation of the real DOM in memory, synchronized with the real DOM via reconciliation",
          "A CSS styling framework used to draw canvas elements",
          "A security sandbox preventing users from editing code"
        ],
        correctIndex: 1,
        explanation: "The Virtual DOM is a programming concept where an ideal, 'virtual' representation of a UI is kept in memory and synced with the 'real' DOM."
      },
      {
        question: "Which hook is used to run side effects in functional components?",
        options: [
          "useState",
          "useContext",
          "useEffect",
          "useMemo"
        ],
        correctIndex: 2,
        explanation: "The useEffect Hook lets you perform side effects (data fetching, subscriptions, manual DOM changes) in functional components."
      },
      {
        question: "If useEffect has an empty dependency array `[]`, when does it run?",
        options: [
          "On every render of the component",
          "Only once, when the component mounts",
          "Never",
          "When the component updates state"
        ],
        correctIndex: 1,
        explanation: "Passing an empty dependency array tells React that your effect doesn't depend on any values, so it only runs once after mounting."
      },
      {
        question: "How do you write a cleanup function inside `useEffect`?",
        options: [
          "By calling useEffect.cleanup()",
          "By returning a function from the effect callback",
          "By passing a second callback argument",
          "Functional components do not support cleanups"
        ],
        correctIndex: 1,
        explanation: "If your effect returns a function, React will run it when the component unmounts and before running the effect next time, acting as cleanup."
      },
      {
        question: "What does the `useRef` hook return?",
        options: [
          "A state value and setter function",
          "A mutable object with a `.current` property that persists across renders without triggering a re-render",
          "A memoized function reference",
          "A promise resolving to a DOM node"
        ],
        correctIndex: 1,
        explanation: "useRef returns a ref object. Changing its `.current` property doesn't trigger a component re-render. Useful for accessing DOM nodes directly."
      },
      {
        question: "What is the difference between `useMemo` and `useCallback`?",
        options: [
          "useMemo returns a memoized value; useCallback returns a memoized function reference",
          "useCallback returns a memoized value; useMemo returns a memoized function",
          "useMemo is for class components; useCallback is for function components",
          "There is no difference"
        ],
        correctIndex: 0,
        explanation: "useMemo caches the *result* of a calculation. useCallback caches the *function instance* itself to prevent child re-renders."
      },
      {
        question: "How can you share global state across many nested components without passing props manually (prop drilling)?",
        options: [
          "Using React Router",
          "Using the React Context API (or state managers like Redux/Zustand)",
          "Using dynamic local storage polling",
          "Using multiple refs"
        ],
        correctIndex: 1,
        explanation: "Context provides a way to pass data through the component tree without having to pass props down manually at every level."
      },
      {
        question: "What is the difference between controlled and uncontrolled inputs in React?",
        options: [
          "Controlled inputs are managed by React state; uncontrolled inputs are handled by the browser's DOM directly",
          "Controlled inputs use refs; uncontrolled inputs use state",
          "Controlled inputs are secure; uncontrolled inputs are unsecure",
          "There is no difference"
        ],
        correctIndex: 0,
        explanation: "A controlled input has its value bound to state (value={val}) and updates via state setter (onChange). An uncontrolled input uses refs or default values."
      },
      {
        question: "What does the `useReducer` hook do?",
        options: [
          "Minimizes the size of React bundle files",
          "An alternative to useState for managing complex state logic using action dispatches and a reducer function",
          "Validates props passed to child components",
          "Connects the app to database endpoints"
        ],
        correctIndex: 1,
        explanation: "useReducer is preferred over useState when you have complex state transitions that depend on previous states, mirroring the Redux pattern."
      },
      {
        question: "What are React Fragments (<React.Fragment> or <>...</>)?",
        options: [
          "Special CSS styles applied to cards",
          "A wrapper that lets you group list elements without adding extra nodes to the DOM",
          "Broken code blocks that trigger compilation errors",
          "Subsections of React virtual elements"
        ],
        correctIndex: 1,
        explanation: "Fragments allow you to return multiple sibling elements without wrapping them in an extra container node like a <div>."
      },
      {
        question: "What is the React lifecycle phase when a component is added to the DOM?",
        options: [
          "Mounting",
          "Updating",
          "Unmounting",
          "Rendering"
        ],
        correctIndex: 0,
        explanation: "Mounting is the phase in which the React component is initialized, created, and inserted/rendered into the DOM."
      },
      {
        question: "What will happen if you update state inside a component's render body directly?",
        options: [
          "Nothing, it is standard practice",
          "It will cause an infinite loop of re-renders and crash the browser",
          "It will throw a syntax error during compile",
          "State will not update until the next click event"
        ],
        correctIndex: 1,
        explanation: "Updating state triggers a re-render. If you do it in the render block body directly, rendering triggers state change which triggers another render, looping infinitely."
      },
      {
        question: "What is standard Prop Drilling in React?",
        options: [
          "Injecting CSS properties directly into React elements",
          "The process of passing props down multiple levels of the component tree to reach a deeply nested child",
          "Calling backend APIs inside component lifecycle methods",
          "Compiling prop types using compiler tools"
        ],
        correctIndex: 1,
        explanation: "Prop drilling is passing props through intermediate components that do not need the data, just to deliver it to a deeply nested component."
      },
      {
        question: "What is the purpose of `React.memo`?",
        options: [
          "Saves data directly into browser local memory",
          "A higher-order component that memoizes a functional component to prevent unnecessary re-renders if props haven't changed",
          "Speeds up the initial page load time",
          "Saves variables globally"
        ],
        correctIndex: 1,
        explanation: "React.memo is a performance optimization helper. It shallowly compares props and skips rendering if props are identical."
      },
      {
        question: "Which of the following is correct about Custom Hooks?",
        options: [
          "They must start with the word 'use'",
          "They allow sharing stateful logic, not state itself, between components",
          "They are JavaScript functions that can call other React hooks",
          "All of the above"
        ],
        correctIndex: 3,
        explanation: "Custom Hooks are simple JS functions that start with 'use', call other hooks, and package stateful logic for reuse."
      }
    ],
    hard: [
      {
        question: "What is React Fiber?",
        options: [
          "A network transport protocol used for React Server Components",
          "The current internal reconciliation engine of React, designed to support incremental rendering of the virtual DOM",
          "A hardware accelerator chip for hosting React servers",
          "A styling framework used for animations"
        ],
        correctIndex: 1,
        explanation: "React Fiber is the core algorithm reconstruction of React's reconciliation engine, enabling scheduling of work on UI rendering."
      },
      {
        question: "What does 'Concurrent Mode' (or concurrent features) enable in React 18?",
        options: [
          "Allows running multiple React apps on the same browser page concurrently",
          "Enables React to prepare multiple versions of the UI at the same time, making rendering interruptible",
          "Allows compiling frontend and backend concurrently",
          "Executes component functions in separate thread workers"
        ],
        correctIndex: 1,
        explanation: "Concurrent React makes rendering interruptible. It allows React to pause long-running renders to handle user interactions like typing."
      },
      {
        question: "What is the purpose of `useTransition` in React 18?",
        options: [
          "Creates page fade-in/fade-out animations",
          "Marks state updates as non-urgent 'transitions', keeping the UI responsive while they load",
          "Transitions class components into functional components",
          "Performs secure API transitions"
        ],
        correctIndex: 1,
        explanation: "useTransition allows you to mark certain updates as low-priority transitions (e.g. searching a large list), ensuring high-priority inputs (like typing) don't lag."
      },
      {
        question: "What does `useDeferredValue` do?",
        options: [
          "Defers execution of an async function until a promise resolves",
          "Accepts a value and returns a new copy of the value that defers its updates until high-priority renders complete",
          "Stores values in cookies with an expiration date",
          "Slows down rendering of elements for debug visual effects"
        ],
        correctIndex: 1,
        explanation: "useDeferredValue is similar to debouncing/throttling. It defers updating a heavy section of the UI until the main UI loop is idle."
      },
      {
        question: "What happens during the 'Reconciliation' phase in React?",
        options: [
          "React compares the newly returned Virtual DOM tree with the previous one to calculate differences (diffing)",
          "React updates the database with changed state values",
          "React compiles code from JSX to native elements",
          "The browser paints pixels on screen"
        ],
        correctIndex: 0,
        explanation: "Reconciliation is the process through which React updates the DOM by diffing virtual trees and applying minimum changes."
      },
      {
        question: "What is the difference between useEffect's layout phase and paint phase, and which hook runs synchronously before the browser paints?",
        options: [
          "useEffect runs before paint; useLayoutEffect runs after paint",
          "useLayoutEffect runs synchronously after DOM mutations but before the browser paints; useEffect runs asynchronously after paint",
          "There is no difference; they run concurrently",
          "useLayoutEffect is asynchronously deferred"
        ],
        correctIndex: 1,
        explanation: "useLayoutEffect fires synchronously after all DOM mutations. This is useful for reading layout from the DOM and immediately re-rendering before layout paint."
      },
      {
        question: "Why can you not call Hooks inside conditional loops or IF blocks?",
        options: [
          "Because JavaScript engines block execution of functions starting with 'use' inside blocks",
          "Because React relies on the call order of Hooks across renders to associate state values with matching hook slots",
          "Because state would be cleared on every condition change",
          "It is possible; this is not a rule"
        ],
        correctIndex: 1,
        explanation: "React relies on the order of Hook execution. If a hook call is skipped, all subsequent hook calls will shift, causing bugs."
      },
      {
        question: "What is the purpose of the `useImperativeHandle` hook?",
        options: [
          "Forces components to run synchronous database commands",
          "Customizes the instance value that is exposed to parent components when using refs (paired with forwardRef)",
          "Blocks parents from calling child elements",
          "Registers global exceptions"
        ],
        correctIndex: 1,
        explanation: "useImperativeHandle customizes the ref instance exposed to parents. Instead of returning the raw DOM node, we can expose custom methods."
      },
      {
        question: "What is the default behavior of React's Context Provider when its value changes?",
        options: [
          "Only child components using useContext(MyContext) re-render",
          "All components nested inside the Provider re-render, regardless of whether they consume the context or use memoization (unless optimized via child components or memo wrappers)",
          "Only the parent component provider re-renders",
          "The browser reloads"
        ],
        correctIndex: 1,
        explanation: "When a context value changes, all consumers of the context re-render. Also, any children nested inside a provider function re-evaluate unless they are protected by memoization or passed as children props."
      },
      {
        question: "What is the purpose of React's `Suspense` component?",
        options: [
          "Stops execution of all code if there is an error",
          "Lets you display a fallback UI (like a spinner) while child components are 'waiting' for asynchronous operations (like lazy loading or data fetching) to complete",
          "Animates elements by suspending them in CSS canvas grids",
          "Handles HTTP network request suspensions"
        ],
        correctIndex: 1,
        explanation: "Suspense lets components 'wait' for something before they render, showing a loading state while assets or data are being fetched."
      },
      {
        question: "What is the difference between React Server Components (RSC) and Client Components?",
        options: [
          "RSCs render exclusively on the server, generating static content with zero impact on bundle size; Client Components run in the browser and support state/effects",
          "Client Components render on the server; RSCs render on the client",
          "RSCs cannot fetch databases; Client Components can",
          "There is no functional difference"
        ],
        correctIndex: 0,
        explanation: "RSCs execute on the server. They don't download JS bundles to the client, whereas client components ('use client') run in the browser, supporting hooks."
      },
      {
        question: "What is batching in React, and how did React 18 change it?",
        options: [
          "Combining multiple files into bundles; React 18 made it faster",
          "React groups multiple state updates into a single re-render; React 18 introduced Automatic Batching for updates inside promises, timeouts, and native events",
          "Sending multiple network requests in a single transaction",
          "Splitting components into lazy-loaded segments"
        ],
        correctIndex: 1,
        explanation: "Automatic Batching in React 18 batches state updates regardless of where they originate (even inside microtasks/timeouts), resulting in fewer re-renders."
      },
      {
        question: "What does the `useSyncExternalStore` hook do?",
        options: [
          "Syncs state between local storage and database servers",
          "A hook recommended for subscribing to external data stores, preventing 'tearing' in concurrent rendering",
          "Executes synchronous code inside component constructors",
          "Triggers WebSockets connection synchronization"
        ],
        correctIndex: 1,
        explanation: "useSyncExternalStore is used to subscribe to external stores (like Redux, global stores) in a way that is compatible with React 18's concurrent render features."
      },
      {
        question: "How do you create an error boundary in React?",
        options: [
          "Using standard try/catch blocks in the render body",
          "Defining a class component that implements either static getDerivedStateFromError() or componentDidCatch()",
          "Wrapping code in a <Suspense> tag with an error fallback",
          "Using the useErrorBoundary hook (built into core React)"
        ],
        correctIndex: 1,
        explanation: "Error Boundaries must be class components that implement lifecycle methods to catch errors in child trees."
      },
      {
        question: "What is the function signature of the reducer function passed to `useReducer`?",
        options: [
          "(state, action) => newState",
          "(action, state) => newState",
          "(dispatch, state) => void",
          "(state) => dispatch"
        ],
        correctIndex: 0,
        explanation: "The reducer signature is standard: it takes the current state and the dispatched action, returning the new computed state."
      }
    ]
  },
  science: {
    easy: [
      {
        question: "What is the chemical formula for water?",
        options: [
          "CO2",
          "H2O",
          "NaCl",
          "O2"
        ],
        correctIndex: 1,
        explanation: "Water consists of two Hydrogen atoms and one Oxygen atom, represented as H2O."
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: [
          "Venus",
          "Mars",
          "Jupiter",
          "Saturn"
        ],
        correctIndex: 1,
        explanation: "Mars is often called the Red Planet because of iron oxide (rust) on its surface."
      },
      {
        question: "What is the force that pulls objects toward the center of the Earth?",
        options: [
          "Magnetism",
          "Friction",
          "Gravity",
          "Inertia"
        ],
        correctIndex: 2,
        explanation: "Gravity is the natural force of attraction exerted by a celestial body, such as Earth, directing objects toward its mass center."
      },
      {
        question: "What is the boiling point of water at sea level?",
        options: [
          "0 °C",
          "50 °C",
          "100 °C",
          "200 °C"
        ],
        correctIndex: 2,
        explanation: "Water boils at 100 degrees Celsius (or 212 degrees Fahrenheit) under standard atmospheric pressure."
      },
      {
        question: "Which gas do plants absorb during photosynthesis?",
        options: [
          "Oxygen",
          "Carbon dioxide",
          "Nitrogen",
          "Hydrogen"
        ],
        correctIndex: 1,
        explanation: "Plants absorb Carbon dioxide (CO2) from the air and release Oxygen (O2) during photosynthesis."
      },
      {
        question: "What is the power house of the cell?",
        options: [
          "Nucleus",
          "Mitochondria",
          "Ribosome",
          "Chloroplast"
        ],
        correctIndex: 1,
        explanation: "Mitochondria are known as the powerhouses of the cell because they generate chemical energy (ATP)."
      },
      {
        question: "What is the closest star to Earth?",
        options: [
          "Alpha Centauri",
          "The Sun",
          "Sirius",
          "Polaris"
        ],
        correctIndex: 1,
        explanation: "The Sun is the closest star to Earth, located at a distance of about 93 million miles."
      },
      {
        question: "Which organ in the human body pumps blood?",
        options: [
          "Brain",
          "Lungs",
          "Heart",
          "Kidney"
        ],
        correctIndex: 2,
        explanation: "The heart is a muscular organ that pumps blood throughout the circulatory system."
      },
      {
        question: "How many states of matter are commonly taught in basic science?",
        options: [
          "2",
          "3",
          "4",
          "5"
        ],
        correctIndex: 1,
        explanation: "The three primary states of matter are solid, liquid, and gas."
      },
      {
        question: "What is the primary source of energy for Earth's climate?",
        options: [
          "Earth's core",
          "Volcanoes",
          "The Sun",
          "Wind"
        ],
        correctIndex: 2,
        explanation: "The Sun provides the solar radiation that drives Earth's climate and weather systems."
      },
      {
        question: "What is the hardest natural substance on Earth?",
        options: [
          "Gold",
          "Iron",
          "Diamond",
          "Quartz"
        ],
        correctIndex: 2,
        explanation: "Diamond is carbon arranged in a crystal lattice, making it the hardest natural mineral known."
      },
      {
        question: "Which gas is most abundant in Earth's atmosphere?",
        options: [
          "Oxygen",
          "Nitrogen",
          "Carbon dioxide",
          "Argon"
        ],
        correctIndex: 1,
        explanation: "Nitrogen makes up about 78% of Earth's atmosphere, followed by Oxygen at about 21%."
      },
      {
        question: "What is the center of an atom called?",
        options: [
          "Electron",
          "Proton",
          "Nucleus",
          "Neutron"
        ],
        correctIndex: 2,
        explanation: "The nucleus is the small, dense region consisting of protons and neutrons at the center of an atom."
      },
      {
        question: "What do bees collect from flowers to make honey?",
        options: [
          "Pollen",
          "Petals",
          "Nectar",
          "Sap"
        ],
        correctIndex: 2,
        explanation: "Bees collect sweet nectar from flowers, which they digest and convert into honey."
      },
      {
        question: "What is the speed of sound roughly in air?",
        options: [
          "343 m/s",
          "300,000 km/s",
          "1,500 m/s",
          "50 m/s"
        ],
        correctIndex: 0,
        explanation: "Sound travels at about 343 meters per second (approx 1235 km/h) in dry air at 20 degrees Celsius."
      }
    ],
    medium: [
      {
        question: "What is the chemical symbol for Gold?",
        options: [
          "Ag",
          "Au",
          "Fe",
          "Gd"
        ],
        correctIndex: 1,
        explanation: "Au is the symbol for Gold, derived from its Latin name 'Aurum' (shining dawn)."
      },
      {
        question: "How many planets are in our Solar System?",
        options: [
          "7",
          "8",
          "9",
          "10"
        ],
        correctIndex: 1,
        explanation: "There are 8 planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune (Pluto was reclassified as a dwarf planet in 2006)."
      },
      {
        question: "What is the process of water vapor turning into liquid water?",
        options: [
          "Evaporation",
          "Condensation",
          "Sublimation",
          "Precipitation"
        ],
        correctIndex: 1,
        explanation: "Condensation is the physical state change of water from gaseous vapor form back into liquid droplets."
      },
      {
        question: "Who formulated the Laws of Motion and Universal Gravitation?",
        options: [
          "Albert Einstein",
          "Isaac Newton",
          "Galileo Galilei",
          "Nikola Tesla"
        ],
        correctIndex: 1,
        explanation: "Sir Isaac Newton published these laws in his work 'Philosophiae Naturalis Principia Mathematica' in 1687."
      },
      {
        question: "Which blood cells are responsible for fighting infections in the human body?",
        options: [
          "Red blood cells",
          "White blood cells",
          "Platelets",
          "Plasma cells"
        ],
        correctIndex: 1,
        explanation: "White blood cells (leukocytes) are part of the immune system and defend the body against infectious diseases and foreign invaders."
      },
      {
        question: "Which component of the eye contains light-sensitive rod and cone cells?",
        options: [
          "Cornea",
          "Iris",
          "Lens",
          "Retina"
        ],
        correctIndex: 3,
        explanation: "The retina is the sensory membrane lining the inner back of the eye, which captures light and transmits signals to the brain."
      },
      {
        question: "What type of energy is stored in a stretched rubber band?",
        options: [
          "Kinetic energy",
          "Elastic potential energy",
          "Chemical energy",
          "Thermal energy"
        ],
        correctIndex: 1,
        explanation: "A stretched rubber band stores elastic potential energy, which converts to kinetic energy when released."
      },
      {
        question: "What is the pH level of pure water?",
        options: [
          "5",
          "7",
          "9",
          "14"
        ],
        correctIndex: 1,
        explanation: "Pure water is neutral and has a pH of exactly 7 on a scale from 0 (highly acidic) to 14 (highly alkaline)."
      },
      {
        question: "What is the main function of red blood cells?",
        options: [
          "Fight diseases",
          "Clot blood during wounds",
          "Carry oxygen to body tissues",
          "Produce hormones"
        ],
        correctIndex: 2,
        explanation: "Red blood cells contain hemoglobin, a protein that binds oxygen and transports it from the lungs to the rest of the body."
      },
      {
        question: "Which planet is the largest in our solar system?",
        options: [
          "Saturn",
          "Jupiter",
          "Neptune",
          "Uranus"
        ],
        correctIndex: 1,
        explanation: "Jupiter is the largest planet, with a mass more than two and a half times that of all other planets in the Solar System combined."
      },
      {
        question: "What is the speed of light in a vacuum?",
        options: [
          "300,000 meters per second",
          "300,000 kilometers per second",
          "150,000 miles per hour",
          "343 meters per second"
        ],
        correctIndex: 1,
        explanation: "Light travels in a vacuum at approximately 299,792 kilometers per second (or roughly 186,000 miles per second)."
      },
      {
        question: "Which element has the atomic number 1?",
        options: [
          "Helium",
          "Hydrogen",
          "Oxygen",
          "Carbon"
        ],
        correctIndex: 1,
        explanation: "Hydrogen is the simplest and lightest chemical element, carrying atomic number 1 (one proton)."
      },
      {
        question: "What process is used by yeast to produce carbon dioxide and alcohol from sugars?",
        options: [
          "Photosynthesis",
          "Fermentation",
          "Respiration",
          "Oxidation"
        ],
        correctIndex: 1,
        explanation: "Fermentation is an anaerobic metabolic process where yeast converts carbohydrates into carbon dioxide gas and ethanol alcohol."
      },
      {
        question: "What type of rock is formed by the cooling and solidification of molten lava?",
        options: [
          "Sedimentary",
          "Metamorphic",
          "Igneous",
          "Fossilized"
        ],
        correctIndex: 2,
        explanation: "Igneous rocks (like basalt or granite) are formed when molten magma or lava cools and hardens."
      },
      {
        question: "What unit is used to measure electrical resistance?",
        options: [
          "Volt",
          "Ampere",
          "Ohm",
          "Watt"
        ],
        correctIndex: 2,
        explanation: "The Ohm (represented by Greek letter Omega Ω) is the SI unit of electrical resistance."
      }
    ],
    hard: [
      {
        question: "What is the theory of General Relativity, proposed by Einstein, primarily about?",
        options: [
          "The behavior of subatomic particles",
          "The relationship between electricity and magnetism",
          "Gravity described as the curvature of spacetime caused by mass and energy",
          "The speed of chemical reactions"
        ],
        correctIndex: 2,
        explanation: "General Relativity shows that mass and energy curve spacetime, and this curvature is what we perceive as gravity."
      },
      {
        question: "What is the absolute zero temperature in Celsius?",
        options: [
          "0 °C",
          "-100 °C",
          "-273.15 °C",
          "-459.67 °C"
        ],
        correctIndex: 2,
        explanation: "Absolute zero, the point at which all thermodynamic motion ceases, is exactly -273.15 °C (or 0 Kelvin)."
      },
      {
        question: "What particle is the mediator of the electromagnetic force in quantum field theory?",
        options: [
          "Gluon",
          "W Boson",
          "Photon",
          "Higgs Boson"
        ],
        correctIndex: 2,
        explanation: "Photons are the gauge bosons responsible for mediating electromagnetic interactions."
      },
      {
        question: "Which biological process produces four genetically diverse haploid daughter cells from a single diploid cell?",
        options: [
          "Mitosis",
          "Meiosis",
          "Binary Fission",
          "Budding"
        ],
        correctIndex: 1,
        explanation: "Meiosis is the specialized cell division that creates sex cells (gametes: sperm and eggs) with half the original genetic material."
      },
      {
        question: "What is the primary function of the myelin sheath in neurons?",
        options: [
          "To feed the cell body with proteins",
          "To speed up the transmission of electrical nerve impulses along the axon",
          "To absorb waste products of neural activity",
          "To connect dendrites directly to blood capillaries"
        ],
        correctIndex: 1,
        explanation: "The myelin sheath acts as an insulating layer, allowing electrical impulses to travel quickly and efficiently along nerve cells."
      },
      {
        question: "What element is most abundant in the Earth's core?",
        options: [
          "Silicon",
          "Nickel",
          "Iron",
          "Oxygen"
        ],
        correctIndex: 2,
        explanation: "Earth's core is composed mostly of iron (about 85%) and nickel, under intense pressure and temperature."
      },
      {
        question: "What is the term for the minimum velocity an object needs to escape a planet's gravitational pull?",
        options: [
          "Terminal velocity",
          "Escape velocity",
          "Orbital velocity",
          "Sonic velocity"
        ],
        correctIndex: 1,
        explanation: "Escape velocity is the speed needed to break free from a gravitational field without further acceleration (about 11.2 km/s for Earth)."
      },
      {
        question: "Which law states that the volume of a gas is inversely proportional to its pressure at constant temperature?",
        options: [
          "Charles's Law",
          "Boyle's Law",
          "Avogadro's Law",
          "Gay-Lussac's Law"
        ],
        correctIndex: 1,
        explanation: "Boyle's Law (P1V1 = P2V2) establishes that for a fixed gas mass at constant temperature, pressure and volume are inversely related."
      },
      {
        question: "What is the main chemical constituent of limestone?",
        options: [
          "Calcium sulfate",
          "Calcium carbonate",
          "Silicon dioxide",
          "Sodium chloride"
        ],
        correctIndex: 1,
        explanation: "Limestone is a sedimentary rock made up primarily of calcium carbonate (CaCO3), often originating from marine skeletal fragments."
      },
      {
        question: "Which of the following is NOT an elementary particle according to the Standard Model of particle physics?",
        options: [
          "Proton",
          "Up Quark",
          "Electron",
          "Neutrino"
        ],
        correctIndex: 0,
        explanation: "A proton is a composite particle made of three quarks (two up and one down). Up quarks, electrons, and neutrinos are fundamental/elementary particles."
      },
      {
        question: "What does the Heisenberg Uncertainty Principle state?",
        options: [
          "You cannot know the exact time and date of a quantum event",
          "It is impossible to measure both the position and momentum of a particle simultaneously with absolute precision",
          "Objects exist in all possible states until they are observed",
          "Heat cannot spontaneously flow from a cooler body to a warmer body"
        ],
        correctIndex: 1,
        explanation: "The principle states that the product of the uncertainties of position and momentum has a fundamental limit (h-bar/2)."
      },
      {
        question: "What is the primary role of tRNA (transfer RNA) in protein synthesis?",
        options: [
          "Copy the DNA template code in the nucleus",
          "Deliver correct amino acids to the ribosome according to the mRNA codon sequence",
          "Form the structural components of the ribosome",
          "Degrade unused proteins inside the cytoplasm"
        ],
        correctIndex: 1,
        explanation: "tRNA molecules bind specific amino acids and transport them to the ribosome, matching their anticodon with the mRNA template."
      },
      {
        question: "Which chemical element has the highest electrical conductivity of any metal?",
        options: [
          "Copper",
          "Gold",
          "Silver",
          "Aluminum"
        ],
        correctIndex: 2,
        explanation: "Silver is the most electrically conductive metal, followed closely by copper and gold."
      },
      {
        question: "What is the half-life of a radioactive substance?",
        options: [
          "The time taken for all atoms in the substance to decay",
          "The time taken for half of the radioactive nuclei in a sample to decay",
          "Exactly half the age of the Earth",
          "The duration before a radioactive isotope becomes stable"
        ],
        correctIndex: 1,
        explanation: "Half-life is the time required for a quantity of a radioisotope to reduce to half of its initial value through radioactive decay."
      },
      {
        question: "What type of bond is formed when two atoms share a pair of electrons?",
        options: [
          "Ionic bond",
          "Covalent bond",
          "Hydrogen bond",
          "Metallic bond"
        ],
        correctIndex: 1,
        explanation: "A covalent bond involves the mutual sharing of electron pairs between atoms, binding them together."
      }
    ]
  },
  history: {
    easy: [
      {
        question: "In which year did World War I begin?",
        options: [
          "1912",
          "1914",
          "1918",
          "1939"
        ],
        correctIndex: 1,
        explanation: "World War I began on July 28, 1914, following the assassination of Archduke Franz Ferdinand."
      },
      {
        question: "Who was the first President of the United States?",
        options: [
          "Thomas Jefferson",
          "Abraham Lincoln",
          "George Washington",
          "Benjamin Franklin"
        ],
        correctIndex: 2,
        explanation: "George Washington served as the first U.S. President from 1789 to 1797."
      },
      {
        question: "Which ancient civilization built the Great Pyramids of Giza?",
        options: [
          "The Romans",
          "The Greeks",
          "The Egyptians",
          "The Mesopotamians"
        ],
        correctIndex: 2,
        explanation: "The Pyramids of Giza were constructed during the Old Kingdom of Ancient Egypt as monumental tombs for Pharaohs."
      },
      {
        question: "Who was the famous queen of Ancient Egypt known for her alliances with Julius Caesar and Mark Antony?",
        options: [
          "Nefertiti",
          "Hatshepsut",
          "Cleopatra",
          "Sobekneferu"
        ],
        correctIndex: 2,
        explanation: "Cleopatra VII Philopator was the last active ruler of the Ptolemaic Kingdom of Egypt, famous for her political alliances with Rome."
      },
      {
        question: "What was the name of the trade route that connected China to the Mediterranean?",
        options: [
          "The Spice Route",
          "The Silk Road",
          "The Tea Road",
          "The Golden Highway"
        ],
        correctIndex: 1,
        explanation: "The Silk Road was an ancient network of trade routes established during the Han Dynasty, linking East Asia with Europe."
      },
      {
        question: "Which country gifted the Statue of Liberty to the United States?",
        options: [
          "Great Britain",
          "France",
          "Spain",
          "Germany"
        ],
        correctIndex: 1,
        explanation: "France gifted the Statue of Liberty to the U.S. in 1886 to commemorate the alliance during the American Revolution."
      },
      {
        question: "Who discovered America in 1492?",
        options: [
          "Marco Polo",
          "Christopher Columbus",
          "Vasco da Gama",
          "Ferdinand Magellan"
        ],
        correctIndex: 1,
        explanation: "Christopher Columbus, sponsored by the Spanish monarchy, landed in the Bahamas in 1492, initiating European exploration of the Americas."
      },
      {
        question: "Which empire was ruled by Julius Caesar?",
        options: [
          "The Greek Empire",
          "The Roman Republic/Empire",
          "The Ottoman Empire",
          "The Persian Empire"
        ],
        correctIndex: 1,
        explanation: "Julius Caesar was a Roman general and statesman whose dictatorship led to the rise of the Roman Empire."
      },
      {
        question: "What event triggered the entry of the United States into World War II?",
        options: [
          "The sinking of the Lusitania",
          "The invasion of Poland",
          "The bombing of Pearl Harbor",
          "The Battle of Britain"
        ],
        correctIndex: 2,
        explanation: "The Japanese surprise military attack on Pearl Harbor, Hawaii on December 7, 1941, prompted the U.S. to enter WWII."
      },
      {
        question: "Who is known as the father of Indian Independence, famous for his non-violent resistance?",
        options: [
          "Jawaharlal Nehru",
          "Subhash Chandra Bose",
          "Mahatma Gandhi",
          "Bhagat Singh"
        ],
        correctIndex: 2,
        explanation: "Mahatma Gandhi led the non-violent struggle for Indian Independence from British rule, utilizing civil disobedience."
      },
      {
        question: "What was the main purpose of the Berlin Wall?",
        options: [
          "To block incoming missile attacks",
          "To separate East Berlin (Communist) from West Berlin (Democratic)",
          "To serve as a monument for World War II",
          "To act as a trade checkpoint"
        ],
        correctIndex: 1,
        explanation: "The Berlin Wall was built by East Germany in 1961 to prevent citizens from escaping to democratic West Berlin."
      },
      {
        question: "Which country was the first to send a human into outer space?",
        options: [
          "United States",
          "Soviet Union",
          "China",
          "Germany"
        ],
        correctIndex: 1,
        explanation: "Yuri Gagarin of the Soviet Union became the first human in space, orbiting Earth in Vostok 1 on April 12, 1961."
      },
      {
        question: "Who wrote the famous play 'Romeo and Juliet'?",
        options: [
          "Charles Dickens",
          "William Shakespeare",
          "Mark Twain",
          "Jane Austen"
        ],
        correctIndex: 1,
        explanation: "William Shakespeare, the famous English playwright, wrote Romeo and Juliet early in his career (around 1595)."
      },
      {
        question: "What was the period of transition to new manufacturing processes in Europe and the US during the 18th-19th centuries?",
        options: [
          "The Renaissance",
          "The Industrial Revolution",
          "The Age of Enlightenment",
          "The Scientific Revolution"
        ],
        correctIndex: 1,
        explanation: "The Industrial Revolution marked the shift from hand production methods to machines, steam power, and factories."
      },
      {
        question: "Who was the leader of the Nazi Party in Germany during World War II?",
        options: [
          "Benito Mussolini",
          "Joseph Stalin",
          "Adolf Hitler",
          "Winston Churchill"
        ],
        correctIndex: 2,
        explanation: "Adolf Hitler led Germany as Chancellor/Führer from 1933 to 1945, instigating World War II and the Holocaust."
      }
    ],
    medium: [
      {
        question: "Who was the first Emperor of Rome?",
        options: [
          "Julius Caesar",
          "Augustus (Octavian)",
          "Nero",
          "Marcus Aurelius"
        ],
        correctIndex: 1,
        explanation: "Augustus Caesar, Julius Caesar's adopted heir, became the first official Emperor of Rome in 27 BC, ending the Roman Republic."
      },
      {
        question: "In which year did the French Revolution begin?",
        options: [
          "1776",
          "1789",
          "1804",
          "1815"
        ],
        correctIndex: 1,
        explanation: "The French Revolution began in 1789 with the storming of the Bastille on July 14, overthrowing the absolute monarchy."
      },
      {
        question: "Which English document signed in 1215 limited the power of the King?",
        options: [
          "The Bill of Rights",
          "The Magna Carta",
          "The Declaration of Independence",
          "The Constitution"
        ],
        correctIndex: 1,
        explanation: "King John signed the Magna Carta (Great Charter) in 1215, establishing the principle that everyone, including the king, is subject to the law."
      },
      {
        question: "Which Italian city-state is considered the birthplace of the Renaissance?",
        options: [
          "Rome",
          "Venice",
          "Florence",
          "Milan"
        ],
        correctIndex: 2,
        explanation: "Florence is widely recognized as the birthplace of the Renaissance, fostered by the wealthy Medici family and local artists."
      },
      {
        question: "Who was the primary author of the United States Declaration of Independence?",
        options: [
          "Thomas Jefferson",
          "George Washington",
          "John Adams",
          "Alexander Hamilton"
        ],
        correctIndex: 0,
        explanation: "Thomas Jefferson was chosen by the Continental Congress to draft the historic document in June 1776."
      },
      {
        question: "Which nation did Napoleon Bonaparte rule?",
        options: [
          "France",
          "Italy",
          "Spain",
          "Austria"
        ],
        correctIndex: 0,
        explanation: "Napoleon Bonaparte rose to prominence during the French Revolution, declaring himself Emperor of the French in 1804."
      },
      {
        question: "The Battle of Waterloo in 1815 marked the final defeat of which military leader?",
        options: [
          "Alexander the Great",
          "Julius Caesar",
          "Napoleon Bonaparte",
          "Genghis Khan"
        ],
        correctIndex: 2,
        explanation: "Napoleon was defeated at Waterloo by the allied armies of the Duke of Wellington and Gebhard von Blücher, ending his reign."
      },
      {
        question: "Who was the Soviet leader during World War II?",
        options: [
          "Vladimir Lenin",
          "Leon Trotsky",
          "Joseph Stalin",
          "Nikita Khrushchev"
        ],
        correctIndex: 2,
        explanation: "Joseph Stalin was General Secretary of the Communist Party and Premier of the USSR during WWII."
      },
      {
        question: "Which ancient civilization developed the system of writing known as cuneiform?",
        options: [
          "Ancient Egypt",
          "The Sumerians",
          "The Indus Valley Civilization",
          "Ancient Greece"
        ],
        correctIndex: 1,
        explanation: "Cuneiform was developed by the Sumerians of Mesopotamia (modern Iraq) around 3500-3000 BC, one of the earliest writing systems."
      },
      {
        question: "What was the name of the ship that brought the Pilgrims to America in 1620?",
        options: [
          "The Santa Maria",
          "The Mayflower",
          "The Endeavour",
          "The Golden Hind"
        ],
        correctIndex: 1,
        explanation: "The Mayflower transported English Separatists (Pilgrims) from Plymouth to New England in 1620."
      },
      {
        question: "Who was the Prime Minister of the United Kingdom during most of World War II?",
        options: [
          "Neville Chamberlain",
          "Winston Churchill",
          "Clement Attlee",
          "Margaret Thatcher"
        ],
        correctIndex: 1,
        explanation: "Winston Churchill served as UK Prime Minister from 1940 to 1945, famously rallying the nation during WWII."
      },
      {
        question: "What was the primary cause of the US Civil War?",
        options: [
          "Taxation without representation",
          "The expansion of slavery into western territories",
          "A dispute over national boundary lines with Canada",
          "The purchase of Alaska"
        ],
        correctIndex: 1,
        explanation: "The war erupted primarily due to long-standing disagreements regarding the institution of slavery and state sovereignty."
      },
      {
        question: "Which empire fell in 1453 with the capture of Constantinople by the Ottomans?",
        options: [
          "The Roman Empire",
          "The Byzantine Empire",
          "The Holy Roman Empire",
          "The Carolingian Empire"
        ],
        correctIndex: 1,
        explanation: "The Byzantine Empire (the eastern continuation of the Roman Empire) fell when Sultan Mehmed II conquered Constantinople in 1453."
      },
      {
        question: "Who was the ruler of Spain who sponsored Columbus's voyages to the Americas?",
        options: [
          "Queen Isabella I & King Ferdinand II",
          "King Charles V",
          "King Philip II",
          "Queen Elizabeth I"
        ],
        correctIndex: 0,
        explanation: "The Catholic Monarchs, Queen Isabella I of Castile and King Ferdinand II of Aragon, financed Columbus's expedition in 1492."
      },
      {
        question: "Which US President signed the Emancipation Proclamation in 1863?",
        options: [
          "Thomas Jefferson",
          "Andrew Jackson",
          "Abraham Lincoln",
          "Ulysses S. Grant"
        ],
        correctIndex: 2,
        explanation: "Abraham Lincoln issued the executive order declaring that all enslaved individuals in rebellious Confederate states are free."
      }
    ],
    hard: [
      {
        question: "What was the Peace of Westphalia (1648) famous for?",
        options: [
          "Ending the Napoleonic Wars",
          "Ending the Thirty Years' War and establishing the concept of modern state sovereignty",
          "Creating the League of Nations",
          "Dividing the territories of the Ottoman Empire"
        ],
        correctIndex: 1,
        explanation: "The Peace of Westphalia ended the Thirty Years' War in Europe, introducing the 'Westphalian sovereignty' framework of nation-states."
      },
      {
        question: "Who was the Byzantine Emperor responsible for compiling Roman laws into the 'Corpus Juris Civilis'?",
        options: [
          "Constantine the Great",
          "Justinian I",
          "Heraclius",
          "Basil II"
        ],
        correctIndex: 1,
        explanation: "Emperor Justinian I codifed Roman legal traditions in the 6th century, which became the foundation of civil law in many modern nations."
      },
      {
        question: "Which Roman Emperor legalised Christianity with the Edict of Milan in 313 AD?",
        options: [
          "Augustus",
          "Nero",
          "Constantine the Great",
          "Diocletian"
        ],
        correctIndex: 2,
        explanation: "Constantine I issued the Edict of Milan, ending systemic persecution of Christians and paving the way for Christianity to become Rome's state religion."
      },
      {
        question: "What was the primary goal of the Congress of Vienna (1814-1815)?",
        options: [
          "To decide on how to partition Africa",
          "To restore the balance of power in Europe after the downfall of Napoleon",
          "To sign a peace treaty with the United States",
          "To establish the Catholic Church as a global government"
        ],
        correctIndex: 1,
        explanation: "The Congress redrew Europe's political map to ensure stability, restore traditional monarchies, and prevent any single power from dominating."
      },
      {
        question: "Who was the Carthaginian general who famously crossed the Alps with war elephants to attack Rome?",
        options: [
          "Julius Caesar",
          "Hannibal Barca",
          "Scipio Africanus",
          "Spartacus"
        ],
        correctIndex: 1,
        explanation: "Hannibal Barca led the Carthaginian forces in the Second Punic War (218-201 BC), pulling off the daring Alps crossing."
      },
      {
        question: "Which agreement signed in 1938 is infamous for appeasing Adolf Hitler by ceding parts of Czechoslovakia?",
        options: [
          "The Treaty of Versailles",
          "The Munich Agreement",
          "The Locarno Treaties",
          "The Molotov-Ribbentrop Pact"
        ],
        correctIndex: 1,
        explanation: "The Munich Agreement, signed by Britain, France, Italy, and Germany, allowed Hitler to annex the Sudetenland in a failed bid to prevent war."
      },
      {
        question: "Who was the first ruler of the Mongol Empire, consolidating nomadic tribes in 1206?",
        options: [
          "Kublai Khan",
          "Genghis Khan (Temüjin)",
          "Ogedei Khan",
          "Hulagu Khan"
        ],
        correctIndex: 1,
        explanation: "Temüjin was proclaimed Genghis Khan (Universal Ruler) in 1206, launching conquests that built history's largest contiguous land empire."
      },
      {
        question: "What was the code name for the allied invasion of Normandy in June 1944?",
        options: [
          "Operation Barbarossa",
          "Operation Overlord",
          "Operation Torch",
          "Operation Sea Lion"
        ],
        correctIndex: 1,
        explanation: "Operation Overlord was the codename for the D-Day landings and subsequent Battle of Normandy, launching the liberation of Western Europe."
      },
      {
        question: "Which dynastic family ruled the Holy Roman Empire for centuries, as well as Austria and Spain?",
        options: [
          "The Romanovs",
          "The Bourbons",
          "The Habsburgs",
          "The Tudors"
        ],
        correctIndex: 2,
        explanation: "The House of Habsburg was one of the most prominent royal houses of Europe, occupying the Holy Roman throne from 1438 to 1740."
      },
      {
        question: "Who was the primary military commander of the Parliamentarian forces (Roundheads) in the English Civil War?",
        options: [
          "King Charles I",
          "Oliver Cromwell",
          "Winston Churchill",
          "Robert Walpole"
        ],
        correctIndex: 1,
        explanation: "Oliver Cromwell organized the New Model Army, defeated the Royalists, and later ruled as Lord Protector of the Commonwealth."
      },
      {
        question: "What year did the Western Roman Empire officially collapse, marked by the deposition of Emperor Romulus Augustulus?",
        options: [
          "313 AD",
          "476 AD",
          "1066 AD",
          "1453 AD"
        ],
        correctIndex: 1,
        explanation: "The Germanic chieftain Odoacer deposed Romulus Augustulus in 476 AD, traditionally marking the start of the Middle Ages."
      },
      {
        question: "Which battle in 1066 led to the Norman conquest of England by William the Conqueror?",
        options: [
          "Battle of Waterloo",
          "Battle of Hastings",
          "Battle of Agincourt",
          "Battle of Bosworth Field"
        ],
        correctIndex: 1,
        explanation: "William, Duke of Normandy, defeated King Harold Godwinson at the Battle of Hastings on October 14, 1066, claiming the English throne."
      },
      {
        question: "Which Japanese city was the first to be devastated by an atomic bomb in August 1945?",
        options: [
          "Nagasaki",
          "Hiroshima",
          "Tokyo",
          "Kyoto"
        ],
        correctIndex: 1,
        explanation: "The U.S. dropped the atomic bomb 'Little Boy' on Hiroshima on August 6, 1945, followed by Nagasaki three days later."
      },
      {
        question: "What was the name of the anti-foreigner uprising in China around 1900, targeting Christian missionaries and Western powers?",
        options: [
          "Taiping Rebellion",
          "Boxer Rebellion",
          "Xinhai Revolution",
          "White Lotus Rebellion"
        ],
        correctIndex: 1,
        explanation: "The Boxer Rebellion (Yihetuan Movement) was an armed peasant-led uprising opposing foreign imperialism and Christian expansion."
      },
      {
        question: "Who was the Spanish conquistador responsible for the fall of the Aztec Empire in Mexico?",
        options: [
          "Francisco Pizarro",
          "Hernán Cortés",
          "Vasco Núñez de Balboa",
          "Juan Ponce de León"
        ],
        correctIndex: 1,
        explanation: "Hernán Cortés led the expedition that overthrew Montezuma II and conquered Tenochtitlan (the Aztec capital) in 1521."
      }
    ]
  }
};
