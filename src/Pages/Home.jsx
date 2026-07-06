import React from "react";
export default function Home(){
    return(
        <>
         <div style={{display:"flex",width:"100%",height:"660px"}}>
            <div  style={{height:"100%",width:"35%"}}>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk26YzNF5ijq-Ylq1H8xw0b2KpuADp_SX1JF_C3iGNdo3sNooWzHf0SUnn&s=10" alt="" height="100%" width="100%"></img>
            </div>
            <div style={{height:"100%",width:"30%",display:"flex",flexDirection:"column",gap:"24px"}}>
                <h1 style={{fontFamily:"sans-serif",fontWeight:"700",textAlign:"center",color:"rgb(255, 20, 147)",marginTop:"50px"}}>Welcome to Campus Connect</h1>
                <h2 style={{fontFamily:"sans-serif",fontWeight:"bold",marginLeft:"20px",color:"blue"}} >Your central hub for everything happening across the campus.</h2>
                <h2 style={{fontFamily:"sans-serif",fontWeight:"bold",marginLeft:"20px",color:"red"}} >📢 Stay Updated</h2>
                <h2 style={{fontFamily:"sans-serif",fontWeight:"bold",marginLeft:"20px",color:"blue"}} >✅ Catch up on the latest official notices, academic updates, and department announcements without the clutter.</h2>
                <h2 style={{fontFamily:"sans-serif",fontWeight:"bold",marginLeft:"20px",color:"#DC4D01"}}  >📅 Never Miss an Event</h2>
                <h2 style={{fontFamily:"sans-serif",fontWeight:"bold",marginLeft:"20px",color:"#DC4D01"}}  > 
                    
                    ✅ From club fests to guest lectures, see what’s happening today and what’s coming up next.
                    
                     </h2>


            </div>
            <div style={{height:"100%",width:"35%"}}>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8PToO3_5iE8EhUgo4HGwipyi1ctnhJpUWShgX61qC16Dte5xUsRUnOe6y&s=10" alt="" height="100%" width="100%"></img>
            </div>
         </div>
        </>
    )
}
