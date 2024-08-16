import React from 'react';
import './WorkoutDetail.css';

const WorkoutDetail2 = () => {
  return (
    <div className="workout-details">
      <h1>Jogging</h1>
      <div className="workout-content">
        <img src="/images/jogging.jpg" alt="Jogging" className="workout-image" />
        <div className="workout-description">
          <h2>Brief Description</h2>
          <p>
            Jogging is a popular form of aerobic exercise that helps improve cardiovascular fitness, strengthen muscles, and burn calories. It is less intense than running but provides significant health benefits. On average, jogging for 25 minutes can burn approximately 200-300 calories, depending on your pace and body weight.
          </p>
          <h2>Steps to Follow</h2>
          <ol>
            <li>Warm-Up: Start with a 5-minute walk or light jog to warm up your muscles.</li>
            <li>Maintain Posture: Keep your back straight, shoulders relaxed, and arms bent at a 90-degree angle.</li>
            <li>Start Jogging: Begin jogging at a comfortable pace. Your strides should be short and quick.</li>
            <li>Breathe Properly: Breathe in through your nose and out through your mouth. Try to maintain a steady breathing pattern.</li>
            <li>Pace Yourself: Keep a steady pace that allows you to jog continuously without overexerting yourself.</li>
            <li>Cool Down: Finish with a 5-minute walk to gradually bring your heart rate down.</li>
            <li>Stretch: After jogging, stretch your muscles to prevent stiffness and improve flexibility.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetail2;
