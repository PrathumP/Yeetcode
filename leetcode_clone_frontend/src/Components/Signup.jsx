import React from "react";
import { Link } from "react-router-dom";

export default function Signup(){
    return (
    <div>
      <h1> Sign up</h1>
      <div>
        <input type ="text" placeholder="E-mail"></input>
        <input type ="text" placeholder="Password"></input>
      </div>
      <div>
        <button> Sign Up</button>
      </div>
    </div> );
  }
  