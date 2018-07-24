import React, { Component } from "react";
import Friend from "./Friend";
import APIManager from "../APIManager";
export default class FriendList extends Component {
state = {
    friends: []
};

deleteFriends = (friendId) => {
    APIManager.deleteFriends(friendId) 
        .then(deletedFriends => this.setState({ friends: deletedFriends }))
}


// deleteFriends = friendId => {
//     // Delete the specified animal from the API
//     APIManager.deleteFriends("friends", friendId)
//     .then(() => {
//         return APIManager.getAll("friends")
//     })      
//     .then(FriendList => {
//         this.setState({
//         friends: FriendList
//         });
//     });
// };



componentDidMount() {
    console.log(APIManager.getIdOfCurrentUser())
APIManager.getFriends(APIManager.getIdOfCurrentUser())
    .then(friends =>{
        console.log(friends)
    this.setState({ friends: friends })
    });
}

// .then((resolvedPromises) => {
//     resolve(resolvedPromises)
// }

render() {
    console.log("state", this.state)
    return (
    <div className="friend">
        <ul>
        <h1 id="friend-title"className="h3 mb-3 font-weight-normal">Friend List</h1>

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
    </div>
    );
}
}
