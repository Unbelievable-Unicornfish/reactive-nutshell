import React, { Component } from "react";
//import {link} from "react-router-dom";

export default props => {
// console.log(props.article.id)
    return (
      <div className="card" style={{width: `18rem`}}>
        <div className="card-body" style={{ border: `4px solid black` }}>
         <a target= "_blank" href={`http://${props.article.URL}`}> <h3 className="card-title">
            {props.article.title} </h3> </a>
          <p className="card-summary">{props.article.summary}</p>
          <button onClick={() => props.deleteArticle(props.article.id)}>Delete</button>
        </div>
      </div>
    )
   }