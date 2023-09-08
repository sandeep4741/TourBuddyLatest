import React, { useEffect, useRef, useState } from 'react';
import './test.css';
import { states } from './States'; // Import the states array

const Test = () => {
  const containerRef = useRef(null);
  const scrollIntervalRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    const forwardBtn = container.querySelector('.forwardBtn');
    const backwardBtn = container.querySelector('.backwardBtn');

    function scrollForward() {
      const scrollPosition = container.scrollLeft;
      const scrollWidth = container.scrollWidth - container.clientWidth;
      const maxScroll = scrollWidth - container.clientWidth;

      let newPosition = scrollPosition + 200;
      if (newPosition > maxScroll) {
        newPosition = 0;
      }

      container.scroll({ left: newPosition, behavior: 'smooth' });
    }

    function scrollBackward() {
      container.scrollBy({ left: -200, behavior: 'smooth' });
    }

    function updateButtons() {
      const scrollPosition = container.scrollLeft;
      const scrollWidth = container.scrollWidth - container.clientWidth;

      forwardBtn.disabled = scrollPosition >= scrollWidth;
      backwardBtn.disabled = scrollPosition <= 0;
    }

    forwardBtn.addEventListener('click', scrollForward);
    backwardBtn.addEventListener('click', scrollBackward);
    container.addEventListener('scroll', updateButtons);

    // Auto-scrolling logic
    const scrollDelay = 1000; // Adjust the delay as needed

    function startScrolling() {
      scrollIntervalRef.current = setInterval(scrollForward, scrollDelay);
    }

    function stopScrolling() {
      clearInterval(scrollIntervalRef.current);
    }

    startScrolling();

    // Stop scrolling when mouse is over the container
    container.addEventListener('mouseenter', stopScrolling);
    container.addEventListener('mouseleave', startScrolling);

    // Cleanup
    return () => {
      forwardBtn.removeEventListener('click', scrollForward);
      backwardBtn.removeEventListener('click', scrollBackward);
      container.removeEventListener('scroll', updateButtons);
      container.removeEventListener('mouseenter', stopScrolling);
      container.removeEventListener('mouseleave', startScrolling);
      clearInterval(scrollIntervalRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="scroll-container">
      <div className="category">
      <div className="thumbnails">
  {states.map((state, index) => (
    <div className="thumbnail" key={index} style={{ width: '200px' }}>
      <img src={state.link} alt="Thumbnail" />
      <div className='thumbnail-info'>
        <p className='place'>{state.city}</p>
      </div>
    </div>
  ))}
</div>       
 </div>
        <div className="scroll-buttons">
          <button className="backwardBtn">&lt;</button>
          <button className="forwardBtn">&gt;</button>
        </div>
      </div>
 
  );
};

export default Test;
