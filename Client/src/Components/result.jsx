import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';

export default function Result() {
    
    function onRestart(){
        console.log('on Restart')
    }  
    return(
    <div className='container'>
        <h1 className='title text-light'>Quiz Questions</h1>
          <div className='result flex-center'>
             <div className='flex'>
               <span>Total score:</span>
                <span className='bold'>5</span>
              </div>

              <div className='flex'>
               <span>Total number of quiz</span>
                <span className='bold'>5</span>
              </div>

              <div className='flex'>
               <span>Total Earn points</span>
                <span className='bold'>5</span>
              </div>

              
              <div className='flex'>
               <span>TQuiz Result</span>
                <span className='bold'>passed</span>
              </div>
         </div>

        <div className="start">
        <button className='btn'  onClick={onRestart}>Restart</button>
    
        </div>
 </div>
    )  
}
