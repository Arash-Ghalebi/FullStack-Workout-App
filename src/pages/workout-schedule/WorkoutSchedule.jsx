import React, { useEffect, useState } from 'react';
import CalendarEntry from '../../Components/CalendarEntry/CalendarEntry';
import Calendar from '../../Components/Calendar/Calendar';
import axios from 'axios';


export default class WorkoutSchedule extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newEntries: []
    };
    // this.getEntries = this.getEntries.bind(this)
  }

  async componentDidMount(){
  //   await axios.get('http://127.0.0.1:8000/calendar/all/4/').then(function (response) {
  //     let tempData = response.data.map(entry => {
  //         return entry.text, entry.date;
  //     });
  //     console.log(tempData)
  //     this.setState(tempData);
  //     }).catch(function (error) {
  //   console.error(error);
  // });
    this.getEntries();
  }
  

  getEntries = () => {
    
    axios.get('http://127.0.0.1:8000/calendar/all/4/')
      .then(response => this.setState({ newEntries: response.data }));
    // console.log(this.state.newEntries)
  //     let tempData = response.data.map(entry => {
  //         return [entry.text, entry.date];
  //     });
  //     console.log(tempData)
  //     this.setState({newEntries: tempData})
  //     console.log()
  //     }).catch(function (error) {
  //   console.error(error);
  // });
    
  }



    render() {
        return (
          <div>
            <CalendarEntry getEntries={this.getEntries}/>
            <Calendar parentEntries={this.state.newEntries}/>
          </div>
          
        )
    }
}