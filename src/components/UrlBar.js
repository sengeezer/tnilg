import React, { Component } from 'react';
import { Form, FormGroup, InputGroup, Button, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';

class UrlBar extends Component {
  constructor(props) {
    super(props);

    this.state = { feedUrl: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleInputChange(ev) {
    const feedUrl = ev.target.value;
    this.setState({ feedUrl });
    this.props.onUrlChange(feedUrl);
  }
  handleFormSubmit(ev) {
    ev.preventDefault();
    this.props.onUrlSubmit();
    this.setState({ feedUrl: '' });
  }
  render() {
    return (
      <div className="urlBar">
        <Form horizontal>
          <FormGroup>
            <InputGroup>
              <FormControl
                type="text"
                value={this.state.feedUrl}
                placeholder="Enter URL"
                onChange={this.handleInputChange}
              />
              <InputGroup.Button>
                <Button onClick={this.handleFormSubmit}>Submit</Button>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

UrlBar.propTypes = {
  onUrlChange: PropTypes.func,
  onUrlSubmit: PropTypes.func,
};

export default UrlBar;
