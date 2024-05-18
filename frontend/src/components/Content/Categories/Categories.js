import React, { useState, useEffect } from 'react';
import './Categories.css';

const Recommend = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  return (
    <div id='categories-container'>
      <div className='categories-content'>Top 10</div>
      <div className='categories-content'>Top 10</div>
      <div className='categories-content'>Top 10</div>
      <div className='categories-content'>Top 10</div>
      <div className='categories-content'>Top 10</div>
    </div>
  );
};

export default Recommend;