import React from 'react'
import baiku from '../images/baiku.png'
import studioFind from '../images/studioFind.png'
import watchlist from '../images/watchlist.png'

const Projects = () => {
  return (
    <div className="flex flex-col md:flex m-8">
      <div className="flex space-x-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
        <h1 className="text-2xl" id="projects">Projects</h1>
      </div>
      <div className="grid gap-8 grid-cols-1 my-8">
        <div className="project grid gap-8 grid-cols-1 md:grid-cols-2">
          <div className="project-image-container flex justify-center">
            <img className="project-image" data-aos="fade-left" src={baiku} alt="baiku"/>
          </div>
          <div className="self-center">
            <h1 className="text-2xl" data-aos="fade-right">Baiku</h1>
            <p data-aos="fade-right">A progressive web application (PWA) providing a bicycle parking spot platform. Users can search the bicycle parking spots & add a new bicycle parking spot. Furthermore, users can leave a review on the bicycle spot that they've used.</p>
            <div className="flex space-x-2 my-2 text-3xl">
              <i data-aos="fade-right" data-aos-duration="300" className="devicon-rails-plain colored"></i>
              <i data-aos="fade-right" data-aos-duration="600" className="devicon-javascript-plain colored"></i>
              <i data-aos="fade-right" data-aos-duration="900" className="devicon-html5-plain colored"></i>
              <i data-aos="fade-right" data-aos-duration="1200" className="devicon-css3-plain colored"></i>
              <i data-aos="fade-right" data-aos-duration="1500" className="devicon-bootstrap-plain colored"></i>
              <i data-aos="fade-right" data-aos-duration="1800" className="devicon-postgresql-plain colored"></i>
              <i data-aos="fade-right" data-aos-duration="2100" className="devicon-git-plain colored"></i>
              <i data-aos="fade-right" data-aos-duration="2400" className="devicon-heroku-plain colored"></i>
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              <a className="bg-green-400 hover:bg-green-300 transition-colors duration-300 px-4 py-2 rounded-full" data-aos="fade-up" href="https://www.baiku-official.com/" target="_blank" rel="noreferrer nofollow">Demo</a>
              <a className="bg-green-400 hover:bg-green-300 transition-colors duration-300 px-4 py-2 rounded-full" data-aos="fade-up" href="https://github.com/Kenn-0/baiku-app" target="_blank" rel="noreferrer nofollow">Code</a>
            </div>
          </div>
        </div>
        <div className="project grid gap-8 grid-cols-1 md:grid-cols-2">
          <div className="project-image-container flex justify-center">
            <img className="project-image" data-aos="fade-left" src={studioFind} alt="studiofind"/>
          </div>
          <div className="self-center">
            <h1 className="text-2xl" data-aos="fade-right">StudioFind</h1>
            <p data-aos="fade-right">A web application providing a studio/ space rental platform. Users can search & rent the studio/ space provided by the owners on the site or add a new studio/ space for the users to rent. Moreover, users can view the list of studio/ space bookings that they've made.</p>
            <div className="flex space-x-2 my-2 text-3xl">
              <i data-aos="fade-right" data-aos-duration="300" className="devicon-rails-plain colored"></i>
              <i data-aos="fade-right" data-aos-duration="600" className="devicon-javascript-plain colored"></i>
              <i data-aos="fade-right" data-aos-duration="900" className="devicon-html5-plain colored"></i>
              <i data-aos="fade-right" data-aos-duration="1200" className="devicon-css3-plain colored"></i>
              <i data-aos="fade-right" data-aos-duration="1500" className="devicon-bootstrap-plain colored"></i>
              <i data-aos="fade-right" data-aos-duration="1800" className="devicon-postgresql-plain colored"></i>
              <i data-aos="fade-right" data-aos-duration="2100" className="devicon-git-plain colored"></i>
              <i data-aos="fade-right" data-aos-duration="2400" className="devicon-heroku-plain colored"></i>
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              <a className="bg-green-400 hover:bg-green-300 transition-colors duration-300 px-4 py-2 rounded-full" data-aos="fade-up" href="https://www.baiku-official.com/" target="_blank" rel="noreferrer nofollow">Demo</a>
              <a className="bg-green-400 hover:bg-green-300 transition-colors duration-300 px-4 py-2 rounded-full" data-aos="fade-up" href="https://github.com/Kenn-0/baiku-app" target="_blank" rel="noreferrer nofollow">Code</a>
            </div>
          </div>
        </div>
        <div className="project grid gap-8 grid-cols-1 md:grid-cols-2">
          <div className="project-image-container flex justify-center">
            <img className="project-image" data-aos="fade-left" src={watchlist} alt="watchlist"/>
          </div>
          <div className="self-center">
            <h1 className="text-2xl" data-aos="fade-right">Watchlist</h1>
            <p data-aos="fade-right">A web application displaying movie watchlists. Users can view the watchlist & create their own watchlist accordingly. Also, users can bookmark relevant movies on the watchlists that have been created or the ones that they've created.</p>
            <div className="flex space-x-2 my-2 text-3xl">
              <i data-aos="fade-right" data-aos-duration="300" className="devicon-rails-plain colored"></i>
              <i data-aos="fade-right" data-aos-duration="600" className="devicon-javascript-plain colored"></i>
              <i data-aos="fade-right" data-aos-duration="900" className="devicon-html5-plain colored"></i>
              <i data-aos="fade-right" data-aos-duration="1200" className="devicon-css3-plain colored"></i>
              <i data-aos="fade-right" data-aos-duration="1500" className="devicon-bootstrap-plain colored"></i>
              <i data-aos="fade-right" data-aos-duration="1800" className="devicon-postgresql-plain colored"></i>
              <i data-aos="fade-right" data-aos-duration="2100" className="devicon-git-plain colored"></i>
              <i data-aos="fade-right" data-aos-duration="2400" className="devicon-heroku-plain colored"></i>
            </div>
            <div className="flex justify-center space-x-5 mt-4">
              <a className="bg-green-400 hover:bg-green-300 transition-colors duration-300 px-4 py-2 rounded-full" data-aos="fade-up" href="https://www.baiku-official.com/" target="_blank" rel="noreferrer nofollow">Demo</a>
              <a className="bg-green-400 hover:bg-green-300 transition-colors duration-300 px-4 py-2 rounded-full" data-aos="fade-up" href="https://github.com/Kenn-0/baiku-app" target="_blank" rel="noreferrer nofollow">Code</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
