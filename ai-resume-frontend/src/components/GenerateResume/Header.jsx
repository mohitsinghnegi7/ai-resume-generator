import React from 'react'
import {  FaRobot } from "react-icons/fa";


const Header = () => {
  return (
    <div>
       <div className="text-center mb-10">
                <div className="badge badge-primary badge-lg gap-2 px-5 py-4 mb-6">
                  <FaRobot />
                  AI Powered Resume Builder
                </div>
      
                <h1 className="text-3xl md:text-6xl font-extrabold leading-tight">
                  Build Your Dream Resume
                  <span className="block text-primary mt-2">
                    Using Artificial Intelligence
                  </span>
                </h1>
      
                <p className="mt-6 text-lg opacity-70 max-w-3xl mx-auto">
                  Describe yourself, your skills, projects, experience,
                  education and achievements. Our AI will transform your
                  information into a beautiful ATS-friendly resume in seconds.
                </p>
              </div>
    </div>
  )
}

export default Header
