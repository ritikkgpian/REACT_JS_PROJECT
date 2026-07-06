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
       <Route path="/events" element={<Events></Events>}>
      </Route>
      
       <Route path="/logIn" element={<Login></Login>}>
      </Route>
      
    </Routes>
    </BrowserRouter>
    
    </>
  )
}