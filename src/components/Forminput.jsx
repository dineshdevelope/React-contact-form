import React from "react";

const Forminput = ({
  name,
  label,
  placeholder,
  value,
  handleOnchange,
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
          type="text"
          placeholder={placeholder}
          className="px-4 py-2 rounded bg-gray-300 w-full"
          onChange={handleOnchange}
          value={value}
          required={required}
        />
      </div>
    </div>
  );
};

export default Forminput;
