import React, { Component } from "react"
import './App.css';

import ArticleList from './Articles/ArticleList';

import Login from "./Login"
import ChatList from "./ChatList"
import TaskList from "./TaskList"


class App extends Component {
  render() {
    return (

  
    

    <React.Fragment>
      <ArticleList />
      <ChatList />
      <TaskList />
    </React.Fragment>
    )

  }
}

export default App;
