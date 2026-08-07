import React from 'react'
import { FaCheckCircle } from "react-icons/fa";


const BottomHighlight = () => {
  return (
    <div>
       <div className="grid md:grid-cols-3 gap-4 mt-10">
              <div className="flex items-center gap-3 justify-center">
                <FaCheckCircle className="text-success" />
                <span>ATS Optimized</span>
              </div>

              <div className="flex items-center gap-3 justify-center">
                <FaCheckCircle className="text-success" />
                <span>Professional Templates</span>
              </div>

              <div className="flex items-center gap-3 justify-center">
                <FaCheckCircle className="text-success" />
                <span>Instant PDF Export</span>
              </div>
            </div>
    </div>
  )
}

export default BottomHighlight
