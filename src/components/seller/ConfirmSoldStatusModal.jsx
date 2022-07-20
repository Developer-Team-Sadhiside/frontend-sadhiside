import '../../assets/styles/ConfirmSoldStatusModal.css';

export default function ConfirmSoldStatusModal() {
  return (
    <>
      <div className='modal fade' id='confirmSoldStatusModal' tabIndex={-1} aria-labelledby='confirmSoldStatusModalLabel' aria-hidden='true'>
        <div className='modal-dialog modal-dialog-centered confirm-sold-status-dialog-modal'>
          <div className='modal-content confirm-sold-status-content-modal'>
            <div className='modal-header confirm-sold-status-header-modal'>
              <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' />
            </div>
            <div className='modal-body confirm-sold-status-body-modal'>
              <p className='confirm-sold-status-body-message-modal'>Perbarui status penjualan produkmu</p>
              <div>
                <div className='form-check'>
                  <input className='regular-radio' type='radio' name='confirmSoldStatusRadios' id='soldRadio' />
                  <label className='confirm-sold-radio-title' htmlFor='soldRadio'>
                    Berhasil terjual
                  </label>
                  <p className='confirm-sold-radio-verbose'>Kamu telah sepakat menjual produk ini kepada pembeli</p>
                </div>
                <div className='form-check'>
                  <input className='regular-radio' type='radio' name='confirmSoldStatusRadios' id='cancelRadio' />
                  <label className='confirm-sold-radio-title' htmlFor='cancelRadio'>
                    Batalkan transaksi
                  </label>
                  <p className='confirm-sold-radio-verbose'>Kamu membatalkan transaksi produk ini dengan pembeli</p>
                </div>
              </div>
            </div>
            <div className='modal-footer row g-0 confirm-sold-status-footer-modal'>
              <button type='button' className='confirm-sold-status-button-modal' data-bs-dismiss="modal">
                Kirim
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
