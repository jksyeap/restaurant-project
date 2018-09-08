/* Global variables just for easy practice */

// An array of objects containing questions and answers
questions = [
  {
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language."
  },
  {
    question: "Give the selector and rule to color all paragraph text blue.",
    answer: "p {color: blue;}"
  },
  {
    question:
      "How are heading elements similar and different from the header element?",
    answer:
      "the header element is a container and can contain multiple elements. In addition it is good and commont practice to include a heading element within a header element."
  },
  {
    question:
      "When would you want to use an article element and when would this generally not be necessary?",
    answer: "To be written..."
  }
];

// Initial question to display
qIndex = 0;

// Set up variables to hold element references

// Example of variables and initialization
qCountSpan = document.getElementById("qCount");
qIndexSpan = document.getElementById("qIndex");
// Initialize content
qCountSpan.innerHTML = questions.length;
qIndexSpan.innerHTML = qIndex + 1;

// initialize buttons
initButtons();
displayQuestion();
toggleQCreator();
toggleAnswer();

/* Functions defined below here */

/* Attach buttons to their handler functions here. Button id:
 BForward BBack BShow BShowQC BRemove BHideA BAddQ BHideQC */
function initButtons() {
  document.getElementById("BShowQC").addEventListener("click",toggleQCreator); // Show and hide creator
  document.getElementById("BHideQC").addEventListener("click",toggleQCreator);
  document.getElementById("BShow").addEventListener("click",toggleAnswer);     // Show and hide answer
  document.getElementById("BHideA").addEventListener("click",toggleAnswer);
  document.getElementById("BForward").addEventListener("click",forward);       // Forward and back Questions
  document.getElementById("BBack").addEventListener("click",back);
  document.getElementById("BRemove").addEventListener("click",removeQuestion); // Remove question
  document.getElementById("BAddQ").addEventListener("click",addQuestion);      // Add question
}

/* You may want to define functions like the following to attach to buttons */

/* Takes the content from the text areas and adds to the quesiton list */
function addQuestion() {
  let temp = {question:"", answer:""};
  let questionArea = document.getElementById("Question");
  let answerArea = document.getElementById("Answer");
  temp.question = questionArea.value;
  temp.answer = answerArea.value;
  questions.push(temp);
  questionArea.value = "";
  answerArea.value = "";
  qCountSpan.innerHTML = questions.length;
  if(qIndex == -1) 
  {
    qIndex = 0;
    qIndexSpan.innerHTML = qIndex + 1;
    displayQuestion();
  }
}

function removeQuestion() {
  
  if(questions.length > 0) 
  {
    if(qIndex+1 == questions.length)
    {
      qIndex = qIndex - 1;
      qIndexSpan.innerHTML = qIndex + 1;
    }
    questions.splice(qIndex,1);
    qCountSpan.innerHTML = questions.length;
    displayQuestion();
  }
}

function displayQuestion() {
  let questionDiv = document.getElementById("contentQ");
  let answerDiv = document.getElementById("contentA");
  let questionP = document.createElement("p");
  let answerP = document.createElement("p");
  if(questionDiv.hasChildNodes()) {questionDiv.removeChild(questionDiv.childNodes[0]);}
  if(answerDiv.hasChildNodes()) {answerDiv.removeChild(answerDiv.childNodes[0]);}
  questionDiv.appendChild(questionP);
  answerDiv.appendChild(answerP);
  questionP.innerHTML = questions[qIndex].question;
  answerP.innerHTML = questions[qIndex].answer;
}

function toggleQCreator() {
  let questionCreator = document.getElementById("QCreator");
  if(questionCreator.classList.length == 0)
  {
    questionCreator.classList.add("hideStuff");
    return;
  }
  let check = questionCreator.classList.toggle("showStuff");
  //if(check == true) {document.getElementById("BShowQC").removeEventListener("click",toggleQCreator);}
  //else {document.getElementById("BShowQC").addEventListener("click",toggleQCreator);}
}

function forward() {
  qIndex = (qIndex + 1) % questions.length;
  displayQuestion();
  qIndexSpan.innerHTML = qIndex + 1;
}

function back() {
  qIndex = qIndex - 1;
  if(qIndex == -1) {qIndex = questions.length - 1;}
  displayQuestion();
  qIndexSpan.innerHTML = qIndex + 1;
}

function toggleAnswer() {
  let answerDiv = document.getElementById("contentA");
  let hideAnswerButton = document.getElementById("BHideA");
  if(answerDiv.classList.length == 0)
  {
    answerDiv.classList.add("hideAnswer");
    hideAnswerButton.classList.add("hideAnswer");
    return;
  }
  let check = answerDiv.classList.toggle("showAnswer");
  hideAnswerButton.classList.toggle("showAnswer");
  //if(check == true) {document.getElementById("BShow").removeEventListener("click",toggleAnswer);}
  //else {document.getElementById("BShow").addEventListener("click",toggleAnswer);}
}