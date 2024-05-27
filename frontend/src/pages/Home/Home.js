import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import isTokenExpired from '../../utils/utils';
import './Home.css';

import Header from "../../components/Header/Header";
import Recommend from "../../components/Content/Recommend/Recommend"
import Categories from "../../components/Content/Categories/Categories"

const Home = () => {
  const [isSearchHome, setIsSearchHome] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token || isTokenExpired(token)) {
      localStorage.removeItem('token');
      navigate('/signin');
    }
  });

  return (
    <div id='home-container'>
      <Header setIsSearchHome={setIsSearchHome} />
      {!isSearchHome && (
        <>
          <Recommend />
          <Categories />
        </>
      )}
    </div>
  );
};


export default Home;