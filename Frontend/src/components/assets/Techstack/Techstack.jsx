import React from 'react';
import "./tech.css"
import techStack from "./tech.json";
const TechStack = () => {

    return (
        <div>
            <div className="tech-stack">
                {techStack.map((tech, index) => (
                    <div key={index} className="tech-item">
                        <img src={tech.image} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStack;
