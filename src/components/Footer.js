import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className="flex justify-between items-center py-4">
      <div className="flex">
        <i className="devicon-linkedin-plain ml-6 colored"></i>
        <i className="devicon-github-original mx-2 colored"></i>
      </div>
      <p className="mr-6">&copy; 2021 Kenn's. All Rights Reserved.</p>
      </div>
    )
  }
}
