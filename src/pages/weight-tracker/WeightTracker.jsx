import React, { useEffect, useState } from 'react';
import DisplayWeightEntries from '../../Components/DisplayWeightEntries/DisplayWeightEntries';
import AddWeightEntry from '../../Components/AddWeightEntry/AddWeightEntry';
import WeightChartTracker from '../../Components/WeightChartTracker/WeightChartTracker';
import axios from 'axios';

export default function WeightTracker() {

    const [entries, setEntries] = useState([])

    // function addNewEntry(entry){
    //     let tempEntries = [entry, ...entries];
    //     setEntries(tempEntries);
    // }
    async function getWeights(){
        let weights = await axios.get('http://127.0.0.1:8000/bodyweights/4/')
        weights.data.sort(function(a,b){
            return new Date(b.date) - new Date(a.date);
        })
        setEntries(weights.data)
    }
    useEffect(()=>{
        getWeights()
    }, [])

    return (
        <div>
            <DisplayWeightEntries parentEntries={entries} />
            <AddWeightEntry getWeights = {getWeights}/>
            <WeightChartTracker parentEntries={entries} />
        </div>
    );

}