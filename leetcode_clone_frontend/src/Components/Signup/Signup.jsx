import React, { useState } from "react";
import { backendUrl } from "../constants.js";
import axios from "axios";
import "./Signup.css";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 
  return (
    <div id='signup' className='flex-col'>
      <h1>Signup</h1>
      <div className='signup-form'>
        <div className='subform'>
          <label htmlFor='email'>Email: </label><br/>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type='email'
            name='email'
            placeholder='Your Email'
          />
        </div>

        <div className='subform'>
          <label htmlFor='password'>Password: </label><br/>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            name='password'
            placeholder='Your Password'
          />
        </div>

        <button
          type='submit'
          id='test'
          onClick={async (e) => {
            const response = await fetch(`${backendUrl}/signup`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: email,
                password: password,
              }),
            });

            const json = await response.json();
            console.log(json);
            navigate("/problems");
          }}
        >
          SIGNUP
        </button>
        <p className="forgot-password text-right">
            Already registered? <a href="/login">Login</a>
          </p>
      </div>
    </div>
  );
};

export default Signup;