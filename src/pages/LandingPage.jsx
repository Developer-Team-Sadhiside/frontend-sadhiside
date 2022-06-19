import React from 'react';
import '../index.css';
import Banner from '../components/banner/Banner';
import { IMAGES } from '../data/data.js';
import Navbar from '../components/navbar/navbar';
import FilterButton from '../components/filter-button/FilterButton';
import CardCollection from '../components/card/CardCollection';

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
