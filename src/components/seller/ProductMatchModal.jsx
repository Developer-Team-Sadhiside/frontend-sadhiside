import '../../assets/styles/ProductMatchModal.css';

export default function ProductMatchModal(props) {
  return (
    <>
      <div className='modal fade' id='productMatchModal' tabIndex={-1} aria-labelledby='productMatchModalLabel' aria-hidden='true'>
        <div className='modal-dialog modal-dialog-centered product-match-dialog-modal'>
          <div className='modal-content product-match-container-modal'>
            <div className='modal-header product-match-header-modal'>
              <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' />
            </div>
            <div className='modal-body product-match-body-modal'>
              <p className='product-match-body-title-modal'>Yeay kamu berhasil mendapat harga yang sesuai</p>
              <p className='product-match-body-alert-modal'>Segera hubungi pembeli melalui Whatsapp untuk transaksi selanjutnya</p>
              <div className='product-match-body-card-modal px-3'>
                <p className='text-center product-match-body-message-modal'>Product Match</p>
                <div className='row g-0'>
                  <div className='col-sm-3'>
                    <img className='product-match-body-card-img-modal' src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80' alt='' />
                  </div>
                  <div className='col'>
                    <p className='product-match-body-card-buyer-name-modal'>Nama Pembeli</p>
                    <p className='product-match-body-card-buyer-city-modal'>Kota</p>
                  </div>
                </div>
                <div className='row g-0 mt-2'>
                  <div className='col-sm-3'>
                    <img className='product-match-body-card-img-modal' src='https://images.unsplash.com/photo-1608319875609-c87179687233?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNhciUyMHZpbnRhZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=1920&q=60' alt='' />
                  </div>
                  <div className='col'>
                    <p className='product-match-body-card-product-modal'>Mobil Antik</p>
                    <p className='product-match-body-card-product-modal'>
                      <s>Rp. 250.000</s>
                    </p>
                    <p className='product-match-body-card-product-modal'>Ditawar Rp. 200.000</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='modal-footer row product-match-footer mt-3'>
              <button className='product-match-footer-button' data-bs-dismiss='modal'>
                Hubungi Via Whatsapp
                <img className='ms-2 mb-1' src="/svg/fi_whatsapp.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

