import React, { Component } from 'react';
import { Link } from 'react-scroll';

export default class Hero extends Component {
  render() {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 data-aos="fade-left" data-aos-duration="1000" className="font-serif italic lg:text-6xl md:text-5xl sm:text-3xl text-xl font-bold">Kenn Vun Gan</h1>
        <h1 data-aos="fade-right" data-aos-duration="1500" className="lg:text-6xl md:text-5xl sm:text-3xl text-xl font-light">Full Stack Developer</h1>
        <Link to="projects" spy={true} smooth={true}><button data-aos="fade-up" data-aos-duration="1500" className="rounded-full py-3 px-6 focus:outline-none bg-green-400 hover:bg-green-300 transition-colors duration-300 ease-in-out mt-5">Discover More</button></Link>
      </div>
    )
  }
}
