 import React from 'react'
 import Navbar from './Navbar'
 import Questions from './questions.jsx'
 const Test =() =>{
    //next button event handler
    function OnNext(){
        console.log('On next click')
    }
     //previous button event handler
    function OnPrev(){
        console.log('On previous click')
    }
    
    
    return(
        <div className ='container'>
        <h1 className ='title text-light'>Quiz Application</h1>
        {/* diaplay questions */}
        <Questions></Questions>
        <div className ='grid'>
        <button className='btn prev' onClick={OnNext}>Previous</button>
        <button className='btn next'onClick= {OnPrev}>Next</button>
        </div>
        </div>
    )
}
export default Test

/*

[
{
question: "What is my name?"
choices: ["Bob", "Sally","George","Billy"],
answer: "Bob"
}
]


*/