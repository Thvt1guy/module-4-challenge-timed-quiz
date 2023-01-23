//declaring variables
var button = document.querySelector(".button");
var headingText = document.querySelector(".heading");
var questionText = document.querySelector(".question");
var buttonMade;


button.addEventListener("click", buttonClick);

function buttonClick(event) {
    headingText.textContent = "Question 1.";
    questionText.textContent = "What does HTML stand for?";
    
    event.preventDefault();

    button.remove();
    // deletes the start button and makes 4 buttons for user answers.
    for (var i = 0; i < 4; i++) {
        
        buttonMade = document.createElement("button");

        document.body.appendChild(buttonMade);
        
        buttonMade.textContent = "Choice";
        // Now I have 4 new buttons, I need a way to tell them apart.
    }
    
    document.body.children[5].setAttribute("id", "button1");
    document.body.children[6].setAttribute("id", "button2");
    document.body.children[7].setAttribute("id", "button3");
    document.body.children[8].setAttribute("id", "button4");
    //gives the new buttons i made separate ids

    var choice1 = document.body.querySelector("#button1");
    var choice2 = document.body.querySelector("#button2");
    var choice3 = document.body.querySelector("#button3");
    var choice4 = document.body.querySelector("#button4");
    //connect html elements to javascript dom objects

    choice1.textContent = "Hypertext Markup Language";
    choice2.textContent = "Hot Tea Milk and Leisure";
    choice3.textContent = "How To Make Logos";
    choice4.textContent = "None of the above";
    // when i click any button i need to go to question 2
    
    function question2(event) {
        event.preventDefault();
        headingText.textContent = "Question 2.";
        questionText.textContent = "What does CSS stand for?";

        choice1.textContent = "It doesn't stand for anything";
        choice2.textContent = "Cranking Serious Solutions";
        choice3.textContent = "Cascading Style Sheets";
        choice4.textContent = "Cool Socks Society";
        console.log("question2");
    
    }
    
    choice1.addEventListener("click", question2);
    choice2.addEventListener("click", question2);
    choice3.addEventListener("click", question2);
    choice4.addEventListener("click", question2);
    
    
    function question3(event) {
        event.preventDefault();
        headingText.textContent = "Question 3.";
        questionText.textContent = "which is an example of a HTML tag/element?";

        choice1.textContent = "<p>";
        choice2.textContent = "(p)";
        choice3.textContent = "[p]";
        choice4.textContent = "{p}";
        console.log("question3");
    }

    choice1.addEventListener("click", question3);
    choice2.addEventListener("click", question3);
    choice3.addEventListener("click", question3);
    choice4.addEventListener("click", question3);
    
    function question4(event) {
        event.preventDefault();
        headingText.textContent = "Question 4.";
        questionText.textContent = "";
        
        choice1.textContent = " ";
        choice2.textContent = " ";
        choice3.textContent = " ";
        choice4.textContent = " ";
        console.log("question4");   
    }
    choice1.addEventListener("click", question4);
    choice2.addEventListener("click", question4);
    choice3.addEventListener("click", question4);
    choice4.addEventListener("click", question4);
}
