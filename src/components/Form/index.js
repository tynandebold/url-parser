import './style.css';
import React from 'react';

export default ({ updateInput, url }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="input-wrapper">
        <input
          className="searchBox"
          onChange={updateInput}
          placeholder="Enter a URL"
          type="text"
          value={url}
        />
      </div>
    </form>
  );
};
