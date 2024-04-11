import React, { useEffect } from "react";
// import rayso from "../../../../components/assets/rayso.svg";
// import "./Home.css";
import About from "../../Landing/About";
import Goal from "../../Landing/Goal";
import VanillaTilt from "vanilla-tilt";
import Roadmap from "../../Landing/Roadmap";
// import { motion } from "framer-motion";

import Carousal from "../../../assets/Testimonial/Testimonial.jsx";
import Layer from "../Layer/Layer";
// import Herocard from "../../../assets/Herocard/Herocard";
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
        <div className="main_left">
          <div className="coders_title">
            <span className="coders_text">Coders & Developers</span>
            <br />
            <span className="club_text">Club</span>
            <div className="text_bottom">
              <div className="left_text">
                <h3>Vision</h3>
                <p>
                  Our primary goal is to prioritise the growth and excellence of
                  our college’s coding culture.
                </p>
              </div>
              <div className="right_text">
                <h3>Aim</h3>
                <p>
                  Organise sessions to create awareness about the significance
                  of coding and other tech domains.
                </p>
              </div>
            </div>
          </div>
          <span className="spot_left"></span>
        </div>

        <div className="main_right">
          <img src="img/CDC.png" alt="img" className="code_img" />
        </div>
      </div>
      <span className="spot_common spot_right3"></span>
      <span className=" spot_common spot_right2"></span>
      <span className="spot_common spot_right4"></span>
      <span className="spot_common spot_right5"></span>
      <About />
      <Goal />
      <Roadmap />
      {/* <Herocard/> */}
      <HeroSection />
      <Carousal />
      <Layer />
    </div>
  );
}

export default Hero;
