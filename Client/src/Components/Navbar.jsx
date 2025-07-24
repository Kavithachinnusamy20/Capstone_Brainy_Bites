import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"

const Navbar =()=>{
    return (
    <nav> 
        <h2> Brainy Bites Quiz</h2>
        <ul>
            <li><Link to ="/">Home</Link> </li>
            <li><Link to ="/Register">Register</Link></li>
            <li><Link to ="/Login">Login</Link></li>
            <li><Link to ="/Quiz">Quiz</Link></li>
            <li><Link to ="/Result">Result</Link></li>
             <li><Link to ="/Resources">Resources</Link> </li>
             <li><Link to ="/QuestionGrid">Admin</Link> </li>
        </ul>
        </nav>
    );
};

export default Navbar;