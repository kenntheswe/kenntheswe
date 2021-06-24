import React, { Component } from 'react'

export default class Hero extends Component {
  render() {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="font-serif italic lg:text-7xl md:text-5xl sm:text-3xl text-xl font-bold">Kenn Vun Gan</h1>
        <h1 className="lg:text-7xl md:text-5xl sm:text-3xl text-xl font-light">Full Stack Developer</h1>
      </div>
    )
  }
}
