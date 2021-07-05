import React from 'react'

const Skills = () => {
  return (
    <div className="m-8">
      <div className="flex justify-end items-center space-x-3">
        <h1 className="text-2xl" id="skills">Skills</h1>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl" data-aos="fade-left">Front End</h2>
          <div className="flex space-x-3 mt-4 text-5xl">
            <i data-aos="fade-right" data-aos-duration="500" className="devicon-html5-plain colored"></i>
            <i data-aos="fade-right" data-aos-duration="1000" className="devicon-css3-plain colored"></i>
            <i data-aos="fade-right" data-aos-duration="1500" className="devicon-javascript-plain colored"></i>
            <i data-aos="fade-right" data-aos-duration="2000" className="devicon-react-original colored"></i>
            <i data-aos="fade-right" data-aos-duration="2500" className="devicon-bootstrap-plain colored"></i>
            <i data-aos="fade-right" data-aos-duration="3000" className="devicon-tailwindcss-plain colored"></i>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-3xl" data-aos="fade-left">Back End</h2>
          <div className="flex space-x-3 mt-4 text-5xl">
            <i data-aos="fade-right" data-aos-duration="500" className="devicon-rails-plain colored"></i>
            <i data-aos="fade-right" data-aos-duration="1000" className="devicon-ruby-plain colored"></i>
            <i data-aos="fade-right" data-aos-duration="1500" className="devicon-nodejs-plain colored"></i>
            <i data-aos="fade-right" data-aos-duration="2000" className="devicon-postgresql-plain colored"></i>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-3xl" data-aos="fade-left">DevOps</h2>
          <div className="flex space-x-3 mt-4 text-5xl">
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

export default Skills
