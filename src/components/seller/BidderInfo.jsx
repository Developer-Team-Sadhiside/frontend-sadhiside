import React from 'react';
import '../../assets/styles/BidderInfo.css';
import { users } from '../../assets/dumps/users';
import { products } from '../../assets/dumps/products';

const BidderInfo = () => {
return (
<div>
  <div className='container me-4'>
    <div className='row g-0'>
      <div className='col-sm-1 offset-1'>
        <img src='/svg/fi_arrow-left.svg' alt='' className='back' />
      </div>
      <div className='col-sm-6'>
        <div className='mt-4'>
          <div className='card_profile'>
            <img className='bidder-info' src={users[0].profilePicture} />
            <div className='col-md-11'>
              <div className='text_penjual fw-bold mt-3'>Nama Pembeli</div>
              <div className='text_kota ms-3'>Kota</div>
            </div>
          </div>
        </div>
        <p className='title-bidder fw-bold mt-3'>Daftar Produkmu yang Ditawar</p>
        <div className='bidder_produk mt-4'>
          <div className='row g-0'>
            <div className='col-sm-2'>
              <img src={products[1].image} className='produk-img' />
            </div>
            <div className='col-sm-8'>
              <h6 className='text-bidder'>Penawaran produk</h6>
              <div className='desc-produk'>
                <h6>Jam Tangan Casio</h6>
                <h6 className='fw-semibold'>Rp 250.000</h6>
                <h6>Ditawar Rp 200.000</h6>
              </div>
            </div>
            <div className='col-sm-2'>
              <h6 className='text-date text-end'>20 Apr, 14:04</h6>
            </div>
          </div>
          <div className='row g-0'>
            <div className='justify-content-end d-inline-flex py-3'>
              <button className='btn-tolak' id='preview'>
                Tolak
              </button>
              <button className='btn-simpan ms-3' id='preview' data-bs-toggle='modal' data-bs-target='#exampleModal'>
                Terima
              </button>
            </div>
          </div>
        </div>
        <div className='bb-line'></div>
      </div>
      <div className='col-sm-2'></div>
    </div>
  </div>
</div>
);
};

export default BidderInfo;