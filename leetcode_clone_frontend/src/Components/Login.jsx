import React from "react";
import { Link } from "react-router-dom";

export default function Login(){
    return (
    <div>
      <h1> Log In</h1>
      <div>
        <input type ="text" placeholder="E-mail"></input>
        <input type ="text" placeholder="Password"></input>
      </div>
      <div>
        <button> Log in</button>
      </div>
    </div> );
  }
  