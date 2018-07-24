import React from "react"
// import { Link } from "react-router-dom"
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default props => {
    // console.log(props, "props")
    return (
        <div>
            <Card body outline color="primary" >
                <CardTitle> {props.children}</CardTitle>
                    
               
                <CardText>{props.task.DueDate}</CardText>
    {/* creating edit button */}
               <a href="#" onClick={() => props.EditTask(props.task.id)}>Edit</a>
                <label>
                    Is completed:
          <input onClick={() => props.completeTask(props.task.id)}
                        name="isCompleted"
                        type="checkbox"
                        // checked={props.task.completeTask}
                        />
                 </label>
           </Card>
        </div>
    )
}