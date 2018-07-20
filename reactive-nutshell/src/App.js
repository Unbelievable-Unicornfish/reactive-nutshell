import React, { Component } from "react"
import './App.css';
import ArticleList from './Articles/ArticleList';
import Login from "./Login"
import ChatList from "./Chat/ChatList"

import TaskList from "./Task/TaskList"
<<<<<<< HEAD
import EventList from "./Event/EventList"
=======




>>>>>>> master

class App extends Component {
  render() {
    return (
    
<<<<<<< HEAD
      <React.Fragment>
     <Login />
     <ChatList />
     <TaskList />
     <EventList />
     <ArticleList />
     </React.Fragment>
=======

    <React.Fragment>
      <Login />
      <ArticleList />
      <ChatList />
      <TaskList />
    </React.Fragment>
>>>>>>> master
    )
  }
}

export default App;
