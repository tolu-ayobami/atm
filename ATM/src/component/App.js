import React, { useState } from "react";
import Reviews from "./reviews";
import "./App.css";
import Proper from "./proper";






function App() {

  const [con, setCon] = useState([]);

  

  const yinu = (Tasks)=>{
    const id = Math.floor(Math.random() * 1000) + 1
    
        const inu = { id, ...Tasks } 
        setCon([...con, inu])
    }


return(


<div className="section"> 

 <Proper  con={con} />
  

 
  <Reviews yinu={yinu} />

  </div>
  
 
);

}
export default App; 