import React, { Component } from "react";
import "./App.css";
import Events from "./Events";
import Login from "./Login";
import ChatList from "./ChatList";
import TaskList from "./TaskList";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Events.js />
        <ChatList />
        <TaskList />
      </React.Fragment>
    );
  }
}

export default App;
