import express from 'express'

import cors from 'cors' //middle ware

import 'dotenv/config'

import  connectDb from './db.js'


  
const app=express()

app.use(express.json())

const port =process.env.PORT

app.use(cors())

app.get('/',(req,res)=>{
res.json ('Hello from server')
})
app.post('/register',(req,res) => {

})


app.listen(port, ()=>{
     console.log('Listening on port: '+ port)
     connectDb()
})