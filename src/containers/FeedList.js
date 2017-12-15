import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import UrlBar from '../components/UrlBar';

class FeedList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feeds: [],
      feedUrl: '',
    };

    this.updateFeedUrl = this.updateFeedUrl.bind(this);
    this.addFeedUrl = this.addFeedUrl.bind(this);
  }
  updateFeedUrl(url) {
    this.setState({ feedUrl: url });
  }
  addFeedUrl() {
    console.log(this.state.feedUrl);
    const url = this.state.feedUrl;
    const reqOpts = {
      method: 'GET',
      // mode: 'no-cors',
    };
    // 'https://www.reddit.com/r/reactjs.json'
    // For text: result.text()
    // console.log(result);
    fetch(url, reqOpts)
      .then(result => result.json())
      .then((json) => {
        console.log(json.data);
        const feeds = Object.assign([], this.state.feeds);

        feeds.push({ name: url });
        this.setState({
          feeds,
        });
      });
  }
  render() {
    return (
      <Col xs={6} md={4}>
        <Row>
          <UrlBar onUrlChange={this.updateFeedUrl} onUrlSubmit={this.addFeedUrl} />
        </Row>
        <Row>
          <h3>Feed list</h3>
          <ul>
            {
              this.state.feeds.map((feed, i) => {
                return (
                  <li key={`feed${i}`}><a href="#">{feed.name}</a></li>
                );
              })
            }
          </ul>
        </Row>
      </Col>
    );
  }
}

export default FeedList;
