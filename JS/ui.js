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
