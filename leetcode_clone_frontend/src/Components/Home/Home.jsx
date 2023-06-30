import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

export default function Home() {
  return (
    <div>
      <div className="navbar">
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/problems">Problems</Link>
      </div>
      <h1>Welcome to Leetcode</h1>
      {/* Add your content here */}
    </div>
  );
}

