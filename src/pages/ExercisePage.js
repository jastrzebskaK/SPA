import React from 'react';
import Exercise from '../components/Exercise';
import exercise1 from '../images/exercise.jpg';



const exercise = [

    {
        id: 1,
        title: "Twisting Jump Squats",
        text: "Begin standing tall with a tight core. Your chest will be up and your gaze will be straight ahead. Bend at the knees and drive your hips back as you lower yourself into a squat position.Launch yourself up while simultaneously twisting to the other side. Your body will perform a 180 degree turn in midair. Land with bent knees and immediately go right into another jump squat, turning to the starting position. Repeat this alternating pattern."
      
    },

    {
        id: 2,
        title: "Alternating Bodyweight Lunges",
        text: "Stand straight – that’s the starting position. Step forward with your left leg and slowly lower your body until your front knee is bent at least 90 degrees, while your rear knee is just off the floor. Keep your torso upright the entire time. Look forward.Pause, then push off your left foot off the floor and return to the starting position as quickly as you can. On your next rep, step forward with your right leg. Continue to alternate back and forth—doing one rep with your left, then one rep with your right."
    },

    {

        id: 3,
        title: "Plank",
        text: "Get into a face down position on the floor supporting your upper body on your forearms. Your elbows should be bent at 90 degrees. Extend your legs straight out behind you, supporting them on your toes and balls of your feet. Keep your body in a straight line by tightening your abdominal and oblique muscles.Hold for as long as possible."
        
    }
]


const ExercisePage = () => {

    const exList = exercise.map(exercise => (
        <Exercise key = {exercise.id} {...exercise}/>

    ))

    return (
        
        <div className="exercise">
            {exList} 
        <img style={{
            padding:20,
            display:"relative",

        }} src={exercise1} alt="exercise"></img>
           
        </div>
    )

}
 export default ExercisePage;