import React from 'react'

const FormInput = ({
  register,
  name,
  label,
  type = "text",
}) => {
  return (
    <div>
       <div className="form-control w-full mb-4">

      <label className="label">

        <span className="label-text text-base-content">
          {label}
        </span>

      </label>

      <input
        type={type}
        {...register(name)}
        className="input input-bordered rounded-xl w-full bg-base-100 text-base-content"
      />

    </div>
    </div>
  )
}

export default FormInput
