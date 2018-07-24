import React from "react"
// import { Link } from "react-router-dom"
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default props => {
    console.log(props, "props")
    return (
        <div>
            <Card body outline color="warning">
                {/* <h5 className="card-title">
                {props.children}
                </h5> */}

                <CardTitle>{props.event.EventName}</CardTitle>
                <CardText>{props.event.EventDate}</CardText>
                <CardText>{props.event.EventLocation}</CardText>
                <a href="#" onClick={() => props.EditEvent(props.event.id)}>Edit</a>
                
                {/* <button>Edit</button> */}

            </Card>
        </div>
    )
}