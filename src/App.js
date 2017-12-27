import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import Main from './components/Main';
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
              <BrowserRouter>
                <div>
                  <Switch>
                    <Route path="/feeds/:id" component={PostsList} />
                    <Route path="/" component={Main} />
                  </Switch>
                </div>
              </BrowserRouter>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
