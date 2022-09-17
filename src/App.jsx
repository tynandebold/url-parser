import React, { useEffect, useState } from 'react';
import * as urlParse from 'url-parse/dist/url-parse';
import Form from './components/Form';

import './index.css';

export default function App() {
  const [message, setMessage] = useState('');
  const [result, setResult] = useState(null);
  const [url, setUrl] = useState('');

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  useEffect(() => {
    if (url.length === 0) {
      setResult(null);
      setMessage('');

      return;
    }

    const valid = /^(ftp|http|https):\/\/[^ "]+$/.test(url);

    if (!valid) {
      setMessage('Please enter a valid URL.');
      setResult(null);

      return;
    }

    setMessage('');
    setResult(urlParse(url, true));
  }, [url]);

  return (
    <>
      <h1>URL Parser</h1>
      <h3>
        Working on parsing a URL? Using something like{' '}
        <a
          href="https://www.npmjs.com/package/url-parse"
          tabIndex={-1}
          target="_blank"
          rel="noopener noreferrer"
        >
          this
        </a>{' '}
        or{' '}
        <a
          href="https://nodejs.org/docs/latest/api/url.html#url_url_parse_urlstring_parsequerystring_slashesdenotehost"
          tabIndex={-1}
          target="_blank"
          rel="noopener noreferrer"
        >
          this
        </a>
        ? Sometimes it&apos;s nice to see what&apos;s returned in your URL
        object. Use this simple tool to do just that.
      </h3>
      <Form url={url} updateInput={handleChange} />
      {message}
      {result ? <pre>{JSON.stringify(result, undefined, 2)}</pre> : null}
    </>
  );
}
