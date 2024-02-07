import React from "react";
import FollowersCard from "./FollowersCard";
import TeamFollowers from "../data/followers.json";

const FollowersPage = () => {
  console.log(TeamFollowers);
  return (
    <div className="m-10">
      <h1 className="text-2xl font-semibold mb-5">My Team</h1>
      <div className="grid grid-cols-3 gap-5">
        {/* <FollowersCard
          name="Trisha"
          role="Actors"
          img="https://media.themoviedb.org/t/p/w500/jfeAV0VeAQhKONzIv1UEYbklJGn.jpg"
        />
        <FollowersCard name="Rajini" role="Hero" /> */}

        {TeamFollowers.map((team) => {
          return (
            <FollowersCard
              key={team.id}
              name={team.name}
              img={`${team.github}.png`}
              role="Junier Full Stack Intern"
            />
          );
        })}
      </div>
    </div>
  );
};

export default FollowersPage;
