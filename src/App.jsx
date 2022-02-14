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

function App() {
  
  const [user, setUser] = useState(null);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home /*user={user}*//>} />
        {/* <Route path='/login/' element={<Login setUser={setUser}/>} /> */}
        {/* <Route path='/register/' element={<Register/>} /> */}
      </Routes>
    </div>
  )
}

export default App;
