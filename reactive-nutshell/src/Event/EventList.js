import React, { Component } from "react"
import Event from "./Event"
import Database from "../APIManager"

export default class EventList extends Component {
  state = {
    events: [],
    eventToEdit: {}
  }

  // GET EVENTS FROM DB
componentDidMount() {
  Database.getAllEvents()
    .then(events => 
        this.setState({ events: events }))
}
// CHECK STATE
eventFormInput = (event) => {
  const stateToChange = {}
  stateToChange[event.target.id] = event.target.value
  this.setState(stateToChange)
}

// ADD A NEW EVENT TO THE DATABASE
  addEvent(event) {
    event.preventDefault()
    const newObject = { name: this.state.EventName, EventDate: this.state.EventDate, EventLocation: this.state.EventLocation }
    console.log("newObject", newObject)
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
        event: eventList
      })
    })
  }
// UPDATE STATE UPON EDIT
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  handleUpdate = e => {
    e.preventDefault();

    const updatedEvent = {name: this.state.name, eventDate: this.state.eventDate, eventLocation: this.state.eventLocation}
    Database.updateItem("event", this.props.event.id, updatedEvent)
    .then(() => {
      this.props.history.push("/event");
    })
  };
  handleEdit = (event) => {
      event.preventDefault()
      fetch(`http://localhost:5002/events/${this.state.eventToEdit.id}`, {
        method: "PUT",
        body: JSON.stringify(this.state.eventToEdit),
        headers: {
            "Content-Type": "application/json"
        } 
    }).then(() => { return fetch("http://localhost:5002/events") })
        .then(a => a.json())
        .then(EventList => {
            this.setState({
                events: EventList
            })
        })

      }
      EditEvent = (eventId) => {
          console.log("eventId", eventId)
          fetch(`http://localhost:5002/events/${eventId}`)

          .then(a => a.json())
          .then(EventList => {
            this.setState({
                eventToEdit: EventList
            })
     })
}
handleFieldChange = (event) => {
    const stateToChange = this.state.eventToEdit
    stateToChange[event.target.id] = event.target.value
    this.setState({ eventToEdit: stateToChange })
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
                    <button type="update">
                        Update Event
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