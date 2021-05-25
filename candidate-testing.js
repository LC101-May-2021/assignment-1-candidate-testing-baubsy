const input = require('readline-sync');


// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer = "";
let candidateAnswer = "";
let candidateAnswers = [];

let questions = ["Who was the first American woman in space?","True or false: 5 kilometer == 5000 meters?","(5 + 3)/2 * 10 = ?","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?", "What is the minimum crew size for the ISS?"];

let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let gradedScore = 0;
let score = 0;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("What's your name? ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
/*question = "Who was the first American woman in space? ";
canidateAnswer = "";
correctAnswer = "Sally Ride";

canidateAnswer = input.question(question);
*/
for(let i = 0; i < questions.length; i++){
  console.log(questions[i]);
  candidateAnswer = input.question("Your Answer: ");
  
  
  console.log(`Correct Answer: ${correctAnswers[i]}\n`);
  candidateAnswers.push(candidateAnswer);
}
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  /*
  if(canidateAnswer === correctAnswer){
    console.log("Correct");
  }else {
    console.log("Wrong");
  }
  */
  
  for(let j = 0; j < candidateAnswers.length;j++){
    //console.log("test");
    if(candidateAnswers[j] === correctAnswers[j]){
      score++;
      
    }
  };
  let grade;
  grade = score / 5 * 100
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Hello " + candidateName);
  askQuestion();
  gradedScore = gradeQuiz(this.candidateAnswers);
  console.log(`>>> Overall Grade: ${gradedScore}% (${score} of ${questions.length} responses correct) <<<`);
  if(gradedScore >= 80){
    console.log(">>> Status: PASSED <<<")
  }else{
    console.log(">>> Status: FAILED <<<");
  }
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};