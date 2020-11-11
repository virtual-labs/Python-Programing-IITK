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
            question: "The function pow(a,b,c) is evaluated as:", ///// Write the question inside double quotes
            answers: {
                a: "(a**b)**c", ///// Write the option 1 inside double quotes
                b: "(a**b) / c", ///// Write the option 2 inside double quotes
                c: "(a**b) % c", ///// Write the option 3 inside double quotes
                d: "(a**b)*c" ///// Write the option 4 inside double quotes
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },

        {
            question: "What is the output of the following? divmod(10.5,5)           divmod(2.4,1.2)", ///// Write the question inside double quotes
            answers: {
                a: "(2.00, 0.50)(2.00, 0.00) ", ///// Write the option 1 inside double quotes
                b: "(2, 0.5)(2, 0)", ///// Write the option 2 inside double quotes
                c: "(2.0, 0.5)(2.0, 0.0)", ///// Write the option 3 inside double quotes
                d: "(2, 0.5)(2)" ///// Write the option 4 inside double quotes
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        }, ///// To add more questions, copy the section below 
        ///// this line

        {
            question: "What is the output of the following code? ",
            answers: {
                a: "4",
                b: "5",
                c: "1",
                d: "An exception is thrown"
            },
            correctAnswer: "b"
        },

        {
            question: "What is the output of the functions shown below?min(max(False,-2,-6), 3,5,6)",
            answers: {
                a: "2",
                b: "False",
                c: "-3",
                d: "4"
            },
            correctAnswer: "b"
        },
        {
            question: "Which of the following functions does not necessary accept only iterables as arguments? ",
            answers: {
                a: "enumerate()",
                b: "any()",
                c: "chr()",
                d: "min()"
            },
            correctAnswer: "c"
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