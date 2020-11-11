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
        question: "What is the output of this program?     import sys        sys.stdout.write('Hello')        sys.stdout.write('Python')",
        answers: {
            a: "Error",
            b: "Hello",
            c: "Python",
            d: "Hello Python"
        },
        correctAnswer: "d"
    }, {
        question: "What is the output of following code?  fo = open('temp.txt', 'r')     print(fo.closed)       fo.close()      print(fo.closed)",
        answers: {
            a: "True True",
            b: "True False",
            c: "False True",
            d: "False False"
        },
        correctAnswer: "c"
    }, {
        question: "What is the output of following code?   number = 5.0     try:  r = 10/number   print(r)   except:   print('Error Occurred')",
        answers: {
            a: "Error occurred",
            b: "2.0",
            c: "2.0 Error occurred",
            d: "None object"
        },
        correctAnswer: "b"
    }, {
        question: "Which of the following functions can be used to check if a file 'Logo' exists?",
        answers: {
            a: "os.path.isFile(logo)",
            b: "os.path.exists(logo)",
            c: "os.path.isfile(logo)",
            d: "os.isExist(logo)"
        },
        correctAnswer: "c"
    }, {
        question: "Which of the following functions displays a file dialog for saving  a file?",
        answers: {
            a: "tmp_file = asksaveasfilename()",
            b: "tmp_file = openfilename()",
            c: "tmp_file = askopenfilename()",
            d: "tmp_file = saveasfilename()"
        },
        correctAnswer: "a"
    }, ];




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