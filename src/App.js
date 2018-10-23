import './index.css';
import React from 'react';

import Form from './components/Form/';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
      result: '',
      url: '',
    }
  }

  handleChange = (e) => {
    this.setState({url: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.url.length === 0) {
      return;
    }

    const valid = /^(ftp|http|https):\/\/[^ "]+$/.test(this.state.url);
    if (!valid) {
      this.setState({ message: 'Please enter a valid URL.' });
      return;
    }

    this.parseUrl();
  }

  parseUrl() {
    const parse = require('url-parse');
    const url = parse(this.state.url, true);
    this.setState({
      message: '',
      result: url
    });
  }

  render() {
    let output;
    if (this.state.result) {
      output = <pre>{JSON.stringify(this.state.result, undefined, 2)}</pre>;
    }

    return (
      <React.Fragment>
        <h1>URL Parser</h1>
        <h3>Working on parsing a URL? Using something like <a href="https://www.npmjs.com/package/url-parse" target="_blank">this</a> or <a href="https://nodejs.org/docs/latest/api/url.html#url_url_parse_urlstring_parsequerystring_slashesdenotehost" target="_blank">this</a>? Sometimes it's nice to see what's returned in your URL object.</h3>
        <Form
          submitForm={this.handleSubmit}
          url={this.state.url}
          updateInput={this.handleChange} />
        {this.state.message}
        {output}
      </React.Fragment>
    )
  }
}

export default App;
