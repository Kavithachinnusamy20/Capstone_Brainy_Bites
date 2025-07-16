import express from 'express'

import cors from 'cors' //middle ware

import 'dotenv/config'

import  connectDb from './db.js'


  
const app=express()

const port =process.env.PORT

app.use(cors())

app.get('/',(req,res)=>{

res.json ('Hello from server')


})
app.listen(port, ()=>{
     console.log('Listening on port: '+ port)
     connectDb()
})