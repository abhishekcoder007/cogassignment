const express=require("express");
const router=express.Router();
const customer=require("../model/userdetails.js");

router.post("/users",async (req,res)=>{
    const data=req.body;

   const presentdata= await customer.find({name:data.name});
   console.log(presentdata)
   if(presentdata.length<1){
try{
   const resp= await customer.insertMany([data]);
    res.send(resp);
    console.log(resp);
}catch(err){
    console.log(err.message);
}}else{
    res.send("data is present already")
}
  
})
router.get("/users/data/:id",async(req,res)=>{
    const id=req.params.id
    try{
        const data=await customer.findOne({_id:id})
        res.send(data)
    }catch(err){
        res.send(err.message)
    }
})

router.put("/users",async (req,res)=>{
    const data=req.body
    const response=await customer.updateOne({_id:req.body._id},{$set:data})
    console.log(response)
    res.send(response)


})


router.get("/users",async (req,res)=>{
    try{
        const data=await customer.find({ })
        res.send(data)
    }catch(error){
        res.send(error.message)
    }
    // const data=await customer.find({ })
    // res.send(data)
})
router.delete("/users/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const data = await customer.deleteOne({ mobile: id });

        if (data.deletedCount === 1) {
            
            res.send({ message: "User deleted successfully" });
        } else {
           
            res.status(404).send({ message: "User not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "An error occurred while deleting the user" });
    }
});

module.exports=router;



