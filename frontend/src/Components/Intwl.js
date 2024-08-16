import React from 'react';
import WorkoutCard from './Wrkoutbegwl';

import dumbbellStepUps from './imgs/deadlift.jpeg';
import jogging from './tred.png';
import cycling from './imgs/Jandasitup.jpeg';
import dumbbellRenegadeRow from './imgs/regenade.jpeg';
import flutterKicks from './imgs/flutterkicks1.jpeg';
import sideLegRaises from './imgs/sidelegraise.jpeg';
import dumbbellThrusters from './imgs/dumbellthruster.jpeg';
import Sidebar from './Sidebar/Sidebar';


const workouts = [
  { img: dumbbellStepUps, rot: 'dumb', name: 'Dumbbell Step-Ups', time: 30, cl: '100-150 calories', desc: '', },
  { img: jogging, rot: 'jog', name: 'Tredmill', time: 20, cl: '140-150 calories', desc: '' },
  { img: cycling, name: 'Janda Sit Up', time: 30, cl: '200-300 calories', desc: '' },
  { img: dumbbellRenegadeRow, name: 'Dumbbell Renegade Row',time: 10, cl: '200-300 calories', desc: '' },
  { img: flutterKicks, name: 'Flutter Kicks:20-per-set', time: 30, cl: '150-200 calories', desc: '', },
  { img: sideLegRaises, name: 'Side Leg Raises', time: 20, cl: '90-100 calories', desc: ''},
  { img: dumbbellThrusters, name: 'Dumbbell Thrusters', time: 20, cl: '180-200 calories', desc: '' }
];

const Intwl = () => {
  return (
    <div className="cards-container">
    <div>
  
      <Sidebar/>
      <h1>Intermediate Level</h1>
      <h2>Weight Loss Workouts</h2>
      <div className="wrapper">
        {workouts.map((workout, index) => (
          <WorkoutCard key={index} day={`Day ${index + 1}`} workout={workout} />
        ))}
      </div>
    </div>
  </div>
  );
}

export default Intwl;
