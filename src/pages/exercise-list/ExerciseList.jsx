import React, { useEffect, useState } from 'react';
//import ExerciseListExamples from '../../Components/ExerciseListExamples/ExerciseListExamples';
import axios from 'axios';
import './ExerciseList.css'

export default function ExerciseList() {

    const [info, setInfo] = useState([])

    const getExercises = (target) => {


        var options = {
            method: 'GET',
            url: 'https://exercisedb.p.rapidapi.com/exercises',
            headers: {
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
                'x-rapidapi-key': '9bed7e2f55msh7240731d469802bp126ae4jsnc01945b76fd6'
        }
    };

    axios.request(options).then(function (response) {
        let tempData = response.data.filter(entry => {
            return entry.bodyPart == target;
        });
        console.log(tempData)
        setInfo(tempData);
        }).catch(function (error) {
	    console.error(error);
        
        
    });
    }
    

    return (
        <div className='exer-list'>
            <button onClick={() => getExercises('back')}>Get Back Workouts</button>
            <button onClick={() => getExercises('lower arms')}>Get Lower Arm Workouts</button>
            <button onClick={() => getExercises('upper arms')}>Get Upper Arm Workouts</button>
            <button onClick={() => getExercises('chest')}>Get Chest Workouts</button>
            <button onClick={() => getExercises('shoulders')}>Get Shoulder Workouts</button>
            <button onClick={() => getExercises('cardio')}>Get Cardio Workouts</button>
            <button onClick={() => getExercises('lower legs')}>Get Lower Leg Workouts</button>
            <button onClick={() => getExercises('upper legs')}>Get Upper Leg Workouts</button>
            <ul>
                {info.map(entry => (
                    <li>{entry.name} <img alt='swole-doge'  src={String(entry.gifUrl)} /></li>
                ))}
            </ul>
                
            
        </div>
    );

}