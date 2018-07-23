import React, { Component } from "react"
import './App.css';
import FriendList from "./Friends/FriendList"

import ArticleList from './Articles/ArticleList';

import Login from "./Login"
import ChatList from "./Chat/ChatList"

import TaskList from "./Task/TaskList"






class App extends Component {
  render() {
    return (
    //  <FriendList/>
    // );

  
    

    <React.Fragment>
      <ArticleList />
      <ChatList />
      <TaskList />
      <FriendList/>
    </React.Fragment>
    )
  }
}

export default App;
