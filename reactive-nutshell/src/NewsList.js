import React, { Component } from "react"
import { Row, Col } from 'react-bootstrap';
import News from "./News";
import APIManager from "./APIManager"

export default class NewsList extends Component {
  state = {
    newsItems: []
  }

  componentDidMount() {
    APIManager.getHeadlinesFromNewsAPI()
      .then(respNewsItems => {
        console.log(respNewsItems)
        this.setState({
          newsItems: respNewsItems.articles
        })
      })
  }

  render() {
    return (
      <section className="nutshell-module news-headlines">
        <Row className="show-grid">
          <Col xs={12} md={3} style={{
            border: `4px solid black`
          }}>
            {
              this.state.newsItems.map(item => {
                return <News key={item.publishedAt} newsItem={item} />
              })
            }
          </Col>
        </Row>
      </section >
    )
  }
}