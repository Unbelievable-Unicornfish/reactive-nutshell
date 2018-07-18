import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"


export default props => {
<<<<<<< HEAD
    console.log(props, "props")
    return (
        <div className="card" style={{ width: `18rem` }}>
            <div className="card-body">
                <p className="card-text">{props.message.message}</p>
                <button>Edit</button>
=======
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
>>>>>>> 6b87af95d4ea28fedd18b1248d1e7a7a20706e18
            </div>
        </div>
    )
}
