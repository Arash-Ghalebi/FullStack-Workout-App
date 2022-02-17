import axios from 'axios';
import React, { useEffect, useState } from 'react';


const AddWeightEntry = (props) => {

    const [weight, setWeight] = useState(0);
    const [date, setDate] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            user: 4,
            weight: weight,
            date: date
        };
        // props.addNewEntry(newEntry)
        let response = await axios.post('http://127.0.0.1:8000/bodyweights/add/', newEntry);
        // setWeight(response.data)
        // setDate(response.data)
        props.getWeights();
    }




    return ( 
        <form onSubmit={handleSubmit}>
            <label>Weight</label>
            <input type='number' value={weight} onChange={(event) => setWeight(parseFloat(event.target.value))}/>
            <label>Date</label>
            <input type='date' value={date} onChange={(event) => setDate(event.target.value)}/>
            <button type='submit'>Add</button>
        </form>
     );
}
 
export default AddWeightEntry;