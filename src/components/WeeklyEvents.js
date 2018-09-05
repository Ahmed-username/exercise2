import React from "react"
import Events from "./Events"

class WeeklyEvents extends React.Component{
    constructor() {
        super();
      this.state={calendarEvents:[]}
      this.mergeEvents=this.mergeEvents.bind(this)
      }

      componentDidMount(){
        fetch(`https://assessments.bzzhr.net/calendar/?before=${this.props.currentWeek[6].year}-${this.props.currentWeek[6].month}-${this.props.currentWeek[6].day}T23%3A59%3A59&format=json&overlaps=1&since=${this.props.currentWeek[0].year}-${this.props.currentWeek[0].month}-${this.props.currentWeek[0].day}T00%3A00%3A00`)
        .then(response=>response.json())
        .then(json=>this.mergeEvents(json.results,this.props.currentWeek))
        .catch(err=>console.log(err))
      }

      mergeEvents(events, currentWeek){
          currentWeek.forEach(day=>{
             let calendarDate=`${day.year}-${day.month}-${day.day}`
              for(let i=0;i<events.length;i++){
                  let eventDate= events[i].start.substr(0,10)
                  if(eventDate==calendarDate){
                    day.events.push(events[i])
                    events.splice(i,1)
                    i--;
                  }
              }
          })
          console.log("the weeeek", currentWeek)
          this.setState({calendarEvents:currentWeek})

      }
    render(){
       

        return(
            <div>
                {this.state.calendarEvents.map(day=>{
                    return(
                        <div key={day.name} >
                        <p>{day.name} - {day.day}/{day.month}/{day.year}</p>
                        <Events events={day.events} />
                      </div>
                    )
                })}
            </div>
        )
    }
}


export default WeeklyEvents;