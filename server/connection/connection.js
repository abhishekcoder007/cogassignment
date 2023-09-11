const mongoose=require("mongoose");
const url="mongodb://localhost:27017/congus";
async function dbconnection(){
    try{
        await mongoose.connect(url)
        console.log("mongodb connect")

    }catch(error){
        console.log(error)

    }
}

module.exports=dbconnection;