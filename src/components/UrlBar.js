import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UrlBar extends Component {
  constructor(props) {
    super(props);

    this.state = { feedUrl: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(ev) {
    const feedUrl = ev.target.value;
    this.setState({ feedUrl });
    this.props.onUrlChange(feedUrl);
  }
  render() {
    return (
      <div className="urlBar">
        <input value={this.state.feedUrl} onChange={this.handleInputChange} />
      </div>
    );
  }
}

UrlBar.propTypes = {
  onUrlChange: PropTypes.func,
};

export default UrlBar;
