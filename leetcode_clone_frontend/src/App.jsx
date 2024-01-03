import './App.css'
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home/Home.jsx";
import Signup from "./Components/Signup/Signup.jsx";
import Login from "./Components/Login/Login.jsx";
import Error from "./Components/Error.jsx";
import ProblemsPage from './Components/ProblemsPage/Problemspage';
import Allproblems from "./Components/Allproblems/Allproblems";
import About from "./Components/About/About";
import TechnicalInterview from "./Components/TechnicalInterview/TechnicalInterview";
import Navbar from './Components/Navbar/Navbar.jsx';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
       <Route path ="/signup" element ={<Signup/>}></Route>
      <Route path ="/problems" element ={<Allproblems/>}></Route>
      <Route path="/problems/:pid/" element={<ProblemsPage />} />
      <Route path="*" element={<Error />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/technical-interview" element={<TechnicalInterview />}></Route>
      </Routes>
    </Router>
  );
}


export default App;
