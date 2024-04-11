import React from 'react';
import TeamCard from '../TeamCard.jsx';

import TeamData from './Team1.json'; 

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
