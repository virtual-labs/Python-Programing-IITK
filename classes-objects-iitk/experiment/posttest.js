/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function () {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


  /////////////////////////////////////////////////////////////////////////////

  /////////////////////// Do not modify the above code ////////////////////////

  /////////////////////////////////////////////////////////////////////////////






  /////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "A class is instantiated by:
      ", 
 ///// Write the question inside double quotes
      answers: {
      a: "Calling the class object",                  ///// Write the option 1 inside double quotes
      b: "Creating the class object",                  ///// Write the option 2 inside double quotes
      c: "Declaring the class",                  ///// Write the option 3 inside double quotes
      d: "None of the mentioned,"                   ///// Write the option 4 inside double quotes
    },
    correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

{
  question: "Which among the following is not a class method?",
  ///// Write the question inside double quotes
  answers: {
    a: "Static
  ",
  ///// Write the option 1 inside double quotes
  b: "Non-static",                  ///// Write the option 2 inside double quotes
    c: "Unvounded",                  ///// Write the option 3 inside double quotes
    d: "Bounded"                   ///// Write the option 4 inside double quotes
  },
  correctAnswer: "b"                ///// Write the correct option inside double quotes
},                                  ///// To add more questions, copy the section below 
///// this line

{
  question: "For declaration a = Employee(), which of the following statement is correct.
",
answers: {
  a: "You can assign an int value to a. ",
    b: "contains an int value ",
      c: "contains a reference to a Circle object",
        d: "  contains an object of the Circle type. "
},
correctAnswer: "c"
},

{
  question: "Every class in Python is derived from the class ",
    answers: {
    a: "Object",
      b: "Functions",
        c: "Methods",
          d: "Constructors"
    "
  },
  correctAnswer: "a"
},


  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener("click", showResults);
}) ();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
