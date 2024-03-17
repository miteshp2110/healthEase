const express=require('express')
const router = require('./routes/hospitalRoute')
const app=express()
require('dotenv').config() 

app.use('/',require('./routes/hospitalRoute'))

app.listen(process.env.PORT,()=>{
    console.log("Server running on: ",process.env.PORT)
})