import React, { useState } from 'react';
import DisplayWeightEntries from '../../Components/DisplayWeightEntries/DisplayWeightEntries';

export default function WeightTracker() {

    const [entries, setEntries] = useState([])

    return (
        <div>
            <DisplayWeightEntries parentEntries={entries} />
        </div>
    );

}