import React from "react"
import { Link } from "react-router-dom"


export default props => {
    return (
        <div className="card" style={{ width: `18rem` }}>
            <div className="card-body">
                <h5 className="card-title">
                    {props.children}
                </h5>
                <p className="card-text">{props.task.dueDate}</p>
                {/* {
                    <Link className="card-link"
                        to={{
                            pathname: `/tasks/${props.task.id}`,
                            state: { task: props.task }
                        }}>
                        Details
                    </Link>
                } */}
                <a href="#" onClick={() => props.deleteTask(props.task.id)}>Delete</a>
            </div>
        </div>
    )
}