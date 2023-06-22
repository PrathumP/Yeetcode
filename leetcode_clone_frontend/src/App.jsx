import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const problems = [{
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

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ="/" component ={Home} />
        <Route exact path ="/login" component ={Login} />
        <Route exact path ="/signup" component ={Signup} />
        <Route exact path ="/problemset/all" component ={problems} />
      </Switch>
    </Router>
  )
}

function problemStatement(props){
  const title = props.title;
  const difficulty = props.difficulty;
  const acceptance = props.acceptance;
  return 
  <tr>
    <td> {title} </td>
    <td> {difficulty} </td>
    <td> {acceptance} </td>
    </tr>
}

export default App
