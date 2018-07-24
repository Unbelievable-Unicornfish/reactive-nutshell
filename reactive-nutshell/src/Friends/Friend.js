import React from "react";
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default props => {
  return (
    // <h1 className= "section-title">Friend List</h1>
    <div>
      <Card body outline color="danger">
        <CardTitle>{props.children}</CardTitle>
        <CardText>{props.friend.userName}</CardText>
        <CardText>{props.friend.email}</CardText>
        {/* <button className="removeFriend" onClick={() => props.deleteFriends(props.friends.friendId)}>Remove</button> */}
        <button onClick={() => props.deleteFriends(props.friend.id)}>Delete</button>
      </Card>
    </div>
  );
};
