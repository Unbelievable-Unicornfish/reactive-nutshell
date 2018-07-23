import React, { Component } from "react"
import './App.css';
import FriendList from "./Friends/FriendList"
import "./index.css"
import ArticleList from './Articles/ArticleList';

import Login from "./Login"
import ChatList from "./Chat/ChatList"

import TaskList from "./Task/TaskList"
import Header from "./Articles/Header"






class App extends Component {
  render() {
    return (
    //  <FriendList/>
    // );

  
    

    <React.Fragment>
      <Header/>
      {/* <Login /> */}
      <ArticleList />
      <ChatList />
      <TaskList />
      <FriendList/>
    </React.Fragment>
    )
  }
}

export default App;
