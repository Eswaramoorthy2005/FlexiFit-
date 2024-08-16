import React from 'react';
import './WorkoutDetail.css';

const WorkoutDetailPullUps = () => {
  return (
    <div className="workout-details">
      <h1>Pull-Ups</h1>
      <div className="workout-content">
        <img src="/images/pull-ups.jpg" alt="Pull-Ups" className="workout-image" />
        <div className="workout-description">
          <h2>Brief Description</h2>
          <p>
            Pull-ups are a challenging upper body exercise that targets the back, shoulders, and arms. This workout helps build upper body strength and improve grip strength. On average, performing pull-ups for 25 minutes can burn approximately 250-350 calories, depending on your intensity and body weight.
          </p>
          <h2>Steps to Follow</h2>
          <ol>
            <li>Starting Position: Hang from a pull-up bar with your hands slightly wider than shoulder-width apart, palms facing away from you.</li>
            <li>Engage Core: Tighten your core muscles to stabilize your body.</li>
            <li>Pull Up: Pull yourself up towards the bar by bending your elbows and bringing your chest towards it. Keep your shoulders engaged and avoid swinging your body.</li>
            <li>Reach Top Position: Pull until your chin is above the bar, and pause briefly at the top.</li>
            <li>Lower Down: Slowly lower yourself back to the starting position, fully extending your arms.</li>
            <li>Repeat: Complete the desired number of repetitions, maintaining a controlled and steady motion.</li>
            <li>Breathing: Inhale as you lower yourself, and exhale as you pull up towards the bar.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailPullUps;
