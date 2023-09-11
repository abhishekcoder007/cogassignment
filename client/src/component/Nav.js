import React from 'react'
import { NavLink } from 'react-router-dom';
import style from "./Nav.module.css";

const Nav = () => {
  return (
    <div>
          <div className={style.main}>
            <div>
               <h2>cognus</h2>
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
            <NavLink to="/adduser">Adduser</NavLink>
        </div>
      
    </div>
  )
}

export default Nav

