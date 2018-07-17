import React, { Component } from "react"
import Article from "./Article"
import Database from "./APIManager"
import { Row, Col } from "react-bootstrap"

export default class ArticleList extends Component {
    state = {
        articles: []

    }

    deleteArticle = (articleId) => {
        // Delete the specified article
        fetch(`http://localhost:5002/articles/${articleId}`, {
            method: "DELETE"
        })
            // When DELETE is finished, retrieve the new list of animals
            .then(() => {
                // Remember you HAVE TO return this fetch to the subsequenet `then()`
                return fetch("http://localhost:5002/articles")
            })
            // Once the new array of animals is retrieved, set the state
            .then(a => a.json())
            .then(ArticleList => {
                this.setState({
                    articles: ArticleList
                })
            })
    }
    componentDidMount() {
        Database.getAllArticles()
            .then(articles => this.setState({ articles: articles }))
    }

    render() {
        return (
            <section id="articleSection">
            Articles
                <Row className="show-grid">
                    <Col xs={10} md={3} style={{ border: `4px solid black` }}>
                        {
                this.state.articles.map(article =>
                            <Article key={article.id}
                                article={article}
                                deleteArticle={this.deleteArticle}
                            />
                        )
                        }
            </Col>
            </Row>
            </section>
        )
    }
}