import React from 'react';

export default function Home() {
    const logo = require('../assets/workout-tracker-background.PNG');
    return (
        <div>
            <h1>Workout Tracker</h1>
            <img alt='swole-doge'  src={String(logo)} />
        </div>
    )
}