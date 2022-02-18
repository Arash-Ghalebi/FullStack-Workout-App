import React from 'react'
import './Calendar.css';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

export default class Calendar extends React.Component {

  constructor(props) {
    super(props);
 
  }

  async componentDidMount(){
    
      this.filterEntries();
    }

  filterEntries(){
    let tempChartData = this.props.parentEntries.map(entry => ({ title: entry.text, date: entry.date }));
    return tempChartData
  }
  

  render() {
    return (
    <div>
        
        
        {console.log(this.filterEntries())}
        <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={this.filterEntries()}
        />
    </div>
    )
  }
}