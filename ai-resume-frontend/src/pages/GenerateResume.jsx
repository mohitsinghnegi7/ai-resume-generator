import React, { useEffect } from 'react'
import { useState } from "react";
import {  FaRobot,  FaMagic,  FaFileAlt,  FaTrash,  FaCheckCircle, FaBrain, FaBook, FaPlusCircle,} from "react-icons/fa";
import { generateResume } from '../api/ResumeService';
import toast from 'react-hot-toast';
import Header from '../components/GenerateResume/Header';
import BottomHighlight from '../components/GenerateResume/BottomHighlight'
import Feature from '../components/GenerateResume/Feature';
import { useForm, useFieldArray } from 'react-hook-form';


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
})
    const { register, handleSubmit, reset} = useForm({
      defaultValues : data
    })

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
    console.log("Generating Resume...", description);

    try{
        setLoading(true);
        const responseData = await generateResume(description)
        console.log(responseData.data);
        setData(responseData.data);
        reset(responseData.data);
        setShowFormUI(true);
        
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

 const renderFieldArray = (fields, label, name, keys) => {
    return (
      <div className="form-control w-full mb-4">
        <h3 className="text-xl font-semibold">{label}</h3>
        {fields.fields.map((field, index) => (
          <div key={field.id} className="p-4 rounded-lg mb-4 bg-base-100">
            {keys.map((key) => (
              <div key={key}>
                {console.log(`${name}`)}
                {renderInput(`${name}.${index}.${key}`, key)}
              </div>
            ))}
            <button
              type="button"
              onClick={() => fields.remove(index)}
              className="btn btn-error btn-sm mt-2"
            >
              <FaTrash className="w-5 h-5 text-base-content" /> Remove {label}
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            fields.append(
              keys.reduce((acc, key) => ({ ...acc, [key]: "" }), {})
            )
          }
          className="btn btn-secondary btn-sm mt-2 flex items-center"
        >
          <FaPlusCircle className="w-5 h-5 mr-1 text-base-content" /> Add{" "}
          {label}
        </button>
      </div>
    );
  };

const renderInput = (name, lable, type = "text")=>{
 return  (
 <div className="form-control w-full  mb-4">
      <label className="label">
        <span className="label-text text-base-content">{lable}</span>
      </label>
      <input
        type={type}
        {...register(name)}
        className="input input-bordered rounded-xl w-full bg-base-100 text-base-content"
      />
    </div>
  )
}

function showForm(){
    return (
      <>
        <div className='w-full p-10'>
              <h1 className='text-4xl font-bold mb-6 flex items-center justify-center gap-2'>
                <FaBook className='text-accent'/>
                  Resume Form   </h1>
                   <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-6 space-y-6 bg-base-200 rounded-lg text-base-content"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {renderInput("personalInformation.fullName", "Full Name")}
              {renderInput("personalInformation.email", "Email", "email")}
              {renderInput(
                "personalInformation.phoneNumber",
                "Phone Number",
                "tel"
              )}
              {renderInput("personalInformation.location", "Location")}
              {renderInput("personalInformation.linkedin", "LinkedIn", "url")}
              {renderInput("personalInformation.github", "Github", "url")}
              {renderInput("personalInformation.portfolio", "Portfolio", "url")}
            </div>

            <h3 className="text-xl font-semibold">Summary</h3>
            <textarea
              {...register("summary")}
              className="textarea textarea-bordered w-full bg-base-100 text-base-content"
              rows={4}
            ></textarea>
{/* 
            {renderFieldArray(skillsFields, "Skills", "skills", [
              "title",
              "level",
            ])} */}
            {/* {renderFieldArray(experienceFields, "Experience", "experience", [
              "jobTitle",
              "company",
              "location",
              "duration",
              "responsibility",
            ])} */}
            {/* {renderFieldArray(educationFields, "Education", "education", [
              "degree",
              "university",
              "location",
              "graduationYear",
            ])} */}
            {/* {renderFieldArray(
              certificationsFields,
              "Certifications",
              "certifications",
              ["title", "issuingOrganization", "year"]
            )} */}
            {/* {renderFieldArray(projectsFields, "Projects", "projects", [
              "title",
              "description",
              "technologiesUsed",
              "githubLink",
            ])} */}

            <div className="flex gap-3 mt-16  p-4 rounded-xl ">
              {/* <div className="flex-1">
                {/* {renderFieldArray(languagesFields, "Languages", "languages", [
                  "name",
                ])} */}
              {/* </div>
              <div className="flex-1">
                {renderFieldArray(interestsFields, "Interests", "interests", [
                  "name",
                ])}
              </div>  */}
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Submit
            </button>
          </form>
        </div>             
            </div>
      </>
    )
  }

  return (
    <div>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-base-300 via-base-200 to-base-300 flex flex-col items-center justify-center px-4 py-10">
    
      {/* {showFormUi && showForm()} */}
      {showForm()}
      {showInputField()}
   
    </div>
    </div>
  )
}

// const GenerateResume = () =>{
//    const [data, setData] = useState({
//     personalInformation: {
//       fullName: "",
//       email: "",
//       phoneNumber: "",
//       location: "",
//       linkedin: "",
//       github: "",
//       portfolio: ""
//     },

//     skills: [],

//     experience: [],

//     education: []
//   });
//   return (
//     <div>
//        <div className="p-10">

//       <PersonalInformation
//         personalInformation={data.personalInformation}
//         setData={setData}
//       />

//       <Skills
//         skills={data.skills}
//         setData={setData}
//       />

//       <Experience
//         experience={data.experience}
//         setData={setData}
//       />

//       <Education
//         education={data.education}
//         setData={setData}
//       />

//       <button
//         className="btn btn-primary mt-10"
//         onClick={() => console.log(data)}
//       >
//         Submit
//       </button>

//     </div>
//     </div>
//   )
// }

export default GenerateResume
