import React, { Component } from "react"
import './App.css';

import ArticleList from './Articles/ArticleList';

import Login from "./Login"
import ChatList from "./Chat/ChatList"

import TaskList from "./Task/TaskList"





class App extends Component {
  render() {
    return (

  
    

    <React.Fragment>
      <Login />
      <ArticleList />
      <ChatList />
      <TaskList />
    </React.Fragment>
    )
  }
}

export default App;
