import React from 'react';
import { Glyphicon, Panel, Button } from 'react-bootstrap';

export default (props) => {
  return (
    <li key={props.id}>
      <Panel>
        {props.url}
        <Button bsStyle="danger"><Glyphicon glyph="remove" /></Button>
      </Panel>
    </li>
  );
};
