import React from 'react';
import "./About.css";

const Cards = () => {
  const workflowsData = [
    {
      image: "https://firebasestorage.googleapis.com/v0/b/test1-80c19.appspot.com/o/Codechef_team%2Fassets%2Ffour.webp?alt=media&token=4567daf0-dc9d-4095-8f27-e8f72c3f83dc",
      title: "Driving Growth and Excellence",
      description: "Our primary goal is to prioritise the growth and excellence of our college’s coding culture.",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/test1-80c19.appspot.com/o/Codechef_team%2Fassets%2Ftwo.webp?alt=media&token=dd10bbc5-1828-4bcc-b3f1-644885ad89a7",
      title: "Cultivating a Dynamic Learning Environment",
      description: "Promoting continuous learning and technological skill enhancement among college students.",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/test1-80c19.appspot.com/o/Codechef_team%2Fassets%2Fthree.webp?alt=media&token=a57b3636-83db-4ed9-a458-824ba80973c8",
      title: "Tech Awareness Sessions",
      description: "New student-focused tech awareness sessions highlighting coding and tech domains' importance.",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/test1-80c19.appspot.com/o/Codechef_team%2Fassets%2Fone.webp?alt=media&token=1ac51843-f3d6-45f5-ba29-0464feca6a95",
      title: "Advancing Coding Community",
      description: "Empowering coding community through faculty and alumni collaboration for new skills introduction.",
    },
  ];

  return (
    <div className="container mt-5 cards">
      <div className="row">
        {workflowsData.map((workflow, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className="card scale-on-hover">
              <img src={workflow.image} className="card-img-top" alt={workflow.title} />
              <div className="card-body cbody">
                <h5 className="card-title">{workflow.title}</h5>
                <p className="card-text">{workflow.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;