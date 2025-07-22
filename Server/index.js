import express from 'express'
import cors from 'cors' //middle ware
import 'dotenv/config'
import  connectDb from './db.js'
// import registerSchema from './models/Register.js'
import seedQuestions from "./QuizDataLoad/loadQuiz.js"
import router from "./router/route.js"
import authRouter from "./router/authRoute.js"  // This routher is to perform User Registeration and authentication. 

const app=express()

app.use(express.json())

const port =process.env.PORT

app.use(cors())

app.use('/api', router)  /**APIs */

app.use('/auth', authRouter)  /**APIs */

app.get('/',(req,res)=>{
     res.json ('Hello from server')
})

// app.post('/register',(req,res) => {

//      registerSchema.create(req.body)
//      .then(register1=>res.json(register1))
//      .catch(err => res.json(err))
// })


app.listen(port, ()=>{
     console.log('Listening on port: '+ port)
     connectDb();
// seedQuestions();
})