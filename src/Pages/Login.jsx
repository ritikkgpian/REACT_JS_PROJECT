import React from "react";
import { FaTwitter } from "react-icons/fa";
import { useForm } from "react-hook-form";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod"; 
import toast from "react-hot-toast"
import './Page.css';

const formSchema=z.object({
    username:z.string().min(3,"Minimum 3 characters required").max(25,"Proper name is required"),
    password:z.string().min(6,"Minimum 6 characters required"),
    
})



export default function Login(){
const{register,handleSubmit,formState:{errors}}=useForm({
        resolver:zodResolver(formSchema),
    });

const onSubmitForm = (data) => {
        console.log("Form Submitted Successfully!", data);
        const oldData=JSON.parse(localStorage.getItem("object")) || [];
        const newData=[...oldData,data];
        localStorage.setItem("object",JSON.stringify(newData));
       
       setTimeout(() => {
    toast.success("Form Submitted Successfully", {
        duration: 4000,
        position: "top-center",
        style: {
            fontFamily: "sans-serif",
            color: "green",
            fontWeight: "800",
        }
    });
}, 1000);
        
    };



    return(
        <  >
   
         
        <div style={{backgroundColor: "rgb(35,25,60)"  ,height:"600px",width:"450px",justifyContent:"center",alignItems:"center",marginLeft:"500px",marginTop:"0px",borderRadius:"30px",boxShadow:"2px 2px 10px blue"}}>
        <div style={{marginTop:"10px"}}>
            <h2 style={{textAlign:"center",color:"white",fontFamily:"sans-serif",fontWeight:"700",fontSize:"30px"}}>Sign In </h2>
        </div>
        <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="userNamebox"  style={{marginTop:"40px",marginLeft:"10px"}}>
            <label style={{  color:"orange",fontFamily:"sans-serif",fontWeight:"800",fontSize:"20px",}}>Username</label>
            
            <input  {...register("username")} style={{height:"30px",width:"60%",marginLeft:"60px",borderRadius:"20px",boxShadow:"2px 2px 10px grey"}} type="text" placeholder="Type your name here..." ></input>
            {errors.username && <p style={{color:"red",paddingLeft:"10px",fontFamily:"sans-serif",fontWeight:"700"}}>{errors.username.message}</p>}
        </div>
           
          <div   className="passwordBox" style={{marginTop:"30px",marginLeft:"10px"}}>
            <label style={{  color:"orange",fontFamily:"sans-serif",fontWeight:"800",fontSize:"20px",}}>Password</label>
            <input {...register("password")} style={{height:"30px",width:"60%",marginLeft:"60px",borderRadius:"20px",boxShadow:"2px 2px 10px grey"}} type="password" placeholder="enter your password here..." ></input>
            {errors.password && <p style={{color:"red",paddingLeft:"10px",fontFamily:"sans-serif",fontWeight:"700"}}>{errors.password.message}</p>}
        </div>

        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"15px"}}>
            <div>
                <h4 style={{color:"white",fontFamily:"sans-serif",fontWeight:"bold"}}>✅Remember me</h4>
            </div>
            <div>
                <h4 style={{color:"red",fontFamily:"sans-serif",fontWeight:"800"}}>Forgot password?</h4>
            </div>
        </div>
        <div style={{display:"flex",justifyContent:"center"}}>
           <button type="submit" style={{backgroundColor:"#90EE90",color:"black",width:"100px",height:"25px",fontFamily:"sans-serif",fontWeight:"800"}}> Log In </button>
        </div>
        </form>
        <div style={{marginTop:"30px"}}>
            <h3 style={{textAlign:"center",color:"orange"}}>Or with your social media account?</h3>
        </div>
        <div style={{display:"flex",flexDirection:"row",gap:"50px",marginTop:"40px"}}>
            <div style={{height:"20px",width:"80px",marginLeft:"30px"}}>
               <button style={{color:"black",fontFamily:"sans-serif",fontWeight:"600",width:"90px",height:"30px"}}>Twitter</button>
                
            </div>
              <div style={{height:"20px",width:"90px",marginLeft:"30px"}}>
               <button style={{color:"white",fontFamily:"sans-serif",  backgroundColor:"blue", fontWeight:"600",width:"90px",height:"30px"}}>Facebook</button>
                
            </div>
               <div style={{height:"20px",width:"90px",marginLeft:"30px"}}>
               <button style={{color:"white",fontFamily:"sans-serif",fontWeight:"600",width:"90px",height:"30px",backgroundColor:"red"}}>Google</button>
                
            </div>
             
        </div>
        <br></br>
        <hr style={{marginLeft:"10px",marginRight:"10px"}}></hr>
         <div style={{marginTop:"40px"}}>
            <h3 style={{color:"white",fontFamily:"sans-serif",fontWeight:"600",textAlign:"center"}}>Don't have an account? <span  style={{color:"red",fontFamily:"sans-serif",fontWeight:"600"}}>Register here!</span> </h3>
         </div>
         <div style={{marginTop:"30px",display:"flex",justifyContent:"center"}}>
            <button style={{width:"90px",height:"25px",backgroundColor:" #90EE90",fontFamily:"sans-serif",fontWeight:"800"}}>Register</button>
         </div>



        </div>
        
        
      
        </>
    )
}
   