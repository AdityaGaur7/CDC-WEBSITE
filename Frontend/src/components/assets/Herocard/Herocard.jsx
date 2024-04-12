import React from "react";
import "./Herox.css";

const Herocard = () => {
  return (
    <div>
      <div className="home">
        <span className="top_shadow"></span>
        <div className="main space">
          <div className="main_left">
            Coders & Developers
            {/* <br /> */}
            <span className="club_text"> Club</span>
          </div>

          <div className="main_right">
            <img src="img/logo.png" alt="" className="logo" />
          </div>
          <div className="circle_shadow">
            <span className="left_shadow shadow_common"></span>
            <span className="right_shadow shadow_common"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herocard;
