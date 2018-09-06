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


/* Functions defined below here */

/* Attach buttons to their handler functions here. Button id:
 BForward BBack BShow BShowQC BRemove BHideA BAddQ BHideQC */
function initButtons() {
  // Show and hide creator
  // Show and hide answer
  // Forward and back Questions
  // Remove question
  // Add question
}

/* You may want to define functions like the following to attach to buttons */

/* Takes the content from the text areas and adds
 to the quesiton list */
function addQuestion() {
  // You provide the functionality.
}
