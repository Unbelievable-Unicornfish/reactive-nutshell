import React from "react"
import { Link } from "react-router-dom"

export default props => {
    console.log(props, "props")
    return (
        <div className="card" style={{width: `18rem`}}>
            <div className="card-body">
                <h5 className="card-title">
                </h5>

                <p className="card-text">{props.children}</p>
                <button>Edit</button>
                {/* <a href="#" onClick={() => props.deleteEvent(props.event.id)}>Delete</a> */}

                {/* <a href="#" onClick={() => props.addEvent(props.event.id)}>Add</a> */}
            </div>
        </div>
    )
}