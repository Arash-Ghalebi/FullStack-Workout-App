import axios from 'axios';
import React, { useState } from 'react';


const PersonalRecordsEntry = (props) => {

    const [squat_amount, setSquat] = useState(0);
    const [bench_amount, setBench] = useState(0);
    const [bent_amount, setBent] = useState(0);
    const [overhead_amount, setOverhead] = useState(0);
    const [date, setDate] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        let newEntries = [
            {
                user: 4,
                exercise: 6,
                weight_amount: squat_amount,
                weight_date: date
            },
            {
                user: 4,
                exercise: 3,
                weight_amount: bench_amount,
                weight_date: date
            },
            {
                user: 4,
                exercise: 4,
                weight_amount: bent_amount,
                weight_date: date
            },
            {
                user: 4,
                exercise: 5,
                weight_amount: overhead_amount,
                weight_date: date
            }
        ];

        let response = await axios.post('http://127.0.0.1:8000/exerciseactivities/lifting-records/add/', newEntries)

        props.getAllSquats();
        props.getAllBenches();
        props.getAllBents();
        props.getAllOverheads();
        props.getSquat();
        props.getBench();
        props.getBent();
        props.getOverhead();
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Squat </label>
            <input type='number' value={squat_amount} onChange={(event) => setSquat(parseFloat(event.target.value))}/>
            <label> Bench </label>
            <input type='number' value={bench_amount} onChange={(event) => setBench(parseFloat(event.target.value))}/>
            <label> Bent-Over Row </label>
            <input type='number' value={bent_amount} onChange={(event) => setBent(parseFloat(event.target.value))}/>
            <label> Overhead </label>
            <input type='number' value={overhead_amount} onChange={(event) => setOverhead(parseFloat(event.target.value))}/>
            <label> Date </label>
            <input type='date' value={date} onChange={(event) => setDate(event.target.value)}/>
            <button type='submit'>Add</button>
        </form>
     );
}
 
export default PersonalRecordsEntry;