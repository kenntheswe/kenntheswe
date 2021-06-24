import React, { Component } from 'react';
import profile from '../images/profile.jpg';

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="flex sticky-top m-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <h1 id="about">About</h1>
        </div>
        <div className="flex">
          <img src={profile} alt="profile" className="rounded-lg w-48 m-4"  />
          <p className="text-left mt-4 mx-4">Hi, I am a <strong>Full Stack Web Developer</strong> based in Tokyo, Japan. After working as non-tech roles for almost 5 years, I decided to take the leap to pursue a career in IT & software development. I enrolled in a full-time immersive web development course at Le Wagon in Tokyo. Having graduated from this intensive program, I affirm that this is the best life-changing decision I've ever made in my life. I love learning new technologies practically by building projects.</p>
        </div>
      </div>
    )
  }
}
