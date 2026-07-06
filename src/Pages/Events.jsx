import React from "react";
import { useState } from "react";
import EventsDetail from "../features/EventsDetail";
export default function Events(){
  const tabs=["Alumini Meet","Inter IIT","Open IIT","General Championship"];
  const [text,setText]=useState("");
  const[category,setCategory]=useState("Inter IIT");


 const[events,setEvents]=useState([]);
   const[loading,setLoading]=useState(false);
   const[error,setError]=useState(null);

const handleBrowserClick= async ()=>{
    // show loading....
    setLoading(true);
     setError(null);
     // using try catch statements 
     try{
     await new Promise((resolve,reject) => {
            setTimeout(resolve, 4000); 
            // resolve tells the promise it's finished after 2000ms
            
        });



      const data= await fetch("/events.json");
      if(!data.ok){
        throw new Error("Failed to fetch the data!! Please try again..")
        // this is the error message 
      }
      const response=await data.json();
      setEvents(response);
     } catch(error){
       setError(error.message);
     } finally{
      setLoading(false);
     }
  
   
   }







    return(
        <>
        <div style={{display:"flex",flexDirection:"column"}}>
            <div style={{marginTop:"10px",marginLeft:"40px"}}>
                <input className="boxInput"  type="text" placeholder="Search any event..."
                style={{width:"50%",height:"35px",borderRadius:"10px",backgroundColor:"yellow"}}
                ></input>
            </div>
           
           <div style={{display:"flex",flexDirection:"row"}}>
        
          <div style={{ color: "black", display: "flex", gap: "10px", height: "40px", marginTop: "20px",marginLeft:"20px" }}>
            {tabs.map((tab, index) => {
              return (
                <button   
                  key={index} // Added key prop to prevent React map warnings
                  onClick={() => setCategory(tab)} 
                  style={{ fontFamily: "sans-serif", fontWeight: "800",backgroundColor:"wheat" }}
                >
                  {tab}
                </button>
              );
            })}
          </div>



         

  <div style={{marginLeft:"80px",marginTop:"20px"}}>
    <button onClick={handleBrowserClick} style={{width:"100px",height:"30px",color:"white",fontFamily:"sans-serif",fontWeight:"800",backgroundColor:'green'}}>Browse</button>
  </div>
</div>




   <EventsDetail events={events} error={error} loading={loading} text={text} category={category}></EventsDetail>
        </div>

















        
        
        </>
    )
}