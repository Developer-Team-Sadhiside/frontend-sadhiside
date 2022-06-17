import React from 'react'
import '../index.css'
import Banner from '../components/banner/Banner'
import { IMAGES } from "../data/data.js";


const LandingPage = () => {
  return (
    <div>
        <Banner images={IMAGES} slidesToShow={5} />
    </div>
  )
}

export default LandingPage
