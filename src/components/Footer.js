import React from 'react'

const Footer = () => {
  return (
    <div className="flex justify-between items-center mr-4">
      <div className="flex space-x-3 ml-4 mb-4 text-3xl">
        <a href="https://www.linkedin.com/in/kennvungan/" target="_blank" rel="noreferrer nofollow"><i className="devicon-linkedin-plain colored hover:opacity-70 transition-opacity duration-300"></i></a>
        <a href="https://github.com/Kenn-0" target="_blank" rel="noreferrer nofollow"><i style={{ color:"grey" }} className="devicon-github-original colored hover:opacity-70 transition-opacity duration-300"></i></a>
      </div>
      <p>&copy; 2021 Kenn's. All Rights Reserved.</p>
    </div>
  )
}

export default Footer
