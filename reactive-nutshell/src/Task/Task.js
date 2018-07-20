import React from "react"
import { Link } from "react-router-dom"


export default props => {
    // console.log(props, "props")
    return (
        <div className="card" style={{ width: `18rem` }}>
            <div className="card-body" style={{ border: `4px solid black` }}>
                <h5 className="card-title">
                    {props.children}
                </h5>
                <p className="card-text">{props.task.DueDate}</p>
                <button>Edit</button>
                <label>
                    Is completed:
          <input onClick={() => props.completeTask(props.task.id)}
                        name="isCompleted"
                        type="checkbox"
                        // checked={props.task.deleteTask}
                        />
                 </label>
            </div>
        </div>
    )
}