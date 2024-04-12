import React, { useEffect } from 'react';
import gsap from 'gsap';
import "./animate.css"
const Animate = () => {
  useEffect(() => {
    const moveElement = () => {
      const scrollPosition = window.scrollY;
      
      gsap.to('.js', { x: scrollPosition, ease: 'none' });
      gsap.to('.cpp', { x: -scrollPosition, ease: 'none' });
  gsap.to('.python', { x: scrollPosition, y: scrollPosition, ease: 'none' });
  gsap.to('.c', { x: -scrollPosition, y: -scrollPosition, ease: 'none' });
  gsap.to('.vscode', { y: -scrollPosition, ease: 'none' });
  gsap.to('.java', { x:scrollPosition, y: -scrollPosition, ease: 'none' });
  gsap.to('.js', { y: Math.sin(scrollPosition * 0.1) * 15, ease: 'none' });
  gsap.to('.cpp', { y: Math.cos(scrollPosition * 0.1) * 15, ease: 'none' });
    };

    window.addEventListener('scroll', moveElement);

    return () => {
      window.removeEventListener('scroll', moveElement);
    };
  }, []);

  return (
    <div className='conti'>
     
      <img className="js" src="img/techstack/js.png" alt="" style={{ position: 'fixed',zIndex:'1' }} />
      <img className="cpp" src="img/techstack/c++.png" alt="" style={{ position: 'fixed',zIndex:'7' }} />
      <img className="python" src="img/techstack/python.png" alt="" style={{ position: 'fixed' ,zIndex:'6'}} />
      <img className="c" src="img/techstack/c.png" alt="" style={{ position: 'fixed' ,zIndex:'2'}} />
      <img className="vscode" src="img/techstack/vscode.png" alt="" style={{ position: 'fixed' ,zIndex:'8'}} />
      <img className="java" src="img/techstack/java.png" alt="" style={{ position: 'fixed',zIndex:'6' }} />
    </div>
  );
};

export default Animate;
