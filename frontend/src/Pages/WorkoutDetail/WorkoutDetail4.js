import React from 'react';
import './WorkoutDetail.css';

const WorkoutDetailSquats = () => {
  return (
    <div className="workout-details">
      <h1>Squats</h1>
      <div className="workout-content">
        <img src="/images/squats.jpg" alt="Squats" className="workout-image" />
        <div className="workout-description">
          <h2>Brief Description</h2>
          <p>
            Squats are a fundamental lower body exercise that targets the quadriceps, hamstrings, glutes, and core. This workout helps build strength, improve mobility, and enhance overall fitness. On average, performing squats for 25 minutes can burn approximately 200-300 calories, depending on the intensity and speed.
          </p>
          <h2>Steps to Follow</h2>
          <ol>
            <li>Starting Position: Stand with your feet shoulder-width apart and your toes pointing slightly outward.</li>
            <li>Engage Core: Tighten your core muscles to maintain a neutral spine.</li>
            <li>Lower Body: Bend your knees and push your hips back as if you're sitting in a chair. Keep your chest up and your back straight.</li>
            <li>Depth: Lower yourself until your thighs are parallel to the floor or as far as your mobility allows.</li>
            <li>Push Up: Press through your heels to return to the starting position, extending your hips and knees.</li>
            <li>Repeat: Complete the desired number of repetitions, maintaining proper form throughout.</li>
            <li>Breathing: Inhale as you lower your body, and exhale as you push up to the starting position.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailSquats;
