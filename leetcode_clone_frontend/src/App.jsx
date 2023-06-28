import { useState } from 'react'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Signup from "./Components/Signup/Signup.jsx";
import Login from "./Components/Login/Login.jsx";
import Error from "./Components/Error.jsx";
import ProblemsPage from './Components/ProblemsPage/Problemspage';


function App() {
  return (
    <div className="App"> <h1> Hello bhai</h1></div>,
    <Router>
      <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
       <Route path ="/signup" element ={<Signup/>}></Route>
      <Route path ="/problemset/all" element ={<ProblemsPage/>}></Route>
      <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  );
}


export default App
