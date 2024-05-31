import React from 'react';
import './Logo.css';

const Logo = ({ handleClick, w, h }) => {
  return (
    <div
      id='logo-img'
      onClick={handleClick}
      style={{
        width: w,
        height: h,
        cursor: handleClick ? 'pointer' : 'default'
      }}
    >

    </div>
  );
};

export default Logo;
