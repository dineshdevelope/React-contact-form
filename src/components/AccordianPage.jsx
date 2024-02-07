import React, { useState } from "react";

const AccordianPage = ({ title, desc }) => {
  const [accordianActiveState, setAccordianActiveState] = useState(false);

  const toggleAccordian = () => {
    setAccordianActiveState(!accordianActiveState);
  };
  return (
    <div>
      <div
        className="p-5 bg-gray-200 rounded-t font-semibold flex justify-between items-center cursor-pointer hover:bg-gray-300"
        onClick={toggleAccordian}
      >
        <h4>{title}</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          className={
            "bg-red-800 " + (accordianActiveState ? " " : "-rotate-90")
          }
        >
          <path
            fill="#ffffff"
            d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z"
          ></path>
        </svg>
      </div>
      <div
        className={
          "bg-gray-100 p-5 " + (accordianActiveState ? "block" : "hidden")
        }
      >
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default AccordianPage;
