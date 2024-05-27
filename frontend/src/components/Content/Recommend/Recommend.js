import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './Recommend.css';

const Recommend = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [release, setRelease] = useState('');
  const [duration, setDuration] = useState('');
  const [cover_url, setCover] = useState('');
  const [rate, setRate] = useState('');
  const [score, setScore] = useState('8.5');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:5001/movie/all', {
          method: 'GET',
          headers: {
            'x-access-token': token
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData[0]);
        setName(jsonData[0].name);
        setDescription(jsonData[0].description);
        const releaseDate = new Date(jsonData[0].release_date);
        const releaseDateString = releaseDate.toISOString().slice(0, 10);
  
        // Convert duration to "hours" and "minutes"
        const hours = Math.floor(jsonData[0].duration / 60);
        const minutes = jsonData[0].duration % 60;
  
        // Format the duration as "X hr Y min"
        const durationString = `${hours} hr ${minutes} min`;
        setRelease(releaseDateString);
        setDuration(durationString);
        setCover(jsonData[0].cover_url);
        setRate(jsonData[0].rate_age);
        setScore(jsonData[0].score);
      } catch (error) {
        setError(error);
      }
    };
    
    fetchData();
  }, []);

  const handlePlay = (event) => {
    event.preventDefault();

    navigate('/watch?m=' + data.hash_id);
  }

  return (
    <div id='recommend-content'>
      <div id='recommend-content-desc'>
        <div id='recommend-content-desc-name'>
          {name}
        </div>
        <div id='recommend-content-desc-info'>
          <div>
            {description}
          </div>
          <div id='recommend-content-desc-rate'>
            <div className='rate-recommend'>{release}</div>
            <div className='rate-recommend'>{duration}</div>
            <div className='rate-recommend'>{rate}</div>
            <div className='rate-recommend'>{score}</div>
          </div>
        </div>
        <div id='recommend-content-desc-btn'>
          <div className='btn-recommend' id='play-btn' onClick={e => handlePlay(e)}>
            <div id='play-icon'></div>
            <div id='play-label'>Play</div>
          </div>
          <div className='btn-recommend' id='add-list-btn'>
            <div id='add-list-icon'></div>
            <div id='add-list-label'>Add list</div>
          </div>
          <div className='btn-recommend' id='review-btn'>
            <div id='review-label'>Review</div>
          </div>
        </div>
      </div>
      <div id='recommend-content-img'>
        <img src={cover_url}></img>
      </div>
    </div>
  );
};

export default Recommend;