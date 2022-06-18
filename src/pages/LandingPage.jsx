import React from 'react'
import '../index.css'
import Banner from '../components/banner/Banner'
import { IMAGES } from "../data/data.js";
import Navbar  from '../components/navbar/navbar';

const LandingPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner images={IMAGES} slidesToShow={5} />
    </div>
  )
}

export default LandingPage
