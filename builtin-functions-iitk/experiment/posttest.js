/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
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
        question: "1.Which of the following functions will not result in an error when no arguments are passed to it? ",  ///// Write the question inside double quotes
        answers: {
          a: "any()",                  ///// Write the option 1 inside double quotes
          b: "float()",
          c: "max()",
          d: "divmod()"                ///// Write the option 2 inside double quotes
        },
        correctAnswer: "b"                ///// Write the correct option inside double quotes
      },
  
      {
       question: "2.What will be the output of the following code?<br>Print(len(['hii',0, 2, 4]))",  ///// Write the question inside double quotes
        answers: {
          a: "3",                  ///// Write the option 1 inside double quotes
          b: "6",
          c: "4",
          d: "Error"                  ///// Write the option 2 inside double quotes
        },
        correctAnswer: "c"                ///// Write the correct option inside double quotes
      },
      {
        question: "3.What will be displayed by print(ord(‘a’) – ord(‘b’)) ?",  ///// Write the question inside double quotes
         answers: {
           a: "1",                  ///// Write the option 1 inside double quotes
           b: "-1",                  ///// Write the option 2 inside double quotes
           c: "2",                  ///// Write the option 3 inside double quotes
           d: "0"                   ///// Write the option 4 inside double quotes
         },
         correctAnswer: "b"                ///// Write the correct option inside double quotes
       },
       {
        question: "4.What will be displayed by 'helloworld'.replace('l', 'e')?",  ///// Write the question inside double quotes
         answers: {
           a: "heelowored",                  ///// Write the option 1 inside double quotes
           b: "heeeoworld",                  ///// Write the option 2 inside double quotes
           c: "hllloworld",                  ///// Write the option 3 inside double quotes
           d: "heeeowored"                   ///// Write the option 4 inside double quotes
         },
         correctAnswer: "d"                ///// Write the correct option inside double quotes
       },
       {
        question: "5.What will be displayed by min(max(False,-2,-6), 3,5,6) ?",  ///// Write the question inside double quotes
         answers: {
           a: "2",                  ///// Write the option 1 inside double quotes
           b: "-3",                  ///// Write the option 2 inside double quotes
           c: "False",                  ///// Write the option 3 inside double quotes
           d: "-4"                   ///// Write the option 4 inside double quotes
         },
         correctAnswer: "c"                ///// Write the correct option inside double quotes
       },                                ///// To add more questions, copy the section below 
                                                            ///// this line
  
  
      /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
          till closing curly braces comma ( }, )
  
          and paste it below the curly braces comma ( below correct answer }, ) of above 
          question
  
      Copy below section
  
      {
        question: "This is question n?",
        answers: {
          a: "Option 1",
          b: "Option 2",
          c: "Option 3",
          d: "Option 4"
        },
        correctAnswer: "c"
      },
  
      Copy above section
  
      */
  
  
  
  
    ];
  
  
  
  
  /////////////////////////////////////////////////////////////////////////////
  
  /////////////////////// Do not modify the below code ////////////////////////
  
  /////////////////////////////////////////////////////////////////////////////
  
  
    // display quiz right away
    buildQuiz();
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
  })();
  
  
  /////////////////////////////////////////////////////////////////////////////
  
  /////////////////////// Do not modify the above code ////////////////////////
  
  /////////////////////////////////////////////////////////////////////////////