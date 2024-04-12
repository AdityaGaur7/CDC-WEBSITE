import { React } from "react";
import Heroes from "./Heroes";

import { homeObjOne, homeObjTwo } from "./HeroData";
const HeroSection = () => {
  return (
    <div className="main">
      <div className="container _shapeAnimation">
        {/* <Heroes {...homeObjOne} /> */}
        {/* <Heroes {...homeObjTwo} /> */}
        {/* <Heroes {...homeObjThree} />
        <Heroes {...homeObjFour} />*/}
        <img src="./img/plane.png" alt="" className="plane" />
      </div>
      <div />
    </div>
  );
};

export default HeroSection;
