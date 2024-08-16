import React from 'react';
import WorkoutCard from './Wrkoutbegwl';

import benchpress from './imgs/benchpress.jpeg';
import flies from './imgs/flies.jpeg';
import bicepcurls from './imgs/bicepcurls.jpeg';
import hammercurls from './imgs/hammercurls.gif';
import deadlifts from './imgs/dumbeldead.jpeg';
import splitsquat from './imgs/splitsquat.jpeg';
import Sidebar from './Sidebar/Sidebar';

const workouts = [
 
  { img:benchpress,rot:'dumbench',rg:'Chest', name: 'Dumbbell Bench Press:12-per-set', time: 30, cl:'200-250 calories', desc:''},
  
  {img:flies, rot:'dumfly', rg:'Chest', name: 'Dumbbell Flyes:15-per-set', time: 25, cl:'180-220 calories', desc:''},
  
  { img:bicepcurls,rg:'Arms', name: 'Dumbbell Bicep Curls:12-per-set', time: 20, cl:'100-130 calories', desc:''},
  
  { img:hammercurls,rg:'Arms', name: 'Dumbbell Hammer Curls:15-per-set', time: 20, cl:'110-140 calories', desc:''},
  
  { img:deadlifts,rg:'Legs', name: 'Dumbbell Deadlifts:12-per-set', time: 30, cl:'150-200 calories', desc:''},
  
  {img:splitsquat, rg:'Legs', name: 'Dumbbell Bulgarian Split Squats:12-per-leg', time: 25, cl:'130-170 calories', desc:''},
];

const Intwg = () => {
  return (
    <div className="cards-container">
    <div>
      <Sidebar/>
      <h1>Intermediate Level</h1>
      <h2>Muscle Gain Workouts</h2>
      <div className="wrapper">
        {workouts.map((workout, index) => (
          <WorkoutCard key={index} day={`Day ${index + 1}`} workout={workout} />
        ))}
      </div>
    </div>
  </div>
  );
};

export default Intwg;
