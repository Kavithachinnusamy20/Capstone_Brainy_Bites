import React from 'react'
import Navbar from './Navbar'
import { Link,useLocation } from 'react-router-dom';
import { data } from '../Database/data';

import { useNavigate } from "react-router-dom";


export default function Result({resetQuiz}) {

  const location = useLocation();
  const answers = location.state?.answers || [];
  const navigate = useNavigate()    


  function onRestart(){
   resetQuiz?.(); // clears answers
  console.log('on Restart')
  navigate('/Test') //restarts quiz
  } 

  // Validate each answer against the correct one in the data
  const score = answers.reduce((acc, answer, index) => {

    const correctAnswer = data[index]?.correctAnswer; // 'answer' key matches data structure
    return acc + (answer === correctAnswer ? 1 : 0);
  }, 0);
  
  // Handle empty or missing answers
  if (answers.length === 0) {
    return (
     <div className="container">
      
      <h1 className="title text-light">Your Result</h1>
      
      <p className="text-light">No quiz answers found. Try taking the quiz again.</p>
      <Link to="/test">
      <button className="btn">Go to Quiz</button>
      </Link>
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
