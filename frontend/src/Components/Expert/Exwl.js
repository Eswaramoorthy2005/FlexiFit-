import React from 'react';
import WorkoutCardexwl from './Workoutexwl';
import Sidebar from '../Sidebar/Sidebar';
import InclineBenchPress from './images/wl1.jpeg';
import HangingLegRaises from './images/wl2.jpeg';
import BentOverBarbellRow from './images/wl3.jpeg';
import BarbellUprightRow from './images/wl4.jpeg';
import CloseGripBenchPress from './images/wl5.jpeg';
import StiffLegDeadlift from './images/wl6.jpeg';
import DumbbellManMakers from './images/wl7.jpeg';
import WeightedDip from './images/wl8.jpeg';
import RackDeadlift from './images/wl9.jpeg';
import WeightPlateFrontRaise  from './images/wl10.jpeg';
import EZBarPreacherCurl  from './images/wl11.jpeg';
import StandingBarbellCalfRaise  from './images/wl12.jpeg';






const workouts = [
  { day:1,
    img: InclineBenchPress, 
    rot: 'chest-abs',
    name: 'Incline Bench Press',
    time: 30,
    cl: '200-250 calories',
    desc: 'The Incline Bench Press is an excellent exercise for targeting the upper portion of the pectoral muscles. It also engages the shoulders and triceps, making it a compound movement for building upper body strength.',
    st: 'Lie on an incline bench with your feet flat on the ground. Hold the barbell with a grip slightly wider than shoulder-width apart. Lower the bar to your upper chest, then press it back up to the starting position.',
    img1: DumbbellManMakers,
    rot1: 'chest-abs',
    name1: 'Dumbbell Man Makers',
    time1: 30,
    cl1: '250-300 calories',
    desc1: 'Dumbbell Man Makers combine several exercises into one fluid motion, engaging various muscle groups at a time. This exercise helps build lean muscle mass and burn calories efficiently.',
    st1: 'Start in a plank position, holding dumbbells in each hand. Perform a push-up, then pull each dumbbell towards your waist. Jump into a squat position, stand up, and press the dumbbells overhead. Repeat the sequence.' 
  },
  { day:2,
    img: HangingLegRaises, 
    rot: 'chest-abs',
    name: 'Hanging Leg Raise',
    time: 20,
    cl: '150-200 calories',
    desc: 'Hanging Leg Raises are a great exercise for strengthening the lower abdominal muscles. This exercise also engages the hip flexors and improves core stability.',
    st: 'Hang from a pull-up bar with your hands shoulder-width apart. Raise your legs until they are parallel to the ground, then lower them back down. Keep your core engaged throughout the movement.',
    img1: WeightedDip ,
    rot1: 'chest-abs',
    name1: 'Weighted Dip',
    time1: 20,
    cl1: '200-250 calories',
    desc1: 'Weighted Dips are an effective exercise for targeting the chest, shoulders, and triceps. Adding weight increases the intensity and helps build upper body strength.',
    st1: 'Place a weight belt around your waist with added weight. Hold the parallel bars and lower your body until your upper arms are parallel to the ground. Push back up to the starting position.' 
  },
  { day:3,
    img: BentOverBarbellRow, 
    rot: 'back',
    name: 'Bent Over Barbell Row',
    time: 30,
    cl: '200-250 calories',
    desc: 'Bent Over Barbell Rows target the muscles in the upper back, including the lats, traps, and rhomboids. This exercise also engages the biceps and core for stability.',
    st: 'Stand with your feet shoulder-width apart, holding a barbell with an overhand grip. Bend at the hips and knees, keeping your back straight. Pull the barbell towards your lower chest, then lower it back down.',
    img1: RackDeadlift ,
    rot1: 'back',
    name1: 'Rack Deadlift',
    time1: 30,
    cl1: '250-300 calories',
    desc1: 'Rack Deadlifts focus on the lower back, glutes, and hamstrings. This exercise allows you to lift heavier weights by reducing the range of motion compared to traditional deadlifts.',
    st1: 'Set up a barbell on a rack at knee height. Stand with your feet shoulder-width apart and grip the bar with both hands. Lift the bar by extending your hips and knees, then lower it back down.' 
  },
  { day:4,
    img: BarbellUprightRow, 
    rot: 'shoulders',
    name: 'Barbell Upright Row',
    time: 20,
    cl: '150-200 calories',
    desc: 'Barbell Upright Rows target the shoulders, specifically the deltoids, and also engage the traps and biceps. This exercise helps build shoulder strength and size.',
    st: 'Stand with your feet shoulder-width apart, holding a barbell with an overhand grip. Lift the barbell to your chin, keeping your elbows higher than your wrists. Lower the barbell back down.',
    img1: WeightPlateFrontRaise ,
    rot1: 'shoulders',
    name1: 'Weight Plate Front Raise',
    time1: 20,
    cl1: '150-200 calories',
    desc1: 'Weight Plate Front Raises target the front deltoids, helping to build shoulder strength and definition. This exercise also engages the core for stability.',
    st1: 'Stand with your feet shoulder-width apart, holding a weight plate with both hands. Lift the plate to shoulder height, keeping your arms straight. Lower the plate back down.' 
  },
  { day:5,
    img: CloseGripBenchPress, 
    rot: 'arms',
    name: 'Close Grip Bench Press',
    time: 20,
    cl: '150-200 calories',
    desc: 'The Close Grip Bench Press targets the triceps, while also engaging the chest and shoulders. This exercise helps build upper body strength and muscle mass.',
    st: 'Lie on a bench with your feet flat on the ground. Hold the barbell with a grip narrower than shoulder-width apart. Lower the bar to your chest, then press it back up to the starting position.',
    img1:EZBarPreacherCurl,
    rot1: 'arms',
    name1: 'EZ Bar Preacher Curl',
    time1: 20,
    cl1: '150-200 calories',
    desc1: 'EZ Bar Preacher Curls target the biceps, specifically the brachialis muscle. This exercise helps build arm strength and size.',
    st1: 'Sit on a preacher bench with an EZ bar. Hold the bar with an underhand grip and curl it towards your shoulders. Lower the bar back down to the starting position.' 
  },
  { day:6,
    img: StiffLegDeadlift, 
    rot: 'legs',
    name: 'Stiff Leg Deadlift',
    time: 30,
    cl: '200-250 calories',
    desc: 'Stiff Leg Deadlifts target the hamstrings, glutes, and lower back. This exercise helps improve posterior chain strength and flexibility.',
    st: 'Stand with your feet shoulder-width apart, holding a barbell with an overhand grip. Keep your legs straight and hinge at the hips to lower the bar towards your feet. Raise the bar back up to the starting position.',
    img1: StandingBarbellCalfRaise,
    rot1: 'legs',
    name1: 'Standing Barbell Calf Raise',
    time1: 20,
    cl1: '150-200 calories',
    desc1: 'Standing Barbell Calf Raises target the calf muscles, specifically the gastrocnemius and soleus. This exercise helps build lower leg strength and definition.',
    st1: 'Stand with your feet shoulder-width apart, holding a barbell across your shoulders. Raise your heels off the ground, then lower them back down. Repeat the movement for the desired number of repetitions.' 
  },
];

function Exwl() {
  return (
    <div className="excards-container">
      <div>

        
          <Sidebar/>
          <div className='exheader'>

          <h1>Expert Level</h1>
          <h2>Weight Loss Workouts</h2>
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

export default Exwl;
