import React from 'react';
import { Panel } from 'react-bootstrap';

export default (props) => {
  return (
    <Panel header={<strong>{props.title}</strong>}>
      <p>Post content</p>
    </Panel>
  );
};
