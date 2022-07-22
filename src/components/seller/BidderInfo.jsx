import React, { useState, useEffect } from 'react';
import '../../assets/styles/BidderInfo.css';
import { Link, useParams } from 'react-router-dom';
import { useProductContext } from '../../services/productService';
import ProductMatchModal from '../seller/ProductMatchModal';

const BidderInfo = () => {
  const [offer, setOffer] = useState();

  const params = useParams();
  const productContext = useProductContext();

  async function getProductOffered() {
    const data = await productContext.getDetailProductOffer(params.idBidder);
    setOffer(data.data);
  }

  useEffect(() => {
    getProductOffered();
  }, []);

  var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  const d = new Date(offer?.tanggal_pembelian);
  return (
    <div>
      <div className='container me-4'>
        <div className='row g-0'>
          <div className='col-sm-1 offset-1'>
            <Link to='/'>
              <img src='/svg/fi_arrow-left.svg' alt='' className='back' />
            </Link>
          </div>
          <div className='col-sm-6'>
            <div className='mt-4'>
              <div className='card_profile'>
                <img className='bidder-info' src={offer?.User?.foto} />
                <div className='col-md-11 offer-user-identity'>
                  <div className='text_penjual'>{offer?.User?.nama}</div>
                  <div className='text_kota ms-3'>{offer?.User?.kota}</div>
                </div>
              </div>
            </div>
            <p className='title-bidder mt-3'>Daftar Produkmu yang Ditawar</p>
            <div className='bidder_produk mt-4'>
              <div className='row g-0'>
                <div className='col-sm-2'>
                  <img src={offer?.Product?.gambar[0]} className='produk-img' />
                </div>
                <div className='col-sm-8'>
                  <p className='text-bidder'>Penawaran produk</p>
                  <div className='desc-produk'>
                    <p>{offer?.Product?.nama_produk}</p>
                    <p className='fw-semibold'>Rp {offer?.Product?.harga_produk.toLocaleString('id-ID')}</p>
                    <p>Ditawar Rp {offer?.harga_tawar.toLocaleString('id-ID')}</p>
                  </div>
                </div>
                <div className='col-sm-2'>
                  <h6 className='text-date text-end'>{d.toLocaleDateString('id-ID', options)}</h6>
                </div>
              </div>
              <div className='row g-0'>
                <div className='justify-content-end d-inline-flex py-3'>
                  <button className='btn-tolak' id='preview'>
                    Tolak
                  </button>
                  {offer?.Product?.status === 'terjual' ? (
                    <>
                      <button className='btn-simpan ms-3' id='preview'>
                        <a
                          href={`https://api.whatsapp.com/send/?phone=62${offer?.User?.no_hp.substring(1)}&text&type=phone_number&app_absent=0`}
                          style={{ textDecoration: 'none', color: '#ffffff' }}
                          target='_blank'
                        >
                          Hubungi di <img src='/svg/fi_whatsapp.svg' alt='Whatsapp Logo' className='ms-2' />
                        </a>
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          productContext.acceptOfferProduct(offer?.Product?.id);
                          productContext.getDetailProductOffer(params.idBidder)
                        }}
                        className='btn-simpan ms-3'
                        id='preview'
                        data-bs-toggle='modal'
                        data-bs-target={`#acceptOffer${offer?.id}`}
                      >
                        Terima
                      </button>
                    </>
                  )}
                  <ProductMatchModal idModal={`acceptOffer${offer?.id}`} data={offer} />
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
