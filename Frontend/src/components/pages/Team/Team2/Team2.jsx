import React from 'react';
import TeamCard from '../TeamCard.jsx'; // Assuming the TeamCard component is in the same directory

import TeamData from './Team2.json'; // Assuming the JSON file is in the same directory

const TeamPage = () => {
  return (
    <div className="container" id="team">
      <div className="row justify-content-center">
        {TeamData.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
