//This is for hospital endpoint to fetch name '/hospital/'
//Availaible Search paramaters 
//hospital/?name
//hospital/?state
//hospital/?speciality
const fetchHospital=((req,res)=>{
    var query=req.query
    
    const queryParams={}
    for(const key in query){
        if(Object.hasOwnProperty.call(query,key)){
            queryParams[key]=query[key]
        }
    }
    if(Object.keys(query).length===0){
        res.status(400).json({'error':'Invalid Request type'})
    }
    else{
        console.log(Object.keys(query).length)
        res.status(200).json(queryParams)
    }
    const regex=/\s/g
    
})


module.exports=fetchHospital