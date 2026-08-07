import React, { useState } from 'react'

const Skills = ({ skills, setData }) => {

     const [skillInput, setSkillInput] = useState("");

  function addSkill() {

    if (!skillInput.trim()) return;
    setData(prev => ({
      ...prev,
      skills: [
        ...prev.skills,
        skillInput
      ]
    }));
    setSkillInput("");
  }

  function removeSkill(index) {

    setData(prev => ({
      ...prev,
      skills: prev.skills.filter(
        (_, i) => i !== index
      )
    }));
  }


  return (
    <div>
            <div className="card bg-base-100 p-6 shadow mb-8">

      <h2 className="text-2xl font-bold mb-5">
        Skills
      </h2>

      <div className="flex gap-3">

        <input
          value={skillInput}
          onChange={(e) =>
            setSkillInput(e.target.value)
          }
          placeholder="Java"
          className="input input-bordered flex-1"
        />

        <button
          onClick={addSkill}
          className="btn btn-primary"
        >
          Add
        </button>

      </div>

      <div className="flex gap-2 mt-5 flex-wrap">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="badge badge-primary p-4 gap-2"
          >
            {skill}

            <button
              onClick={() =>
                removeSkill(index)
              }
            >
              ✕
            </button>

          </div>
        ))}

      </div>

    </div>

    </div>
  )
}

export default Skills
