const {Pool}=require('pg')
require('dotenv').config()

const pool=new Pool({
    user:process.env.pgUser,
    host:process.env.pgHost,
    database:process.env.pgDatabase,
    password:process.env.pgPassword,
    port:process.env.pgPort
})

    async function dbStatus(){
        try {
            const result= await pool.query('select * from public."hData"')
            console.log("Connection Status: ",result.rows.length>0)
            return  result.rows.length>0           
            
        } catch (error) {
            console.log("Connection Status: false")
            return false
        }    
    }


module.exports=pool
module.exports=dbStatus

