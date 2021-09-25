import React from 'react'
import { Link } from 'react-scroll'
// import { useDarkMode } from './hooks/useDarkMode';

const Dropdown = ({isOpen, toggle}) => {
  // const [colorTheme, setTheme] = useDarkMode();
  return (
    <div>
      <div className={isOpen ? 'grid grid-rows-4 text-center items-center cursor-pointer text-2xl' : 'hidden'} onClick={toggle}>
        <Link to="about" spy={true} smooth={true}>About</Link>
        <Link to="skills" spy={true} smooth={true}>Skills</Link>
        <Link to="projects" spy={true} smooth={true}>Projects</Link>
        <Link to="contact" spy={true} smooth={true}><button className="focus:outline-none bg-green-400 hover:bg-green-300 px-4 py-2 rounded transition-colors duration-300 mt-2">HIRE ME!</button></Link>
        {/* <span
          onClick={() => setTheme(colorTheme)}
          className="text-white bg-black w-8 h-8 dark:bg-white dark:text-black rounded-full"
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
        </span> */}
      </div>
    </div>
  )
}

export default Dropdown
