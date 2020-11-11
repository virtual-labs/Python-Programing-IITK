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
      question: "What is the output of the following code?[C]
str1="Virtual PythonLab"
str1[3]= 's'
print(str1)
? ",  
///// Write the question inside double quotes
      answers: {
      a: "Virtual Python Lab",                  ///// Write the option 1 inside double quotes
      b: "Virtual",                  ///// Write the option 2 inside double quotes
      c: "Error",                  ///// Write the option 3 inside double quotes
      d: "Virsual Python Lab"                   ///// Write the option 4 inside double quotes
    },
    correctAnswer: "c"                ///// Write the correct option inside double quotes
    },

  {
    question: " What is the Output of the given string "
  str1="Virtual"
str2="Python"
str3=str1 + str2
print(len(str3)),  ///// Write the question inside double quotes
  answers: {
  a: "10 ",                  ///// Write the option 1 inside double quotes
    b: "11",                  ///// Write the option 2 inside double quotes
      c: "12",                  ///// Write the option 3 inside double quotes
        d: "13"                   ///// Write the option 4 inside double quotes
},
correctAnswer: "d"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
///// this line

{
  question: "What arithmetic operators cannot be used with strings?",
    answers: {
    a: "+",
      b: "*",
        c: "-",
          d: "All of the mentioned"
  },
  correctAnswer: "a"
},



{
  question: "What is the output of "virtual"+1+2+"python"?",
    answers: {
    a: "vitual3python
      ,
      b: "Error",
        c: "virtual12python",
          d: "virtualpython"
  },
  correctAnswer: "b"
},
{
  question: "5 If y="123" what will be the the return type of type(y)?
  ",
  answers: {
    a: str,
      b: "int",
        c: "bool",
          d: "String"
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

