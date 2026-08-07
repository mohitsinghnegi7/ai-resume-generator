import React from 'react'

const PersonalInformation = ({ personalInformation, setData }) => {

    function handleChange(e) {
    setData(prev => ({
      ...prev,
      personalInformation: {
        ...prev.personalInformation,
        [e.target.name]: e.target.value
      }
    }));
  }


  return (
    <div>
       <div className="card bg-base-100 p-6 shadow mb-8">

      <h2 className="text-2xl font-bold mb-5">
        Personal Information
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <input
          name="fullName"
          value={personalInformation.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          className="input input-bordered"
        />

        <input
          name="email"
          value={personalInformation.email}
          onChange={handleChange}
          placeholder="Email"
          className="input input-bordered"
        />

        <input
          name="phoneNumber"
          value={personalInformation.phoneNumber}
          onChange={handleChange}
          placeholder="Phone"
          className="input input-bordered"
        />

        <input
          name="location"
          value={personalInformation.location}
          onChange={handleChange}
          placeholder="Location"
          className="input input-bordered"
        />

      </div>

    </div>
    </div>
  )
}

export default PersonalInformation
