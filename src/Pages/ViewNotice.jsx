import React from "react";
import { useLocation } from "react-router-dom";
export default function ViewNotice(){
    
    const location=useLocation();
   const item = location.state?.item; 

    console.log("Passed Item Data:", item);


    return(
        <>
        <div style={{display:"flex",marginTop:"20px",height:"400px",width:"600px",boxShadow:"2px 2px 10px rgba(0,0,0,0.423)",marginLeft:"360px"}}>
           <div style={{display:"flex",flexDirection:"column",gap:"40px",backgroundColor:"aqua"}}>
                  <h2 style={{textAlign:"center",fontFamily:"sans-serif",color:"blue",fontWeight:"800"}}>Notice</h2>
                    <h2  style={{fontFamily:"sans-serif",fontWeight:"700",marginLeft:"20px"}} key={item.id}>Title:{item.title}</h2> 
                    <h2 style={{fontFamily:"sans-serif",fontWeight:"700",marginLeft:"20px"}}>Category:{item.category}</h2>
                    <h3 style={{fontFamily:"sans-serif",marginLeft:"20px"}}>Regarding:{item.shortContent}</h3>
                    <h3 style={{fontFamily:"sans-serif",marginLeft:"20px"}}> Full Details:{item.fullContent}</h3>
                      
           </div>
        </div>

        </>
    )
}