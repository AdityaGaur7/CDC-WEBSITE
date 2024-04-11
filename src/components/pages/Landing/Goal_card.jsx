import React from "react";
import { MdOutlineRocketLaunch } from "react-icons/md";

const Goal_card = () => {
  return (
    <div className="card_content">
      <div className="icon_right ">
        <MdOutlineRocketLaunch className="icon_icon" />
      </div>
      <div className="content">
        <h4 className="title">Our goal</h4>
        <p className="content_text">
        We strive to create an environment of continuous learning and growth, where every member is encouraged to expand their skill set and embrace emerging technologies. Through a combination of workshops, seminars, and hands-on projects, we aim to equip our members with the knowledge and expertise needed to excel in today's fast-paced tech industry.
        </p>
      </div>
    </div>
  );
};

export default Goal_card;
