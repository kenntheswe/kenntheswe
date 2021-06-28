import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className="flex justify-between items-center py-4">
      <div>
        <i className="devicon-linkedin-plain colored ml-6"></i>
        <i className="devicon-github-original colored mx-2"></i>
      </div>
      <p className="mr-6">&copy; 2021 Kenn's. All Rights Reserved.</p>
      </div>
    )
  }
}
