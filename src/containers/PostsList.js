import React, { Component } from 'react';
import { connect } from 'react-redux';

import Post from '../components/Post';

class PostsList extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    // this.props.fetchPost(id);
  }
  renderPost(postData) {
    const allPosts = postData.items;

    const postsToRender = allPosts.map((aPost) => {
      const title = aPost.title;
      const date = new Date(aPost.published).toLocaleDateString();
      const content = aPost.content.content;
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

function mapStateToProps({ feed, feeds }, ownProps) {
  return { feed, feeds: feeds[ownProps.match.params.id] };
}

export default connect(mapStateToProps, null)(PostsList);
