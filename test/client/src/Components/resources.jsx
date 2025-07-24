 import React from 'react'
 import Navbar from './Navbar'
  import '../app.css';
  import { useState, useEffect } from 'react';
import axios from 'axios';

function Resources() {
 return(
 <div className ="Container">
         <h3><strong>You want to explore more math quizzes click this link below:👇</strong></h3>
          <h2>Resources:</h2>
        <a href="https://www.mathopolis.com/questions/quizzes.php" target="_blank" rel="noopener noreferrer">
       <h3> mathopolis.com</h3>
        </a>
       <h3> <a href="https://www.thatquiz.org/">ThatQuiz</a></h3>
       <h3> <a href="https://mastermath.info/lessons">Mastermath</a></h3>
       <h3> <a href="https://www.kutasoftware.com">KutaSoftware</a></h3>
        
        </div>
    )
  
}



export default Resources;

