import React from 'react';
import './WorkoutDetail.css';

const WorkoutDetailPushUps = () => {
  return (
    <div className="workout-details">
      <h1>Push-Ups</h1>
      <div className="workout-content">
        <img src="/images/push-ups.jpg" alt="Push-Ups" className="workout-image" />
        <div className="workout-description">
          <h2>Brief Description</h2>
          <p>
            Push-ups are a classic bodyweight exercise that targets the chest, shoulders, triceps, and core. This workout helps build upper body strength, enhance stability, and improve muscular endurance. On average, performing push-ups for 25 minutes can burn approximately 200-300 calories, depending on the intensity and speed.
          </p>
          <h2>Steps to Follow</h2>
          <ol>
            <li>Starting Position: Begin in a plank position with your hands slightly wider than shoulder-width apart and your body in a straight line from head to heels.</li>
            <li>Lower Body: Bend your elbows to lower your chest towards the ground. Keep your elbows at a 45-degree angle from your torso.</li>
            <li>Engage Core: Tighten your core muscles to maintain a straight body line throughout the movement.</li>
            <li>Push Up: Press through your hands to extend your elbows and return to the starting position.</li>
            <li>Repeat: Complete the desired number of repetitions, keeping your movements controlled and steady.</li>
            <li>Breathing: Inhale as you lower your body, and exhale as you push back up to the starting position.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailPushUps;
