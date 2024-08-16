import React from 'react';
import './WorkoutDetail.css';

const WorkoutDetail3 = () => {
  return (
    <div className="workout-details">
      <h1>Dumbbell Step-Ups</h1>
      <div className="workout-content">
        <img src="/images/dumbbell-step-ups.jpg" alt="Dumbbell Step-Ups" className="workout-image" />
        <div className="workout-description">
          <h2>Brief Description</h2>
          <p>
            Dumbbell step-ups are a powerful lower body exercise that targets the quadriceps, hamstrings, and glutes. This workout helps improve strength, balance, and coordination. On average, performing dumbbell step-ups for 25 minutes can burn approximately 250-350 calories, depending on the intensity and weight used.
          </p>
          <h2>Steps to Follow</h2>
          <ol>
            <li>Starting Position: Stand upright with a dumbbell in each hand, palms facing your sides.</li>
            <li>Step Up: Place your right foot on a bench or step, ensuring your entire foot is secure.</li>
            <li>Lift: Push through your right heel to lift your body onto the bench, bringing your left foot up to meet your right foot.</li>
            <li>Step Down: Carefully step down with your left foot, followed by your right foot, returning to the starting position.</li>
            <li>Alternate: Repeat the movement, starting with your left foot this time.</li>
            <li>Repetitions: Complete the desired number of repetitions, maintaining control and balance throughout the exercise.</li>
            <li>Breathing: Inhale as you step up, and exhale as you step down.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetail3;
