import React from "react";
import { useState } from "react";
import { addToCart } from "./CartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";



export  default  function NoticeDetail({error,loading,notices,category,text}){
    const navigate=useNavigate()
   const dispatch=useDispatch();

  // 



    if(loading==true){
        return <div style={{color:"black",fontFamily:"sans-serif",fontWeight:"bold",marginTop:"30px",marginLeft:"60px"}}>Loading Notices......</div>
    }
    else if(error){
        return <div style={{color:"black",fontFamily:"sans-serif",fontWeight:"bold",marginTop:"30px",marginLeft:"60px"}}>ERROR:{error}</div>
    }
    if(notices==null){
        return null;
    }
    const filtered_notices=notices.filter(
        (notice)=>{
        const searchFilter=notice.title.toLowerCase().includes(text.toLowerCase());
        const categoryFilter=notice.category==category;
        return searchFilter && categoryFilter;
        // both should be true at the time 
        }
    )
    if(filtered_notices.length==0){
        return <div style={{marginLeft:"50px"}}><h2 style={{fontFamily:"sans-serif",fontWeight:"800"}} >Error:Sorry!! No Such Notices present...</h2></div>
    }

    return(
        <>
     
          <div style={{marginTop:"50px",display:"flex", flexDirection:"row", flexWrap:"wrap",gap:"40px",marginLeft:"30px"}} >
                {filtered_notices.map((item) => (
                    <>
                    <div style={{height:"400px",width:"400px",borderRadius:"20px",boxShadow:"2px 2px 10px blue ",display:"flex",flexDirection:"column",gap:"30px"}} >
                    <h2 style={{textAlign:"center",fontFamily:"sans-serif",color:"blue",fontWeight:"800"}}>Notice</h2>
                    <h2  style={{fontFamily:"sans-serif",fontWeight:"700",marginLeft:"20px"}} key={item.id}>Title:{item.title}</h2> 
                    <h2 style={{fontFamily:"sans-serif",fontWeight:"700",marginLeft:"20px"}}>Category:{item.category}</h2>
                    <h3 style={{fontFamily:"sans-serif",marginLeft:"20px"}}>Details:{item.shortContent}</h3>
                    <button  onClick={()=>dispatch(addToCart(item))} style={{width:"85px",marginLeft:"140px",color:"white",backgroundColor:"green",fontFamily:"sans-serif",fontWeight:"800"}} >SAVE</button>
                    
               <span 
                        onClick={(e) => {
                            e.preventDefault();
                            navigate(`/notices/${item.id}`, { state: { item: item } });
                        }}
                        style={{ width:"85px", cursor: "pointer",color:"white",backgroundColor:"green",fontFamily:"sans-serif",fontWeight:"800",marginLeft:"140px",marginTop:"20px", textAlign:"center"}}
                    >
                        VIEW
                    </span>







                   
                    </div>
                    </>
                ))}
            </div>
         
        </>
    )
}