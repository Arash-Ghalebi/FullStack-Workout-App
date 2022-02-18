import axios from 'axios';
import React, { useEffect, useState } from 'react';


const CalendarEntry = (props) => {

    const [text, setText] = useState(0);
    const [date, setDate] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            user: 4,
            text: text,
            date: date
        };
        // props.addNewEntry(newEntry)
        let response = await axios.post('http://127.0.0.1:8000/calendar/add/', newEntry);
        // setWeight(response.data)
        // setDate(response.data)
        props.getEntries();
    }




    return ( 
        <form onSubmit={handleSubmit} className='form-grid'>
            <label>Workout</label>
            <input type='text' value={text} onChange={(event) => setText(event.target.value)}/>
            <label>Date</label>
            <input type='date' value={date} onChange={(event) => setDate(event.target.value)}/>
            <button type='submit'>Add</button>
        </form>
     );
}
 
export default CalendarEntry;