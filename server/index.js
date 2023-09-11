const express=require("express");
const dbconnection=require("./connection/connection.js")
const router=require("./routes/routes.js")
const cors=require('cors')

const app=express();
app.use(cors())
app.use(express.json())



app.use("/",router)

dbconnection();
app.listen(8080,()=>{
    console.log("port started")
})

