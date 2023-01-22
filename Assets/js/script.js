//declaring variables
var button = document.querySelector(".button");
var headingText = document.querySelector(".heading");
var questionText = document.querySelector(".question");
// var newButton = "button";
var buttonMade;

button.addEventListener("click", buttonClick);

function buttonClick(event){
    headingText.textContent = "Question 1.";
    questionText.textContent = "What does HTML stand for?";
    // button.textContent = "Correct Answer.";
    event.preventDefault();

    button.remove();
    // deletes the start button and makes 4 buttons for user answers.
    for (var i = 0; i < 4; i++){
        // var buttonMade = document.createElement(newButton);
        /*var */ buttonMade = document.createElement("button");
        
        document.body.appendChild(buttonMade);
        // document.body.appendChild("button");
        buttonMade.textContent = "Choice";
        // Now I have 4 buttons, I need a way to tell them apart.
    }
    // buttonMade.setAttribute("id","button");
    document.body.children[5].setAttribute("id","button1");
    document.body.children[6].setAttribute("id","button2");
    document.body.children[7].setAttribute("id","button3");
    document.body.children[8].setAttribute("id","button4");

    var choice1 = document.body.querySelector("#button1");
    var choice2 = document.body.querySelector("#button2");
    var choice3 = document.body.querySelector("#button3");
    var choice4 = document.body.querySelector("#button4");

    choice1.textContent = "Hypertext Markup Language";
    choice2.textContent = "Hot Tea Milk and Leisure";
    choice3.textContent = "How To Make Logos";
    choice4.textContent = "None of the above";

        choice1.addEventListener("click", function question1Choice1(event){
        event.preventDefault();
        headingText.textContent = "Question 2.";
        questionText.textContent = "What does CSS stand for?";

        choice1.textContent = "It doesn't stand for anything";
        choice2.textContent = "Cranking Serious Solutions";
        choice3.textContent = "Cascading Style Sheets";
        choice4.textContent = "Cool Socks Society";
    })
}

