import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import PostsList from './containers/PostsList';
import FeedList from './containers/FeedList';

class App extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <h1>Glint Coding Challenge</h1>
          </Row>
          <Row>
            <FeedList />
            <Col xs={12} md={8}>
              <PostsList />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
