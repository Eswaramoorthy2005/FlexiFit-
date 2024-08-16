import React from 'react';
import WorkoutCard from './Wrkoutbegwl';
import skip from './Jump Rope.jpeg';
import jog from './tred.png'; // If this is an image, use the correct extension\
import squat from './imgs/squats.jpeg';
import push from './imgs/pushup1.jpeg';
import dips from './imgs/Bench Dips.jpeg';
import pull from './imgs/pullups.jpeg';
import Sidebar from './Sidebar/Sidebar';

const workouts = [
  { img: push, rot: 'walk', name: 'Pushups:20/set', time: 30, cl: '100-150 calories', desc: '' },
  { img: jog, rot: 'jog', name: 'Tredmill run', time: 20, cl: '140-150 calories', desc: '' },
  { img: pull, name: 'Pullups', time: 30, cl: '200-300 calories', desc: '' },
  { img: skip, name: 'Jumping Rope', time: 10, cl: '200-300 calories', desc: '' },
  { img: squat, rot: 'squat', name: 'Squats', time: 25, cl: '130 calories', desc: '' },
  { img: dips, name: 'Bench Dips', time: 20, cl: '90-120 calories', desc: '' },
];

const Begwl = () => {
  return (
    <div className="cards-container">
      <div>
    
        <Sidebar/>
        <h1>Beginner Level</h1>
        <h2>Weight Loss Workouts</h2>
        <div className="wrapper">
          {workouts.map((workout, index) => (
            <WorkoutCard key={index} day={`Day ${index + 1}`} workout={workout} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Begwl;
