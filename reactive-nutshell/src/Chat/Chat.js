import React from "react"
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default props => {
    console.log(props, "props")
    return (
        <div>
            <Card body outline color="secondary">
                <CardTitle>{props.message.message}</CardTitle>
                <CardText>{props.message.creationDateTime}</CardText>
                <p className="card-text">{props.message.user.userName}</p>
                <a href="#" onClick={() => props.EditChat(props.message.id)}>Edit</a>
            </Card>
        </div>
    )
}
