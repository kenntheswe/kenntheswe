import React, { Component } from 'react';
import baiku from '../images/baiku.png';
import studioFind from '../images/studioFind.png';
import watchlist from '../images/watchlist.png';

export default class Projects extends Component {
  render() {
    return (
      <div className="h-full flex flex-col md:flex">
        <div className="flex ml-6 space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <h1 className="text-xl" id="projects">Projects</h1>
        </div>
        <div className="grid grid-cols-1">

          <div className="project mb-3 md:flex">
            <img className="project-image self-center m-10" data-aos="fade-left" src={baiku} alt="baiku"/>
            <div className="self-center">
              <h1 data-aos="fade-right">Baiku</h1>
              <p data-aos="fade-right">A progressive web application (PWA) providing a bicycle parking spot platform. Users can search the bicycle parking spots & add a new bicycle parking spot. Furthermore, users can leave a review on the bicycle spot that they've used.</p>
              <div>

              </div>
              <div className="flex justify-center space-x-4 mt-4">
                <a className="bg-green-400 hover:bg-green-300 transition-colors duration-300 px-4 py-2 rounded-full" data-aos="fade-up" href="https://www.baiku-official.com/" target="_blank" rel="noreferrer nofollow">Demo</a>
                <a className="bg-green-400 hover:bg-green-300 transition-colors duration-300 px-4 py-2 rounded-full" data-aos="fade-up" href="https://github.com/Kenn-0/baiku-app" target="_blank" rel="noreferrer nofollow">Code</a>
              </div>
            </div>
          </div>
          <div className="project mb-3 md:flex">
            <img className="project-image self-center m-10" data-aos="fade-left" src={studioFind} alt="studiofind"/>
            <div className="self-center">
              <h1 data-aos="fade-right">StudioFind</h1>
              <p data-aos="fade-right">A web application providing a studio/ space rental platform. Users can search & rent the studio/ space provided by the owners on the site or add a new studio/ space for the users to rent. Moreover, users can view the list of studio/ space bookings that they've made.</p>
              <div>

              </div>
              <div className="flex justify-center space-x-4 mt-4">
                <a className="bg-green-400 hover:bg-green-300 transition-colors duration-300 px-4 py-2 rounded-full" data-aos="fade-up" href="https://www.baiku-official.com/" target="_blank" rel="noreferrer nofollow">Demo</a>
                <a className="bg-green-400 hover:bg-green-300 transition-colors duration-300 px-4 py-2 rounded-full" data-aos="fade-up" href="https://github.com/Kenn-0/baiku-app" target="_blank" rel="noreferrer nofollow">Code</a>
              </div>
            </div>
          </div>
          <div className="project mb-3 md:flex">
            <img className="project-image self-center m-10" data-aos="fade-left" src={watchlist} alt="watchlist"/>
            <div className="self-center">
              <h1 data-aos="fade-right">Watchlist</h1>
              <p data-aos="fade-right">A web application displaying movie watchlists. Users can view the watchlist & create their own watchlist accordingly. Also, users can bookmark relevant movies on the watchlists that have been created or the ones that they've created.</p>
              <div>

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
}
