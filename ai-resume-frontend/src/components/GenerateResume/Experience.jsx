import React from 'react'

const Experience = ({ experience,setData}) => {
    function addExperience() {

    setData(prev => ({
      ...prev,

      experience: [
        ...prev.experience,

        {
          company: "",
          role: "",
          startDate: "",
          endDate: "",
          description: ""
        }
      ]
    }));
  }

  function handleChange(
    index,
    field,
    value
  ) {

    setData(prev => {

      const updated =
        [...prev.experience];

      updated[index][field] =
        value;

      return {
        ...prev,
        experience: updated
      };
    });
  }

  function removeExperience(index) {

    setData(prev => ({
      ...prev,

      experience:
        prev.experience.filter(
          (_, i) => i !== index
        )
    }));
  }

  return (
    <div>
      <div className="card bg-base-100 p-6 shadow mb-8">

      <div className="flex justify-between">

        <h2 className="text-2xl font-bold">
          Experience
        </h2>

        <button
          className="btn btn-primary"
          onClick={addExperience}
        >
          Add Experience
        </button>

      </div>

      {experience.map((exp, index) => (

        <div
          key={index}
          className="border p-5 rounded-lg mt-5"
        >

          <input
            value={exp.company}
            placeholder="Company"
            className="input input-bordered w-full mb-3"
            onChange={(e) =>
              handleChange(
                index,
                "company",
                e.target.value
              )
            }
          />

          <input
            value={exp.role}
            placeholder="Role"
            className="input input-bordered w-full mb-3"
            onChange={(e) =>
              handleChange(
                index,
                "role",
                e.target.value
              )
            }
          />

          <textarea
            value={exp.description}
            placeholder="Description"
            className="textarea textarea-bordered w-full"
            onChange={(e) =>
              handleChange(
                index,
                "description",
                e.target.value
              )
            }
          />

          <button
            className="btn btn-error mt-3"
            onClick={() =>
              removeExperience(index)
            }
          >
            Remove
          </button>

        </div>

      ))}

    </div>
    </div>
  )
}

export default Experience
