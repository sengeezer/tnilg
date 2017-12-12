import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <h1>Glint Coding Challenge</h1>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              <Row>
                Search
              </Row>
              <Row>
                Feed list
              </Row>
            </Col>
            <Col xs={12} md={8}>Main pane</Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
