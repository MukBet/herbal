import React from 'react';
import './runLine.css'; // Стили для бегущей строки

const runLine = ({ text, link }) => {
  return (
    <div className="ticker-wrapper">
      <div className="ticker-content">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      </div>
    </div>
  );
};

export default runLine;
