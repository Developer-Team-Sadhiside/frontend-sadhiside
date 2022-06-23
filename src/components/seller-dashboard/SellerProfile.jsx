import React from 'react'
import { Link } from 'react-router-dom'
import "./SellerProfile.css"


const DashboardSeller = () => {
return (
<div>
  <div className="container">
    <div className="row justifty-content-center">
      <div className="col-lg-10">
        <div className="daftar_jual fw-bold mt-5">Daftar Jual Saya</div>
        <div className="rounded-5">
          <div className='profile_seller'>
            <img src="/images/profile-seller.png" className='profile_image' alt="" />
            <div className="col-lg-10">
              <div className="text_penjual fw-bold mt-3">Nama Penjual</div>
              <div className="text_penjual">Kota</div>
              <div className="profile_btn">
								<Link to="/profile">
                	<button type="submit" className='btn_edit'>Edit</button>
								</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
)
}

export default DashboardSeller
