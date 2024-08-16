import React from 'react';
import './WorkoutDetail.css';

const WorkoutDetailDumbbellFlyes = () => {
  return (
    <div className="workout-details">
      <h1>Dumbbell Flyes</h1>
      <div className="workout-content">
        <img src="/images/dumbbell-flyes.jpg" alt="Dumbbell Flyes" className="workout-image" />
        <div className="workout-description">
          <h2>Brief Description</h2>
          <p>
            Dumbbell Flyes are a great isolation exercise for targeting the chest muscles. This exercise helps to build and define the pectoral muscles and can also engage the shoulders and arms. Performing Dumbbell Flyes for about 25 minutes can burn approximately 200-250 calories, depending on your intensity and body weight.
          </p>
          <h2>Steps to Follow</h2>
          <ol>
            <li>Starting Position: Lie flat on a bench with a dumbbell in each hand, held above your chest with arms fully extended and palms facing each other.</li>
            <li>Engage Core: Keep your feet flat on the floor and your back neutral to stabilize your body.</li>
            <li>Lower Weights: Slowly lower the dumbbells out to the sides in a wide arc until you feel a stretch in your chest. Maintain a slight bend in your elbows throughout the movement.</li>
            <li>Raise Weights: Bring the dumbbells back up to the starting position by squeezing your chest muscles and bringing the weights together in a controlled motion.</li>
            <li>Repeat: Complete the desired number of repetitions, maintaining controlled and steady motion throughout.</li>
            <li>Breathing: Inhale as you lower the dumbbells, and exhale as you bring them back up.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailDumbbellFlyes;
