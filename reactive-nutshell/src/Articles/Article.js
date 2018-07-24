import React, { Component } from "react";
//import {link} from "react-router-dom";
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default props => {
// console.log(props.article.id)
    return (
      <div>
        <Card body outline color="success">
        <CardTitle> <a target= "_blank" href={`http://${props.article.URL}`}> <h3 className="card-title">
            {props.article.title} </h3> </a></CardTitle>
          <CardText>{props.article.summary}</CardText>
          <button onClick={() => props.deleteArticle(props.article.id)}>Delete</button>
        </Card>
      </div>
    )
   }