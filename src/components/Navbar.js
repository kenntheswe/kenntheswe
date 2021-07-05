import React from 'react';
import { Link } from 'react-scroll';
import logo from '../images/logo.png';

const Navbar = ({ toggle }) => {
  return (
    <nav className="flex justify-between h-18 m-4" role="navigation">
      <Link to="#">
        <img src={logo} alt="logo" style={{ width: '48px' }} />
      </Link>
      <div className="cursor-pointer md:hidden" onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="flex space-x-8 cursor-pointer md:block hidden text-xl">
        <Link to="about" spy={true} smooth={true}>About</Link>
        <Link to="skills" spy={true} smooth={true}>Skills</Link>
        <Link to="projects" spy={true} smooth={true}>Projects</Link>
        <Link to="contact" spy={true} smooth={true}><button className="focus:outline-none bg-green-400 hover:bg-green-300 px-4 py-2 rounded transition-colors duration-300">HIRE ME!</button></Link>
      </div>
    </nav>
  );
};

export default Navbar;
