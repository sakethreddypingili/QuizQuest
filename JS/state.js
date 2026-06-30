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
