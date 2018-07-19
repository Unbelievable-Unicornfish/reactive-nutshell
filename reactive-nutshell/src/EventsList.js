import React, { Component } from "react";
import Event from "./Event";
import Database from "./ApiManager";

export default class EventList extends Component {
  state = {
    events: []
  }

  // GET EVENTS FROM DB
componentDidMount() {
  Database.getAllEvents()
    .then(events => this.setState({ events: events }))
}
// CHECK STATE
eventFormInput = (event) => {
  const stateToChange = {}
  stateToChange[event.target.id] = event.target.value
  this.setState(stageToChange)
}

// ADD A NEW EVENT TO THE DATABASE
  addEvent(event) {
    event.preventDefault()
    const newObject = { name: this.state.EventName, EventDate: this.state.EventDate, EventLocation: this.state.EventLocation }
    console.log(newObject, "new event")
    fetch("http://localhost:5002/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newObject)
    })
    .then(() => {
      return fetch("http://localhost:5002/events")
    })
    .then(a => a.json())
    .then(eventList => {
      this.setState({
        events: eventList
      })
    })
  }
  
// BUILD EVENT FORM    
      render() {
        return (
            <React.Fragment>
                <form onSubmit={this.addEvent.bind(this)}>
                    <h1 className="h3 mb-3 font-weight-normal">Event List</h1>
                    <label htmlFor="EventName">
                        Event Name
                </label>
                    <input onChange={this.eventFormInput} type="text"
                        id="EventName"
                        placeholder="Event Name"
                        required="" autoFocus="" />
                    <label htmlFor="EventDate">
                        Event Date
                </label>
                    <input onChange={this.eventFormInput} type="text"
                        id="EventDate"
                        placeholder="Event Date"
                        required="" />
                        <label htmlFor="EventLocation">
                        Event Location
                </label>
                    <input onChange={this.eventFormInput} type="text"
                        id="EventLocation"
                        placeholder="Event Location"
                        required="" autoFocus="" />
                    <button type="submit">
                        Add Event
                </button>
                </form>
                {
                    this.state.events.map(event =>
                        <Event key={event.id} event={event} EditEvent={this.editEvent}>
                            {event.name}
                        </Event>
                    )
                }
            </React.Fragment>
        )
      }

    }