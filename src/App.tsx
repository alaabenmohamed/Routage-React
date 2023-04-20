import React from 'react';
import './App.css';
import About from './comp/About';
// import { AiFillFacebook } from "react-icons/ai";
import {  Routes, Route } from "react-router-dom";
import Login from './comp/Login';
import Service from './comp/Service';
import Design from './comp/Design';
import Contact from './comp/Contact';

function App() {
  return (
 <div>
  <Login/>
  
  < Routes >
      < Route path="/about" element ={<About/>}/>
      < Route path="/Service" element ={< Service/>}/>
      < Route path="/Design" element ={< Design/>}/>
      < Route path="/Contact" element ={< Contact/>}/>
     </Routes>

  
 

 </div>
    
      )
    }

 


export default App;
