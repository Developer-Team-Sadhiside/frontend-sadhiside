import React from 'react';
import '../index.css';
import Banner from '../components/banner/Banner';
import { IMAGES } from '../data/data.js';
import Navbar from '../components/navbar/Navbar';
import FilterButton from '../components/filter-button/FilterButton';
import CardCollection from '../components/card/Card';

const LandingPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner images={IMAGES} slidesToShow={5} />
      <FilterButton />
      <CardCollection />
    </div>
  );
};

export default LandingPage;
