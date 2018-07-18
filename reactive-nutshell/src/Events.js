import React from "react"
import { Link } from "react-router-dom"

export default props => {
    return (
        <div className="card" style={{width: `18rem`}}>
            <div className="card-body">
                <h5 className="card-title">
                    {/* {props.events.name} */}
                </h5>s
                <p className="card-text">{props.event.breed}</p>
                {
                    <Link className="card-link"
                    to={{
                        pathname: `/events/${props.event.id}`,
                        state: { event: props.event }
                    }}>
                        Details
                    </Link>
                }

                {
                    <Link className="card-link"
                    to={{
                        pathname: `/events/${props.event.id}/edit`,
                        state: { event: props.event }
                    }}>
                        Edit
                    </Link>
                }
                <a href="#" onClick={() => props.addEvent(props.event.id)}>Delete</a>
            </div>
        </div>
    )
}