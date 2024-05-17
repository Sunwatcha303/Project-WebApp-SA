import React, { useState, useEffect } from 'react';
import './Home.css';

import Header from "../../components/Header/Header";
import Recommend from "../../components/Content/Recommend"
import Categories from "../../components/Content/Categories"

const Home = () => {

  return (
    <div id='home-container'>
      <Header />
      <Recommend />
      <Categories />
    </div>
  );
};

export default Home;