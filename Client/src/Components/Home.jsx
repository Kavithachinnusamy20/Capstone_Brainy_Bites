 import React from 'react'
 import Navbar from './Navbar'
 //  import  { useRef } from "react";
 import { Link } from "react-router-dom";
 import "../styles/Navbar.css";
 import "../App.css"
 const Home =() =>{
    
    return(
        <div className ='aboutContainer'>
        <h1 className ='title text-light'>Quiz Application</h1>
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
        Start Quiz
        </Link>
        </div>
        </div>
    );
}

export default Home