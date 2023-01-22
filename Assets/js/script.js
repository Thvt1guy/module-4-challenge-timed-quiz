//declaring variables
var button = document.querySelector(".button");
var headingText = document.querySelector(".heading");
var questionText = document.querySelector(".question");
var newButton = "button";

button.addEventListener("click", buttonClick);

function buttonClick(event){
    headingText.textContent = "Question 1.";
    questionText.textContent = "What is a HTML document?";
    button.textContent = "Correct Answer.";
    event.preventDefault();

    // deletes the start button and makes 4 buttons for user answers.
    for (var i = 0; i < 4; i++){
        button.remove();
        var buttonMade = document.createElement(newButton);
        
        document.body.appendChild(buttonMade);
        buttonMade.textContent = "Choice";
    }
}



