import express from 'express'
import cors from 'cors' //middle ware
import 'dotenv/config'
import  connectDb from './db.js'
// import registerSchema from './models/Register.js'
import seedQuestions from "./QuizDataLoad/loadQuiz.js"
import questionRouter from "./router/questionsRoute.js"
import authRouter from "./router/authRoute.js"  // This routher is to perform User Registeration and authentication. 

const app=express()

app.use(express.json())

const port =process.env.PORT

app.use(cors())

app.use('/api', questionRouter)  /**APIs */

app.use('/auth', authRouter)  /**APIs */

app.get('/',(req,res)=>{
     res.json ('Hello from server')
})

app.listen(port, ()=>{
     console.log('Listening on port: '+ port)
     connectDb();
// seedQuestions();   // adds quiz questions connects to DB 
})