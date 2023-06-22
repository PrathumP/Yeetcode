import { useState } from 'react'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


 {/*const problems = [{
  title: "201. Bitwise AND of Numbers Range",
  difficulty: "Medium",
  acceptance: "42%"
},{
  title: "201. Bitwise AND of Numbers Range",
  difficulty: "Medium",
  acceptance: "412%"
},
  {
      title: "202. Happy Number",
      difficulty: "Easy",
      acceptance: "54.9%"
  },
  {
      title: "203. Remove Linked List Elements",
      difficulty: "Hard",
      acceptance: "42%"
  }];

  function problemStatement(props){
    const title = props.title;
    const difficulty = props.difficulty;
    const acceptance = props.acceptance;
    return (
    <tr>
      <td> {title} </td>
      <td> {difficulty} </td>
      <td> {acceptance} </td>
      </tr> 
      );
  }   */}

function App() {
  return (
    <div className="App"> <h1> Hello bhai</h1></div>,
    <Router>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      {/*  <Route exact path ="/signup" component ={Signup} />
        <Route exact path ="/problemset/all" component ={problems} /> */}
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {/* Add your content here */}
    </div>
  );
}

function Login(){
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

export default App
