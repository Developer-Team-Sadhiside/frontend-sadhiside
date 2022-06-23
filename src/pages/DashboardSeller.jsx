import React from 'react'
import SellerProfile from '../components/seller-dashboard/SellerProfile'
import Navbar from '../components/navbar/Navbar'
import CategorySeller from '../components/seller-dashboard/CategorySeller';

const DashboardSeller = () => {
  return (
    <>
    <Navbar/>
    <SellerProfile/>
    <CategorySeller/>
    </>
  )
}

export default DashboardSeller
