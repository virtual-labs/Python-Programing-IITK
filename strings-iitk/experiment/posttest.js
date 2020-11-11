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
      question: "What is the output of the following code?[A]
class customer:
      def__init__(self, id):
        self.id = str(id)
id="2010"
obj=customer(2567)
print(obj.id)
      ", 
 ///// Write the question inside double quotes
      answers: {
      a: "2567",                  ///// Write the option 1 inside double quotes
      b: "Error",                  ///// Write the option 2 inside double quotes
      c: "2010",                  ///// Write the option 3 inside double quotes
      d: "None"                   ///// Write the option 4 inside double quotes
    },
    correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

{
  question: "What is the output when following code is executed?
str1="virtualpythonla",
  ///// Write the question inside double quotes
  answers: {
    a: " pylab
  ",
  ///// Write the option 1 inside double quotes
  b: "lautriv",                  ///// Write the option 2 inside double quotes
    c: "lurv",                  ///// Write the option 3 inside double quotes
    d: "pati"                   ///// Write the option 4 inside double quotes
  },
  correctAnswer: "c"                ///// Write the correct option inside double quotes
},                                  ///// To add more questions, copy the section below 
  ///// this line

  {
    question: "What is the output of following Python program?
text='Python is high-level programming language'
words=text.split()
l=len(words)
print('Number of words of the text:%d'% l)

",
answers: {
  a: " Error",
    b: " 5",
      c: "6",
        d: " None of these "
},
correctAnswer: "b"
},

{
  question: "What is the output of the following code?[D]
  def changement(str1):
  char = str1[0]
  str1 = str1.replace(char, '&')
  str1 = char + str1[1:]
  returnstr1
  print(changement('this is the string'))
  ",
  answers: {
    a: "Syntax Error",
      b: "this is the string",
        c: ".&his is &he s&tring",
          d: "this is &he s&tring"
    "
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
}) ();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
