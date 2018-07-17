import React, { Component } from "react"

export default props => {
  return (
    <div className="card">
      <div className="card-body">
        <a href="{}"><h4 className="card-title">{props.newsItem.title}</h4></a>
        <p className="card-summary">{props.newsItem.description}</p>
        <button>Add As Post</button>
      </div>
    </div>
  )
}