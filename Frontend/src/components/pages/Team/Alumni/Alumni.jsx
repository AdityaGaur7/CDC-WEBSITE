import React from 'react';
import TeamCard from './AlumniCard'; 
import TeamData from './alumni.json'; 

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
