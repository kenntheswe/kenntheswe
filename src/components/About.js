import React from 'react'
import profile from '../images/profile.jpg'
import { Link } from 'react-scroll'

const About = () => {
  return (
    <div className="h-screen mx-8 mt-8 mb-12">
      <div className="flex space-x-3 my-8">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
        <h1 className="text-2xl" id="about">About</h1>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center md:space-x-12 md:mx-10">
        <div className="flex-none self-center w-60" style={{minWidth: '60px'}}>
          <img data-aos="fade-right" src={profile} alt="profile" className="rounded-full w-60"/>
        </div>
        <div className="flex flex-col justify-between mt-12 md:mt-0">
          <div data-aos="fade-down">
            <p className="mb-4">Hi, I am Kenn! I'm a passionate <strong>Full Stack Web Developer</strong> based in Tokyo, Japan. I love exploring & learning new technologies by building projects.</p>
            <p>When I am <em>not coding</em>, you can find me at:</p>
            <ul>
              <li>• <strong>cafe</strong> enjoying tea 🍵 & cake 🍰</li>
              <li>• <strong>park</strong> jogging 🏃‍♂️ or wandering around 🚶‍♂️</li>
              <li>• <strong>restaurant</strong> having some delicious cuisines 🍴</li>
            </ul>
            </div>
            <div className="self-center md:self-start my-6">
              <Link to="projects" smooth={true} spy={true}><button data-aos="fade-up" className="focus:outline-none bg-green-400 hover:bg-green-300 transition-colors duration-300 rounded-full py-3 px-6 self-center">My Work</button></Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About
