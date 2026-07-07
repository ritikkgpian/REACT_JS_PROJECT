import React from "react";
export default function Home(){
    return(
        <>
         <div  className="campus-container"  style={{display:"flex",width:"100%",height:"660px"}}>
            <div className="image-side"  style={{height:"100%",width:"35%",objectFit:"cover"}}>
             <img src="https://www.iitkgpfoundation.org/images/vault/40.jpg" alt="" height="100%" width="100%"></img>
            </div>
            <div  className="content-center" style={{height:"100%",width:"30%",display:"flex",flexDirection:"column",gap:"24px",backgroundColor:"rgba(0,0,0,0.897)",boxSizing:"border-box"}}>
                <h1 style={{fontFamily:"sans-serif",fontWeight:"700",textAlign:"center",color:"orange",marginTop:"50px"}}>Welcome to Campus Connect</h1>
                <h2 style={{fontFamily:"sans-serif",fontWeight:"bold",marginLeft:"20px",color:"orange"}} >Your central hub for everything happening across the campus.</h2>
                <h2 style={{fontFamily:"sans-serif",fontWeight:"bold",marginLeft:"20px",color:"orange"}} >📢 Stay Updated</h2>
                <h2 style={{fontFamily:"sans-serif",fontWeight:"bold",marginLeft:"20px",color:"orange"}} >✅ Catch up on the latest official notices, academic updates, and department announcements without the clutter.</h2>
                <h2 style={{fontFamily:"sans-serif",fontWeight:"bold",marginLeft:"20px",color:"orange"}}  >📅 Never Miss an Event</h2>
                <h2 style={{fontFamily:"sans-serif",fontWeight:"bold",marginLeft:"20px",color:"orange"}}  > 
                    
                    ✅ From club fests to guest lectures, see what’s happening today and what’s coming up next.
                    
                     </h2>


            </div>
            <div  className="image-side" style={{heigsrcht:"100%",width:"35%",objectFit:"cover"}}>
             <img src="https://yt3.ggpht.com/zHad4dz7LSXYcXeZ227VnoIlLCTb0Cjb5UeUVUs6mFJUkO4njhpTnIopPwkvez0rDuSpPrWdWdisjw=s1599-nd-v1"alt="" height="100%" width="100%"></img>
            </div>
         </div>
        </>
    )
}
