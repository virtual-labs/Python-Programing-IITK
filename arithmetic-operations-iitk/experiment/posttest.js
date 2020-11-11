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
        question: "1.Is Python a case sensitive language?",  ///// Write the question inside double quotes
        answers: {
          a: "No",                  ///// Write the option 1 inside double quotes
          b: "Yes"                 ///// Write the option 2 inside double quotes
        },
        correctAnswer: "b"                ///// Write the correct option inside double quotes
      },
  
      {
       question: "2.What will be the output of the following code?<br>x= 2,7<br>Print(x)",  ///// Write the question inside double quotes
        answers: {
          a: "2",                  ///// Write the option 1 inside double quotes
          b: "7",
          c: "(2,7)",
          d: "Error"                  ///// Write the option 2 inside double quotes
        },
        correctAnswer: "c"                ///// Write the correct option inside double quotes
      },
      {
        question: "3.What will be the output of the following code?<br>x=5.5<br>y=5.5<br>Print(x+y)",  ///// Write the question inside double quotes
         answers: {
           a: "11",                  ///// Write the option 1 inside double quotes
           b: "11.0",                  ///// Write the option 2 inside double quotes
           c: "10",                  ///// Write the option 3 inside double quotes
           d: "0"                   ///// Write the option 4 inside double quotes
         },
         correctAnswer: "b"                ///// Write the correct option inside double quotes
       },
       {
        question: "4.What will be the output of the following code?<br>a=25.0<br>b=5.0<br>Print(a%b)",  ///// Write the question inside double quotes
         answers: {
           a: "5",                  ///// Write the option 1 inside double quotes
           b: "5.0",                  ///// Write the option 2 inside double quotes
           c: "0",                  ///// Write the option 3 inside double quotes
           d: "0.0"                   ///// Write the option 4 inside double quotes
         },
         correctAnswer: "d"                ///// Write the correct option inside double quotes
       },
       {
        question: "5.What will be the output of the following code?<br>i=47<br>j=25<br>i=i%10<br>j=j%10<br>Print(i*j)",  ///// Write the question inside double quotes
         answers: {
           a: "8",                  ///// Write the option 1 inside double quotes
           b: "53",                  ///// Write the option 2 inside double quotes
           c: "35",                  ///// Write the option 3 inside double quotes
           d: "72"                   ///// Write the option 4 inside double quotes
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