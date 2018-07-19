import React, { Component } from 'react';
import './App.css';
import Login from "./Login"
import ChatList from "./Chat/ChatList"
import TaskList from "./Task/TaskList"
import EditChat from './Chat/EditChat';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Login />
        {/* <TaskList /> */}
        <ChatList />
        {/* <EditChat /> */}
      </React.Fragment>
    )
  }
}

export default App;
