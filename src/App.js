import React from "react";
import "./App.css";
import Img from './Images/wishing.gif';

function App() {
  const name="Prakash";
  return (
    <>
    <div className="body">
      <h1 className="content">Hi, {name}!</h1>
      <img alt="Loading..." width="90%" className="img" src={Img}></img>
      
    </div>
    
    </>
  );
}

export default App;
