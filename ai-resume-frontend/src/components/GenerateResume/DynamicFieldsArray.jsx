import React from 'react'
import FormInput from './FormInput';
import { FaPlusCircle, FaTrash } from 'react-icons/fa';

const DynamicFieldsArray = ({
  fieldArray,
  label,
  name,
  fields,
  register,
}) => {

     const handleAdd = () => {

    const newItem = fields.reduce(
      (accumulator, field) => ({
        ...accumulator,
        [field]: "",
      }),
      {}
    );

    fieldArray.append(newItem);
  };

  return (
    <div>
      <div className="form-control w-full mb-4">

      {/* Section Title */}
      <h3 className="text-xl font-semibold mb-3">
        {label}
      </h3>

      {/* Existing Items */}
      {fieldArray.fields.map((field, index) => (

        <div
          key={field.id}
          className="p-4 rounded-lg mb-4 bg-base-100"
        >

          {/* Inputs */}
          {fields.map((fieldName) => (

            
            <FormInput
              key={fieldName}
              register={register}
              name={`${name}.${index}.${fieldName}`}
              label={fieldName}
            />

          ))}

          {/* Remove Button */}
          <button
            type="button"
            onClick={() => fieldArray.remove(index)}
            className="btn btn-error btn-sm mt-2"
          >
            

            <FaTrash className="w-5 h-5 text-base-content" />

            Remove {label}

          </button>

        </div>

      ))}

      {/* Add Button */}
      <button
        type="button"
        onClick={handleAdd}
        className="btn btn-secondary btn-sm mt-2 flex items-center"
      >


        <FaPlusCircle className="w-5 h-5 mr-1 text-base-content" />

        Add {label}

      </button>

    </div>
    </div>
  )
}

export default DynamicFieldsArray
