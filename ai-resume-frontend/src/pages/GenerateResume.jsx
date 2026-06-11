import React from 'react'
import { useState } from "react";
import {  FaRobot,  FaMagic,  FaFileAlt,  FaTrash,  FaCheckCircle, FaBrain, FaBook,} from "react-icons/fa";
import { generateResume } from '../api/ResumeService';
import toast from 'react-hot-toast';

const GenerateResume = () => {
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
    personalInformation: {
      fullName: "Durgesh Kumar Tiwari",
      email : "m@gmail.com",
      phoneNumber : "+1234567890",
      location : "New York, USA",
      linkedin : "https://www.linkedin/com/in/abcd",
      github : "https://github.com/abcd",
      portfolio : "https://john-doe.portfolio-websites"
    },
    summary: "",
    skills: [],
    experience: [],
    education: [],
    certifications: [],
    projects: [],
    languages: [],
    interests: [],
    })

  const handleGenerate =async () => {
    console.log(description)
    console.log("Generating Resume...", description);

    try{
        setLoading(true);
        const responseData = await generateResume(description)
        console.log(responseData.data);
        toast.success("Resume Generated Successfully!",{
            duration: 3000,
            position:"top-center"
        })      
    }
    catch(err){
        console.log(err);
        toast.error("Error Generating Resume !",{
            duration: 3000,
            position:"top-center"
        }) 
    }
    finally{
        setLoading(false)
        setDescription("")
    }
  };

  const handleClear = () => {
    setDescription("");
  };

  function handleChange(event){
    const personalInformation = {
      ...data.personalInformation,
      [event.target.name] : event.target.value
    };
    setData({
      ...data, 
     personalInformation : personalInformation
    })
  }

  function showForm(){
    return (
      <div className='w-full p-10'>
        <h1 className='text-4xl font-bold mb-6 flex items-center justify-center gap-2'>
          <FaBook className='text-accent'/>
            Resume Form   </h1>
            <div>
              <p className='py-4 font-bold text-2xl'>Personal Information</p>

              <div className='grid grid-cols-12 gap-7'>
                <div className='col-span-12 lg:col-span-6'>
                  <label htmlFor='name'>Full Name</label>
                    <input type="text" 
                           name="name" 
                           id='name'
                           placeholder="Enter Name" 
                           onChange={handleChange}
                           value={data.personalInformation.fullName}
                           className="input input-bordered w-full" />
                </div>
                <div className='col-span-12 lg:col-span-6'>
                  <label htmlFor='email'>Email</label>
                    <input type="text" 
                           name="email" 
                           onChange={handleChange}
                           id='email'
                           placeholder="Enter Email " 
                           value={data.personalInformation.email}
                           className="input input-bordered w-full" /> 
                </div>
              </div>

              <div className='grid grid-cols-12 gap-7 mt-4'>
                <div className='col-span-12 lg:col-span-6'>
                  <label htmlFor='phoneNumber'>Phone</label>
                    <input type="text"
                           name="phoneNumber" 
                           id='phoneNumber'
                           placeholder="Enter Phone No." 
                           value={data.personalInformation.phoneNumber}
                           className="input input-bordered w-full" />
                </div>
                <div className='col-span-12 lg:col-span-6'>
                  <label htmlFor='location'>Location</label>
                    <input type="text" 
                           name="location"
                           onChange={handleChange}
                           id='location' 
                           placeholder="Enter Email " 
                           value={data.personalInformation.location}
                           className="input input-bordered w-full" /> 
                </div>
              </div>

              <div className='grid grid-cols-12 gap-7 mt-4'>
                <div className='col-span-12 lg:col-span-6'>
                  <label htmlFor='linkedin'>Linkedin</label>
                    <input type="text"
                           name="linkedin" 
                           onChange={handleChange}
                           id='linkedin'
                           placeholder="Enter LinkedIn Profile Url" 
                           value={data.personalInformation.linkedin}
                           className="input input-bordered w-full" />
                </div>
                <div className='col-span-12 lg:col-span-6'>
                  <label htmlFor='github'>Github</label>
                    <input type="text" 
                           name="github"
                           onChange={handleChange}
                           id='github' 
                           placeholder="Enter Github Url " 
                           value={data.personalInformation.github}
                           className="input input-bordered w-full" /> 
                </div>
              </div>

               <div className='grid grid-cols-12 gap-7 mt-4'>
                <div className='col-span-12 lg:col-span-12'>
                  <label htmlFor='portfolio'>Portfolio</label>
                    <input type="text"
                           name="portfolio" 
                           onChange={handleChange}
                           id='portfolio'
                           placeholder="Enter LinkedIn Profile Url" 
                           value={data.personalInformation.portfolio}
                           className="input input-bordered w-full" />
                </div>
                
              </div>

            </div>
       
      </div>
    )
  }

  function showInputField(){
    return  <div className="relative z-10 w-full max-w-5xl">
        {/* Header */}
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

        {/* Main Card */}
        <div
          className="
            card
            backdrop-blur-xl
            bg-base-100/75
            border
            border-base-content/10
            shadow-2xl
            rounded-3xl
          "
        >
          <div className="card-body p-6 md:p-10">
            {/* Example Alert */}
            <div className="alert alert-info shadow-lg">
              <FaMagic />

              <span>
                Example: I am a Java Full Stack Developer skilled in
                Spring Boot, React, Microservices, Docker, Kafka,
                MySQL and AWS. I have built scalable applications and
                completed several real-world projects.
              </span>
            </div>

            {/* Textarea Heading */}
            <div className="mt-8">
              <label className="label">
                <span className="label-text text-xl font-bold flex items-center gap-3">
                  <FaFileAlt className="text-primary" />
                  Tell Us About Yourself
                </span>
              </label>

              <textarea
                disabled={loading}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Write about your education, skills, projects, internships, work experience, certifications, achievements and career goals..."
                className="
                  textarea
                  w-full
                  h-80
                  text-lg
                  bg-base-100
                  border-2
                  border-primary/20
                  rounded-2xl
                  focus:border-primary
                  focus:outline-none
                  transition-all
                  resize-none
                  mt-2
                "
              />
            </div>

            {/* Character Count */}
            <div className="flex justify-end mt-3">
              <div className="badge badge-outline">
                {description.length} Characters
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row justify-center gap-5 mt-10">
              <button
              disabled={loading}
                onClick={handleGenerate}
                className="btn btn-primary btn-lg px-10 shadow-xl"
              > 
              {loading && <span className='loading loading-spinner'></span>}
                <FaMagic />
                Generate Resume
              </button>

              <button
                onClick={handleClear}
                className="btn btn-outline btn-error btn-lg px-10"
              >
                 {loading && <span className='loading loading-spinner'></span>}
                <FaTrash />
                Clear
              </button>
            </div>

            {/* Features */}
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

            {/* Bottom Highlights */}
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
        </div>
      </div>
  }


  return (
    <div>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-base-300 via-base-200 to-base-300 flex flex-col items-center justify-center px-4 py-10">
    
      {showForm()}
      {showInputField()}

          
    </div>
    </div>
  )
}

export default GenerateResume
