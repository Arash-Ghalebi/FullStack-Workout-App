import React, { useEffect, useState } from 'react';
import Calendar from '../../Components/Calendar/Calendar';
import axios from 'axios';


export default class WorkoutSchedule extends React.Component {

    // const [entries, setEntries] = useState([])

    // // function addNewEntry(entry){
    // //     let tempEntries = [entry, ...entries];
    // //     setEntries(tempEntries);
    // // }
    // async function getWeights(){
    //     let weights = await axios.get('http://127.0.0.1:8000/bodyweights/4/')
    //     weights.data.sort(function(a,b){
    //         return new Date(b.date) - new Date(a.date);
    //     })
    //     setEntries(weights.data)
    // }
    // useEffect(()=>{
    //     getWeights()
    // }, [])

    render() {
        return (
          <Calendar/>
        )
    }
}