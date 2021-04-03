var startScreen = document.querySelector(".start-screen");
var question = document.querySelector(".question");

$("#start-button").on("click", function () {
    startScreen.setAttribute("style", "display: none");
    question.classList.remove("d-none")
})