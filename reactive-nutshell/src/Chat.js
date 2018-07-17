import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"


export default props => {
    return (
        <div className="card" style={{ width: `18rem` }}>
            <div className="card-body">
                <h5 className="card-title">
                    {props.children}
                </h5>
                <p className="card-text">{props.message.message}</p>
                {/* {
                    <Link to={`/messages/${props.messages.id}`}
                        className="card-link">
                        Details
                    </Link>
                }
                <a href="./messages" onClick={() => props.checkOutMessages(props.message.id)}>Delete</a> */}
            </div>
        </div>
    )
}
