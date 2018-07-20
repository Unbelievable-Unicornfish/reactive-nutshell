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
                <a href="#" onClick={() => props.EditEvent(props.event.id)}>Edit</a>
                {/* <button>Edit</button> */}

            </div>
        </div>
    )
}