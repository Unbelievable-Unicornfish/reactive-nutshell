import React, { Component } from "react"
import Article from "./Article"
import Database from "../APIManager"
import { Row, Col } from "react-bootstrap"

export default class ArticleList extends Component {
    state = {
        articles: [],
        newObject: {}
    }
    //gets the id of the input field and re-sets the state
    articleFormInput = (event) => {
        const stateToChange = this.state.newObject
        stateToChange[event.target.id] = event.target.value
        this.setState({ newObject: stateToChange })
    }

    // addArticle = (event) => {
    //     event.preventDefault()
    //     const newObject = { title: this.state.title, summary: this.state.summary, URL: this.state.URL }
    //     fetch("http://localhost:5002/articles", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(this.state.newObject)
    //     })
    //         // When add is finished, retrieve the new list of articles
    //         .then(() => {
    //             // Remember you HAVE TO return this fetch to the subsequenet `then()`
    //             return fetch("http://localhost:5002/articles")
    //         })
    //         // Once the new array of articles is retrieved, set the state
    //         .then(a => a.json())
 
     addArticle = (event) => {
        event.preventDefault()
        const newObject = { title: this.state.newObject.title, summary: this.state.newObject.summary, URL: this.state.newObject.URL }
        Database.addArticle(newObject) 
            .then(newArticle => this.setState({ articles: newArticle }))
            console.log(newObject)
    }
    deleteArticle = (articleId) => {
        Database.deleteArticle(articleId) 
            .then(deletedArticle => this.setState({ articles: deletedArticle }))
    }

    
componentDidMount() {
    Database.getAllArticles()
        .then(articles => this.setState({ articles: articles }))
}

render() {
    return (
        <section id="articleSection">
            <form onSubmit={this.addArticle.bind(this)}>
                <h1 className="h3 mb-3 font-weight-normal">Add New Article</h1>
                <label htmlFor="Article Name">
                    Article Name:
                </label>
                <input onChange={this.articleFormInput} type="text"
                    id="title"
                    placeholder="Article Name"
                    value={this.state.newObject.title}
                    required="" autoFocus="" />
                <label htmlFor="Summary">
                    Summary Of Article:
                </label>
                <input onChange={this.articleFormInput} type="text"
                    id="summary"
                    placeholder="Summary Of Article"
                    value={this.state.newObject.summary}
                    required="" />
                <label htmlFor="URL">
                    Article URL:
                </label>
                <input onChange={this.articleFormInput} type="text"
                    id="URL"
                    placeholder="URL"
                    value={this.state.newObject.URL}
                    required="" autoFocus="" />
                <button type="submit">
                    Add Article
                </button>
            </form>
            <Row className="show-grid">
                <Col xs={10} md={3} style={{ border: `4px solid black` }}>
                    {
                        this.state.articles.map(article =>
                            <Article key={article.id}
                                article={article}
                                deleteArticle={this.deleteArticle}
                                addArticle={this.addArticle}>
                                {article.title}
                            </Article>
                        )
                    }
                </Col>
            </Row>
        </section>
    )
}
}