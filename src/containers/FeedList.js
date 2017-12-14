import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import UrlBar from '../components/UrlBar';

class FeedList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feedUrl: '',
    };

    this.updateFeedUrl = this.updateFeedUrl.bind(this);
  }
  updateFeedUrl(url) {
    this.setState({ feedUrl: url });
  }
  addFeedUrl(ev) {
    ev.preventDefault();
    console.log(JSON.stringify(this.state.feedUrl));
  }
  render() {
    return (
      <Col xs={6} md={4}>
        <Row>
          <UrlBar onUrlChange={this.updateFeedUrl} />
        </Row>
        <Row>
          Feed list
        </Row>
      </Col>
    );
  }
}

export default FeedList;
