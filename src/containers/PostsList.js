import React, { Component } from 'react';

import Post from '../components/Post';

class PostsList extends Component {
  renderPost(postData) {
    const title = postData.data.title;
    const date = postData.data.created_utc;
    const content = postData.data.selftext;

    return (
      <Post title="{title}" date="{date}" content="{content}" />
    );
  }
  render() {
    return (
      <div>
        <h2>Selected feed title</h2>
        <ul className="postsList">
          <li>
            <Post title="Post #1" date="14/12/17" content="Lorem ipsum dolor sit amet" />
          </li>
          <li>
            <Post title="Post #2" date="15/12/17" content="Lorem ipsum dolor sit amet" />
          </li>
          <li>
            <Post title="Post #3" date="16/12/17" content="Lorem ipsum dolor sit amet" />
          </li>
        </ul>
      </div>
    );
  }
}

export default PostsList;
