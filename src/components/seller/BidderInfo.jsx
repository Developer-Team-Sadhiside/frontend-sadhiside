import React from 'react';
import '../../assets/styles/BidderInfo.css';
import { users } from '../../assets/dumps/users';
import { products } from '../../assets/dumps/products';

const BidderInfo = () => {
return (
<div>
  <div className='container me-4'>
    <div className='row justifty-content-center'>
      <div className='col-lg-8'>
        <div className='row justify-content-center'>
          <div className='col-sm'>
            <img src='/svg/fi_arrow-left.svg' alt='' className='back' />
          </div>
          <div className='col-lg-9'>
            <div className='mt-4'>
              <div className='card_profile'>
                <img className='bidder-info' src={users[0].profilePicture} />
                <div className='col-lg-10'>
                  <div className='text_penjual fw-bold mt-3'>Nama Pembeli</div>
                  <div className='text_kota ms-3'>Kota</div>
                </div>
              </div>
            </div>
            <p className='fw-bold my-3'>Daftar Produkmu yang Ditawar</p>
            <div className='bidder_produk mt-4'>
              <div className='row justify-content-start'>
                <div className='col-2'>
                  <img src={products[1].image} className='produk-img' />
                </div>
                <div className='col-5'>
                  <h6 className='text-bidder'>Penawaran produk</h6>
                  <div className='desc-produk'>
                    <h6>Jam Tangan Casio</h6>
                    <h6 className='fw-semibold'>Rp 250.000</h6>
                    <h6>Ditawar Rp 200.000</h6>
                  </div>
                </div>
                <div className=' text-end col-5'>
                  <div className='card-body p-0 px-3'>
                    <h6 className='text-date'>
                      20 Apr, 14:04
                    </h6>
                  </div>
                </div>
              </div>
              <div className='justify-content-end d-flex py-3 px-3 gap-3 bb-line'>
                <button className='btn-tolak' id='preview'>
                  Tolak
                </button>
                <button className='btn-simpan' id='preview' data-bs-toggle='modal' data-bs-target='#exampleModal'>
                  Terima
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
);
};

export default BidderInfo;
