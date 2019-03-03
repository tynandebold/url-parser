import './index.css';
import React, { useState } from 'react';
import Form from './components/Form/';

export default function App() {
  const [message, setMessage] = useState('');
  const [result, setResult] = useState('');
  const [url, setUrl] = useState('');

  function handleChange(e) {
    setUrl(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (url.length === 0) return;

    const valid = /^(ftp|http|https):\/\/[^ "]+$/.test(url);
    if (!valid) {
      setMessage('Please enter a valid URL.');
      return;
    }

    parseUrl();
  }

  function parseUrl() {
    const parse = require('url-parse');
    const parsedUrl = parse(url, true);
    setMessage('');
    setResult(parsedUrl);
  }

  let output;
  if (result) {
    output = <pre>{JSON.stringify(result, undefined, 2)}</pre>;
  }
  return (
    <React.Fragment>
      <h1>URL Parser</h1>
      <h3>
        Working on parsing a URL? Using something like{' '}
        <a
          href="https://www.npmjs.com/package/url-parse"
          target="_blank"
          rel="noopener noreferrer"
        >
          this
        </a>{' '}
        or{' '}
        <a
          href="https://nodejs.org/docs/latest/api/url.html#url_url_parse_urlstring_parsequerystring_slashesdenotehost"
          target="_blank"
          rel="noopener noreferrer"
        >
          this
        </a>
        ? Sometimes it's nice to see what's returned in your URL object.
      </h3>
      <Form submitForm={handleSubmit} url={url} updateInput={handleChange} />
      {message}
      {output}
    </React.Fragment>
  );
}
