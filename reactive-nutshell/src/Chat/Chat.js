import React from "react"

export default props => {
    console.log(props, "props")
    return (
        <div className="card" style={{ width: `18rem` }}>
            <div className="card-body" style={{ border: `4px solid black` }}>
                <p className="card-text">{props.message.message}</p>
                <p className="card-text">{props.message.creationDateTime}</p>
                <p className="card-text">{props.message.user.userName}</p>
                <a href="#" onClick={() => props.EditChat(props.message.id)}>Edit</a>
            </div>
        </div>
    )
}
