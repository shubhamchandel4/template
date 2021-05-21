import React from "react";
import "./App.css";
import Navbar from "./component/navbar";
import Home from "./component/Home";
import backgroundimg from "./Images/background.jpg";


const App=()=>{
  return(
    <>
    
    <Navbar/>
    <Home/>

    <div class="tiledBackground">
    <img className="back" src={backgroundimg} alt="background"/>
</div>

   
    </>

  )

}

export default App;
