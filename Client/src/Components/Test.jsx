 import React , { useEffect, useState }  from 'react'
 import Navbar from './Navbar.jsx'
 import Questions from './questions.jsx'
 const Test =() =>{

     const [check, setChecked] = useState(undefined)

    const result = useSelector(state => state.result.result);
    const { queue, trace } = useSelector(state => state.questions);
    const dispatch = useDispatch()


    //next button event handler
     function onNext(){
        console.log('On previous click')
    }

     //previous button event handler
    function OnPrev(){
        console.log('On previous click')
    }
    
    
    return(
        <div className ='container'>
        <h1 className ='title text-light'>Quiz Application</h1>
      
        <Questions></Questions>
        <div className ='grid'>
        <button className='btn prev' onClick={OnPrev}>Previous</button>
        <button className='btn next'onClick= {OnNext}>Next</button>
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