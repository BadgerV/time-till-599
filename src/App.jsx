import React, { useState, useEffect } from 'react';
import './App.css'; // Importing the CSS file for styling

const CountdownTimer = () => {
  const targetDate = new Date('2026-02-15T00:00:00Z');

  const calculateTimeRemaining = () => {
    const now = new Date();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    const nanoSeconds = Math.floor((difference % (1000 * 60)) / 10000);

    return { days, hours, minutes, seconds, nanoSeconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    });

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="countdown-container">
      <div className="countdown-timer">
        <div className="time-section">
          <span className="time-value">{timeRemaining.days}</span>

        </div>
        <span className='icon'>:</span>
        <div className="time-section">
          <span className="time-value">{timeRemaining.hours}</span>

        </div>
        <span className='icon'>:</span>

        <div className="time-section">
          <span className="time-value">{timeRemaining.minutes}</span>

        </div>
        <span className='icon'>:</span>

        <div className="time-section">
          <span className="time-value">{timeRemaining.seconds}</span>

        </div>

      </div>
    </div>
  );
};

export default CountdownTimer;
