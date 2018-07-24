import React, { Component } from "react";
import Friend from "./Friend";
import APIManager from "../APIManager";
export default class FriendList extends Component {
state = {
    friends: [],
};

componentDidMount() {
    console.log(APIManager.getIdOfCurrentUser())
    APIManager.getFriends(APIManager.getIdOfCurrentUser())
    .then(friends =>{
        console.log(friends)
        this.setState({ friends: friends })
    });
}

deleteFriends = (id) => {
    APIManager.deleteFriends(id)
    // .then(APIManager.getFriends().then(Response=>{this.setState({friends: Response})})) 
    // .then(deletedFriends =>{
    //     console.log(deletedFriends)
    // this.setState({ deletedFriends: deletedFriends })
    // })
}




render() {
    console.log("state", this.state)
    return (
    <React.Fragment>
        <ul>
        <h1 className="h3 mb-3 font-weight-normal">Friend List</h1>

        {this.state.friends.map(friends => (
            <Friend
            key={friends.id}
            friend={friends}
            addFriend={this.addFriend}
            deleteFriends={this.deleteFriends}
            >
            {friends.name}
            
            </Friend>
        ))}
        </ul>
    </React.Fragment>
    );
}
}
