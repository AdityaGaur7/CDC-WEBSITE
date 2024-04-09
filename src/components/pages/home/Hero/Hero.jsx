import React, { useEffect } from "react";
// import rayso from "../../../../components/assets/rayso.svg";
// import "./Home.css";
import About from "../../Yash/About";
import Goal from "../../Yash/Goal";
import VanillaTilt from "vanilla-tilt";
import Roadmap from "../../Yash/Roadmap";
import { motion } from "framer-motion";

import Layer from "../Layer/Layer";
import Herocard from "../../../assets/Herocard/Herocard";
import "./Hero.css";
import HeroSection from "../../../assets/HeroSection/HeroSection";

function Hero() {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
      max: 2,
      speed: 10,
      glare: true,
      "max-glare": 0.2,
    });
  });

  let glows = document.querySelectorAll(".grow_hover");
  glows.forEach((glow) => {
    glow.onmousemove = function (e) {
      let x = e.pageX - glow.offsetLeft;
      let y = e.pageY - glow.offsetTop;
      glow.style.setProperty("--x", x + "px");
      glow.style.setProperty("--y", y + "px");
    };
  });

  return (
    <div className="home">
      <span className="top_shadow"></span>
      <div className="main">
        <motion.div className="main_left">
          <div className="coders_title">
            <span className="coders_text">Coders & Developers</span>
            <br />
            <span className="club_text">Club</span>
            <div className="text_bottom">
              <div className="left_text">
                <h3>Title</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  optio explicabo vitae libero at pariatur commodi eius officiis
                  debitis excepturi?
                </p>
              </div>
              <div className="right_text">
                <h3>Title</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit nihil maxime magnam quas adipisci placeat
                  asperiores nesciunt.
                </p>
              </div>
            </div>
          </div>
          <span className="spot_left"></span>
        </motion.div>

        <div className="main_right">
          {/* <img src="img/rayso.svg" alt="img" className="code_img" /> */}
          <h1>rayso </h1>
        </div>
      </div>
      <span className="spot_common spot_right3"></span>
      <span className=" spot_common spot_right2"></span>
      <span className="spot_common spot_right4"></span>
      <span className="spot_common spot_right5"></span>
      <About />
      <Goal />
      <Roadmap />
    </div>
  );
}

export default Hero;
