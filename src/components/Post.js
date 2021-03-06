import React from 'react';
import { Panel } from 'react-bootstrap';

export default (props) => {
  return (
    <Panel header={<h4><strong>{props.title}</strong><span> - {props.date}</span></h4>}>
      <div dangerouslySetInnerHTML={{__html: props.content}} />
    </Panel>
  );
};
