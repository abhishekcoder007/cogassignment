import axios from "axios";

export function handle_editid(id){

    return async (dispatch)=>{
        try{
            const {data,status}= await axios.get(`http://localhost:8080/users/data/${id}`)
           
            if(status==200){
                dispatch({type:"userdetail",payload:data})
            }
        }catch(error){
            alert ("error"+error.message)
        }
 



    }
}

