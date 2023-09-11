import React ,{useEffect,useState}from 'react';
import style from "./Home.module.css";
import axios from "axios";
import { NavLink } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {handle_editid} from "../redux/action/actionedit.js";
import { useNavigate } from 'react-router-dom';

const Home = () => {
const [mydata,setdata]=useState([])
const navigate=useNavigate()

const edit_data=useSelector((state)=>state.handle_edit)

const dispatch=useDispatch();


    async function handleuser() {
        try {
            const { data } = await axios.get("http://localhost:8080/users"); 
          
            setdata(data)
        } catch (error) {
            alert(error.message);
        }
    }
    
    useEffect(() => {
        handleuser();
    }, []);

    const handledetail= (_id)=>{

      dispatch(handle_editid(_id))
       navigate("/detail")
      // if(edit_data.name){
  
      //     dispatch({type:"edituser",payload:edit_data})
  
      // }
      
      // const edit_data=useSelector((state)=>state.handle_edit)
  
      // navigate("/adduser")
  
     
     }
    
const handleedit= (_id)=>{

    dispatch(handle_editid(_id))
    
    if(edit_data.name){

        dispatch({type:"edituser",payload:edit_data})

    }
    
    

    navigate("/adduser")

   
   }

 async  function handledelete(id){
   
    try{
       const {data}=await axios.delete(`http://localhost:8080/users/${id}`);
       console.log(data)
       alert(data.message)
       if(data.message){
        const { data } = await axios.get("http://localhost:8080/users"); 
          
        setdata(data)
       }
    }catch(error){
        alert("error:--"+error.message)
    }
   }


  return (
    <div>
        <div className={style.main}>
            <div>
            <NavLink style={{textDecoration:"none",fontSize:"21px"}}    to="/"><h2>cognus</h2></NavLink>
            </div>

            <div className={style.maincontent}>
           <NavLink   to="/"
  style={({ isActive, isPending }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "black",
      margin:"21px",
      textDecoration:"none",
      fontFamily:"sans-serif",
      fontSize:"21px",
    };
  }} >
  Home
    </NavLink>  
           <NavLink   to="/about"
  style={({ isActive, isPending }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "black",
      margin:"21px",
      textDecoration:"none",
      fontFamily:"sans-serif",
      fontSize:"21px",
    };
  }}  > 
  about
    </NavLink> 
           <NavLink   to="/login"
  style={({ isActive, isPending }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "black",
      margin:"21px",
      textDecoration:"none",
      fontFamily:"sans-serif",
      fontSize:"21px",
    };
  }} >
    login
    </NavLink> 
               
            </div>
        </div>
        <div className={style.adduser}>
            <NavLink style={{textDecoration:"none",fontSize:"31px"}} to="/adduser">Adduser</NavLink>
        </div>
          <div>
          <table>
                <tr>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Detail</th>
                    <th>Remove_user</th>
                    <th>Edit_user</th>

                </tr>
            {mydata?.map((ele)=>(

          
          
            <tr>
                <td>{ele.name}</td>
                <td>{ele.designation} </td>
                <td><button onClick={()=>handledetail(ele._id)}>detail</button></td>
                <td> <button onClick={()=>handleedit(ele._id)}>edit</button></td>
                <td><button onClick={()=>handledelete(ele.mobile)}>Delete</button></td>
            </tr>

           
 ))}

</table>
          </div>
        
      
    </div>
  )
}

export default Home
