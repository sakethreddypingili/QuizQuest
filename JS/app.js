let startBtn = document.querySelector("#startBtn");
let welcomeScreen = document.querySelector("#welcome-screen");
let instructionScreen = document.querySelector("#instruction-screen");
let quizScreen = document.querySelector("#quiz-screen");
let beginTest = document.querySelector("#beginQuizBtn");

let nextBtn = document.querySelector("#nextBtn");
let prevBtn = document.querySelector("#prevBtn");
let reviewBtn = document.querySelector("#reviewBtn");

let reviewQuestion = document.querySelector(".reviewQuestion");

startBtn.addEventListener("click" , function(){
    welcomeScreen.style.display = "none";
    instructionScreen.style.display = "flex"; 
    /* why flex instead of block? 
    because we want to center the content of instruction screen and for that we have used flexbox in CSS because when we use block it will override our screen class css and the content will not be centered so we have used flex here to center the content of instruction screen 
    */
});

beginTest.addEventListener("click" , function(){

    instructionScreen.style.display = "none";
    quizScreen.style.display = "flex";

    startTimer();
});

renderNavigator();
renderQuestions();
renderOptions();

nextBtn.addEventListener("click" , function(){
    if(currentQuestionIndex < questions.length-1){
        currentQuestionIndex++;
        renderNavigator();
        renderQuestions();
        renderOptions();
    }
    else{
        showSummary();
    }
})

prevBtn.addEventListener("click" , function(){
    if(currentQuestionIndex > 0){
        currentQuestionIndex--;
