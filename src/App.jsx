import React from "react";
import Nav from "./components/Nav/Nav";
import Home from "./Pages/Home";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import './index.css';
import Login from "./Pages/Login";
import Notices from "./Pages/Notices";
import Events from "./Pages/Events";
import Cart from "./Pages/Cart";
import ViewNotice from "./Pages/ViewNotice";
import ViewEvent from "./Pages/ViewEvent";




export default function App(){
  return(
    <>

    <BrowserRouter>
    <Nav></Nav>
    <Routes>
      <Route path="/" element={<Home></Home>}>
      </Route>
       <Route path="/notices" element={<Notices></Notices>}>
      </Route>
     
      <Route path="/notices/:id" element={<ViewNotice></ViewNotice>}>
      </Route>

     
       <Route path="/events/:id" element={<ViewEvent></ViewEvent>}>
      </Route>

       <Route path="/events" element={<Events></Events>}>
      </Route>
      
       <Route path="/logIn" element={<Login></Login>}>
      </Route>
      <Route path="/save" element={<Cart></Cart>}>

      </Route>
     
      
    </Routes>
    </BrowserRouter>
    
    </>
  )
}