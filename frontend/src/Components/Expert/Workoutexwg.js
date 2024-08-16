import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const WorkoutCardexwg = ({ day, workout }) => {
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
    <div className="workout-card">
      <div className="card-header">
        <h3>{day}</h3>
        <button onClick={handleAssign}>{isAssigned ? 'Progress' : 'Assign'}</button>
      </div>
      <h3>Workout 1</h3>
      <h4>{workout.name}</h4>
      <img src={workout.img} alt={workout.name} />
      <p>{workout.desc}</p>
      <Link to={workout.rot}><button>Workout Brief</button></Link>
      <h4>Steps To Follow</h4>
      <p>{workout.st}</p>
      <p>Average Calories Burned:{workout.cl}</p>
      <div className="timer">
        <button onClick={handleStartTimer}>Start Timer</button>
        <button onClick={handlePauseTimer}>Pause Timer</button>
        <h4>Remaining Time: {formatTime(remainingTime)}</h4>
      </div>
      <h3>Workout 2</h3>
      <h4>{workout.name1}</h4>
      <img src={workout.img1} alt={workout.name1} />
      <p>{workout.desc1}</p>
      <Link to={workout.rot}><button>Workout Brief</button></Link>
      <h4>Steps To Follow</h4>
      <p>{workout.st1}</p>
      <p>Average Calories Burned:{workout.cl1}</p>
      <div className="timer">
        <button onClick={handleStartTimer}>Start Timer</button>
        <button onClick={handlePauseTimer}>Pause Timer</button>
        <h4>Remaining Time: {formatTime(remainingTime)}</h4>
      </div>
      <input
        type="text"
        placeholder={`Enter ${workout.name === 'Running' ? 'distance' : 'details'}`}
        onChange={handleInputChange}
      />
      {isAssigned && (
        <button onClick={() => setIsCompleted(true)}>
          {isCompleted ? 'Completed' : 'Progress'}
        </button>
      )}
    </div>
  );
};

export default WorkoutCardexwg;
