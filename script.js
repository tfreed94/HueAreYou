var startScreen = document.querySelector(".start-screen");
var question = document.querySelector(".question");
var currentTitle = document.querySelector(".title")
var btnA = document.querySelector(".buttonA")
var btnB = document.querySelector(".buttonB")
var btnC = document.querySelector(".buttonC")
var btnD = document.querySelector(".buttonD")
var purple = 'https://www.thecolorapi.com/id?hex=5D57CE&rgb=93,87,206&hsl=243,55%,57%&cmyk=55,58,0,19';
var cyan = 'https://www.thecolorapi.com/id?&hex=00FFFF';
var green = 'https://www.thecolorapi.com/id?&hex=9AE34A';
var red = 'https://www.thecolorapi.com/id?&hex=DA1E51';

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
var counterB = 0;
var counter = 0;
$("#start-button").on("click", function () {
    startScreen.setAttribute("style", "display: none");
    question.classList.remove("d-none")
    askQuestions();
})
$(".buttonA").on("click", function () {
    counter = counter + 1;
    var mltplChoice = $(".buttonB").textContent = "Choice"
    var score = $(this).attr("data-score-A");
    localStorage.setItem(mltplChoice, score)
    askQuestions()
})
$(".buttonB").on("click", function () {
    counter = counter + 1;
    var mltplChoice = $(".buttonB").textContent = "Choice"
    var score = $(this).attr("data-score-B");
    localStorage.setItem(mltplChoice, score)
    askQuestions()
})
$(".buttonC").on("click", function () {
    counter = counter + 1;
    var mltplChoice = $(".buttonC").textContent = "Choice"
    var score = $(this).attr("data-score-C");
    localStorage.setItem(mltplChoice, score)
    askQuestions()
})
$(".buttonD").on("click", function () {
    counter = counter + 1;
    var mltplChoice = $(".buttonD").textContent = "Choice"
    var score = $(this).attr("data-score-D");
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
    if (counter !== 5) {
        currentTitle.textContent = questions[counter].title;
        for (var i = 0; i < btnArray.length; i++) {
            btnArray[i].textContent = questions[counter].choices[i];
        }
    }
    else {
        yourColor();
        return;
    }
};

function yourColor() {
    var colorScreen = document.querySelector(".color-screen")
    question.classList.add("d-none")
    colorScreen.classList.remove("d-none");
    var plans = localStorage.getItem("Choice")
    if (plans == 1) {
        fetch(green)
            .then(function (response) {
                console.log("fetch");
                return response.json()
            }).then(function (data) {
                console.log(data.hex.value)
                var hex = data.hex.value;
                var rgb = data.rgb.value;
                $("body").css("background-color", hex);
                $(".li1").text(hex);
                $(".li2").text(rgb);
            })
            .catch(function () {
            });

    } else if (plans == 2) {
        fetch(purple)
            .then(function (response) {
                console.log("fetch");
                return response.json()
            }).then(function (data) {
                console.log(data.hex.value)
                var hex = data.hex.value;
                var rgb = data.rgb.value;
                $("body").css("background-color", hex);
                $(".li1").text(hex);
                $(".li2").text(rgb);
            })
            .catch(function () {
            });

    } else if (plans == 3) {
        fetch(cyan)
            .then(function (response) {
                console.log("fetch");
                return response.json()
            }).then(function (data) {
                console.log(data.hex.value)
                var hex = data.hex.value;
                var rgb = data.rgb.value;
                $("body").css("background-color", hex);
                $(".li1").text(hex);
                $(".li2").text(rgb);
            })
            .catch(function () {
            });

    } else if (plans == 4)
        fetch(red)
            .then(function (response) {
                console.log("fetch");
                return response.json()
            }).then(function (data) {
                console.log(data.hex.value)
                var hex = data.hex.value;
                var rgb = data.rgb.value;
                $("body").css("background-color", hex);
                $(".li1").text(hex);
                $(".li2").text(rgb);
            })
            .catch(function () {
            });
}

var requestUrl = 'https://www.thecolorapi.com/id?hex=5D57CE&rgb=93,87,206&hsl=243,55%,57%&cmyk=55,58,0,19';
$("#button").on("click", function () {
    console.log("clicked");
    fetch(requestUrl)
        .then(function (response) {
            console.log("fetch");
            return response.json()
        }).then(function (data) {
            console.log(data.hex.value)
            var hex = data.hex.value;
            var rgb = data.rgb.value;
            $("body").css("background-color", hex);
            $(".li1").text(hex);
            $(".li2").text(rgb);
        })
        .catch(function () {
        });
})