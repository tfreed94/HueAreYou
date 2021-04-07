var startScreen = document.querySelector(".start-screen");
var question = document.querySelector(".question");
var currentTitle =document.querySelector(".title")
var currentQuestion = [];
var btnA = document.querySelector(".buttonA")
var btnB = document.querySelector(".buttonB")
var btnC = document.querySelector(".buttonC")
var btnD = document.querySelector(".buttonD")

var questions = [
    {
        title: "If you were a tree, what kind of tree would you be?",
        choices: ["Birch", "Pine", "Ironwood", "Weeping willow"],
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
var currentQuestion = 0;
$("#start-button").on("click", function () {
    startScreen.setAttribute("style", "display: none");
    question.classList.remove("d-none")
    askQuestions();
})
$(".buttonA").on("click", function(){
    currentQuestion++;
    var mltplChoice =  $(".buttonA").parent().attr("1")
    var score = $(".buttonA").siblings(".btn").val();
    localStorage.setItem(mltplChoice, score)
    askQuestions()
})
$(".buttonB").on("click", function(){
    currentQuestion++;
    var mltplChoice =  $(".buttonB").parent().attr("2")
    var score = $(".buttonB").siblings(".btn").val();
    localStorage.setItem(mltplChoice, score)
    askQuestions()
})
$(".buttonC").on("click", function(){
    currentQuestion++;
    var mltplChoice =  $(".buttonC").parent().attr("3")
    var score = $(".buttonC").siblings(".btn").val();
    localStorage.setItem(mltplChoice, score)
    askQuestions()
})
$(".buttonD").on("click", function(){
    currentQuestion++;
    var mltplChoice =  $(".buttonD").parent().attr("4")
    var score = $(".buttonD").siblings(".btn").val();
    localStorage.setItem(mltplChoice, score)
    askQuestions()
})

var btnArray = [];
btnArray.push(btnA)
btnArray.push(btnB)
btnArray.push(btnC)
btnArray.push(btnD)

console.log(questions[0].choices)
function askQuestions() {
    currentTitle.textContent = questions[currentQuestion].title;
    for (var i = 0; i < btnArray.length; i++) {
    btnArray[i].textContent = questions[currentQuestion].choices[i];
    }
};