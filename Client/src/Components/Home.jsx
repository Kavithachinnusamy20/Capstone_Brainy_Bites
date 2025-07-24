 import React from 'react'
 import Navbar from './Navbar'
 //  import  { useRef } from "react";
 import { Link } from "react-router-dom";
 import "../styles/Navbar.css";
 import "../App.css"
 const Home =() =>{
    
    return(
        <div className ='Container'>
        <h1 className ='title text-light'>Quiz Application</h1>
        <h3> I am Kavitha Chinnusamy Software Enginneer and a Full stack developer.I'm passionate about technology and want to learn & explore new technologies.</h3>          <h3>Brainy Bites App is designed to help students build math skills in a playful, interactive way. 
           It’s ideal for learners who thrive on challenges and visual engagement.The idea behind the site is to make mathematics fun through challenging quizzes.</h3>
         <h2>Directions:</h2>
        <ol>
        <li>You will be asked 5 questions one after another.</li>
        <li>5 points awarded for the correct answer.</li>
        <li>
        Each question has four options. You can choose only one options.
        </li>
        <li>You can review and change answers before the quiz finish.</li>
        <li>The result will be declared at the end of the quiz.</li>
        </ol>
        <div className="start">
        <Link className="btn" to={"Register"}>
       👉 Start Quiz
        </Link>
        </div>
        </div>
    );
}

export default Home