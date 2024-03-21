//This is for hospital endpoint to fetch name '/hospital/'
//Availaible Search paramaters 
//hospital/?name
//hospital/?city
//hospital/?speciality
const valid=['name','city','speciality']
const fetchHospital=((req,res)=>{
    var query=req.query
    const regex=/\s/
    
    const queryParams={}
    for(const key in query){    //loop over query and add in a Object
        var x=query[key]
        if(Object.hasOwnProperty.call(query,key) && x.length>0 && !regex.test(x) && valid.includes(key)){
            queryParams[key]=query[key]
        }
        else{
            return res.status(400).json({'error':`${key} not defined`})
        }
    }
    if(Object.keys(query).length===0){
        return res.status(400).json({'error':'Invalid Request type'})
    }
    else{
        res.status(200).json(queryParams)
    }
    
    //console.log(queryParams)
    
})
 

module.exports=fetchHospital