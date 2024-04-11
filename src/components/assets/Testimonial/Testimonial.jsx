import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./testimonial.css";
import Testidata from "./testi.json";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <h1 style={{ width: "100%", textAlign: "center" }}>
        What Others Thought about Us
      </h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {Testidata.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <div className="item">
                <div className="slide-img">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="text">
                  <div className="slide-name">{item.name}</div>
                  <div className="slide-position">{item.branch}</div>
                  <div className="slide-description">{item.description}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
