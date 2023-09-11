
const mongoose=require("mongoose");
   
// const { Schema,model } = mongoose;

const userschema=new mongoose.Schema({
    name:String,
    designation:String,
    details:String,
    mobile:Number,
})

const customer= mongoose.model("user", userschema);
module.exports=customer;