import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';

const WeightChartTracker = (props) => {

    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        let tempChartData = props.parentEntries.reverse().map(entry => {
            return [entry.date, entry.weight];
        });
        setChartData(tempChartData)
    }, [props.parentEntries])

    return ( 
        <Chart
        chartType="LineChart"
        data={[["Date", "Weight"], ...chartData]}
        width="100%"
        height="400px"
        legendToggle
        />
     );
}
 
export default WeightChartTracker;