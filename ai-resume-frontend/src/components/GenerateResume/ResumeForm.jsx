import React from 'react'
import FormInput from './FormInput'
import { FaBook } from 'react-icons/fa'
import DynamicFieldsArray from './DynamicFieldsArray'

const ResumeForm = ({  register,
  handleSubmit,
  onSubmit,

  skillsFields,
  experienceFields,
  educationFields,
  certificationsFields,
  projectsFields,
  languagesFields,
  interestsFields,}) => {
  return (
    
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

                   

                    <FormInput 
                    register={register}
                    name="personalInformation.fullName"
                    label="Full Name"
                    required
                    />

                    <FormInput 
                    register={register}
                    name="personalInformation.email"
                    label="Email"
                    type="email"
                    required
                    />

                    <FormInput 
                    register={register}
                    name="personalInformation.phoneNumber"
                    label="Phone Number"
                    type="tel"
                    required
                    />

                    <FormInput 
                    register={register}
                    name="personalInformation.location"
                    label="Location"
                    required
                    />

                    <FormInput 
                    register={register}
                    name="personalInformation.linkedin"
                    label="LinkedIn"
                    type="url"
                    required
                    />

                    <FormInput 
                    register={register}
                    name="personalInformation.github"
                    label="Github"
                    type="url"
                    required
                    />

                    <FormInput
                    register={register}
                    name="personalInformation.portfolio"
                    label="Portfolio"
                    type="url"
                    />

                  </div>
      
                  <h3 className="text-xl font-semibold">Summary</h3>
                  <textarea
                    {...register("summary")}
                    className="textarea textarea-bordered w-full bg-base-100 text-base-content"
                    rows={4}
                  ></textarea>


                   <DynamicFieldsArray
                    fieldArray={skillsFields}
                    label="Skills"
                    name="skills"
                    register={register}
                    fields={[
                    "title",
                    "level",
                        ]}
                    />       

                    <DynamicFieldsArray
                    fieldArray={experienceFields}
                    label="Experience"
                    name="experience"
                    register={register}
                    fields={[
                    "jobTitle",
                    "company",
                    "location",
                    "duration",
                    "responsibility"]}  
                    />

                    <DynamicFieldsArray
                    fieldArray={educationFields}
                    label="Education"
                    name="education"
                    register={register}
                    fields={[
                      "degree",
                    "university",
                    "location",
                    "graduationYear",
                    ]}  
                    />

                    <DynamicFieldsArray
                    fieldArray={certificationsFields}
                    label="Certifications"
                    name="certifications"
                    register={register}
                    fields={[
                      "title", "issuingOrganization", "year"
                    ]}  
                    />

                    <DynamicFieldsArray
                    fieldArray={projectsFields}
                    label="Projects"
                    name="projects"
                    register={register}
                    fields={[
                        "title",
                    "description",
                    "technologiesUsed",
                    "githubLink",
                    ]}  
                    />
     
                  <div className="flex gap-3 mt-16  p-4 rounded-xl ">
                    <div className="flex-1">

                    <DynamicFieldsArray
                    fieldArray={languagesFields}
                    label="Languages"
                    name="languages"
                    register={register}
                    fields={[
                        "name"  ]}  
                     />
                    </div>

                    <div className="flex-1">
                        <DynamicFieldsArray
                    fieldArray={interestsFields}
                    label="Interests"
                    name="interests"
                    register={register}
                    fields={[
                        "name" ]}  
                    />
                    </div>  
                  </div>
      
                  <button type="submit" className="btn btn-primary w-full">
                    Submit
                  </button>
                </form>
              </div>             
                  </div>
  
  )
}

export default ResumeForm
