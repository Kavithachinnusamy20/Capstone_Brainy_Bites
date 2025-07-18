import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";


export default function Result({ answers =[], resetQuiz }) {
    // const navigate = useNavigate();
    function onRestart(){
      resetQuiz?.(); // clears answers
      // navigate("/Test"); // restarts quiz
        console.log('on Restart')
    } 
    //  const safeAnswers = answers || [];
    const score = answers.reduce((acc, answer, index) => {
    // calculate score logic here
    return acc + 1; // placeholder
  }, 0);

  if (answers.length === 0) {
    return (
      <div className="container">
          {/* <Navbar /> */}
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
         <Navbar />
      <h1 className="title text-light">Your Result</h1>
      <p className="text-light">You scored {score} out of {safeAnswers.length}</p>
      <button className="btn" onClick={onRestart}>Restart Quiz</button>    </div>



    )  
}
