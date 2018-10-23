import './style.css';
import React from 'react';

export default ({url, submitForm, updateInput}) => (
  <form onSubmit={submitForm}>
    <label>Enter a URL</label>
    <div className="input-wrapper">
      <input
        className="searchbox"
        onChange={updateInput}
        type="text"
        value={url} />
      <input className="submit-btn" type="submit" value="Submit" />
    </div>
  </form>
);
