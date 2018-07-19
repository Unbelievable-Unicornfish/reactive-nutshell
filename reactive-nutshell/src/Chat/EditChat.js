// import React, { Component } from "react";
// import APIManager from "../APIManager"

// export default class EditChat extends Component {
//   // Set initial state
//   state = {
//     // name: this.props.animal.name
//     message: this.props.Chat
//   };

//   // Update state whenever an input field is edited
//   handleFieldChange = event => {
//     const stateToChange = {};
//     stateToChange[event.target.id] = event.target.value;
//     this.setState(stateToChange);
//   };

//   handleUpdate = e => {
//     e.preventDefault();
//     const updatedChat = {name: this.state.name, breed: this.state.breed}
//     APIManager.updateChat("messages", this.props.animal.id, updatedChat)
//     .then(() => {
//       this.props.history.push("/messages");
//     })
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleUpdate}>
//         {/* <h1 className="h3 mb-3 font-weight-normal">Edit Chat</h1> */}
//         <label htmlFor="inputName">Edit</label>
//         <input
//           value={this.state.name}
//           onChange={this.handleFieldChange}
//           type="text"
//           id="name"
//           placeholder="Name"
//           required=""
//           autoFocus=""
//         />
//         <button type="submit">Update</button>
//       </form>
//     );
//   }
// }