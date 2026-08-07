import React from 'react'

const Education = ({ education, setData }) => {
     function addEducation() {

    setData(prev => ({
      ...prev,

      education: [
        ...prev.education,

        {
          college: "",
          degree: "",
          cgpa: "",
          startYear: "",
          endYear: ""
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
        [...prev.education];

      updated[index][field] =
        value;

      return {
        ...prev,
        education: updated
      };
    });
  }

  function removeEducation(index) {

    setData(prev => ({
      ...prev,

      education:
        prev.education.filter(
          (_, i) => i !== index
        )
    }));
  }
  return (
    <div>
        <div className="card bg-base-100 p-6 shadow mb-8">

      <div className="flex justify-between">

        <h2 className="text-2xl font-bold">
          Education
        </h2>

        <button
          className="btn btn-primary"
          onClick={addEducation}
        >
          Add Education
        </button>

      </div>

      {education.map((edu, index) => (

        <div
          key={index}
          className="border p-5 rounded-lg mt-5"
        >

          <input
            value={edu.college}
            placeholder="College"
            className="input input-bordered w-full mb-3"
            onChange={(e) =>
              handleChange(
                index,
                "college",
                e.target.value
              )
            }
          />

          <input
            value={edu.degree}
            placeholder="Degree"
            className="input input-bordered w-full mb-3"
            onChange={(e) =>
              handleChange(
                index,
                "degree",
                e.target.value
              )
            }
          />

          <input
            value={edu.cgpa}
            placeholder="CGPA"
            className="input input-bordered w-full mb-3"
            onChange={(e) =>
              handleChange(
                index,
                "cgpa",
                e.target.value
              )
            }
          />

          <button
            className="btn btn-error"
            onClick={() =>
              removeEducation(index)
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

export default Education
