import React from "react"
import { Link } from "react-router-dom"

export default props => {
    console.log(props, "props")
    return (
        <div className="card" style={{width: `18rem`}}>
            <div className="card-body" style={{ border: `3px solid black` }}>
                {/* <h5 className="card-title">
                {props.children}
                </h5> */}

                <h4 className="card-text">{props.event.EventName}</h4>
                <p className="card-text">{props.event.EventDate}</p>
                <p className="card-text">{props.event.EventLocation}</p>
                <a href="#" onClick={() => props.EditEvent(props.event.id)}>Edit</a>
                
                {/* <button>Edit</button> */}

            </div>
        </div>
    )
}