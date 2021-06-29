import React, { Component } from 'react';
import profile from '../images/profile.jpg';
import { Link } from 'react-scroll';

export default class About extends Component {
  render() {
    return (
      <div className="h-screen">
        <div className="flex sticky top-0 ml-6 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <h1 id="about">About</h1>
        </div>
        <div className="flex">
          <img src={profile} alt="profile" className="rounded-lg w-48 mx-6"  />
          <p className="text-left mt-4 mr-6">Hi, I am Kenn! I'm a passionate <strong>Full Stack Web Developer</strong> based in Tokyo, Japan. I love exploring & learning new technologies by building projects.</p>
        </div>
        <Link to="projects"><button>Check Out My Work</button></Link>
      </div>
    )
  }
}
