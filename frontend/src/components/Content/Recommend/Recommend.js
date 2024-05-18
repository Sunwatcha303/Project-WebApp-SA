import React, { useState, useEffect } from 'react';
import './Recommend.css';

const Recommend = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const [name, setName] = useState('Peaky Blinders');
  const [description, setDescription] = useState('Peaky Blinders เป็นเรื่องราวที่ดัดแปลงมาจากบุคคลที่มีตัวตนจริงในอังกฤษช่วงคริสต์ศตวรรษที่ 19 แต่ในชีวิตจริงพวกเขาเป็นแก๊งอันธพาลเล็ก ๆ ในเมืองเบอร์มิงแฮม สมาชิกของกลุ่มส่วนใหญ่เป็นเยาวชนแต่งตัวจัดจ้าน จากคำบอกเล่าของผู้คนบอกว่า ชาวแก๊งบางคนมีแต่กลิ่นเหล้าเหม็นหึ่ง เดินเตร่ไปมาบนถนน ไม่ได้มีอำนาจล้นมือมากขนาดนั้น แต่ ...');
  const [release, setRelease] = useState('2013');
  const [duration, setDuration] = useState('1 hr 23 min');
  const [rate, setRate] = useState('16+');
  const [score, setScore] = useState('8.5');

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
          <div className='btn-recommend' id='play-btn'>Play</div>
          <div className='btn-recommend' id='add-list-btn'>Add list</div>
          <div className='btn-recommend' id='review-btn'>Review</div>
        </div>
      </div>
      <div id='recommend-content-img'>
        
      </div>
    </div>
  );
};

export default Recommend;