 import React from 'react'
 import Navbar from './Navbar'
  import '../app.css';
 
 const About = () => {
    return (
        
        <div className="aboutContainer">

            <h3> I am Kavitha Chinnusamy Software Enginneer and a Full stack developer.</h3>
          <h3>Brainy Bites App is designed to help students build math skills in a playful, interactive way. 
            It’s ideal for learners who thrive on challenges and visual engagement.The idea behind the site is to make mathematics fun through challenging games and quizzes.</h3>
        
         <h3><strong>You want quizzes click this link:👇</strong></h3>
          <h2>Resources</h2>
        <a href="https://www.mathopolis.com/questions/quizzes.php" target="_blank" rel="noopener noreferrer">
        mathopolis.com
        </a><br></br>
        <a href="https://www.thatquiz.org/">ThatQuiz</a><br></br>
        <a href="https://mastermath.info/lessons">Mastermath</a><br></br>
        <a href="https://mastermath.info/lessons">KutaSoftware</a>
        
        </div>
    )
}

export default About;
