import React from "react";
export  default  function EventsDetail({error,loading,events,category,text}){
    if(loading==true){
        return <div style={{color:"black",fontFamily:"sans-serif",fontWeight:"bold",marginTop:"30px",marginLeft:"60px"}}>Loading Events......</div>
    }
    else if(error){
        return <div style={{color:"black",fontFamily:"sans-serif",fontWeight:"bold",marginTop:"30px",marginLeft:"60px"}}>ERROR:{error}</div>
    }
    const filtered_events=events.filter(
        (event)=>{
        const searchFilter=event.title.toLowerCase().includes(text.toLowerCase());
        const categoryFilter=event.category==category;
        return searchFilter && categoryFilter;
        // both should be true at the time 
        }
    )
    return(
        <>
          <div style={{marginTop:"50px",display:"flex", flexDirection:"row", flexWrap:"wrap",gap:"40px",marginLeft:"30px"}} >
                {filtered_events.map((item) => (
                    <>
                    <div style={{height:"400px",width:"300px",borderRadius:"20px",boxShadow:"2px 2px 10px blue ",display:"flex",flexDirection:"column",gap:"30px"}} >
                    <h2 style={{textAlign:"center",fontFamily:"sans-serif",color:"blue",fontWeight:"800"}}>Notice</h2>
                    <h2  style={{fontFamily:"sans-serif",fontWeight:"700",marginLeft:"20px"}} key={item.id}>Title:{item.title}</h2> 
                    <h2 style={{fontFamily:"sans-serif",fontWeight:"700",marginLeft:"20px"}}>Category:{item.category}</h2>
                    <h3 style={{fontFamily:"sans-serif",marginLeft:"20px"}}>Details:{item.shortContent}</h3>
                    </div>
                    </>
                ))}



            </div>
         
        </>
    )
}