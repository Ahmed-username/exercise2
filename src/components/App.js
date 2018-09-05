import React from 'react';
var calendarJS = require("calendar-js")

class App extends React.Component {
  constructor(){
    super();
    this.state={events:[]}
  }

  componentDidMount(){


    // fetch(`https://assessments.bzzhr.net/calendar/?format=json`)
    // .then(response=>response.json())
    // .then(json=>console.log(json.results))
    // .catch(err=>console.log(err))
  }

  render(){
    let currentDate = new Date();
    // console.log(" date",currentDate)
     console.log("getDay",currentDate.getDay())
    // console.log("getDate",currentDate.getDate())
    let myCalendar= calendarJS().of(currentDate.getFullYear(),currentDate.getMonth()).calendar;
    console.log(myCalendar)
    let currentWeek=[];
    myCalendar.forEach(week=>{
     if(week.indexOf(currentDate.getDate()) >-1)
      currentWeek=week;
    })
    console.log("current week", currentWeek)
   

    return (
      <div>
        React App
      </div>
    )
  }
}

export default App;
