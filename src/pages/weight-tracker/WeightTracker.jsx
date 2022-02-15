import React, { useState } from 'react';

export default function WeightTracker() {

    const [entries, setEntries] = useState([])

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Entry Number</th>
                        <th>Weight</th>
                        <th>Date</th>
                    </tr>
                </thead>
            </table>
        </div>
    );

}