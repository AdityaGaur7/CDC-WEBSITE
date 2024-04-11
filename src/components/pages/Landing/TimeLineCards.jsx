import React from "react";
import { DiAndroid } from "react-icons/di";
import { DiCodeigniter } from "react-icons/di";
// import { motion } from "framer-motion";
// import { fadeIn } from "../variants";
import VanillaTilt from "vanilla-tilt";
import { useEffect } from "react";
// import variants from "./variants.js"

const TimeLineCards = () => {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
      max: 10,
      speed: 50,
      glare: false,
      "max-glare": 1,
    });
  });
  return (
    <>
      <div className=" timeline">
        <div
          // variants={fadeIn("right", 0.1)}
          // initial="hidden"
          // whileInView={"show"}
          // viewport={{ once: false, amount: 0.7 }}
          className="roadmap_main left-roadmap  "
        >
          <DiAndroid className="img" />
          <div className="text-box tilt">
          <h2>Syntax Seige '24</h2>
            <small>Mar 2024</small>
            <p>
            The Syntax Siege event spans seven days, featuring five days coding classes led by seniors covering diverse topics. Participants engage in online and offline coding contests, testing their skills in problem-solving and algorithmic thinking.The online contest offers virtual competition, while the offline contest fosters camaraderie in a physical setting.
            </p>
            <span className="left-roadmap-arrow"></span>
          </div>
        </div>
        <div
          // variants={fadeIn("left", 0.2)}
          // initial="hidden"
          // whileInView={"show"}
          // viewport={{ once: false, amount: 0.7 }}
          className="roadmap_main right-roadmap"
        >
          <DiCodeigniter className="img" />
          <div className="text-box tilt">
          <h2>Code-Cascade </h2>
            <small>Jan 2024</small>
            <p>
            The Code-Cascade event unfolds over three days, offering online coding basic classes tailored for junior participants. This immersive experience provides young learners with a solid foundation in programming fundamentals. Through interactive sessions, juniors explore key concepts, enhance coding skills, and foster a passion for technology in a supportive environment.
            </p>
            <span className="right-roadmap-arrow"></span>
          </div>
        </div>
        <div
          // variants={fadeIn("right", 0.2)}
          // initial="hidden"
          // whileInView={"show"}
          // viewport={{ once: false, amount: 0.7 }}
          className="roadmap_main left-roadmap"
        >
          <DiCodeigniter className="img" />
          <div className="text-box tilt">
          <h2>Game Of Codes</h2>
            <small>Sept 2023</small>
            <p>
            Game of Codes is hosted by CodeChef MMMUT Chapter and Computer Engineering Society.This online event is tailored just for second year students. It offers you a unique and thrilliing opportunity to delve depp into the captivating world of programming.

            </p>
            <span className="left-roadmap-arrow"></span>
          </div>
        </div>
        <div
          // variants={fadeIn("left", 0.3)}
          // initial="hidden"
          // whileInView={"show"}
          // viewport={{ once: false, amount: 0.7 }}
          className="roadmap_main right-roadmap"
        >
          <DiCodeigniter className="img" />
          <div className="text-box tilt">
          <h2>Webinar on Competetive Programming</h2>
            <small>Sept 2023</small>
            <p>
            Our exclusive webinar featuring Abhinav Awasthi, an ICPC regionalist from HBTU and Software Development Engineer (SDE) at Zeta. With his expertise, Abhinav delves into the nuances of competitive programming, unraveling its intricacies for enthusiasts. 

            </p>
            <span className="right-roadmap-arrow"></span>
          </div>
        </div>
        <div
          // variants={fadeIn("right", 0.2)}
          // initial="hidden"
          // whileInView={"show"}
          // viewport={{ once: false, amount: 0.7 }}
          className="roadmap_main left-roadmap"
        >
          <DiCodeigniter className="img" />
          <div className="text-box tilt">
          <h2>Genesis</h2>
            <small>Dec 2022</small>
            <p>
            Genesis is a webinar session with final year team who has been placed at big companies and MNC's that will help juniors in starting out of the new journey. All the queries of juniors are solved by final year team and juniors also get to know how to lead their 4 year journey.
            </p>
            <span className="left-roadmap-arrow"></span>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default TimeLineCards;
