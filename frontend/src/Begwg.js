import React from 'react';
import WorkoutCardwg from './Components/Workoutbegwg';
import push from './Components/imgs/pushup1.jpeg'; // Add correct image paths
import pull from './Components/imgs/pullups.jpeg';
import plank from './Components/imgs/plank.jpeg';
import dip from './Components/imgs/tries.jpeg';
import lunge from './Components/imgs/walkinglongue.jpeg';
import squat from './Components/squat.jpeg';
import Sidebar from './Components/Sidebar/Sidebar';
const workouts = [
  { img: push, rot: 'push', rg: 'Chest', name: 'Push up:15-per-set', time: 30, cl: '100-150 calories', desc: '' },
  { img: pull, rot: 'pull', rg: 'Chest', name: 'Pull up:10-per-set', time: 30, cl: '200-300 calories', desc: '' },
  { img: plank, rg: 'Arms', name: 'Plank-up:10-per-set', time: 25, cl: '130 calories', desc: '' },
  { img: dip, rg: 'Arms', name: 'Triceps dip:15-per-set', time: 25, cl: '130 calories', desc: '' },
  { img: lunge, rg: 'Legs', name: 'Lunge:15-per-set', time: 20, cl: '90-120 calories', desc: '' },
];

const Begwg = () => {
  return (
    <div className="cards-container">
      <div>
        <Sidebar/>
        <h1>Beginner Level</h1>
        <h2>Muscle Gain Workouts</h2>
        <div className="wrapper">
          {workouts.map((workout, index) => (
            <WorkoutCardwg key={index} day={`Day ${index + 1}`} workout={workout} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Begwg;
