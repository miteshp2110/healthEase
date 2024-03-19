const express=require('express')
const router = require('./routes/hospitalRoute')
const {dbStatus,showStatus} = require('./models/dbConnection')
const {pool}=require('./models/dbConnection')
const app=express()
require('dotenv').config() 


showStatus()
app.use('/',require('./routes/hospitalRoute'))
app.use('/search',require('./routes/searchRoute'))

app.listen(process.env.PORT,()=>{
    console.log("Server running on: ",process.env.PORT)
})