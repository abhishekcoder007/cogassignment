import React,{useState,useEffect} from 'react'
import style from "./Adduser.module.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';


const initialdata={
    name:"",
    designation:"",
    mobile:"",
    details:"",
}
const Adduser = () => {
 
    const[isedit,setedit]=useState(false)
    const [data,setdata]=useState(initialdata)
    const edit_data=useSelector((state)=>state.handle_edit)
      const navigate=useNavigate()
      const dispatch=useDispatch()
    useEffect(()=>{
          setdata({...data,...edit_data})
          console.log("my edit data:-"+edit_data.name)
          if(data.name){
            setedit(true)
          }
         
        //   console.log("data"+JSON.stringify(data))
    },[edit_data])

    
      

  const handlesubmiteditdata= async ()=>{
    try{
    const response= await axios.put("http://localhost:8080/users", data)
    if(response.data.acknowledged) {setedit(false)}
    if(response.data.acknowledged)
    {
  alert("inserted")
//   dispatch({type:"notedit",payload:{ }})
setdata({...initialdata})
    if(!isedit){
        setedit(false)
        navigate("/")
        
    }
 
   
    }
    }catch(error){
        alert(error.message)
    }
  }

    const handlesubmit = async () => {
        if (data.name.length > 3 && data.designation.length > 3 && data.details.length > 10 && data.mobile.length >= 10) {
            try {
                const response = await axios.post("http://localhost:8080/users", data);
                alert("data inserted:-"+response.data); 
                if(response.status){
                       setdata(initialdata)
                }
            } catch (error) {
                console.error(error);
                alert("An error occurred while making the request.");
            }
        } else {
            alert("Put correct data or your data is insufficient");
        }
    }
    

    const handledata=(e)=>{
              
        setdata({...data,[e.target.name]:e.target.value})
    }
  return (
    <div>
<div className={style.container} >


    <label htmlFor="name">Name</label>
    <input type="text" id="name" value={data?.name} name="name" placeholder="Your name.." onChange={(e)=>handledata(e)}/>

    <label htmlFor="lname">designation</label>
    <input type="text" id="lname" value={data?.designation} name="designation" placeholder="Your last name.." onChange={(e)=>handledata(e)}/>
    
    <label htmlFor="mobile">mobile no.</label>
    <input type="text" id="mobile" name="mobile"  value={data?.mobile}  placeholder="Your last name.." onChange={(e)=>handledata(e)}/>
  

    <label htmlFor="details">details</label>
    <textarea id="details" name="details" value={data.details}  placeholder="Write something.."  onChange={(e)=>handledata(e)}></textarea>
{isedit?<button  onClick={handlesubmiteditdata}>save</button>
   : <button type="submit" value="Submit"  onClick={handlesubmit}>submit</button>}

  {/* </form> */}
</div>


      
    </div>
  )
}

export default Adduser


