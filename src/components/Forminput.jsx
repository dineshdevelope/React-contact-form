import React from "react";

const Forminput = ({
  name,
  label,
  placeholder,
  type = "text",
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
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className="px-4 py-2 rounded bg-gray-300 w-full"
          {...register}
        />
        {error && <small className="text-red-500">{error.message}</small>}
      </div>
    </div>
  );
};

export default Forminput;
