import React from "react";
import Goalcard from "./Goal_card";
import "./Goal.css";
// import { motion } from "framer-motion";
// import { fadeIn } from "../variants";
import Ourgoal from "./Our_goal";
import VanillaTilt from "vanilla-tilt";
import { useEffect } from "react";
const Goal = () => {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
      max: 2,
      speed: 10,
      glare: true,
      "max-glare": 0.2,
    });
  });
  return (
    <div className="goal_content">
      <div className="goal_left tilt grow_hover" style={{ "--clr": "#fb9014" }}>
        <Goalcard />
      </div>
      <div
        className="goal_right tilt grow_hover"
        style={{ "--clr": "#7b8fd9" }}
      >
        <Ourgoal />
      </div>
    </div>
  );
};

export default Goal;
