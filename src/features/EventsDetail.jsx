import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";
import { useNavigate } from "react-router-dom";



export  default  function EventsDetail({error,loading,events,category,text}){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    if(loading==true){
        return <div style={{color:"black",fontFamily:"sans-serif",fontWeight:"bold",marginTop:"30px",marginLeft:"60px"}}>Loading Events......</div>
    }
    else if(error){
        return <div style={{color:"black",fontFamily:"sans-serif",fontWeight:"bold",marginTop:"30px",marginLeft:"60px"}}>ERROR:{error}</div>
    }

    if(events==null){
        return null;
    }
    const filtered_events=events.filter(
        (event)=>{
     if(!text.trim()){
        return false;
     }
      const searchFilter=(event.title.toLowerCase() || event.shortContent.toLowerCase()).includes(text.toLowerCase());

        

         const categoryFilter=event.category==category;
        return searchFilter && categoryFilter;
        // both should be true at the time 
        }
    )
    if(filtered_events.length==0 ){
        return <div style={{marginLeft:"50px"}} ><h2 style={{fontFamily:"sans-serif",fontWeight:"800"}}> Error: Sorry!! No such events present....</h2></div>
    }
    
    return(
        <>
          <div style={{marginTop:"50px",display:"flex", flexDirection:"row", flexWrap:"wrap",gap:"40px",marginLeft:"30px"}} >
                {filtered_events.map((item) => (
                    <>
                    <div style={{height:"400px",width:"400px",borderRadius:"20px",boxShadow:"2px 2px 10px blue ",display:"flex",flexDirection:"column",gap:"30px"}} >
                    <h2 style={{textAlign:"center",fontFamily:"sans-serif",color:"blue",fontWeight:"800"}}>Notice</h2>
                    <h2  style={{fontFamily:"sans-serif",fontWeight:"700",marginLeft:"20px"}} key={item.id}>Title:{item.title}</h2> 
                    <h2 style={{fontFamily:"sans-serif",fontWeight:"700",marginLeft:"20px"}}>Category:{item.category}</h2>
                    <h3 style={{fontFamily:"sans-serif",marginLeft:"20px"}}>Details:{item.shortContent}</h3>

                                        <button  onClick={()=>dispatch(addToCart(item))} style={{width:"85px",marginLeft:"120px",color:"white",backgroundColor:"green",fontFamily:"sans-serif",fontWeight:"800"}} >SAVE</button>
                    
                             
               <span 
                        onClick={(e) => {
                            e.preventDefault();
                            navigate(`/events/${item.id}`, { state: { item: item } });
                        }}
                        style={{ width:"85px", cursor: "pointer",color:"white",backgroundColor:"green",fontFamily:"sans-serif",fontWeight:"800",marginLeft:"120px",marginTop:"20px", textAlign:"center"}}
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