import React from 'react'
import {  FaRobot,  FaMagic,  FaFileAlt} from "react-icons/fa";


const Feature = () => {
  return (
    <div>
       <div className="divider text-lg font-semibold mt-12">
              Why Use Resume AI?
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-base-300">
                <div className="card-body text-center">
                  <FaRobot className="mx-auto text-5xl text-primary" />

                  <h2 className="card-title justify-center">
                    AI Generation
                  </h2>

                  <p>
                    Generate professional resumes from simple
                    descriptions within seconds.
                  </p>
                </div>
              </div>

              <div className="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-base-300">
                <div className="card-body text-center">
                  <FaFileAlt className="mx-auto text-5xl text-secondary" />

                  <h2 className="card-title justify-center">
                    ATS Friendly
                  </h2>

                  <p>
                    Optimized to pass modern Applicant Tracking
                    Systems used by recruiters.
                  </p>
                </div>
              </div>

              <div className="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-base-300">
                <div className="card-body text-center">
                  <FaMagic className="mx-auto text-5xl text-accent" />

                  <h2 className="card-title justify-center">
                    Smart Suggestions
                  </h2>

                  <p>
                    AI enhances your achievements, skills and
                    professional summary automatically.
                  </p>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Feature
