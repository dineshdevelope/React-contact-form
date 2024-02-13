import React from "react";

const FormtextArea = ({
  name,
  label,
  placeholder,
  register,
  error,
  required,
}) => {
  return (
    <div>
      <div className="space-y-3 p-2">
        <label htmlFor={name}>
          {label}
          {required ? <span className="text-red-600 ml-1">*</span> : ""}
        </label>
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          className="px-4 py-2 rounded bg-gray-300 w-full"
          {...register}
        ></textarea>
        {error && <small className="text-red-500">{error.message}</small>}
      </div>
    </div>
  );
};

export default FormtextArea;
