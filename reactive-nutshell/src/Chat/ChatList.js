import React, { Component } from 'react'
import Chat from "./Chat"
import Database from "../APIManager"
import Moment from "moment";

export default class ChatList extends Component {
    state = {
        messages: [],
        chatToEdit: {}
    }
    //"fetching" the state from the database 
    componentDidMount() {
        Database.gettingAllMessagesFromDatabase()
            .then(messages => {
                this.setState({ messages: messages })
            }
            )
    }

    //checking to see if the state has changed
    messageFormInput = (event) => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        // console.log("stateToChange", stateToChange)
        this.setState(stateToChange)
        // console.log("this.state", this.state)
    }
    getUserNameByUserId = (userId) => {
        Database.getUserNameByUserId(userId)
            .then(userName => this.setState({ messages: userName }))
    }
    addMessage = (event) => {
        event.preventDefault()
        let timestamp = Moment().format("YYYY-MM-DD hh:mm:ss a");
        const newObject = {
            message: this.state.Chat,
            creationDateTime: timestamp,
            userId: Database.getIdOfCurrentUser()
        }
        Database.addMessage(newObject)
            .then(ChatList => {
                this.setState({ messages: ChatList })
            })
    }

    handleEdit = (event) => {
        event.preventDefault()
        fetch(`http://localhost:5002/messages/${this.state.chatToEdit.id}`, {
            method: "PUT",
            body: JSON.stringify(this.state.chatToEdit),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(() => { return fetch("http://localhost:5002/messages?_expand=user") })
            .then(a => a.json())
            .then(ChatList => {
                this.setState({
                    messages: ChatList
                })
            })
    }

    EditChat = (messageId) => {
        console.log("messageId", messageId)
        // Delete the specified animal from the API
        fetch(`http://localhost:5002/messages/${messageId}`)

            // Once the new array of animals is retrieved, set the state
            .then(a => a.json())
            .then(ChatList => {
                this.setState({
                    chatToEdit: ChatList
                })
            })
    }

    handleFieldChange = (event) => {
        const stateToChange = this.state.chatToEdit
        stateToChange[event.target.id] = event.target.value
        this.setState({ chatToEdit: stateToChange })
    }

    //rendering the form
    render() {
        return (
            <div className="chat">

                <form onSubmit={this.addMessage.bind(this)}>
                    <h1 className="h3 mb-3 font-weight-normal">Chat</h1>
                    <label htmlFor="MessageName">
                        New Message:
                </label>
                    <input onChange={this.messageFormInput} type="text"
                        id="Chat"
                        placeholder="Chat"
                        required="" autoFocus="" />
                    <button type="submit">
                        Submit
                </button>
                </form>

                {
                    this.state.messages.map(message =>
                        <Chat key={message.id} message={message} EditChat={this.EditChat} message={message} />
                    )
                }
                {
                    (
                        <form onSubmit={this.handleEdit.bind(this)}>
                            {/* <h1 className="h3 mb-3 font-weight-normal">Edit Message</h1> */}
                            {/* <label htmlFor="Edit Message">
                            Name:
                        </label> */}
                            <input onChange={this.handleFieldChange} type="text"
                                id="message"
                                placeholder="Edit Message"
                                value={this.state.chatToEdit.message}
                                required="" autoFocus="" />
                            <button type="submit">
                                Update
                        </button>
                        </form>
                    )

                }
                {/* <a name="chat"></a> */}
            </div>
        )
    }
}