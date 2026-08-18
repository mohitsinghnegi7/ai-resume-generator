import React from 'react'

const FormInput = ({
  register,
  name,
  label,
  type = "text",
  required = false
}) => {
  return (
    <div>
       <div className="form-control w-full mb-4">

      <label className="label">

        <span className="label-text text-base-content">
          {label}
           {required && <span className="text-error ml-1">*</span>}
        </span>

      </label>

      <input
          type={type}
          {...register(name, {
            required: required ? `${label} is required` : false,
          })}
          className="input input-bordered rounded-xl w-full bg-base-100 text-base-content"
        />

    </div>
    </div>
  )
}

export default FormInput
