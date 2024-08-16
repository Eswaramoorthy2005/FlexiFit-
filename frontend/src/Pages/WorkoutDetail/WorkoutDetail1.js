import React from 'react';
import './WorkoutDetail.css';
const WorkoutDetial1 = () => {
  return (
    <div className="workout-details">
      <h1>Side Leg Raises</h1>
      <div className="workout-content">
        <img src="/images/side-leg-raises.jpg" alt="Side Leg Raises" className="workout-image" />
        <div className="workout-description">
          <h2>Brief Description</h2>
          <p>
            Side leg raises are a great exercise for strengthening your hip abductors, glutes, and outer thighs.
            This workout helps improve balance, coordination, and overall lower body strength. On average,
            performing side leg raises for 25 minutes can burn approximately 150-200 calories, depending on
            your intensity and body weight.
          </p>
          <h2>Steps to Follow</h2>
          <ol>
            <li>Starting Position: Lie on your side on an exercise mat or a comfortable surface.</li>
            <li>Keep your legs extended straight out and stacked on top of each other.</li>
            <li>Rest your head on your lower arm, and place your upper hand in front of you on the mat for support.</li>
            <li>Inhale and brace your core.</li>
            <li>Slowly lift your top leg upwards, keeping it straight. Lift it as high as you comfortably can without tilting your pelvis or rotating your torso.</li>
            <li>Pause briefly at the top of the movement, keeping your leg elevated.</li>
            <li>Exhale and slowly lower your leg back to the starting position, keeping it straight and controlled.</li>
            <li>Complete the desired number of repetitions on one side, then switch sides and repeat the exercise with the other leg.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetial1;
