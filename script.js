
    const questions = [
      {
        'que': "What is the capital of France?",
        '1': "Paris", 
        '2': "Berlin",
        '3': "London", 
        '4': "Madrid",
        'answer': "Paris",
      },
      {
        'que': "Which river is the longest in Pakistan?",
        '1': "Ravi",
        '2': "Chenab",
        '3': "Jhelum",
        '4': "Indus",
        'answer': "Indus",
      },
      {
          'que': "What is the capital of Pakistan?",
        '1': "Islamabad",
          '2': "Karachi",
        '3': "Lahore",
        '4': "Peshawar",
        'answer': "Islamabad",
      }
    ];


  let index = 0; //current question index
      let score = 0;


const ques = document.getElementById('question'); // storing question (HTML's) in ques

function loadQuestion() {
    
  const data = questions[index]; // access current question data using index
  

  ques.innerText = data.que;

  // Correctly access and display the choices
    document.getElementById('choice1').textContent = data['1'];

       document.getElementById('choice2').textContent = data['2'];
          document.getElementById('choice3').textContent = data['3'];

 document.getElementById('choice4').textContent = data['4'];

  // Display the current score
  document.getElementById('score').innerText = `Score: ${score}`;
}

loadQuestion();

    document.getElementById("choice1").addEventListener("click", function () {
            checkAnswer(1);
    });

document.getElementById("choice2").addEventListener("click", function () {
  checkAnswer(2);
});
      document.getElementById("choice3").addEventListener("click", function () {
       
         checkAnswer(3);

  });


document.getElementById("choice4").addEventListener("click", function () {
  checkAnswer(4);
});

function checkAnswer(userAnswer) {


  let currentQuestion = questions[index];
  
  // Checking if the answer is correct
  if (currentQuestion[`answer`] === currentQuestion[userAnswer]) {

      alert("Correct Answer! Press Next to go to the other question.");
      score++;

  } else {
    alert("Wrong Answer! The correct answer is " + 
      
      currentQuestion[currentQuestion['answer']]);
  }


}// Event listener for the "Next Question" button
document.querySelector(".next-Question").addEventListener("click", function () {
   index++;
      if (index < questions.length) {

          loadQuestion();
  } else {
    alert("No more  questions! Press Repeat to start over." );
    
    
  }
});


function hoverEffect(element) {
  element.style.background = '#bbb';
  
}
function removeEffect(element) { 
  element.style.background = '';
}
//  Repeat button
        document.querySelector(".repeat").addEventListener("click", function () {
     index = 0; // Reset the index to start

    score = 0; // score reset


  loadQuestion(); // Load the first question    again
});
