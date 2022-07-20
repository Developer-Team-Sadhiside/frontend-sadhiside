import React, { useState } from 'react';
import '../../assets/styles/OfferModal.css';

function OfferModal(props) {
  const [price, setPrice] = useState();

  function restrictAlphabets(input) {
    const value = input.replace(/\D/g, '');
    setPrice(value);
  }

  return (
    <div className='modal fade' id={props.idModal} aria-labelledby='offerModalLabel' aria-hidden='true'>
      <div className='modal-dialog modal-dialog-centered offer-modal-dialog'>
        <div className='modal-content offer-modal-content'>
          <div className='modal-header offer-modal-header'>
            <h5 className='modal-title offer-modal-title'></h5>
            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
          </div>
          <div className='modal-body offer-modal-body'>
            <p className='offer-modal-body-title'>Masukkan Harga Tawarmu</p>
            <p className='offer-modal-body-message'>Harga tawaranmu akan diketahui penual, jika penjual cocok kamu akan segera dihubungi penjual.</p>
            <div className='row g-0 offer-modal-product-card'>
              <div className='col-sm-2'>
                <img src={props.products[props.params.id].image} alt='Product Image' className='offer-modal-product-card-image' />
              </div>
              <div className='col-sm-9 ms-3'>
                <p className='offer-modal-product-card-title'>{props.products[props.params.id].title}</p>
                <p className='offer-modal-product-card-price'>Rp. {props.products[props.params.id].price.toLocaleString('id-ID')}</p>
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
            <button type='button' className='offer-modal-footer-button' data-bs-dismiss='modal'>
              Kirim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferModal;
