import React from 'react';
import './Home.css';

export default function Home() {
    const logo = require('../assets/workout-tracker-background.PNG');
    return (
        <div className='title'>
            <h1>THE    Workout Tracker</h1>
            <img alt='swole-doge'  src={String(logo)} />
        </div>
    )
}