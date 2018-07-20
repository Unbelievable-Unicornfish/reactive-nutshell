import React from "react";


export default props => {
  return (
    <div className="card" style={{ width: `18rem` }}>
      <div className="card-body">
        <h5 className="card-title">{props.children}</h5>
        <h3 className="friend">{props.friend.userName}</h3>
        <h4 className="friendEmail">{props.friend.email}</h4>
        {/* <button className="removeFriend" onClick={() => props.deleteFriends(props.friends.friendId)}>Remove</button> */}
        <button onClick={() => props.deleteFriends(props.friend.id)}>Delete</button>
      </div>
    </div>
  );
};
