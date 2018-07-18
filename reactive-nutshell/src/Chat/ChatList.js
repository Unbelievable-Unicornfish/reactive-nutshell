import React, { Component } from 'react'
import Chat from "./Chat"
import Database from "../APIManager"

export default class ChatList extends Component {
    state = {
        messages: []
    }
//"fetching" the state from the database 
    componentDidMount() {
        Database.gettingAllMessagesFromDatabase()
            .then(messages => this.setState({ messages: messages }))
    }

//checking to see if the state has changed
    messageFormInput = (event) => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        // console.log("stateToChange", stateToChange)
        this.setState(stateToChange)
        // console.log("this.state", this.state)
    }

    addMessage(event) {
        event.preventDefault()
        const newObject = { message: this.state.Chat, creationDateTime: this.state.Chat}
        console.log("this.state", this.state.message)
        console.log("newObject", newObject)
        fetch("http://localhost:5002/messages", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newObject)
        })
    }
    //rendering the form
    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.addMessage.bind(this)}>
                    <h1 className="h3 mb-3 font-weight-normal">Chat</h1>
                    <label htmlFor="MessageName">
                        Message:
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
                        <Chat key={message.id} message={message} deleteMessage={this.deleteMessage}>
                            {message.name}
                        </Chat>)
                }
            </React.Fragment>
        )
    }
}