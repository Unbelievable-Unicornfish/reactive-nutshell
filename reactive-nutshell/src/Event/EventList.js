import React, { Component } from "react"
import Event from "./Event"
import Database from "../APIManager"
import { FormControl, FormGroup } from "../../node_modules/react-bootstrap";

export default class EventList extends Component {
  state = {
    events: [],
    eventToEdit: {}
  }

  // GET EVENTS FROM DB
componentDidMount() {
  Database.getAllEvents()
    .then(events => {
        this.setState({ events: events })
    }
 )
}
// CHECK STATE
eventFormInput = (event) => {
  const stateToChange = {}
  stateToChange[event.target.id] = event.target.value
  this.setState(stateToChange)
}
getUserNameByUserId = (userId) => {
    Database.getUserNameByUserId(userId)
        .then(userName => this.setState({ events: userName }))
}

// ADD A NEW EVENT TO THE DATABASE
  addEvent = (event) => {
    event.preventDefault()
    const newObject = { 
        EventName: this.state.EventName, 
        EventDate: this.state.EventDate, 
        EventLocation: this.state.EventLocation,
        userId: Database.getIdOfCurrentUser()
     }
     Database.addEvent(newObject)
     .then(EventList => {
         this.setState({ events: EventList})
     })
    // console.log("newObject", newObject)
    // fetch("http://localhost:5002/events", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(newObject)
    // })
    // .then(() => {
    //   return fetch("http://localhost:5002/events")
    // })
    // .then(a => a.json())
    // .then(eventList => {
    //   this.setState({
    //     event: eventList
    //   })
    // })
  }

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
// UPDATE STATE UPON EDIT
//   handleFieldChange = evt => {
//     const stateToChange = {};
//     stateToChange[evt.target.id] = evt.target.value;
//     this.setState(stateToChange);
//   };

//   handleUpdate = e => {
//     e.preventDefault();

//     const updatedEvent = {EventName: this.state.EventName, EventDate: this.state.EventDate, EventLocation: this.state.EventLocation}
//     Database.updateItem("event", this.props.event.id, updatedEvent)
//     .then(() => {
//       this.props.history.push("/event");
//     })
//   };
 
    
handleFieldChange = (event) => {
    const stateToChange = this.state.eventToEdit
    stateToChange[event.target.id] = event.target.value
    this.setState({ eventToEdit: stateToChange })
}

  
// BUILD EVENT FORM    
      render() {
        return (
            <div className="event">
                <form onSubmit={this.addEvent.bind(this)}>
                    <h1 id="event-title" className="h3 mb-3 font-weight-normal">Event List</h1>
                    <label htmlFor="EventName">
                        Event Name:
                </label>
                <FormGroup>
                    <FormControl onChange={this.eventFormInput} type="text"
                        id="EventName"
                        placeholder="Event Name"
                        required="" autoFocus="" />
                        </FormGroup>
                    <label htmlFor="EventDate">
                        Event Date:
                </label>
                <FormGroup>
                    <FormControl onChange={this.eventFormInput} type="text"
                        id="EventDate"
                        placeholder="Event Date"
                        required="" />
                        </FormGroup>
                        <label htmlFor="EventLocation">
                        Event Location:
                </label>
                <FormGroup>
                    <FormControl onChange={this.eventFormInput} type="text"
                        id="EventLocation"
                        placeholder="Event Location"
                        required="" autoFocus="" />
                        </FormGroup>
                    <button type="submit">
                        Add Event
                    </button>
                    {/* <button type="update">
                        Update Event
                    </button> */}
                </form>
                {
                    this.state.events.map(event =>
                        <Event key={event.id} event={event} EditEvent={this.EditEvent}
                        event={event} />
                    )
                }
                {
                    (
                        <form onSubmit={this.handleEdit.bind(this)}>
                            <input onChange={this.handleFieldChange} type="text"
                                id="EventName"
                                placeholder="Edit Event Name"
                                value={this.state.eventToEdit.EventName}
                                required="" autoFocus="" />

                                <input onChange={this.handleFieldChange} type="text"
                                id="EventDate"
                                placeholder="Edit Event Date"
                                value={this.state.eventToEdit.EventDate}
                                required="" autoFocus="" />

                                <input onChange={this.handleFieldChange} type="text"
                                id="EventLocation"
                                placeholder="Edit Event Location"
                                value={this.state.eventToEdit.EventLocation}
                                required="" autoFocus="" />
                                
                            <button type="submit">
                                Update
                        </button>
                        </form>
                    )
                }

                
            </div>
        )
      }

    }