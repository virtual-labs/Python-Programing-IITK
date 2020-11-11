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


     const myQuestions = [{
             question: "Which of the following command is used to open a file 'C: \python.txt' inappend - mode ? ",
             answers: {
                 a: "F=open('c:/python.txt','a')",
                 b: "F=open('c:\\python.txt','rw')",
                 c: "F=open('c:\python.txt','a')",
                 d: "F=open('c:\\python.txt','r+')"
             },
             correctAnswer: "a"
         },
         {
             question: "What does the readlines() method returns?",
             answers: {
                 a: "str",
                 b: "a list of integers",
                 c: "a list of lines",
                 d: "a list of single characters a list of integers"
             },
             correctAnswer: "c"
         },
         {
             question: "Which one of the following is not attributes of file?",
             answers: {
                 a: "softspace",
                 b: "rename",
                 c: "mode",
                 d: "closed"
             },
             correctAnswer: "d"
         },
         {
             question: "Which is/are the basic I/O connections in file?",
             answers: {
                 a: "Standard Input",
                 b: "Standard Output",
                 c: "Standard Error",
                 d: "All of the above"
             },
             correctAnswer: "d"
         },
         {
             question: "Which function is used to read all the characters?",
             answers: {
                 a: "Readchar()",
                 b: "Readcharacters()",
                 c: "Readall()",
                 d: "Read()"
             },
             correctAnswer: "d"
         },
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