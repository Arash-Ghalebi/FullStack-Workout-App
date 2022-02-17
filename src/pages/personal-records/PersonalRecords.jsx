import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PersonalRecordsDisplay from '../../Components/PersonalRecordsDisplay/PersonalRecordsDisplay';
import PersonalRecordsEntry from '../../Components/PersonalRecordsEntry/PersonalRecordsEntry';
import PersonalRecordsTracker from '../../Components/PersonalRecordsTracker/PersonalRecordsTracker';

export default function WeightTracker() {

    
    const [allSquat, setAllSquats] = useState([])
    const [allBench, setAllBenches] = useState([])
    const [allBent, setAllBents] = useState([])
    const [allOverhead, setAllOverheads] = useState([])
    const [squat, setSquat] = useState([])
    const [bench, setBench] = useState([])
    const [bent, setBent] = useState([])
    const [overhead, setOverhead] = useState([])

    async function getSquatRecords(){
        let records = await axios.get('http://127.0.0.1:8000/exerciseactivities/lifting-records/all-squat/4/');
        setAllSquats(records.data);
    }
    async function getBenchRecords(){
        let records = await axios.get('http://127.0.0.1:8000/exerciseactivities/lifting-records/all-bench/4/');
        setAllBenches(records.data);
    }
    async function getBentRecords(){
        let records = await axios.get('http://127.0.0.1:8000/exerciseactivities/lifting-records/all-bent/4/');
        setAllBents(records.data);
    }
    async function getOverheadRecords(){
        let records = await axios.get('http://127.0.0.1:8000/exerciseactivities/lifting-records/all-overhead/4/');
        setAllOverheads(records.data);
    }
    async function getSquat(){
        let records = await axios.get('http://127.0.0.1:8000/exerciseactivities/lifting-records/get_squat_record/4/');
        setSquat(records.data);
    }
    async function getBench(){
        let records = await axios.get('http://127.0.0.1:8000/exerciseactivities/lifting-records/get_bench_record/4/');
        setBench(records.data);
    }
    async function getBent(){
        let records = await axios.get('http://127.0.0.1:8000/exerciseactivities/lifting-records/get_bent_record/4/');
        setBent(records.data);
    }
    async function getOverhead(){
        let records = await axios.get('http://127.0.0.1:8000/exerciseactivities/lifting-records/get_overhead_record/4/');
        setOverhead(records.data);
    }
    useEffect(()=>{
        getSquatRecords()
        getBenchRecords()
        getBentRecords()
        getOverheadRecords()
        getSquat()
        getBench()
        getBent()
        getOverhead()
    }, [])

    return (
        <div>
            <PersonalRecordsDisplay parentSquat={squat} parentBench={bench} parentBent={bent} parentOverhead={overhead} />
            <PersonalRecordsEntry  getSquat={getSquat} getBench={getBench} getBent={getBent} getOverhead={getOverhead} getAllSquats={getSquatRecords} getAllBenches={getBenchRecords} getAllBents={getBentRecords} getAllOverheads={getOverheadRecords}/>
            <PersonalRecordsTracker parentAllSquats={allSquat} parentAllBenches={allBench} parentAllBents={allBent} parentAllOverheads={allOverhead}/>
        </div>
    );

}