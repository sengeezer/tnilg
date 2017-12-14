import React, { Component } from 'react';
import { Form, FormGroup, InputGroup, Button, FormControl } from 'react-bootstrap';
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
                <Button>Submit</Button>
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
};

export default UrlBar;
