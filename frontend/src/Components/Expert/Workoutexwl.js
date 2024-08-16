import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Workoutex.css';

const WorkoutCardexwl = ({ day, workout }) => {
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
    <div className="exworkout-page">
    <div className="content-overlay">

    <div className="exworkout-card">
      <div className="excard-header">
        <h3>{day}</h3>
        <button onClick={handleAssign}>{isAssigned ? 'Progress' : 'Assign'}</button>
      </div>
      <h3>Workout 1</h3>
      <h4>{workout.name}</h4>
      <img src={workout.img} alt={workout.name} />
      
      <Link to={workout.rot}><button>Workout Brief</button></Link>
   
    
      <p>Average Calories Burned:{workout.cl}</p>
      <div className="timer">
        <button onClick={handleStartTimer}>Start Timer</button>
        <button onClick={handlePauseTimer}>Pause Timer</button>
        <h4>Remaining Time: {formatTime(remainingTime)}</h4>
      </div>
      
     
    </div>
    </div>
    </div>
  );
};

export default WorkoutCardexwl;
