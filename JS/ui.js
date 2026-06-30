let navigator = document.querySelector(".navigator-container");
let questionNavigator = document.querySelector(".question-container");
let optionNavigator = document.querySelector(".options-container");


function renderQuestions(){
    questionNavigator.innerHTML = "";

    let question = questions[currentQuestionIndex];

    if(currentQuestionIndex === 0){
        prevBtn.style.display = "none";
    }
    else{
        prevBtn.style.display = "inline-block";
    }

    if(currentQuestionIndex === questions.length-1){
        nextBtn.textContent = "Finish";
    }
    else{
        nextBtn.textContent = "Next";
    }

   questionNavigator.innerHTML += `<div class="question">
                                        <h3>${question.question}</h3>
                                    </div>`;

    updateProgress();
}

function renderOptions(){
    optionNavigator.innerHTML = "";

    let question = questions[currentQuestionIndex];
    let savedAnswer = selectedAnswers[currentQuestionIndex];

    question.options.forEach(function(option){
        let checked = "";
        if(savedAnswer === option){
            checked = "checked";
        }

        optionNavigator.innerHTML += `<div class="option">
                                        <input type="radio" name="option" value="${option}" ${checked}>
                                        <label>${option}</label>
                                     </div>`;
    });

    let radioButtons = document.querySelectorAll("input[name='option']");

    radioButtons.forEach(function(radio){
        radio.addEventListener("change" , function(){
            selectedAnswers[currentQuestionIndex] = `${radio.value}`;
        });
    })
}

function renderNavigator(){

    navigator.innerHTML = "";

    questions.forEach(function(question , index){

        let bgColor = "white";
        let textColor = "black";

        if(selectedAnswers[index]){
            bgColor = "lightgreen";
        }

        if(reviewQuestions[index]){
            bgColor = "yellow";
        }

        if(index === currentQuestionIndex){
            bgColor = "black";
            textColor = "white";
        }

        navigator.innerHTML += `
            <div class="question-number"
                 style="background-color:${bgColor};
                        color:${textColor};">
                <span>${index + 1}</span>
            </div>`;
    });

    let questionNumbers =
    document.querySelectorAll(".question-number");

    questionNumbers.forEach(function(questionNumber , index){

        questionNumber.addEventListener("click" , function(){

            currentQuestionIndex = index;

            renderNavigator();
            renderQuestions();
            renderOptions();

        });

    });

}


let summaryScreen = document.querySelector("#summary-screen");

let attemptedCount =
document.querySelector("#attemptedCount");

let unattemptedCount =
document.querySelector("#unattemptedCount");

let reviewCount =
document.querySelector("#reviewCount");

let submitQuizBtn =
document.querySelector("#submitQuizBtn");

function showSummary(){
    let attempted = Object.keys(selectedAnswers).length;
    let reviewed = Object.keys(reviewQuestions).length;

    let unattempted = questions.length - attempted;

    attemptedCount.textContent = attempted;

    reviewCount.textContent = reviewed;

    unattemptedCount.textContent = unattempted;

    quizScreen.style.display = "none";

    summaryScreen.style.display = "flex";
}

let resultScreen =
document.querySelector("#result-screen");

let scoreValue =
document.querySelector("#scoreValue");

let percentageValue =
document.querySelector("#percentageValue");

let correctValue =
document.querySelector("#correctValue");

let wrongValue =
document.querySelector("#wrongValue");

let reattemptBtn =
document.querySelector("#reattemptBtn");

function calculateResult(){
    let score = 0;

    questions.forEach(function(question , index){
        if(selectedAnswers[index] === question.answer){
            score++;
        }
    })

    let percentage = ((score/questions.length)*100).toFixed(2);
