import React from "react"

export default props => {
    // console.log(props, "props")
    return (
        <div className="card" style={{ width: `18rem` }}>
            <div className="card-body">
                <p className="card-text">{props.message.message}</p>
                <a href="#" onClick={() => props.EditChat(props.message.id)}>Edit</a>
            </div>
        </div>
    )
}
