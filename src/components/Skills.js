import React, { Component } from 'react'

export default class Skills extends Component {
  render() {
    return (
      <div className="h-full md:h-screen flex flex-col">
        <div className="flex justify-end mr-6">
          <h1 id="skills">Skills</h1>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        </div>
        <div className="block lg:flex lg:justify-between items-left text-2xl md:text-3xl lg:text-4xl mx-8">
          <div className="flex flex-col space-4">
            <h2 data-aos="flex justify-start items-left fade-left">Front End</h2>
            <div className="flex space-x-2 mt-4 text-4xl md:text-5xl">
              <i data-aos="fade-right" data-aos-duration="500" className="devicon-html5-plain colored"></i>
              <i data-aos="fade-right" data-aos-duration="1000" className="devicon-css3-plain colored"></i>
              <i data-aos="fade-right" data-aos-duration="1500" className="devicon-javascript-plain colored"></i>
              <i data-aos="fade-right" data-aos-duration="2000" className="devicon-react-original colored"></i>
              <i data-aos="fade-right" data-aos-duration="2500" className="devicon-bootstrap-plain colored"></i>
              <i data-aos="fade-right" data-aos-duration="3000" className="devicon-tailwindcss-plain colored"></i>
            </div>
          </div>
          <div className="flex flex-col m-4">
            <h2 data-aos="fade-left">Back End</h2>
            <div className="flex space-x-2 mt-4 text-4xl md:text-5xl">
              <i data-aos="fade-right" data-aos-duration="500" className="devicon-rails-plain colored"></i>
              <i data-aos="fade-right" data-aos-duration="1000" className="devicon-ruby-plain colored"></i>
              <i data-aos="fade-right" data-aos-duration="1500" className="devicon-nodejs-plain colored"></i>
              <i data-aos="fade-right" data-aos-duration="2000" className="devicon-postgresql-plain colored"></i>
            </div>
          </div>
          <div className="flex flex-col m-4">
            <h2 data-aos="fade-left">DevOps</h2>
            <div className="flex space-x-2 mt-4 text-4xl md:text-5xl">
              <i data-aos="fade-right" data-aos-duration="500" className="devicon-git-plain colored"></i>
              <i data-aos="fade-right" data-aos-duration="1000" className="devicon-github-original colored"></i>
              <i data-aos="fade-right" data-aos-duration="1500" className="devicon-heroku-plain colored"></i>
              <i data-aos="fade-right" data-aos-duration="2000" className="devicon-yarn-plain colored"></i>
              <i data-aos="fade-right" data-aos-duration="2500" className="devicon-npm-original-wordmark colored"></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
