import React from 'react';
import WorkoutCardexwl from './Workoutexwl';
import Sidebar from '../Sidebar/Sidebar';
import MilitaryPress from './images/wg1.jpeg';
import BarbellBackSquat from'./images/wg2.jpeg';
import OneArmDumbbellRow from './images/wg3.jpeg';
import BentOverrows from './images/wg4.jpeg';
import DumbbellLateralRaise from './images/wg5.jpeg';
import BarbellFloorDeadlift from './images/wg6.jpeg';
import tandingOverheadEZBarTricepExtension from './images/wg7.jpeg';
import LegPress from './images/wg8.jpeg';
import DumbbellShrug from './images/wg9.jpeg';
import CalfRaise from './images/wg10.jpeg';
import StandingBarbellCurl from './images/wg11.jpeg';
import WideGripPullUp from './images/wg12.jpeg';







const workouts = [
 
  { day: 'day1',
    img: MilitaryPress, 
    rot: 'push',
    name: 'Military Press (AKA Overhead Press)',
    time: 30,
    cl: '100-150 calories',
    desc: 'The Military Press is a powerful compound exercise that primarily targets the shoulders and triceps, but also engages the core and upper chest. This exercise helps to build upper body strength and muscle mass.',
    st: 'Stand with your feet shoulder-width apart. Hold a barbell at shoulder height with your palms facing forward and elbows pointing down. Press the barbell overhead until your arms are fully extended. Lower the barbell back to shoulder height. Repeat.',
    img1:tandingOverheadEZBarTricepExtension,
    name1: 'Standing Overhead EZ Bar Tricep Extension',
    time1: 20,
    cl1: '90-120 calories',
    desc1: 'The Standing Overhead EZ Bar Tricep Extension is an isolation exercise that targets the triceps. It helps to increase tricep strength and muscle definition.',
    st1: 'Stand with your feet shoulder-width apart. Hold an EZ bar overhead with your hands close together. Lower the bar behind your head by bending your elbows. Extend your arms to return to the starting position. Repeat.'
  },
  
  { day: 'day2',
    img:BarbellBackSquat,
    rot: 'legs',
    name: 'Barbell Back Squat',
    time: 30,
    cl: '150-200 calories',
    desc: 'The Barbell Back Squat is a fundamental exercise that targets the lower body muscles, including the quadriceps, hamstrings, glutes, and calves. It helps improve strength, flexibility, and balance.',
    st: 'Stand with your feet shoulder-width apart. Place a barbell across your upper back and grip it with your hands. Lower your body into a squat position by bending your knees and hips. Stand back up to the starting position. Repeat.',
    img1:LegPress,
    name1: 'Leg Press',
    time1: 20,
    cl1: '100-150 calories',
    desc1: 'The Leg Press is an effective lower body exercise that targets the quadriceps, hamstrings, and glutes. It helps to build lower body strength and muscle mass.',
    st1: 'Sit on a leg press machine with your feet shoulder-width apart on the platform. Lower the platform by bending your knees until they are at a 90-degree angle. Press the platform back up to the starting position. Repeat.'},
  
  { day: 'day3',
    img:OneArmDumbbellRow,
    rot: 'pull',
    name: 'One Arm Dumbbell Row',
    time: 30,
    cl: '90-120 calories',
    desc: 'The One Arm Dumbbell Row is a compound exercise that targets the back, shoulders, and arms. It helps to build upper body strength and muscle definition.',
    st: 'Stand with your feet shoulder-width apart. Hold a dumbbell in one hand and place your other hand on a bench for support. Bend forward at the waist and row the dumbbell towards your hip. Lower the dumbbell back to the starting position. Repeat on the other side.',
    img1:DumbbellShrug,
    name1: 'Dumbbell Shrug',
    time1: 20,
    cl1: '80-100 calories',
    desc1: 'The Dumbbell Shrug is an isolation exercise that targets the trapezius muscles. It helps to increase shoulder strength and muscle definition.',
    st1: 'Stand with your feet shoulder-width apart. Hold a dumbbell in each hand by your sides. Shrug your shoulders up towards your ears. Lower your shoulders back to the starting position. Repeat.'},
  
  { day: 'day4',
    img:BentOverrows,
    rot: 'lower',
    name: 'Bent-over rows',
    time: 30,
    cl: '150-200 calories',
    desc: 'The row exercise helps to develop the major back muscles, which can change the appearance of your upper body and also help to improve how you move in your day to day and when playing sports.',
    st: 'Stand with your feet shoulder-width apart. Place a barbell across your upper back and grip it with your hands. Lower your body into a squat position by bending your knees and hips. Stand back up to the starting position. Repeat.',
    img1:CalfRaise,
    name1: 'Calf Raise',
    time1: 20,
    cl1: '80-100 calories',
    desc1: 'The Calf Raise is an isolation exercise that targets the calf muscles. It helps to increase calf strength and muscle definition.',
    st1: 'Stand with your feet shoulder-width apart. Raise your heels off the ground as high as possible. Lower your heels back to the starting position. Repeat.'},
  
  { day: 'day5',
    img:DumbbellLateralRaise,
    rot: 'upper',
    name: 'Dumbbell Lateral Raise',
    time: 20,
    cl: '80-100 calories',
    desc: 'The Dumbbell Lateral Raise is an isolation exercise that targets the shoulders. It helps to increase shoulder strength and muscle definition.',
    st: 'Stand with your feet shoulder-width apart. Hold a dumbbell in each hand by your sides. Raise your arms out to the sides until they are parallel to the ground. Lower your arms back to the starting position. Repeat.',
    img1:StandingBarbellCurl,
    name1: 'Standing Barbell Curl',
    time1: 20,
    cl1: '70-90 calories',
    desc1: 'The Standing Barbell Curl is an isolation exercise that targets the biceps. It helps to increase bicep strength and muscle definition.',
    st1: 'Stand with your feet shoulder-width apart. Hold a barbell with an underhand grip. Curl the barbell towards your chest. Lower the barbell back to the starting position. Repeat.'},
  
  {  day: 'day6',
    img:BarbellFloorDeadlift, 
    rot: 'power',
    name: 'Barbell Floor Deadlift',
    time: 30,
    cl: '200-300 calories',
    desc: 'The Barbell Floor Deadlift is a compound exercise that targets the entire body, including the back, legs, and core. It helps to build overall strength and muscle mass.',
    st: 'Stand with your feet shoulder-width apart. Grip a barbell with both hands and lift it off the ground by extending your hips and knees. Lower the barbell back to the ground. Repeat.',
    img1:WideGripPullUp,
    name1: 'Wide-Grip Pull-Up',
    time1: 20,
    cl1: '90-120 calories',
    desc1: 'The Wide-Grip Pull-Up is a compound exercise that targets the back, shoulders, and arms. It helps to build upper body strength and muscle mass.',
    st1: 'Hang from a pull-up bar with your hands wider than shoulder-width apart. Pull your body up towards the bar until your chin is above the bar. Lower your body back to the starting position. Repeat.'},
];

function Exwg() {
  return (
    <div className="excards-container">
      <div>

        
          <Sidebar/>
          <div className='exheader'>

          <h1>Expert Level</h1>
          <h2>Muscle Gain Workouts</h2>
          </div>
          <div className='wrapper'>

          {workouts.map((workout, index) => (
            <WorkoutCardexwl key={index} workout={workout} />
          ))}
          </div>
        
      </div>
    </div>
  );
}

export default Exwg;
