import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Glyphicon, Panel, Button } from 'react-bootstrap';

export default (props) => {
  return (
    <li key={props.id}>
      <Router>
        <Link to={`/feeds/${props.id}`}>
          <Panel>
            <span className="panelFeedUrl">{props.url}</span>
            <Button bsStyle="danger"><Glyphicon glyph="remove" /></Button>
          </Panel>
        </Link>
      </Router>
    </li>
  );
};
