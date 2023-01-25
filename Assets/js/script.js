 var homePage = document.querySelector('#homePage');

var startButton = document.querySelector('.start-btn');
var timerDiv = document.querySelector('.timerDiv');
var timeLeftEl = document.querySelector('#timer');
var timeLeft = 0;
var quest1 = document.querySelector('#quest1');
var quest2 = document.querySelector('#quest2');
var quest3 = document.querySelector('#quest3');
var quest4 = document.querySelector('#quest4');
var quest5 = document.querySelector('#quest5');
var answerButtons = document.querySelectorAll('.answer');
var timerInt;

var userScore = 0;
var questionCount = 0;


//queastion 1 needs to appear
function setAllNone() {
    timerDiv.style.display = 'none';
    quest1.style.display = "none";
    quest2.style.display = "none";
    quest3.style.display = "none";
    quest4.style.display = "none";
    quest5.style.display = "none";
}

setAllNone();


startButton.addEventListener("click", startButtonClick);

for(var i = 0; i < answerButtons.length; i++){
    answerButtons[i].addEventListener('click', answerButtonClick);
}

function answerButtonClick(event){
    console.log(event.target);
    //check and see if target button has the correct class?
    //if button has correct class, add +1 to score.
    //add +1 to questionCount
    //use questCount var to hide existing quest and display next
    //check if quest = to max number of quest if so run quizend funct.
    //then would need to update to see if user wins/loses.
}

function startButtonClick(event) {
    event.preventDefault();
    console.log('start button clicked');
    
    homePage.style.display = 'none';
    //question appears
    quest1.style.display = 'initial';
    timerDiv.style.display = 'initial';
    timeLeft = 30;
    questionCount = 0;
    timerInt = setInterval(function(){
        timeLeft--;
        timeLeftEl.textContent = timeLeft;
        if (timeLeft === 0){
            quizEnd();
        }
    },1000);
}

function quizEnd(){
    clearInterval(timerInt);
    setAllNone();
}