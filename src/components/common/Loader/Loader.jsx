import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Loader.css";

function Loader() {
  const loaderRef = useRef(null);

  useEffect(() => {
    const loader = loaderRef.current;

    // GSAP animation
    gsap.to(loader, {
      duration: 1,
      delay: 4,
      stagger: 1,
      y: -700,
    });

    // Cleanup function
    return () => {
      // Ensure animation is cleared when component unmounts
      gsap.killTweensOf(loader);
    };
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div className="load" ref={loaderRef}>
      <div className="terminal-loader">
        <div className="terminal-header">
          <div className="terminal-title">Status</div>
          <div className="terminal-controls">
            <div className="control crox"></div>
            <div className="control minimize"></div>
            <div className="control maximize"></div>
          </div>
        </div>
        <div className="texti">Coders and Developers Club....</div>
      </div>
    </div>
  );
}

export default Loader;
