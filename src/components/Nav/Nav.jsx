import React from "react";
import { NavLink } from "react-router-dom";

import { FaHome } from "react-icons/fa";
export default function Nav(){
    return(
        <>
        <div className="header"style={{height:"70px",width:"100%",backgroundColor:"rgb(35,25,70)",display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        {/* logo+text */}
        <div style={{display:"flex",flexDirection:"row",gap:"20px",marginLeft:"30px"}}>
            <div style={{marginTop:"7px"}}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSklBPFx7y9yv7u4uaOLbzxycJpqj4LOSgr925f0TiE0_96UcUSZaBARzh2&s=10" alt="" height="50px" width="55px"></img>
            </div>
            <div style={{marginTop:"20px"}}>
                <h2 style={{color:"orange",fontWeight:"bold",fontFamily:"monospace",fontSize:"24px"}} >Campus_Connect</h2>
            </div>

        </div>
         
           <div  style={{display:"flex",listStyle:"none",justifyContent:"center",alignItems:"center",gap:"30px",fontWeight:"bold"
             , color:"white",marginTop:"0"
             }}>
                <NavLink to="/" style={{color:"white",textDecoration:"none",fontFamily:"sans-serif",fontWeight:"800"}}>HOME
                 <span style={{marginLeft:"4px",color:"red"}}><FaHome /></span>
                </NavLink>
                <NavLink to="/notices" style={{color:"white",textDecoration:"none",fontFamily:"sans-serif",fontWeight:"800"}} >NOTICES</NavLink>

                <NavLink to="/events" style={{color:"white",textDecoration:"none",fontFamily:"sans-serif",fontWeight:"800"}}>EVENTS</NavLink>
                <NavLink to="/logIn" style={{color:"white",textDecoration:"none",fontFamily:"sans-serif",fontWeight:"800"}}>LOG IN </NavLink>
             </div>









           
         


        </div>
        
        </>
    )
}