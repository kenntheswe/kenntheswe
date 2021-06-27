import React, { Component } from 'react';


export default class Projects extends Component {
  render() {
    return (
      <div className="h-screen flex flex-col">
        <div className="flex ml-4 sticky top-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <h1 id="projects">Projects</h1>
        </div>
        <div className="project mb-3">
          <img src="" alt="baiku" />
          <div>
            <h1>Baiku</h1>
            <p>A progressive web application (PWA) providing a bicycle parking spot platform. Users can search the bicycle parking spots & add a new bicycle parking spot. Furthermore, users can leave a review on the bicycle spot that they've used.</p>
            <button><a href="https://www.baiku-official.com/" target="_blank" rel="noreferrer nofollow">Demo</a></button>
            <button><a href="https://github.com/Kenn-0/baiku-app" target="_blank" rel="noreferrer nofollow">Code</a></button>
          </div>
        </div>
        <div className="project mb-3">
          <img src="" alt="studiofind" />
          <div>
            <h1>StudioFind</h1>
            <p>A web application providing a studio/ space rental platform. Users can search & rent the studio/ space provided by the owners on the site or add a new studio/ space for the users to rent. Moreover, users can view the list of studio/ space bookings that they've made.</p>
            <button><a href="https://www.baiku-official.com/" target="_blank" rel="noreferrer nofollow">Demo</a></button>
            <button><a href="https://github.com/Kenn-0/baiku-app" target="_blank" rel="noreferrer nofollow">Code</a></button>
          </div>
        </div>
        <div className="project mb-3">
          <img src="" alt="watchlist" />
          <div>
            <h1>Watchlist</h1>
            <p>A web application displaying movie watchlists. Users can view the watchlist & create their own watchlist accordingly. Also, users can bookmark relevant movies on the watchlists that have been created or the ones that they've created.</p>
            <button><a href="https://www.baiku-official.com/" target="_blank" rel="noreferrer nofollow">Demo</a></button>
            <button><a href="https://github.com/Kenn-0/baiku-app" target="_blank" rel="noreferrer nofollow">Code</a></button>
          </div>
        </div>
      </div>
    )
  }
}
