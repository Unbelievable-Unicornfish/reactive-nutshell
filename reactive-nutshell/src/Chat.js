import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"


export default props => {
    console.log(props, "props")
    return (
        <div className="card" style={{ width: `18rem` }}>
            <div className="card-body">
                <p className="card-text">{props.message.message}</p>
                <button>Edit</button>
            </div>
        </div>
    )
}
