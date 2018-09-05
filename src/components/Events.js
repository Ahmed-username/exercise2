import React from "react"

class Events extends React.Component{
    render(){
        return(
            <div>
                {this.props.events.map(event=>{
                    return(
                        <div key={event.id} style={{backgroundColor:event.category}}>
                        <h3>{event.label}</h3>
                        <p>Start: {event.start}</p>
                        <p>End: {event.end}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}


export default Events;