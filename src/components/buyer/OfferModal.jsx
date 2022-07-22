import React, { useState } from 'react';
import '../../assets/styles/OfferModal.css';
import { useProductContext } from '../../services/productService';
import ToastNotification from '../ToastNotification';

function OfferModal(props) {
  const productContext = useProductContext();
  const [price, setPrice] = useState('');
  const [offerStatus, setOfferStatus] = useState();
  const [offerMessage, setOfferMessage] = useState();

  function restrictAlphabets(input) {
    const value = input.replace(/\D/g, '');
    setPrice(value);
  }

  async function bidProduct() {
    const status = await productContext.bidProduct(props?.product?.produk?.id, price);
    setOfferStatus(true);
    if (status) {
      setOfferMessage('Harga tawarmu berhasil dikirim ke penjual');
    } else {
      setOfferMessage('Kamu sudah mengirim penawaran sebelumnya ke penjual');
    }
    return status;
  }

  function toggleNotif() {
    setOfferStatus(false);
  }

  return (
    <>
      <div onClick={toggleNotif}>{offerStatus && <ToastNotification content={offerMessage} bidStatus={offerStatus} />}</div>
      <div className='modal fade' id={`match${props?.product?.produk?.id}`} aria-labelledby='offerModalLabel' aria-hidden='true'>
        <div className='modal-dialog modal-dialog-centered offer-modal-dialog'>
          <div className='modal-content offer-modal-content'>
            <div className='modal-header offer-modal-header'>
              <h5 className='modal-title offer-modal-title'></h5>
              <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
            </div>
            <div className='modal-body offer-modal-body'>
              <p className='offer-modal-body-title'>Masukkan Harga Tawarmu</p>
              <p className='offer-modal-body-message'>Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu akan segera dihubungi penjual.</p>
              <div className='row g-0 offer-modal-product-card'>
                <div className='col-sm-2'>
                  <img src={props?.product?.produk?.gambar[0]} alt='Product Image' className='offer-modal-product-card-image' />
                </div>
                <div className='col-sm-9 ms-3'>
                  <p className='offer-modal-product-card-title'>{props?.product?.produk?.nama_produk}</p>
                  <p className='offer-modal-product-card-price'>Rp. {props?.product?.produk?.harga_produk.toLocaleString('id-ID')}</p>
                </div>
              </div>
              <p className='offer-modal-body-input-price'>Harga Tawar</p>
              <input
                className='offer-modal-body-input-number'
                placeholder='Rp 0,00'
                value={price}
                onChange={(event) => {
                  restrictAlphabets(event.target.value);
                }}
              />
            </div>
            <div className='modal-footer row offer-modal-footer'>
              <button
                onClick={() => {
                  bidProduct();
                }}
                type='button'
                className='offer-modal-footer-button'
                data-bs-dismiss='modal'
              >
                Kirim
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OfferModal;
