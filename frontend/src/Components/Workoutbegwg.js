import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Wrkoutbegwl.css';
import bgvid from './imgs/motive2.mp4';

const WorkoutCard = ({ day, workout }) => {
  const [isAssigned, setIsAssigned] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [remainingTime, setRemainingTime] = useState(workout.time * 60); // Convert to seconds
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isTimerRunning && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (remainingTime === 0) {
      setIsTimerRunning(false);
      setIsCompleted(true);
    }
    return () => clearInterval(timer);
  }, [isTimerRunning, remainingTime]);

  const handleAssign = () => {
    setIsAssigned(true);
  };

  const handleStartTimer = () => {
    setIsTimerRunning(true);
  };

  const handlePauseTimer = () => {
    setIsTimerRunning(false);
  };

  const handleInputChange = (e) => {
    // Handle input change for extra workout details
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="workout-page">
      <video autoPlay loop muted className="background-video">
        <source src={bgvid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content-overlay">
        <div className="workout-card">
          <div className="card-header">
            <h3>{day}</h3>
            <button onClick={handleAssign}>{isAssigned ? 'Progress' : 'Assign'}</button>
          </div>
          <h4>{workout.name}</h4>
          <img src={workout.img} alt={workout.name} className="workout-image" />
          <p>{workout.desc}</p>
          <Link to={workout.rot}><button>Workout Brief</button></Link>
          <p>Average Calories Burned: {workout.cl}</p>
          <div className="timer">
            <button onClick={handleStartTimer}>Start Timer</button>
            <button onClick={handlePauseTimer}>Pause Timer</button>
            <h4>Remaining Time: {formatTime(remainingTime)}</h4>
          </div>
         
          {isAssigned && (
            <button onClick={() => setIsCompleted(true)}>
              {isCompleted ? 'Completed' : 'Progress'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
