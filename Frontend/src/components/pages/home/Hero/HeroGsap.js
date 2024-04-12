import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MyComponent = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    
    gsap.from(element, {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: 'power3.out'
    });
  }, []);

  return <div ref={elementRef}>Animate me!</div>;
};

export default MyComponent;
