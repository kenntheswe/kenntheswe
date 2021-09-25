import React from 'react';
import { Link } from 'react-scroll';
import logo from '../images/logo.png';
import { useDarkMode } from './hooks/useDarkMode';

const Navbar = ({ toggle }) => {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <nav className="flex justify-between h-18" role="navigation">
      <Link to="/" className="m-4 cursor-pointer">
        <img src={logo} alt="logo" style={{ width: '48px' }} />
      </Link>
      <div className="flex m-4">
        <div className="cursor-pointer md:hidden" onClick={toggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
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
          <Link to="about" spy={true} smooth={true}>
            About
          </Link>
          <Link to="skills" spy={true} smooth={true}>
            Skills
          </Link>
          <Link to="projects" spy={true} smooth={true}>
            Projects
          </Link>
          <Link to="contact" spy={true} smooth={true}>
            <button className="focus:outline-none bg-green-400 hover:bg-green-300 px-4 py-2 rounded transition-colors duration-300">
              HIRE ME!
            </button>
          </Link>
        </div>
        <div
          onClick={() => setTheme(colorTheme)}
          className="ml-4 md:ml-8 md:mt-2 focus:outline-none text-white bg-gray-900 w-8 h-8 dark:bg-white dark:text-gray-900 rounded-full transition duration-500"
        >
          {colorTheme === "light" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
