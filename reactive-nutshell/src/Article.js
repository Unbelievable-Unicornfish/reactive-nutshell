import React, { Component } from "react"

export default props => {
    return (
      <div className="card" style={{width: `18rem`}}>
        <div className="card-body">
         <a> <h5 className="card-title">
            {props.article.title} </h5> </a>
          <p className="card-summary">{props.article.summary}</p>
          <button onClick={() => props.deleteArticle(props.article.id)}>Delete</button>
        </div>
      </div>
    )
   }