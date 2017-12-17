import React, { Component } from 'react';

import Post from '../components/Post';

class PostsList extends Component {
  render() {
    return (
      <div>
        <h2>Selected feed</h2>
        <ul className="postsList">
          <li>
            <Post title="Post #1" />
          </li>
          <li>
            <Post title="Post #2" />
          </li>
          <li>
            <Post title="Post #3" />
          </li>
        </ul>
      </div>
    );
  }
}

export default PostsList;
