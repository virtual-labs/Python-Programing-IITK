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
      question: "What is Instantiation?"
str1[3]= 's'
print(str1)
? ",  
///// Write the question inside double quotes
      answers: {
      a: "Modifying an instance of class",                  ///// Write the option 1 inside double quotes
      b: "Copying an instance of class",                  ///// Write the option 2 inside double quotes
      c: "Creating an instance of class",                  ///// Write the option 3 inside double quotes
      d: "Deleting an instance of class"                   ///// Write the option 4 inside double quotes
    },
    correctAnswer: "c"                ///// Write the correct option inside double quotes
    },

{
  question: "Class instantiation uses:
 ",
   ///// Write the question inside double quotes
  answers: {
  a: "Object notation ",                  ///// Write the option 1 inside double quotes
    b: "Function notation",                  ///// Write the option 2 inside double quotes
      c: "Class notation",                  ///// Write the option 3 inside double quotes
        d: "None of the mentioned"                   ///// Write the option 4 inside double quotes
},
correctAnswer: "b"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
///// this line

{
  question: "Special methods need to be explicitly called
  during object creation.",
  answers: {
    a: "True",
      b: "False",
  },
  correctAnswer: "b"
},



{
  question: "Which of the following keywords is used in the beginning of class definition?",
    /////
    answers: {
    a: "class"
      ,
      b: "return",
        c: "def",
          d: "All of the above"
  },
  correctAnswer: "a"
},
{
  question: " Classes are used to _______which have functions and variables.
  ",
  answers: {
    a: "Create objects",
      b: "Create functions",
        c: "Create variables",
          d: "Create constructors"
  },
  correctAnswer: "a"
},

;




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

