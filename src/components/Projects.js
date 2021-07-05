import React from 'react'

import ProjectList from './ProjectList'

const Projects = () => {
  return (
    <div className="flex flex-col md:flex m-8">
      <div className="flex space-x-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
        <h1 className="text-2xl" id="projects">Projects</h1>
      </div>
      <ProjectList />
    </div>
  )
}

export default Projects
