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
      question: "Suppose list1 is [31, 53, 25, 12, 36]what is min(list1)?",  ///// Write the question inside double quotes
      answers: {
        a: "36",                  ///// Write the option 1 inside double quotes
        b: "53",                  ///// Write the option 2 inside double quotes
        c: "ERROR",                  ///// Write the option 3 inside double quotes
        d: "12"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

    {
      question: " Suppose list1 is [4, 5, 8], what is sum(list1) ? ",  ///// Write the question inside double quotes
      answers: {
        a: "17 ",                  ///// Write the option 1 inside double quotes
        b: "13",                  ///// Write the option 2 inside double quotes
        c: "15",                  ///// Write the option 3 inside double quotes
        d: "Error"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    ///// this line

    {
      question: "Which of the following data types are immutable?",
      answers: {
        a: "Tuples",
        b: "Sets",
        c: "Dictionary",
        d: "Lists"
      },
      correctAnswer: "a"
    },



    {
      question: "Which of the following commands will create a list?",
      answers: {
        a: " mylist = list()
        ,
        b: " mylist = []",
        c: "mylist = list([1, 2, 3])",
        d: "all of the mentioned"
      },
      correctAnswer: "b"
    },
    {
      question: " What will be the output of following? 
tuple = (1, 2, 3, 4)
tuple.append((5, 6, 7))
print(len(tuple))
    ",
        answers: {
      a: "1",
      b: "2",
      c: "5",
      d: "Error"
    },
    correctAnswer: "d"
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

