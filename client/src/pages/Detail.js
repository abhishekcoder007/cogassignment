import React ,{useState}from 'react';
import {useSelector} from "react-redux";
import Nav from '../component/Nav';

const Detail = () => {

    const data=useSelector((state)=>state. handle_edit)

    console.log(data)
  return (
    <div>
        <Nav/>
        <div>

        <table>
  <tr>
    <th>Name</th>
    <th>Contact</th>
    <th>DetailS</th>
  </tr>
 
  <tr>
    <td>{data?.name}</td>
    <td>{data?.mobile}</td>
    <td>{data?.details}</td>
  </tr>
 

 
</table>
        </div>
      
    </div>
  )
}

export default Detail
