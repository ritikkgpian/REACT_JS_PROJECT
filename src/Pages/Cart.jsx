import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../features/CartSlice";
export default function Cart(){
    const displayItems=useSelector((state)=>state.cart.cartItems);
    const dispatch=useDispatch();
    return(
        <>
        <div>
            {
                displayItems.map(
                    (value)=>{
                        return(
                            <>
                            <div style={{width:"100%",marginTop:"10px"}}>
                                <div style={{display:"flex",flexDirection:"row",gap:"20px",height:"60px",width:"100%",marginLeft:"20px",boxShadow:"2px 2px 10px rgba(0,0,0,0.423)",position:"relative",backgroundColor:"orange"}} >
                                      <div>
                                        <h3 style={{fontFamily:"sans-serif"}} >Title:{value.title}</h3>
                                        <h3   style={{fontFamily:"sans-serif"}} >Category:{value.category}</h3>
                                      </div>
                                      <div style={{marginTop:"10px",display:"flex",gap:"20px"}}>
                                        <h3   style={{fontFamily:"sans-serif"}} >Details:{value.shortContent}</h3>
                                        <h3   style={{fontFamily:"sans-serif"}} >Saved at Date :{value.savedAtDate}</h3>
                                        <h3   style={{fontFamily:"sans-serif"}} >Saved at Time :{value.savedAtTime}</h3>
                                        
                                      </div>
                                      <button key={value.id}  onClick={()=>dispatch(removeFromCart(value))} style={{color:"white",backgroundColor:"red",fontFamily:"sans-serif",width:"80px",borderRadius:"20px",padding:"4px",height:"40px",position:"absolute",top:"10px",right:"30px",}} >
                                           REMOVE
                                      </button>
                                </div>
                            </div>
                            </>
                        )
                    }
                )
            }
        </div>
        </>
    )
}