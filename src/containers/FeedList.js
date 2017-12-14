import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import UrlBar from '../components/UrlBar';

class FeedList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feedUrl: '',
    };
  }
  feedUrlChanged(url) {
    this.setState({ feedUrl: url });
    console.log('feed url changed');
  }
  render() {
    return (
      <Col xs={6} md={4}>
        <Row>
          <UrlBar onUrlChange={this.feedUrlChanged} />
        </Row>
        <Row>
          Feed list
        </Row>
      </Col>
    );
  }
}

export default FeedList;
