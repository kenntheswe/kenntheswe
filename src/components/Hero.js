import React from 'react'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div className="h-screen flex flex-col justify-start items-center pt-48">
      <h1 data-aos="fade-left" data-aos-duration="1000" className="font-serif italic text-3xl md:text-5xl lg:text-6xl font-bold">Kenn</h1>
      <h1 data-aos="fade-right" data-aos-duration="1500" className="text-3xl md:text-5xl lg:text-6xl font-light">Software Engineer</h1>
      <Link to="projects" spy={true} smooth={true}><button data-aos="fade-up" data-aos-duration="1500" className="rounded-full py-3 px-6 focus:outline-none bg-green-400 hover:bg-green-300 transition-colors duration-300 ease-in-out mt-5">Discover More</button></Link>
    </div>
  )
}

export default Hero
