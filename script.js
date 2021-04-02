var startbutton = document.querySelector("#start-button");
var startScreen = document.querySelector(".start-screen");
var question = document.querySelector(".question");
startbutton.addEventListener("click", startQuiz);
function startQuiz(){
    startScreen.setAttribute("style", "display: none");
    question.classList.remove("d-none")
}