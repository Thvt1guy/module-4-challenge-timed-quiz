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
var correct = document.querySelectorAll('.correct');
var timerInt;

var userScore = 0;
var questionCount = 0;



//question 1 needs to appear
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


function questionTraverse(){
    if (questionCount === 1){
        quest1.style.display = "none";
        quest2.style.display = "initial";
    } else if (questionCount === 2){
        quest2.style.display = "none";
        quest3.style.display = "initial";
    } else if (questionCount === 3){
        quest3.style.display = "none";
        quest4.style.display = "initial";
    } else if (questionCount === 4){
        quest4.style.display = "none";
        quest5.style.display = "initial";
    } else {
        quizEnd();
    }
}

function answerButtonClick(event){
    console.log(questionCount);
    // console.log(event.target);
    //check and see if target button has the correct class?
    if (event.target.classList.contains('correct')){
        userScore++;
        // console.log('User Score: ' + userScore);
        // console.log('question count: ' + questionCount);
    } else {
        timeLeft -= 10;
    }
    console.log('running after')
    //if button has correct class, add +1 to score.
    //add +1 to questionCount
    //use questCount var to hide existing quest and display next
    //check if quest = to max number of quest if so run quizend funct.
    //then would need to update to see if user wins/loses.
    
    questionTraverse();

    questionCount++;
}

function startButtonClick(event) {
    event.preventDefault();
    console.log('start button clicked');
    questionCount++;
    homePage.style.display = 'none';
    //question appears
    quest1.style.display = 'initial';
    timerDiv.style.display = 'initial';
    timeLeft = 60;
    timerInt = setInterval(function(){
        timeLeft--;
        timeLeftEl.textContent = timeLeft;
        if (timeLeft <= 0){
            quizEnd();
        }
    },1000);
}



function quizEnd(){
    clearInterval(timerInt);
    setAllNone();
    var userData = JSON.parse(localStorage.getItem('storedScore')) ?? [];
    var orderedLi = document.createElement('ol');
    var scoresEl = document.getElementById('scores');
    for (var i = 0; i < userData.length; i++) {
        var listItem = document.createElement('li');

        listItem.textContent = userData[i].name;

        orderedLi.append(listItem);
      }


    var userInit = prompt('Score: ' + userScore + ' Enter initials below: ');
    var userObj = {
        name: userInit,
        score: userScore
    }

    userData.push(userObj);

    localStorage.setItem('storedScore', JSON.stringify(userData));
    scoresEl.append(orderedLi);
}