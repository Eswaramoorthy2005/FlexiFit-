import React from 'react';
import './WorkoutDetail.css';

const WorkoutDetailDumbbellBenchPress = () => {
  return (
    <div className="workout-details">
      <h1>Dumbbell Bench Press</h1>
      <div className="workout-content">
        <img src="/images/dumbbell-bench-press.jpg" alt="Dumbbell Bench Press" className="workout-image" />
        <div className="workout-description">
          <h2>Brief Description</h2>
          <p>
            The Dumbbell Bench Press is an effective exercise for targeting the chest, shoulders, and triceps. It allows for a greater range of motion compared to barbell presses and helps to build strength and muscle mass in the upper body. On average, performing this exercise for 25 minutes can burn approximately 200-250 calories, depending on your intensity and body weight.
          </p>
          <h2>Steps to Follow</h2>
          <ol>
            <li>Starting Position: Lie flat on a bench with a dumbbell in each hand, held above your chest with arms fully extended.</li>
            <li>Engage Core: Keep your feet flat on the floor and your back neutral to stabilize your body.</li>
            <li>Lower Weights: Slowly lower the dumbbells to chest level, ensuring your elbows are at a 90-degree angle.</li>
            <li>Press Up: Push the dumbbells back up to the starting position, fully extending your arms.</li>
            <li>Repeat: Complete the desired number of repetitions, maintaining controlled and steady motion throughout.</li>
            <li>Breathing: Inhale as you lower the dumbbells, and exhale as you push them back up.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailDumbbellBenchPress;
