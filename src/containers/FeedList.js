import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'react-bootstrap';

import UrlBar from '../components/UrlBar';
import Feed from '../components/Feed';

import { fetchFeed } from '../actions';
import { addFeed, selectFeed, removeFeed } from '../actions/feeds';

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
    // URL example: 'https://www.reddit.com/r/reactjs.json'

    this.props.addFeed(url);

    this.props.fetchFeed(url);
  }
  deleteFeedUrl() {
    const { id } = this.props.match.params;
    this.props.removeFeed(id, () => {
      this.props.history.push('/');
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
          <ul className="feedList">
            {
              this.props.feeds.map((feed) => {
                return (
                  <Feed key={feed.id} url={feed.url} />
                );
              })
            }
          </ul>
        </Row>
      </Col>
    );
  }
}

function mapStateToProps({ feeds }) {
  return { feeds };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchFeed, addFeed, selectFeed, removeFeed,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedList);
