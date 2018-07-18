import React, { Component } from "react";
import event from "./Event";
import ApiManager from "./ApiManager"

export default class EventList extends Component {
  state = {
    events: []
  };

  addEvent = eventId => {
    // Delete the specified event from the API
    ApiManager.deleteItem("events", eventId)
      .then(() => {
        return ApiManager.getAll("events")
      })      
      .then(eventList => {
        this.setState({
          events: eventList
        });
      });
  };

  componentDidMount() {
    ApiManager.getAll("events")
    .then(events => this.setState({ events: events }))
  }

  render() {
    return (
      <React.Fragment>
        <ul>
          {this.state.events.map(event => (
            <event
              key={event.id}
              event={event}
              addEvent={this.addEvent}
            />
          ))}
        </ul>
      </React.Fragment>
    );
  }
}
