import React, { useEffect } from 'react'
import { useState } from "react";
import {  FaRobot,  FaMagic,  FaFileAlt,  FaTrash,  FaCheckCircle, FaBrain, FaBook, FaPlusCircle,} from "react-icons/fa";
import { generateResume } from '../api/ResumeService';
import toast from 'react-hot-toast';
import Header from '../components/GenerateResume/Header';
import BottomHighlight from '../components/GenerateResume/BottomHighlight'
import Feature from '../components/GenerateResume/Feature';
import { useForm, useFieldArray } from 'react-hook-form';
import ResumeForm from '../components/GenerateResume/ResumeForm';


const GenerateResume = () => {

  const [data, setData] = useState({
  personalInformation: {
    fullName: "",
    email : "",
    phoneNumber : "",
    location : "",
    linkedin : "",
    github : "",
    portfolio : ""
  },
   skills : [],
   experience : [],
   education : [],
   certifications : [],
   projects : [],
   languages : [],
   interests : []
})
    const { register, handleSubmit, reset,control} = useForm({
      defaultValues : data
    })
    const skillsFields = useFieldArray({control, name:"skills"})
    const experienceFields = useFieldArray({control, name : "experience"})
    const certificationsFields = useFieldArray({control, name:"certifications"})
    const educationFields = useFieldArray({control, name:"education"})
    const projectsFields = useFieldArray({control, name:"projects"})
    const languagesFields = useFieldArray({control, name:"languages"})
    const interestsFields = useFieldArray({control, name:"interests"})

    // const handleSubmit = ()=>{}

    //handle Form submit
    const onSubmit = (data)=>{
      console.log("Form Data : ", data)
          }

    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const [showFormUi, setShowFormUi] = useState(false);
  


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

const handleGenerate =async () => {
    console.log(description)
    
    try{
        setLoading(true);
        const responseData = await generateResume(description)
        console.log(responseData.data);
        setData(responseData.data);
        reset(responseData.data);
        setShowFormUi(true);
        
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
    


  useEffect(()=>{
    console.log(data)
  },[data])

  
function showInputField(){
    return  <div className="relative z-10 w-full max-w-5xl">
        {/* Header */}
        <Header/>

        {/* Main Card */}
        <div
          className="card backdrop-blur-xl bg-base-100/75 border border-base-content/10 shadow-2xl   rounded-3xl"
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
                className="textarea w-full h-80 text-lg bg-base-100 border-2 border-primary/20 rounded-2xl focus:border-primary focus:outline-none transition-all resize-none mt-2"
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
           <Feature/>

            {/* Bottom Highlights */}
           <BottomHighlight/>
          </div>
        </div>
      </div>
  }

const handleClear = () => {
    setDescription("");
};

  return (
    <div>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-base-300 via-base-200 to-base-300 flex flex-col items-center justify-center px-4 py-10">
    
      {showFormUi && <ResumeForm register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          skillsFields={skillsFields}
          experienceFields={experienceFields}
          educationFields={educationFields}
          certificationsFields={certificationsFields}
          projectsFields={projectsFields}
          languagesFields={languagesFields}
          interestsFields={interestsFields}/>} 
      {showInputField()}
   
    </div>
    </div>
  )
}



export default GenerateResume
