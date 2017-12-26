import React, { Component } from 'react';
import { connect } from 'react-redux';

import Post from '../components/Post';

class PostsList extends Component {
  renderPost(postData) {
    const allPosts = postData.data.children;

    const postsToRender = allPosts.map((aPost) => {
      const title = aPost.data.title;
      const date = new Date(aPost.data.created_utc * 1000).toLocaleDateString();
      const content = aPost.data.selftext;
      return <Post key={title} title={title} date={date} content={content} />;
    });

    return postsToRender;
  }
  render() {
    return (
      <div>
        <h2>Selected feed title</h2>
        {this.props.feed.map(this.renderPost)}
      </div>
    );
  }
}

function mapStateToProps({ feed }) {
  return { feed };
}

export default connect(mapStateToProps, null)(PostsList);
