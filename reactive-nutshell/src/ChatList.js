import React, { Component } from 'react'
import Chat from "./Chat"

export default class ChatList extends Component {
    state = {
        messages: []
    }

    // componentDidMount() {
    //     fetch("http://localhost:5002/messages")
    //         .then(e => e.json())
    //         .then(messages => this.setState({ messages: messages }))
    // }
    

    messageFormInput = (event) => {
        const stateToChange = {}
            stateToChange[event.target.id] = event.target.value
            console.log("stateToChange", stateToChange)
            this.setState(stateToChange)
            console.log("this.state", this.state)
    }

    addMessage (event){
        event.preventDefault()
        const newObject = {name: this.state.name, dueDate: this.state.dueDate}
        fetch("http://localhost:5002/messages", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newObject)
        })
    }

    checkOutMessage = (messageId) => {
        // Delete the specified chat from the API
        fetch(`http://localhost:5002/messages/${messageId}`, {
            method: "DELETE"
        })
            // When DELETE is finished, retrieve the new list of chat
            .then(() => {
                // Remember you HAVE TO return this fetch to the subsequenet `then()`
                return fetch("http://localhost:5002/messages")
            })
            // Once the new array of messages are retrieved, set the state
            .then(a => a.json())
            .then(chatList => {
                this.setState({
                    messages: chatList
                })
            })
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.addMessage.bind(this)}>
                    <h1 className="h3 mb-3 font-weight-normal">Chat</h1>
                    <label htmlFor="MessageName">
                        Message:
                </label>
                    <input onChange={this.messageFormInput} type="text"
                        id="TaskName"
                        placeholder="Chat"
                        required="" autoFocus="" />
                    <button type="submit">
                        Submit
                </button>
                </form>
                {
                    this.state.messages.map(message =>
                        <Chat key={message.id}
                            message={message}
                            checkOutMessage={this.checkOutMessage}
                        />
                    )
                }
            </React.Fragment>
        )
    }
}