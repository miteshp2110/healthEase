const express=require('express')
const router = require('./routes/hospitalRoute')
const dbStatus = require('./models/dbConnection')
const app=express()
require('dotenv').config() 

app.use('/',require('./routes/hospitalRoute'))
dbStatus()
app.listen(process.env.PORT,()=>{
    console.log("Server running on: ",process.env.PORT)
})