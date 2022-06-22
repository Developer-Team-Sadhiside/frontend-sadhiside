import React from 'react'
import Navbar from "../navbar/Navbar"
import './bid.css'

const Bid = () => {
return (
<div>
    <Navbar />
    <div className="container me-4">
        <div className="row justifty-content-center">
            <div className="col-lg-8">
                <div className='row justify-content-center'>
                    <div className='col-sm'>
                        <img src='/svg/fi_arrow-left.svg' alt='' className="back"
                            style={{ marginTop:"30px", marginLeft:"80px", cursor:"pointer" }} />
                    </div>
                    <div className="col-lg-9">
                        <div className='mt-4'>
                            <div className='card_profile' style={{ borderRadius:"16px" }}>
                                <img src='/images/profile-buyer.png'
                                    style={{ marginTop:"15px", marginLeft:"20px" }} />
                                <div className='col-lg-10'>
                                    <div className='text_penjual fw-bold mt-3'>Nama Pembeli</div>
                                    <div className='text_penjual'>Kota</div>
                                </div>
                            </div>
                        </div>
                        <p className='fw-bold my-3'>Daftar Produkmu yang Ditawar</p>
                        <div className=' ms-1 mt-4'>
                            <div className='row justify-content-start'>
                                <div className='col-2'>
                                    <img src='/images/product-buyer.png' style={{ width: "48px" ,height: "48px" }}
                                        className='ms-5' />
                                </div>
                                <div className='col-6'>
                                    <h6 className='text ms-3' style={{ fontSize:"10px", color:"#8A8A8A" }}>Penawaran
                                        produk </h6>
                                    <div className='card-body'>
                                        <h6 className=''>Jam Tangan Casio</h6>
                                        <h6 className='fw-semibold'>Rp 250.000</h6>
                                        <h6 className=''>Ditawar Rp 200.000</h6>
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className='card-body p-0 px-3'>
                                        <h6 className='text-end mt-1 mr-4' style={{ fontSize:"10px", color:"#8A8A8A" }}>
                                            20 Apr, 14:04 </h6>
                                    </div>
                                </div>
                            </div>
                            <div className='justify-content-end d-flex py-3 px-3 gap-3'>
                                <button className='btn btn-tolak' id='preview'>
                                    Tolak
                                </button>
                                <button className='btn btn-simpan' id='preview' data-bs-toggle="modal"
                                    data-bs-target="#exampleModal">
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
)
}

export default Bid
