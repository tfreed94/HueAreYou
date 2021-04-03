var startScreen = document.querySelector(".start-screen");
var question = document.querySelector(".question");
var currentTitle = $(".title")
var currentQuestion = 0
var btnA = $(".buttonA")
var btnB = $(".buttonB")
var btnC = $(".buttonC")
var btnD = $(".buttonD")
var btnArray = [ ]

var questions = [
    {
        title: "If you were a tree, what kind of tree would you be?",
        choices: ["birch", "pine", "ironwood", "weeping willow"],
    },
    {
        title: "if you accidentally bought 5 pounds of potatoes instead of just five potatoes, what would you do?",
        choices: ["Make the world's largest vat of mashed potatoes", "Donate the leftover potatoes", "Try to make ever potato dish ever", "Contemplate your life choices while staring at a mountain of potatoes"],
    },
    {
        title: "Pick your favorite bad pickup line.",
        choices: ["If people were boogers, I'd pick you first", "You know, I'm not really this tall. I'm just sitting on my wallet.", "If you were a President, You'd be Babe-Raham Lincoln", "Hey, My name's Microsoft. Can I crash at your place tonight?"],
    },
    {
        title: "Pick your favorite boat name.",
        choices: ["Ship Happens", "Water U lookin At", "Bullship", "Error 404: Fish Not Found"]
    },
    {
        title: "Pick an Animal.",
        choices: ["Coatimundi", "Tasmanian Devil", "Kinkajou", "Binturong"],
    },
]

$("#start-button").on("click", function () {
    startScreen.setAttribute("style", "display: none");
    question.classList.remove("d-none")
})

function askQuestions() {
     currentTitle.textContent = questions[currentQuestion].title;
    //  questionH.append(askTitle);
    for (var i = 0; i < buttonArray.length; i++) {
     buttonArray[i].textContent=questions[currentQuestion].choices[i];
    }
  };