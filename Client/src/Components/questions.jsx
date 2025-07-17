 import React from 'react'
 import { useState ,useEffect} from 'react'

 import data from '../Database/data' // Imports the quiz question data from your local file
 
 
 
 const Questions=() =>{
    
    const [checked,setChecked]= useState(undefined)
    
    const question =data[0]
    
    useEffect(() => {
        console.log(question)
    })
    
    function onSelect(){
        console.log('radio button change')
    }
    return(
        <div className= 'questions'>
        {/* Displays the question text.    */}
        <h2 className='text-light'>{question.question}</h2>
        
        <ul key= {question.id}>
        {
            question.options.map((q,i)=>(
                <li key={i}>
                <input 
                type ="radio" 
                value ={true}
                id ={`q${i}-option`}
                onChange ={onSelect()}
                />
                <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                <div className ='check checked'></div>
                </li>
            ))
        }
        
        
        
        </ul>
        </div>
    )
}
export default Questions