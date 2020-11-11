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
      question: "Which of the following statements is true?", 
 ///// Write the question inside double quotes
      answers: {
      a: "The __init__() method is defined in the object class.",                  ///// Write the option 1 inside double quotes
      b: "The __new__() method is defined in the object class.",                  ///// Write the option 2 inside double quotes
      c: "By default, the __new__() method invokes the __init__ method.",                  ///// Write the option 3 inside double quotes
      d: "All of the above"                   ///// Write the option 4 inside double quotes
    },
    correctAnswer: "d"                ///// Write the correct option inside double quotes
    },

{
  question: "Which of the following statements is true?",
  ///// Write the question inside double quotes
  answers: {
    a: "The __new__() method automatically invokes the __init__ method",
  ///// Write the option 1 inside double quotes
  b: "The __init__ method is defined in the object class",                  ///// Write the option 2 inside double quotes
    c: "The __eq(other) method is defined in the object class",                  ///// Write the option 3 inside double quotes
    d: "The __repr__() method is defined in the object class"                   ///// Write the option 4 inside double quotes
  },
  correctAnswer: "c"                ///// Write the correct option inside double quotes
},                                  ///// To add more questions, copy the section below 
///// this line

{
  question: "Which of the following is correct?",
answers: {
  a: "def __init__(self, personName, personAge):\n\tself.name = personName\n\tself.age = personAge",
    b: "def __init__(self, personName, personAge):\n\tself.personName = personName\n\tself.personAge = personAge",
      c: "Both A and B",
        d: "None of these"
},
correctAnswer: "c"
}
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
