import React from "react"

class Events extends React.Component{
    render(){
        return(
            <div>
                {this.props.events.map(event=>{

                    return(
                        <div key={event.id} className={event.category=="black"? "white":""} style={{backgroundColor:event.category}}>
                        <h4 className="title">{event.label}</h4>
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