import React from 'react'
import Navbar from './Navbar'
import { Link,useLocation } from 'react-router-dom';
// import { data } from '../Database/data';
import Quiz from './quiz'
import { useNavigate } from "react-router-dom";

//result component receive props
const Result = ({resetQuiz,data}) => {
  
  const location = useLocation();
  //location.state.answers: gets user answers passed via navigation
  const answers = location.state?.answers || [];
   const navigate = useNavigate()  
  // console.log(`quizdata`,data)  
  
  
  function onRestart(){
    resetQuiz?.(); 
    console.log('on Restart')
    navigate('/quiz') //restarts quiz
  } 
  
  // Validate each answer against the correct one in the data acc stands for accumulator
  const score = answers.reduce((acc, answer, index) => {
    const correctAnswer = data[index]?.correctAnswer; 

    // Treat unanswered or incorrect answers as mistakes
  if (answer === undefined || answer === null || answer === '') {
    return acc; // no points for unanswered
  }

    return acc + (answer === correctAnswer ? 1 : 0); //1 point for correct
  }, 0);
  
  // Handle empty or missing answers
  if (answers.length === 0) {
    return (
      <div className="container">
      
      <h1 className="title text-light">Your Result</h1>
      
      <p className="text-light">No quiz answers found. Try taking the quiz again.</p>
       
      <button className="btn" onClick={onRestart}>Restart</button>
       
      </div>
    );
  }
  
  return(
    
    <div className="container">
    
    <h1 className="title text-light">Your Result</h1>
    <p className="text-light">You scored {score} out of {answers.length}</p>
    <button className="btn" onClick={onRestart}>Restart Quiz</button> 
    </div>
    
  )  
}
export default Result;