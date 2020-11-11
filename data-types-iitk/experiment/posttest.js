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
      question: "What will be the output of the following?  
fruits =['apples', 'guava', 'bananas']
oranges = (4, 3)
fruits.append(oranges)
print(fruits)", 
 ///// Write the question inside double quotes
      answers: {
      a: "['apples', 'guava', 'bananas', (4, 3)",                  ///// Write the option 1 inside double quotes
      b: "Ledger can be viewed by anyone. ['apples', 'guava', 'bananas', 4, 3]",                  ///// Write the option 2 inside double quotes
      c: "['apples', 'guava', 'bananas', [4, 3]",                  ///// Write the option 3 inside double quotes
      d: " ['apples', 'guava', 'bananas'], (4, 3)"                   ///// Write the option 4 inside double quotes
    },
    correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

{
  question: "If mylist is [0, 3, 2, 5]  then,          [C]
     what is mylist * 2?",
       ///// Write the question inside double quotes
      answers: {
  a: "[0, 6, 4, 10]. 
  ",
  ///// Write the option 1 inside double quotes
  b: "[0, 3, 2, 5, 0, 3] ",                  ///// Write the option 2 inside double quotes
    c: ". [0, 3, 2, 5, 0, 3, 2, 5]",                  ///// Write the option 3 inside double quotes
      d: "[0, 3, 2, 5, 5, 3, 2, 1]"                   ///// Write the option 4 inside double quotes
},
correctAnswer: "c"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
///// this line

{
  question: "What will be the output of the following ?   [B]
  list1 = [0, 2, 7, 4, 5]
  print(list1[3: 0: -1])
  ",
  answers: {
    a: " Syntax error",
      b: " [4, 7, 2]",
        c: "[4,7]",
          d: " [4, 7, 2,0] "
  },
  correctAnswer: "b"
},

{
  question: "What will be the output?

  d1 = { "james": 40, "peter": 45 }
  d2 = { "james": 466, "peter": 45 }
  d1 > d2
  ",
  answers: {
    a: "True",
      b: "False",
        c: "Error",
          d: "None"
  },
  correctAnswer: "b"
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
