import React from "react";
import './Page.css';
import { useState } from "react";
import { useContext } from "react";
import NoticeDetail from "../features/NoticeDetail";
 

// another part here 


export default function Notices(){
 
  const [text,setText]=useState("");
    const tabs=["Academics","Placements and Internships","Gymkhana and Clubs","Hostel and Mess"];
    const [category,setCategory]=useState("Academics");
    
    //
   const[notices,setNotices]=useState(null);
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



      const data= await fetch("/notices.json");
      if(!data.ok){
        throw new Error("Failed to fetch the data!! Please try again..")
        // this is the error message 
      }
      const response=await data.json();
      setNotices(response);
      
     
    
    
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
                <input className="boxInput"  type="text" placeholder="Search the notice..."
                  onChange={(event)=>setText(event.target.value)}    value={text}      style={{width:"50%",height:"35px",borderRadius:"10px",backgroundColor:"wheat"}}
                ></input>
            </div>
           
           <div style={{display:"flex",flexDirection:"row"}}>
            
         <div style={{ color: "black", display: "flex", height: "40px", marginTop: "20px",marginLeft:"100px",gap:"60px"}}>
            <h2 style={{fontFamily:"sans-serif",color:"purple"}}> Select the Category:➡️</h2>
            {tabs.map((tab, index) => {
              // sets background color different 
              // when tab is selected 
              const isActive=tab==category; // returns boolean 
              return (
                <button  
                  key={index} // Added key prop to prevent React map warnings
                  onClick={() => setCategory(tab)} 
                  style={{ fontFamily: "sans-serif", width:"150px",fontWeight: "800",backgroundColor:isActive ? "red " :" grey",color:isActive ? "white" :"black" }}
                >
                  {tab}
                </button>
              );
            })}
          </div>
         
        </div>
  <div style={{marginLeft:"720px",marginTop:"20px"}}>
    <button  onClick={handleBrowserClick} style={{width:"100px",height:"30px",color:"white",fontFamily:"sans-serif",fontWeight:"800",backgroundColor:'green'}}>Browse</button>
  </div>
 
<br></br>



<NoticeDetail 
          text={text} 
          loading={loading} 
          error={error} 
          notices={notices} 
          category={category} 
        />

      </div>
    </>


    );
}