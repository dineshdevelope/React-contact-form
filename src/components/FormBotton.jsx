import React from "react";

const FormBotton = (props) => {
  return (
    <button className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 ">
      {props.text}
    </button>
  );
};

export default FormBotton;
