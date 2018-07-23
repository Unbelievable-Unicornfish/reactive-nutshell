import React, { Component } from "react"
import './App.css';
import ArticleList from './Articles/ArticleList'
import Login from "./Login"
import ChatList from "./Chat/ChatList"
import TaskList from "./Task/TaskList"
import FriendList from "./Friends/FriendList"
import EventList from "./Event/EventList"


class App extends Component {
  render() {
    return (

    <React.Fragment>
      <Login />
      {/* <ArticleList />
      <ChatList />
      <TaskList /> */}
      <EventList />
      <FriendList/>
    </React.Fragment>
    )
  }
}

export default App;
