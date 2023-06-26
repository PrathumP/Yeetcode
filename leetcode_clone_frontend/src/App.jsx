import { useState } from 'react'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Signup from "./Components/Signup.jsx";
import Login from "./Components/Login.jsx";
import Error from "./Components/Error.jsx";

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
  }

function App() {
  return (
    <div className="App"> <h1> Hello bhai</h1></div>,
    <Router>
      <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
       <Route path ="/signup" element ={<Signup/>}></Route>
      <Route path ="/problemset/all" element ={<Allproblems/>}></Route>
      <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  );
}


function Allproblems(){
  const [problems, setProblems] = useState([]);
  return (
  <div>
  <h1 >Problems</h1> 
      <div>
        {problems.map((problem) => addProblems(problem))}
      </div>
      <div>
      <button
      onClick={() => setProblems((problems) => (problems = problems1))}
    >
      1
    </button>
    <button
      onClick={() => setProblems((problems) => (problems = problems2))}
    >
      2
    </button>
    </div>
</div>
);
}


function addProblems(props) {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <Link to={`/problems/${props.title}`}>{props.title}</Link>
          </td>
          <td>{props.difficulty}</td>
          <td>{props.acceptance}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default App
