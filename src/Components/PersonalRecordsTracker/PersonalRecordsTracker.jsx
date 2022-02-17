import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';

  
  export const squatOptions = {
    title: "Squating Performance",
    curveType: "function",
    legend: { position: "bottom" },
    series: {
        0: { color: '#990099' }
    }
};
  export const benchOptions = {
    title: "Benching Performance",
    curveType: "function",
    legend: { position: "bottom" },
    series: {
        0: { color: '#3366CC' }
    }
};
  export const bentOptions = {
    title: "Bent-Over Row Performance",
    curveType: "function",
    legend: { position: "bottom" },
    series: {
        0: { color: '#109618' }
    }
};
  export const overheadOptions = {
    title: "Overhead Press Performance",
    curveType: "function",
    legend: { position: "bottom" },
    series: {
        0: { color: '#DC3912' }
    }
};

const PersonalRecordsTracker = (props) => {

    // const data = [
    //     // ["Year", "Squat", "Bench", "Bent-Over Row", "Overhead"],
    //     // [props.parentAllSquats.weight_date, props.parentAllSquats.weight_amount],
    //     // [props.parentAllBenches],
    //     // [props.parentAllBents],
    //     // [props.parentAllOverhead],
    //     ["Date", "Squat", "Expenses"],
    //     ["2004", 1000, 500],
    //     ["2005", 1170, 400],
    //     ["2006", 660, 1120],
    //     ["2007", 1030, 540],
    // ];

    const [squatData, setSquatData] = useState([]);
    const [benchData, setBenchData] = useState([]);
    const [bentData, setBentData] = useState([]);
    const [overheadData, setOverheadData] = useState([]);

    useEffect(() => {
        let tempSquatData = props.parentAllSquats.map(entry => {
            return [entry.weight_date, entry.weight_amount];
        });
        setSquatData(tempSquatData)
        let tempBenchData = props.parentAllBenches.map(entry => {
            return [entry.weight_date, entry.weight_amount];
        });
        setBenchData(tempBenchData)
        let tempBentData = props.parentAllBents.map(entry => {
            return [entry.weight_date, entry.weight_amount];
        });
        setBentData(tempBentData)
        let tempOverheadData = props.parentAllOverheads.map(entry => {
            return [entry.weight_date, entry.weight_amount];
        });
        setOverheadData(tempOverheadData)
    }, [props.parentAllSquats, props.parentAllBenches, props.parentAllBents, props.parentAllOverheads])
      
      
        return (
        <div>
          <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={[["Date", "Squat PR Overtime"], ...squatData]}
            options={squatOptions}
          />
          <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={[["Date", "Bench PR Overtime"], ...benchData]}
            options={benchOptions}
          />
          <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={[["Date", "Bent-Over Row PR Overtime"], ...bentData]}
            options={bentOptions}
          />
          <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={[["Date", "Overhead Press PR Overtime"], ...overheadData]}
            options={overheadOptions}
            color="#DC3912"
          />
        </div>
        );
      }
 
export default PersonalRecordsTracker;