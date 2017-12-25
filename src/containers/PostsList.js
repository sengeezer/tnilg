import React, { Component } from 'react';
import { connect } from 'react-redux';

import Post from '../components/Post';

class PostsList extends Component {
  renderPost(postData) {
    const title = postData.data.title;
    const date = postData.data.created_utc;
    const content = postData.data.selftext;

    return (
      <Post key={title} title={title} date={date} content={content} />
    );
  }
  render() {
    return (
      <div>
        <h2>Selected feed title</h2>
        {this.props.feed.map(this.renderPost)}

        <Post title="Post #1" date="14/12/17" content="Lorem ipsum dolor sit amet" />
      </div>
    );
  }
}

function mapStateToProps({ feed }) {
  return { feed };
}

// export default PostsList;
export default connect(mapStateToProps, null)(PostsList);
