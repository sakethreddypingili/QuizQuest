let currentQuestionIndex = 0;
let selectedAnswers = {};
let reviewQuestions = {};

let totalTime = 90*60;
let timerId;

let chart;

const questions = [
{
    question:"Which method is used to select an element by its id?",
    options:[
        "getElementById()",
        "querySelectorAll()",
        "getElementsByClassName()",
        "findElement()"
    ],
    answer:"getElementById()"
},
{
    question:"Which method returns the first matching element?",
    options:[
        "querySelector()",
        "querySelectorAll()",
        "getElementsByTagName()",
        "matchSelector()"
    ],
    answer:"querySelector()"
},
{
    question:"What property is used to change the HTML content of an element?",
    options:[
        "innerHTML",
        "textContent",
        "value",
        "appendChild"
    ],
    answer:"innerHTML"
},
{
    question:"Which method adds a class to an element?",
    options:[
        "classList.add()",
        "classList.push()",
        "classList.append()",
        "classList.insert()"
    ],
    answer:"classList.add()"
},
{
    question:"Which method creates a new HTML element?",
    options:[
        "createElement()",
        "appendChild()",
        "newElement()",
        "buildElement()"
    ],
    answer:"createElement()"
},
{
    question:"Which event occurs when a button is clicked?",
    options:[
        "click",
        "hover",
        "keypress",
        "change"
    ],
    answer:"click"
},
{
    question:"Which method is used to attach an event listener?",
    options:[
        "addEventListener()",
        "attachEvent()",
        "listenEvent()",
        "registerEvent()"
    ],
    answer:"addEventListener()"
},
{
    question:"Which method prevents default browser behavior?",
    options:[
        "preventDefault()",
        "stopPropagation()",
        "stopDefault()",
        "cancelEvent()"
    ],
    answer:"preventDefault()"
},
{
    question:"Which function executes repeatedly after a fixed interval?",
    options:[
        "setInterval()",
        "setTimeout()",
        "repeat()",
        "loop()"
    ],
    answer:"setInterval()"
},
{
    question:"Which array method adds an element at the end?",
    options:[
        "push()",
        "pop()",
        "shift()",
        "unshift()"
    ],
    answer:"push()"
},
{
    question:"Which array method removes the last element?",
    options:[
        "pop()",
        "push()",
        "shift()",
        "splice()"
    ],
    answer:"pop()"
},
{
    question:"Which array method creates a new array by transforming each element?",
    options:[
        "map()",
        "filter()",
        "reduce()",
        "forEach()"
    ],
    answer:"map()"
},
{
    question:"What keyword is used to declare a block-scoped variable?",
    options:[
        "let",
        "var",
        "static",
        "define"
    ],
    answer:"let"
},
{
    question:"Which keyword declares a constant variable?",
    options:[
        "const",
        "let",
        "var",
        "fixed"
    ],
    answer:"const"
},
{
    question:"A closure gives access to:",
    options:[
        "Outer scope variables",
        "Only local variables",
        "Global variables only",
        "DOM elements only"
    ],
    answer:"Outer scope variables"
},
{
    question:"What is hoisting in JavaScript?",
    options:[
        "Moving declarations to the top",
        "Moving functions to the bottom",
        "Removing variables",
        "Creating closures"
    ],
    answer:"Moving declarations to the top"
},
{
    question:"Which variable type is hoisted and initialized as undefined?",
    options:[
        "var",
        "let",
        "const",
        "all"
    ],
    answer:"var"
},
{
    question:"Which storage persists even after closing the browser?",
    options:[
        "localStorage",
        "sessionStorage",
        "cookies",
        "memoryStorage"
    ],
    answer:"localStorage"
},
{
    question:"Which method stores data in localStorage?",
    options:[
        "setItem()",
        "addItem()",
        "pushItem()",
        "saveItem()"
    ],
    answer:"setItem()"
},
{
    question:"Which keyword is used with Promises for cleaner asynchronous code?",
    options:[
        "await",
        "yield",
        "pause",
        "wait"
    ],
    answer:"await"
},
{
    question:"Which method converts JSON string into JavaScript object?",
    options:[
        "JSON.parse()",
        "JSON.stringify()",
        "parseJSON()",
        "convertJSON()"
    ],
    answer:"JSON.parse()"
},
{
    question:"How do you access object property 'name'?",
    options:[
        "obj.name",
        "obj->name",
        "obj:name",
        "name.obj"
    ],
    answer:"obj.name"
},
{
    question:"Which loop is commonly used to iterate object properties?",
    options:[
        "for...in",
        "for...of",
        "while",
        "do...while"
    ],
    answer:"for...in"
},
{
    question:"Which keyword creates a class in ES6?",
    options:[
        "class",
        "object",
        "prototype",
        "constructor"
    ],
    answer:"class"
},
{
    question:"Which keyword refers to the current object?",
    options:[
        "this",
        "self",
        "current",
        "object"
    ],
    answer:"this"
}