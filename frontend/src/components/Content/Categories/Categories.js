import React, { useState, useEffect } from 'react';
import './Categories.css';

import Movies from './Movies/Movies';

const Recommend = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  return (
    <div id='categories-container'>
      <div className='categories-content'>
        <div className='categories-label'>หนังแนะนำสำหรับคุณ</div>
        <Movies query='all'/>
      </div>
      <div className='categories-content'>
        <div className='categories-label'>10 อันดับของวันนี้</div>
        <Movies query='all'/>
      </div>
      <div className='categories-content'>
        <div className='categories-label'>หนังใหม่</div>
        <Movies query='all'/>
      </div>
      <div className='categories-content'>
        <div className='categories-label'>หนังรางวัล</div>
        <Movies query='all'/>
      </div>
    </div>
  );
};

export default Recommend;