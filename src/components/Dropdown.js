import React from 'react'
import { Link } from 'react-scroll'

const Dropdown = ({isOpen, toggle}) => {
  return (
    <div>
      <div className={isOpen ? 'grid grid-rows-4 text-center items-center cursor-pointer text-2xl' : 'hidden'} onClick={toggle}>
        <Link to="about" spy={true} smooth={true}>About</Link>
        <Link to="skills" spy={true} smooth={true}>Skills</Link>
        <Link to="projects" spy={true} smooth={true}>Projects</Link>
        <Link to="contact" spy={true} smooth={true}><button className="focus:outline-none bg-green-400 hover:bg-green-300 px-4 py-2 rounded transition-colors duration-300 mt-2">HIRE ME!</button></Link>
      </div>
    </div>
  )
}

export default Dropdown
