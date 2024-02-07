import React from "react";

const FollowersCard = ({
  img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLjsLw2NOVEOMUtc2rlda-WRtP9tAjfL3bOJwVgv5bnQ&s",
  name = "Untitled ",
  role = "Unknow Role",
}) => {
  return (
    <div className="bg-white p-10 rounded shadow text-center mb-5 ">
      <img
        src={img}
        alt="gitup-img"
        className="w-40 h-40 rounded-full mx-auto object-cover"
      />
      <div className="mt-5">
        <h4 className="font-semibold text-lg">{name}</h4>
        <small>{role}</small>
      </div>
    </div>
  );
};

export default FollowersCard;
