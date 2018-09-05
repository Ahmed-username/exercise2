import React from "react";
import {Switch, Route} from "react-router-dom";
import Ex1 from "./Ex1"
import Ex2 from "./Ex2"
import Header from "./Header"
import Home from "./Home"
var calendarJS = require("calendar-js");
let currentDate = new Date();

class App extends React.Component {
  constructor() {
    super();
    this.state = { events: [] };
  }

  componentDidMount() {
    // fetch(`https://assessments.bzzhr.net/calendar/?format=json`)
    // .then(response=>response.json())
    // .then(json=>console.log(json.results))
    // .catch(err=>console.log(err))
  }

  getCurrentWeek() {
    let currentDate = new Date();
    let myCalendar = calendarJS().of(currentDate.getFullYear(),currentDate.getMonth()).calendar;
    let currentWeek = [];
    myCalendar.forEach(week => {
      if (week.indexOf(currentDate.getDate()) > -1) currentWeek = week;
    });
    let fullWeek = [];

    if (currentWeek.indexOf(0) > -1) {
      let altMonth = -1;
      let altYear = -1;
      let altWeek = [];
      if (currentWeek.indexOf(0) > currentWeek.indexOf(currentDate.getDate())) {
        if (currentDate.getMonth() >= 11) {
          altWeek = calendarJS().of(currentDate.getFullYear() + 1, 0).calendar[0];
          altMonth = 0;
          altYear = currentDate.getFullYear() + 1;
        }
        altWeek = calendarJS().of(currentDate.getFullYear(),currentDate.getMonth() + 1).calendar[0];
        altMonth = currentDate.getMonth() + 1;
        altYear = currentDate.getFullYear();
      } else {
        if (currentDate.getMonth() <= 0) {
          altWeek = calendarJS().of(currentDate.getFullYear() - 1, 11).calendar;
          altWeek = altWeek[altWeek.length - 1];
          altMonth = 11;
          altYear = currentDate.getFullYear() - 1;
        }
        altWeek = calendarJS().of(
          currentDate.getFullYear(),
          currentDate.getMonth() - 1
        ).calendar;
        altWeek = altWeek[altWeek.length - 1];
        altMonth = currentDate.getMonth() - 1;
        altYear = currentDate.getFullYear();
      }

      for (let i = 0; i < currentWeek.length; i++) {
        let tempDay = {};
        if (currentWeek[i] == 0) {
          tempDay = {
            day: altWeek[i],
            month: altMonth,
            year: altYear
          };
          fullWeek.push(tempDay);
        } else {
          tempDay = {
            day: currentWeek[i],
            month: currentDate.getMonth(),
            year: currentDate.getFullYear()
          };
          fullWeek.push(tempDay);
        }
      }
    } 
    else { //week on same month
   for (let i = 0; i < currentWeek.length; i++){
     
    let tempDay = {
      day: currentWeek[i],
      month: currentDate.getMonth(),
      year: currentDate.getFullYear()
    };
    fullWeek.push(tempDay);
   }
  }

    console.log("full week", fullWeek);
  return fullWeek;
  }

  render() {

    

    return <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="ex1" component={Ex1} />
        <Route path="ex2" component={Ex2} />
      </Switch>
    </div>;
  }
}

export default App;
