import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link, 
    Navigate,
  } from 'react-router-dom';
import Home from "./Pages/home/Home";
import NavBar from "./Components/NavBar/NavBar.jsx"
import WorkoutSchedule from './Pages/workout-schedule/WorkoutSchedule.jsx';
import PersonalRecords from './Pages/personal-records/PersonalRecords.jsx';
import WeightTracker from './Pages/weight-tracker/WeightTracker.jsx';
import ExerciseList from './Pages/exercise-list/ExerciseList.jsx';

function App() {
  
  const [user, setUser] = useState(null);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home /*user={user}*//>} />
        <Route exact path='/workout-schedule/' element ={<WorkoutSchedule/>} />
        <Route exact path='/personal-records/' element ={<PersonalRecords/>} />
        <Route exact path='/weight-tracker/' element={<WeightTracker/>} />
        <Route exact path='/exercise-list/' element={<ExerciseList/>} />
        {/* <Route path='/login/' element={<Login setUser={setUser}/>} /> */}
        {/* <Route path='/register/' element={<Register/>} /> */}
      </Routes>
    </div>
  )
}

export default App;
