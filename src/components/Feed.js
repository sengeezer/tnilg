import React from 'react';

export default (props) => {
  return (
    <li key={props.id}><a href="#">{props.url}</a></li>
  );
};
