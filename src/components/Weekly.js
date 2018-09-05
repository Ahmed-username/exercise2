import React from "react"
import WeeklyEvents from "./WeeklyEvents"
var calendarJS = require("calendar-js");

class Weekly extends React.Component{




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
            altMonth++;
            if(altMonth<10)
                altMonth=Number(`0${altMonth}`)
            altYear = currentDate.getFullYear();
          }
    
          for (let i = 0; i < currentWeek.length; i++) {
            let tempDay = {};
            if (currentWeek[i] == 0) {
                if(altWeek[i]<10)
                 altWeek[i]=`0${altWeek[i]}`
              tempDay = {
                day: altWeek[i],
                month: altMonth,
                year: altYear,
                events:[]
              };
              fullWeek.push(tempDay);
            } else {
                let day= currentWeek[i];
                let month = currentDate.getMonth();
                month++;
                if(day<10)
                    day=`0${day}`
                 if(month<10)
                    month=`0${month}`
              tempDay = {
                day,
                month,
                year: currentDate.getFullYear(),
                events:[]
              };
              fullWeek.push(tempDay);
            }
          }
        } 
        else { //week on same month
       for (let i = 0; i < currentWeek.length; i++){

        let day= currentWeek[i];
        let month = currentDate.getMonth();
        month++
        if(day<10)
            day=`0${day}`
         if(month<10)
            month=`0${month}`
         
        let tempDay = {
          day,
          month,
          year: currentDate.getFullYear(),
          events:[]
        };
        fullWeek.push(tempDay);
       }
      }
      fullWeek.forEach((day,i)=>{
          if(i===0)
            day.name="Mon"
        else if(i===1)
            day.name="Tues"
        else if(i===2)
            day.name="Wed"
        else if(i===3)
           day.name="Thur"
        else if(i===4)
            day.name="Fri"
        else if(i===5)
            day.name="Sat"
        else if(i===6)
            day.name="Sun"
      })
      
      return fullWeek;
      }

    render(){
        return(
            <div>
                <WeeklyEvents currentWeek={this.getCurrentWeek()}  />
            </div>
        )
    }
}


export default Weekly;