import React from "react";
import "./About.css";
import { FiGithub } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
// import { motion, useScroll } from "framer-motion";
// import { fadeIn } from "../../../variants";
import { DiLinux } from "react-icons/di";
import { IoCodeSlashOutline } from "react-icons/io5";
// import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import { useEffect } from "react";

const About = () => {
  // const { scrollYProgress } = useScroll();

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
      max: 2,
      speed: 10,
      glare: true,
      "max-glare": 0.2,
    });
  });
  return (
 <div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="about_main grow_hover tilt"
      style={{ "--clr": "#1084bf" }}
    >
      <h1>About Us</h1>
      <div className="icons_icon">
        <span>
          <IoCodeSlashOutline className="icon icon_box" />
        </span>
        <span>
          <DiLinux className="icon icon_box" />
        </span>
        <img
          className="git_img img_glowing"
          src="https://www.copsiitbhu.co.in/static/assets/img/landing/avatar.jpg"
          alt="img"
        />
        <span>
          <DiLinux className="icon icon_box" />
        </span>
        <span>
          <IoCodeSlashOutline className="icon icon_box" />
        </span>
      </div>

      <p className="cdc">Coders & Developer Club || MMMUT Gorakhapur</p>
      <div className="icons">
        <div>
          <FiGithub className="li_item" />
        </div>
        <div>
          <FaFacebook className="li_item" />
        </div>
        <div>
          <FaLinkedinIn className="li_item" />
        </div>
        <div>
          <FaXTwitter className="li_item" />
        </div>
        <div>
          <FaGoogle />
        </div>
      </div>
      <p className="about_text">
       
      </p>
    </div>
  );
};

export default About;
