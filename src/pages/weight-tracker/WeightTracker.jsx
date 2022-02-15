import React, { useState } from 'react';
import DisplayWeightEntries from '../../Components/DisplayWeightEntries/DisplayWeightEntries';
import AddWeightEntry from '../../Components/AddWeightEntry/AddWeightEntry';

export default function WeightTracker() {

    const [entries, setEntries] = useState([])

    function addNewEntry(entry){
        let tempEntries = [entry, ...entries];
        setEntries(tempEntries);
    }

    return (
        <div>
            <DisplayWeightEntries parentEntries={entries} />
            <AddWeightEntry addNewEntry={addNewEntry}/>
        </div>
    );

}