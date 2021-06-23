import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
export default class Navbar extends Component {
  render() {
    return (
      <nav className="flex justify-between h-18" role="navigation">
        <Link to="/">
         <img src={logo} alt="logo" className="m-4" style={{ width: "40px"}}/>
        </Link>
        <div className="p-4 cursor-pointer md:hidden">
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
        <div className="p-6 md:block hidden">
          <Link className="p-4" to="/about">About</Link>
          <Link className="p-4" to="/skills">Skills</Link>
          <Link className="p-4" to="/projects">Projects</Link>
          <Link className="p-4" to="/contact">Contact</Link>
        </div>
      </nav>
    )
  }
}
