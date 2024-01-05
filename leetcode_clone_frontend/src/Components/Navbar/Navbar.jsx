import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { UserRoundCheck } from 'lucide-react';
import { UserRound } from 'lucide-react';
import { UserRoundX } from 'lucide-react';
import { Home } from 'lucide-react';
import { useEffect} from 'react';

const Navbar = ({ isAuthenticated }) => {
  useEffect(() => {
    console.log('Navbar re-rendered', isAuthenticated);
  }, [isAuthenticated]);
  return (
    <div className="navbar">
        <Link to="/" className="home"><Home /></Link>
        {isAuthenticated ? (
          <>
          <Link to="/problems" className="problems" >Problems</Link>
          <UserRoundCheck className = "user" />
          </>
        ) : (
        <>
        <Link to="/problems" >Problems</Link>
        <Link to="/login" >Login</Link>
        <Link to="/signup" className="signup-link">Signup</Link>
        <UserRound className = "user" />
        </>
      )}
    </div>
  );
};

export default React.memo(Navbar);

