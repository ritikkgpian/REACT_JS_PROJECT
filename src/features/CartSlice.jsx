import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const initialState={
    cartItems:[],
    // all data in one 
   
    

}
const CartSlice=createSlice(
    {
        name:"cart",
        initialState,
        reducers:{
           addToCart:(state,action)=>{
            const existingItem=state.cartItems.find(
                (item)=>item.id==action.payload.id
            );
            if(existingItem){
                return;
            }
            else{
                 const date=new Date().toLocaleDateString();
                 const time=new Date().toLocaleTimeString();
                state.cartItems.push({...action.payload,savedAtDate:date,savedAtTime:time});
               
                toast.success(`Added to Save at  ${time} `,{
                    duration:4000,
                    position:"top-center",
                    style:{
                           color:"green",
                    fontFamily:"sans-serif",
                    fontWeight:"800",
                    }
                })
            }
           },
           removeFromCart:(state,action)=>{
             state.cartItems=state.cartItems.filter(
                (item)=>item.id!=action.payload.id
             );
             toast.success(`Removed from Save History at ${new Date().toLocaleTimeString()}`,{
                duration:4000,
                position:"top-center",
                style:{
                    color:"green",
                    fontFamily:"sans-serif",
                    fontWeight:"800",


                }
             })
           },
         
        }
    }
);
export const{addToCart,removeFromCart}=CartSlice.actions;
export default CartSlice.reducer;