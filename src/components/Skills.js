import React, { Component } from 'react'

export default class Skills extends Component {
  render() {
    return (
      <div className="h-screen flex flex-col">
        <div className="flex justify-end sticky top-0 mr-6">
          <h1 id="skills">Skills</h1>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        </div>
        <div className="flex justify-start md:justify-between items-left text-2xl md:text-3xl lg:text-4xl mx-8">
          <div className="flex flex-col m-4">
            <h2>Front End</h2>
            <div className="mt-2">
              <i className="devicon-html5-plain colored mr-2"></i>
              <i className="devicon-css3-plain colored mx-2"></i>
              <i className="devicon-javascript-plain colored mx-2"></i>
              <i className="devicon-react-original colored mx-2"></i>
              <i className="devicon-bootstrap-plain colored mx-2"></i>
              <i className="devicon-tailwindcss-plain colored ml-2"></i>
            </div>
          </div>
          <div className="flex flex-col m-4">
            <h2>Back End</h2>
            <div className="mt-2">
              <i className="devicon-rails-plain colored mr-2"></i>
              <i className="devicon-ruby-plain colored mx-2"></i>
              <i className="devicon-nodejs-plain colored mx-2"></i>
              <i className="devicon-postgresql-plain colored ml-2"></i>
            </div>
          </div>
          <div className="flex flex-col m-4">
            <h2>DevOps</h2>
            <div className="mt-2">
              <i className="devicon-git-plain colored mr-2"></i>
              <i className="devicon-github-original colored mx-2"></i>
              <i className="devicon-heroku-plain colored mx-2"></i>
              <i className="devicon-yarn-plain colored mx-2"></i>
              <i className="devicon-npm-original-wordmark colored ml-2"></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
