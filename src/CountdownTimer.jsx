import React, { useEffect, useRef, useState } from 'react';
import 'flipdown'
const CountdownTimer = () => {
  const flipdownRef = useRef(null);
  const [hasEnded, setHasEnded] = useState(false);

  useEffect(() => {
    // Unix timestamp (in seconds) to count down to
    const toDayFromNow = (new Date("Dec 31, 2024 23:59:59").getTime() / 1000) + (3600 / 60 / 60 / 24) - 1;

    // Set Up FlipDown
    const flipdown = new FlipDown(toDayFromNow)
      .start()
      .ifEnded(() => {
        setHasEnded(true);
      });
    
    // Cleanup on component unmount
    return () => {
      flipdownRef.current = null; // Or any cleanup if necessary
    };
  }, []);

  return (
    <div className='mt-5'>
      {hasEnded ? (
        <h2>Timer is ended</h2>
      ) : (
        <div ref={flipdownRef} className="flipdown" id="flipdown"></div>
      )}
    </div>
  );
};

export default CountdownTimer;
